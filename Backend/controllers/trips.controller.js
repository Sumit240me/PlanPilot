import Trip from "../models/Trip.models.js";
import { Place } from "../models/Place.models.js";

import { loadScoredPlacesForCity, buildItinerary } from "../services/itinerary.services.js";
import { generateItineraryProse } from "../services/proseEngine.services.js"


// POST /api/trips/generate
// The master route - scoring -> itinerary -> proseengine -> save -> return
// Checks for existing trip with same parameters before creating new one
// Body: { destination, state, mood, budget, companions, startDate, endDate, categories }

const generateTrip = async (req, res) => {
    try {
        const {
            destination,
            state = "",
            mood,
            budget,
            companions,
            startDate,
            endDate,
            extraNotes = "",
            categories = ["heritage", "food", "adventure", "other"]
        } = req.body;

        if (!destination || !mood || !budget || !companions || !startDate || !endDate) {
            return res.status(400).json({
                message: "destination, mood, budget, companions, startDate and endDate are required",
            });
        }

        const start = new Date(startDate);
        const end = new Date(endDate);
        const numberOfDays = Math.round((end - start) / (1000 * 60 * 60 * 24)) + 1;

        if (numberOfDays <= 0) {
            return res.status(400).json({
                message: "endDate must be after startDate"
            });
        }

        // ---- Check for existing trip with same parameters ----
        const normalizedStartDate = new Date(start.getFullYear(), start.getMonth(), start.getDate());
        const normalizedEndDate = new Date(end.getFullYear(), end.getMonth(), end.getDate());

        // Check by normalized dates and exact category set
        const existingTrips = await Trip.find({
            userId: req.user._id,
            destination: { $regex: new RegExp(`^${destination}$`, "i") },
            mood,
            budget,
            companions,
            numberOfDays,
            status: { $ne: "cancelled" }
        }).lean();

        const requestedCategorySet = [...new Set(categories)].sort().join("|");

        const matchedTrip = existingTrips.find(trip => {
            const tripStart = new Date(trip.startDate);
            const tripEnd = new Date(trip.endDate);
            const tripStartNorm = new Date(tripStart.getFullYear(), tripStart.getMonth(), tripStart.getDate());
            const tripEndNorm = new Date(tripEnd.getFullYear(), tripEnd.getMonth(), tripEnd.getDate());
            const tripCategorySet = [...new Set(Array.isArray(trip.categories) ? trip.categories : [])]
                .sort()
                .join("|");

            return tripStartNorm.getTime() === normalizedStartDate.getTime() &&
                   tripEndNorm.getTime() === normalizedEndDate.getTime() &&
                   tripCategorySet === requestedCategorySet;
        });

        if (matchedTrip) {
            console.log(`[generateTrip] Found existing trip ${matchedTrip._id} with same parameters`);
            return res.status(200).json({
                message: "Trip already exists",
                tripId: matchedTrip._id,
                trip: matchedTrip,
                isExisting: true
            });
        }

        console.log(`[generateTrip] No existing trip found - creating new trip for ${destination}`);

        const preference = {
            destination,
            state,
            mood,
            budget,
            companions,
            visitedPlaceIds: req.user?.visitedPlaceIds || [],
            categoryScores: req.user?.categoryScores || {},
            userCategoryPreferences: categories
        };

        //console.log("preference", preference);

        console.log(`[generateTrip] Starting for ${destination} , ${numberOfDays} days, ${mood} mood`);

        // ---  Step 1: Load and score places for primary city -----------
        const scoredPlaces = await loadScoredPlacesForCity(destination, preference);

        if (scoredPlaces.length === 0) {
            return res.status(404).json({
                message: `No places found for ${destination}. POST /api/cities/request first.`,
            });
        }

        console.log(`[generateTrip] Scored ${scoredPlaces.length} places for ${destination}`);

        // --- Step 2: Build structured itinerary (multi-city if needed) ------------

        const structuredItinerary = await buildItinerary(
            scoredPlaces,
            numberOfDays,
            preference
        );

        console.log(
            `[generateTrip] Itinerary build -` +
            `${structuredItinerary.days.length} days, ` +
            `${structuredItinerary.cities?.length} cities, ` +
            `${structuredItinerary.totalPlaces} places`
        );

        // --- Get cover image from most famous place in destination ---
        const mostFamousPlace = await Place.findOne({
            city: { $regex: new RegExp(`^${destination}$`, "i") }
        })
            .sort({ popularityScore: -1 })
            .select("photos name")
            .lean();

        const coverImage = mostFamousPlace?.photos?.[0] || "";

        // ----- Step 3: Generate AI prose via OpenAI -----
        const enrichedItinerary = await generateItineraryProse(
            structuredItinerary,
            preference
        );

        console.log(`[generateTrip] AI prose generated - tripTitle: "${enrichedItinerary.tripTitle}"`);

        // ------- Step 4: Save trip to MongoDB ------------------

        const trip = await Trip.create({
            userId: req.user._id,
            destination,
            state,
            startDate: start,
            endDate: end,
            numberOfDays,
            mood,
            budget,
            companions,
            categories,
            extraNotes,
            cities: enrichedItinerary.cities || [],
            tripTitle: enrichedItinerary.tripTitle || "",
            tripIntro: enrichedItinerary.tripIntro || "",
            closingNote: enrichedItinerary.closingNote || "",
            days: enrichedItinerary.days || [],
            costEstimate: enrichedItinerary.costEstimate || {},
            totalPlaces: enrichedItinerary.totalPlaces || 0,
            aiProseError: enrichedItinerary.aiProseError || "",
            status: "planning",
            generatedAt: new Date(),
            image: coverImage,
        });

      //  console.log("Trip", trip);

        console.log(`[generateTrip] Trip saved - ID: ${trip._id}`);

        // ----- Step 5: Increment totalVisits on all used places -------------

        const allPlacesIds = enrichedItinerary.days
            .flatMap((d) => d.activities.map((a) => a.placeId));

        if (allPlacesIds.length > 0) {
            await Place.updateMany(
                { placeId: { $in: allPlacesIds } },
                { $inc: { totalVisits: 1 } }
            );
        }

        return res.status(201).json({
            message: "Trip generated successfully",
            tripId: trip._id,
            trip,
        });

    } catch (err) {
        console.error("[generateTrip] Error:", err.message);
        return res.status(500).json({ message: "Server error", error: err.message });
    }
}


