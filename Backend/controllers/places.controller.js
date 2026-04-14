import { Place } from "../models/Place.models.js"
import { scorePlaces } from "../services/scoring.services.js";

// GET api/places/city/:cityName
// Returns all places for a city - used for admin/debugging

const getPlacesByCity = async (req, res) => {
    try {

        const { cityName } = req.params;
        const { category, limit = 50 } = req.query;

        const query = {
            city: { $regex: new RegExp(`^${cityName}$`, "i") },
        };

        if (category) query.category = category;

        const places = await Place
            .find(query)
            .sort({ popularityScore: -1 })
            .limit(parseInt(limit))
            .lean();

        return res.status(200).json({
            count: places.length,
            places,
        });


    } catch (err) {
        console.error("[getPlacesByCity]", err.message);
        return res.status(500).json({ message: "Server error", error: err.message });
    }
};


// GET /api/places/:placeId
// Returns single place by placeId field

const getPlaceById = async (req, res) => {
    try {

        const place = await Place.findOne({ placeId: req.params.placeId }).lean();

        if (!place) {
            return res.status(404).json({ message: "Place not found" });
        }

        return res.status(200).json({ place });

    } catch (err) {
        console.error("[getPlaceById]", err.message);
        return res.status(500).json({ message: "Server error", error: err.message });
    }
}


//GET /api/places/search
// The most important route - calls scoring engine
// Query params : city, mood, budget, companions, limit
// Optional: visitedPlaceIds (comma separated)

const searchPlaces = async (req, res) => {
    try {

        const {
            city,
            mood,
            budget,
            companions,
            limit = 20,
            visitedPlaceIds = "",
            categoryScores = "{}",
        } = req.query;

        // Validate required fields
        if (!city || !mood || !budget || !companions) {
            return res.status(400).json({
                message: `NO places found for ${city}. Use Post /api/cities/request to populate.`
            });
        }

        // Fetch all places for this city from MongoDB
        const places = await Place
            .find({ city: { $regex: new RegExp(`^${city}$`, "i") } })
            .lean();

        if (places.length === 0) {
            return res.status(404).json({
                message: `No places found for ${city}. Use POST /api/cities/request to populate.`,
            });
        }

        // Build preference object for scoring engine

        const preferences = {
            mood,
            budget,
            companions,
            visitedPlaceIds: visitedPlaceIds
                ? visitedPlaceIds.split(",").map((id) => id.trim())
                : [],
            categoryScores: JSON.parse(categoryScores),
        };

        const scored = scorePlaces(places, preferences);

        // Return top N results
        const topPlaces = scored.slice(0, parseInt(limit));

        return res.status(200).json({
            city,
            preferences: { mood, budget, companions },
            totalCandidates: places.length,
            afterFiltering: scored.length,
            count: topPlaces.length,
            places: topPlaces,
        });

    } catch (err) {
        console.error("[searchPlaces]", err.message);
        return res.status(500).json({ message: "Server error", error: err.message });
    }
}

// PUT /api/places/:placeId/visit
// Called when a user consirms a trip - increments totalVisits
// Body: { userIds }

const recordVisit = async (req, res) => {
    try {

        const place = await Place.findOneAndUpdate(
            { placeId: req.params.placeId },
            { $inc: { totalVisits: 1 } },
            { returnDocument: 'after' }
        );

        if (!place) {
            return res.status(404).json({ message: "Place not Found" });
        }

        return res.status(200).json({
            message: "Visit recorded",
            totalVisits: place.totalVisits,
        })

    } catch (err) {
        console.error("[recordVisit]", err.message);
        return res.status(500).json({ message: "Server error", error: err.message });
    }
}


// PUT /api/places/:skip
// Called when user deleted a place from AI-generated itinerary

const recordSkip = async (req, res) => {
    try {

        const place = await Place.findOneAndUpdate(
            { placeId: req.params.placeId },
            { $inc: { skipCount: 1 } },
            { returnDocument: 'after' }
        );

        if (!place) {
            return res.status(404).json({ message: "Place not found" })
        }

        return res.status(200).json({
            message: "Skip recorded",
            skipCount: place.skipCount,
        });

    } catch (err) {
        console.error("[recordSkip]", err.message);
        return res.status(500).json({ message: "Server error", error: err.message });

    }
}


// ─────────────────────────────────────────────────────────────────────────────
// PUT /api/places/:placeId/rate
// Called after user submits post-trip activity rating
// Updates avgRating using running average formula
// Body: { newRating } — number between 1 and 5
// ─────────────────────────────────────────────────────────────────────────────
const ratePlace = async (req, res) => {
    try {
        const { newRating } = req.body;

        if (!newRating || newRating < 1 || newRating > 5) {
            return res.status(400).json({ message: "newRating must be between 1 and 5" });
        }

        const place = await Place.findOne({ placeId: req.params.placeId });

        if (!place) {
            return res.status(404).json({ message: "Place not found" });
        }

        // Running average formula:
        // newAvg = (oldAvg * oldCount + newRating) / (oldCount + 1)
        const oldCount = place.ratingCount || 0;
        const oldAvg = place.avgRating || 0;
        const newCount = oldCount + 1;
        const newAvg = parseFloat(
            ((oldAvg * oldCount + parseFloat(newRating)) / newCount).toFixed(2)
        );

        // Also update popularityScore — more ratings = more popular
        const newPopularity = Math.min(
            Math.round(((newAvg / 5) * 60) + (Math.min(newCount / 5000, 1) * 40)),
            100
        );

        place.avgRating = newAvg;
        place.ratingCount = newCount;
        place.popularityScore = newPopularity;
        await place.save();

        return res.status(200).json({
            message: "Rating updated",
            avgRating: place.avgRating,
            ratingCount: place.ratingCount,
            popularityScore: place.popularityScore,
        });

    } catch (err) {
        console.error("[ratePlace]", err.message);
        return res.status(500).json({ message: "Server error", error: err.message });
    }
};

export {
    getPlacesByCity,
    getPlaceById,
    searchPlaces,
    recordVisit,
    recordSkip,
    ratePlace,
};