// GET /api/trips/:tripId
// Fetch a saved trip by its MongoDB _id

const getTripById = async (req, res) => {
    try {

        const trip = await Trip.findById(req.params.tripId).lean();

        if (!trip) {
            return res.status(404).json({ message: "Trip not found" });
        }

        return res.status(200).json({ trip });

    } catch (err) {

        console.error("[getTripById]", err.message);
        return res.status(500).json({ message: "Server error", error: err.message });
    }
};

// GET /api/trips/user/:userId
// All trips for a specific user - week 7 will replace with req.user

const getTripsByUser = async (req, res) => {
    try {

        const trips = await Trip
            .find({ userId: req.params.userId })
            .sort({ createdAt: -1 })
            .select("destination startDate endDate numberOfDays mood status tripTitle image tripIntro costEstimate days")
            .lean();

        return res.status(200).json({ count: trips.length, trips });

    } catch (err) {
        console.error("[getTripsByUser]", err.message);
        return res.status(500).json({ message: "Server error", error: err.message });
    }
}

// PUT /api/trips/:tripId/rate
// Post-trip overall rating

const rateTrip = async (req, res) => {
    try {

        const { overallRating, overallFeedback = "", activityRatings = [] } = req.body;

        if (!overallRating || overallRating < 1 || overallRating > 5) {
            return res.status(400).json({ message: "overallRating must be between 1 and 5" })
        }

        const trip = await Trip.findById(req.params.tripId);

        if (!trip) {
            return res.status(404).json({ message: "Trip not found" });
        }

        // save overall rating
        trip.overallRating = overallRating;
        trip.overallFeedback = overallFeedback;
        trip.status = "completed";

        // Save per-activity ratings into the trip document
        if (activityRatings.length > 0) {
            trip.days.forEach((day) => {
                day.activities.forEach((act) => {
                    const found = activityRatings.find((r) => r.placeId === act.placeId);
                    if (found) act.userRating = found.rating;
                });
            });
        }

        await trip.save();

        // Update avgRating on each rated place document
        for (const { placeId, rating } of activityRatings) {
            if (!rating || rating < 1 || rating > 5) continue;

            const place = await Place.findOne({ placeId });
            if (!place) continue;

            const oldCount = place.ratingCount || 0;
            const oldAvg = place.avgRating || 0;
            const newCount = oldCount + 1;
            const newAvg = parseFloat(
                ((oldAvg * oldCount + parseFloat(rating)) / newCount).toFixed(2)
            );

            place.avgRating = newAvg;
            place.ratingCount = newCount;
            place.popularityScore = Math.min(
                Math.round(((newAvg / 5) * 60) + (Math.min(newCount / 5000, 1) * 40)),
                100
            );

            await place.save();
        }

        console.log(`[rateTrip] Trip ${req.params.tripId} rated ${overallRating}/5`);

        return res.status(200).json({
            message: "Trip rated successfully",
            overallRating: trip.overallRating,
        });

    } catch (error) {
        console.error("[rateTrip]", error.message);
        return res.status(500).json({ message: "Server error", error: error.message });

    }
}

// PUT /api/trips/:tripId/status
// Update trip status - planning / confirmed/ active/ completed/ cancelled
// Body: { status }

const updateTripStatus = async (req, res) => {
    try {

        const { status } = req.body;
        const validStatuses = ["planning", "confirmed", "active", "completed", "cancelled"];

        if (!validStatuses.includes(status)) {
            return res.status(400).json({
                message: `status must be one of: ${validStatuses.join(",")}`,
            });
        }

        const trip = await Trip.findByIdAndUpdate(
            req.params.tripId,
            { $set: { status } },
            { returnDocument: "after" }
        );

        if (!trip) {
            return res.status(404).json({ message: "Trip not found" });
        }

        return res.status(200).json({ message: "Status updated", status: trip.status });

    } catch (err) {
        console.error("[updateTripStatus]", err.message);
        return res.status(500).json({ message: "Server error", error: err.message });

    }
};

const getAllTrips = async (req, res) => {
    try {
        const response = await Trip.find().sort({ createdAt: -1 }).select("destination startDate endDate numberOfDays mood status tripTitle image tripIntro costEstimate days").lean();

        return res.status(200).json(response); // ✅ FIXED
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Server error" });
    }
};

export {
    generateTrip,
    getTripById,
    getTripsByUser,
    rateTrip,
    updateTripStatus,
    getAllTrips
};