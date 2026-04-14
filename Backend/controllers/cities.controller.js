import {City} from "../models/City.models.js";
import {Place} from "../models/Place.models.js";
import { getPlacesForCity } from "../services/openTripMap.services.js";
import { getPlacesFromOSM } from "../services/openStreetmap.js";
import { searchPlacesByCategory } from "../services/foursquarePlaces.services.js";

import { transformPlace } from "../services/transform.services.js";
import { upsertPlace } from "../services/deduplicate.services.js"
import tier1Cities from "../config/tier1Cities.js";

// Helper function to calculate data richness for smart deduplication
function calculateDataRichness(place) {
    let score = 0;
    
    // Photos are very valuable
    if (place.photos && place.photos.length > 0) score += 50;
    
    // Rating indicates quality
    if (place.rating && place.rating > 0) score += 30;
    
    // Reviews indicate popularity
    if (place.user_ratings_total && place.user_ratings_total > 0) score += 20;
    
    // Description adds context
    if (place.description && place.description.length > 10) score += 15;
    
    // Address is useful
    if (place.formatted_address && place.formatted_address.length > 0) score += 10;
    
    // Wikipedia adds educational value
    if (place.wikipedia) score += 10;
    
    // Foursquare data tends to be richer for commercial places
    if (place.sourceApi === "foursquare") score += 15;
    
    // OpenTripMap is authoritative for tourist attractions
    if (place.sourceApi === "openTripMap") score += 10;
    
    return score;
}


// GET /api/cities/:cityName/status
// React calls this before starting trip generation
// Returns city status and place count

const getCityStatus = async (req, res) => {
    try {
        const { cityName } = req.params;

        const city = await City.findOne({
            name: { $regex: new RegExp(`^${cityName}$`, "i") },
        });

        if (!city) {
            return res.status(200).json({
                status: "not_found",
                placeCount: 0,
                message: "City is not in database yet. use POST /api/cities/request to populate."
            });
        }

        return res.status(200).json({
            status: city.status,
            placeCount: city.placeCount,
            tier: city.tier,
            lastPopulatedAt: city.lastPopulatedAt,
        });
    } catch (err) {
        console.error("[getCityStatus] Error:", err.message);
        return res.status(500).json({ message: "Server error", error: err.message });
    }
};

// GET /api/cities/all
// Returns all cities in the database with their status

const getAllCities = async (req, res) => {
    try {

        const cities = await City.find({}).sort({name: 1 }).lean();
        return res.status(200).json({ count: cities.length, cities });

    } catch (error) {
        console.error("[getAllCities] Error:", error.message);
        return res.status(500).json({ message: "Server error", error: error.message });
    }
};

// INTERNAL HELPER - core pipeline logic
// shared between requestCity and the future seed script

async function runCityPipeline(cityDoc) {

    const { name, state, country, coordinates } = cityDoc;
    const [lng, lat] = coordinates.coordinates;

    const summary = {
        city: name,
        fetched: 0,
        inserted: 0,
        updated: 0,
        skipped: 0,
        failed: 0,
    };

    try {
        // ─────────────────────────────────────────────────────────────
        // STEP 1 — Get tourist attractions (OpenTripMap)
        // ─────────────────────────────────────────────────────────────
        const openTripMapPlaces = await getPlacesForCity(lat, lng, name);
        console.log(`[OpenTripMap] Found ${openTripMapPlaces.length} tourist attractions`);

        if (openTripMapPlaces.length === 0) {
            throw new Error("OpenTripMap returned 0 places for this city");
        }

        // ─────────────────────────────────────────────────────────────
        // STEP 2 — Get local places (OpenStreetMap)
        // ─────────────────────────────────────────────────────────────
        const osmPlaces = await getPlacesFromOSM(lat, lng, 10000);
        console.log(`[OpenStreetMap] Found ${osmPlaces.length} local places`);

        // ─────────────────────────────────────────────────────────────
        // STEP 3 — Get commercial places (Foursquare)
        // ─────────────────────────────────────────────────────────────
        let foursquarePlaces = [];
        try {
            foursquarePlaces = await searchPlacesByCategory(lat, lng, 15000, 50);
            console.log(`[Foursquare] Found ${foursquarePlaces.length} commercial places`);
        } catch (foursquareError) {
            console.warn(`[Foursquare] Error: ${foursquareError.message} - continuing without Foursquare data`);
        }

        // ─────────────────────────────────────────────────────────────
        // STEP 4 — Merge all three datasets
        // ─────────────────────────────────────────────────────────────
        const allPlaces = [
            ...openTripMapPlaces.map(p => ({ ...p, sourceApi: "openTripMap" })),
            ...osmPlaces,
            ...foursquarePlaces.map(p => ({ 
                ...p, 
                sourceApi: "foursquare",
                // Normalize Foursquare data format
                place_id: `fsq_${p.fsq_id}`,
                lat: p.geocodes?.main?.latitude,
                lng: p.geocodes?.main?.longitude,
                country: p.country,
                state: p.state,
                rating: p.rating ? parseFloat((p.rating / 2).toFixed(1)) : null, // Convert from 10 to 5 scale
                user_ratings_total: p.stats?.total_ratings || 0,
                photos: (p.photos || []).slice(0, 3).map(photo => `${photo.prefix}original${photo.suffix}`),
                category_name: p.categories?.[0]?.name,
                formatted_address: p.location?.formatted_address || "",
                description: p.description || ""
            }))
        ];

        console.log(`[Pipeline] Total places collected: OpenTripMap(${openTripMapPlaces.length}) + OSM(${osmPlaces.length}) + Foursquare(${foursquarePlaces.length}) = ${allPlaces.length}`);

        // ─────────────────────────────────────────────────────────────
        // STEP 5 — Smart deduplication (prefer richer data)
        // ─────────────────────────────────────────────────────────────
        const uniqueMap = new Map();
        // sort the allPlaces based on the data richness and rating and remove duplicate
       allPlaces.sort((a, b) => {
        const scoreA = calculateDataRichness(a) + (a.rating || 0);
        const scoreB = calculateDataRichness(b) + (b.rating || 0);
        return scoreB - scoreA;
       });

       // insert only top 40 places
       const top40Places = allPlaces.slice(0, 40);
       console.log("Got only top 40 places of the city");

        for (const place of top40Places) {
            const key = place.name?.toLowerCase().trim();
            if (!key || key === "unknown") continue;

            const existing = uniqueMap.get(key);
            
            if (!existing) {
                uniqueMap.set(key, place);
                continue;
            }

            // If duplicate found, prefer the one with more data
            const existingScore = calculateDataRichness(existing);
            const newScore = calculateDataRichness(place);
            
            if (newScore > existingScore) {
                // Keep better data but merge useful fields
                const merged = {
                    ...place,
                    // Preserve Wikipedia from OSM if available
                    wikipedia: existing.wikipedia || place.wikipedia,
                    // Merge photos from both sources
                    photos: [...(existing.photos || []), ...(place.photos || [])].slice(0, 5)
                };
                uniqueMap.set(key, merged);
            }
        }

        const finalPlaces = Array.from(uniqueMap.values());
        summary.fetched = finalPlaces.length;

        console.log(`[Pipeline] After deduplication: ${finalPlaces.length} unique places`);
        console.log(`[Pipeline] Sources: OpenTripMap(${finalPlaces.filter(p => p.sourceApi === 'openTripMap').length}), OSM(${finalPlaces.filter(p => p.sourceApi === 'openstreetmap').length}), Foursquare(${finalPlaces.filter(p => p.sourceApi === 'foursquare').length})`);

        // ─────────────────────────────────────────────────────────────
        // STEP 6 — Transform + Store in database
        // ─────────────────────────────────────────────────────────────
        for (const raw of finalPlaces) {
            try {

                const transformed = transformPlace(
                    raw,
                    raw.sourceApi || "osm",
                    name,
                    state,
                    country
                );

                if (!transformed) {
                    summary.failed++;
                    continue;
                }

                const { result } = await upsertPlace(transformed);

                if (result === "inserted") summary.inserted++;
                if (result === "updated") summary.updated++;
                if (result === "skipped") summary.skipped++;

            } catch (placeErr) {
                console.warn(`[Pipeline] Failed: ${raw.name}`, placeErr.message);
                summary.failed++;
            }
        }

        return summary;

    } catch (err) {
        summary.error = err.message;
        throw err;
    }
}

// POST /api/cities/request
// Body: {cityName, state, country, lat, lng}

const requestCity = async(req,res) =>{
    const { cityName, state, country, lat, lng } = req.body;

    // Validation

    if(!cityName || !lat || !lng){
        return res.status(400).json({
            message: "cityName, lat, and lng are required in request body"
        });
    }

      try {
    // ── Check if city already populated ───────────────────────────────────
    const existing = await City.findOne({
      name: { $regex: new RegExp(`^${cityName}$`, "i") },
    });

    if (existing?.status === "populated") {
      return res.status(200).json({
        message:    "City already populated",
        status:     "populated",
        placeCount: existing.placeCount,
      });
    }

    // ── Determine tier ────────────────────────────────────────────────────
    const isTier1 = tier1Cities.some(
      (c) => c.name.toLowerCase() === cityName.toLowerCase()
    );
    const tier = isTier1 ? 1 : 2;

    // ── Create or update city document ────────────────────────────────────
    const cityDoc = await City.findOneAndUpdate(
      { name: cityName },
      {
        $set: {
          name: cityName,
          state:       state || "",
          country:     country || existing?.country || "",
          coordinates: {
            type:        "Point",
            coordinates: [parseFloat(lng), parseFloat(lat)],
          },
          tier,
          status: "processing",
        },
      },
      { upsert: true, returnDocument: 'after' }
    );

    console.log(`[requestCity] Starting pipeline for ${cityName}...`);

    // ── Run the full pipeline ─────────────────────────────────────────────
    const summary = await runCityPipeline(cityDoc);
    console.log("Summary: ", summary);

    // ── Mark city as populated ────────────────────────────────────────────
    const totalStored = summary.inserted + summary.updated;

    await City.findByIdAndUpdate(cityDoc._id, {
      $set: {
        status:          totalStored > 0 ? "populated" : "failed",
        placeCount:      totalStored,
        lastPopulatedAt: new Date(),
        errorMessage:    "",
      },
    });

    console.log(`[requestCity] Pipeline complete for ${cityName}:`, summary);

    return res.status(200).json({
      message: `City pipeline complete for ${cityName}`,
      summary,
    });

  } catch (err) {
    console.error(`[requestCity] Pipeline failed for ${cityName}:`, err.message);

    // Mark city as failed so React does not keep waiting
    await City.findOneAndUpdate(
      { name: cityName },
      { $set: { status: "failed", errorMessage: err.message } }
    );

    return res.status(500).json({
      message: "Pipeline failed",
      error:   err.message,
    });
  }
};

// GET /api/cities/:cityName/places
// Returns places data from both OpenStreetMap and Foursquare APIs
const getPlacesFromBothAPIs = async (req, res) => {
    try {
        const { cityName } = req.params;
        const { lat, lng } = req.query;

        if (!lat || !lng) {
            return res.status(400).json({ 
                message: "Latitude and longitude are required as query parameters" 
            });
        }

        const latitude = parseFloat(lat);
        const longitude = parseFloat(lng);

        console.log(`[getPlacesFromBothAPIs] Fetching data for ${cityName} at ${latitude}, ${longitude}`);

        // Fetch from both APIs in parallel
        const [osmPlaces, foursquarePlaces] = await Promise.all([
            // OpenStreetMap places
            getPlacesFromOSM(latitude, longitude, 10000).catch(error => {
                console.warn(`[OSM] Error: ${error.message}`);
                return [];
            }),
            // Foursquare places  
            searchPlacesByCategory(latitude, longitude, 15000, 50).catch(error => {
                console.warn(`[Foursquare] Error: ${error.message}`);
                return [];
            })
        ]);

        console.log(`[OpenStreetMap] Found ${osmPlaces.length} places`);
        console.log(`[Foursquare] Found ${foursquarePlaces.length} places`);

        // Normalize Foursquare data to match expected format
        const normalizedFoursquarePlaces = foursquarePlaces.map(p => ({
            ...p,
            sourceApi: "foursquare",
            place_id: `fsq_${p.fsq_id}`,
            lat: p.geocodes?.main?.latitude,
            lng: p.geocodes?.main?.longitude,
            rating: p.rating ? parseFloat((p.rating / 2).toFixed(1)) : null,
            user_ratings_total: p.stats?.total_ratings || 0,
            photos: (p.photos || []).slice(0, 3).map(photo => `${photo.prefix}original${photo.suffix}`),
            category_name: p.categories?.[0]?.name,
            formatted_address: p.location?.formatted_address || "",
            description: p.description || ""
        }));

        // Smart deduplication
        const uniqueMap = new Map();
        const allPlaces = [...osmPlaces, ...normalizedFoursquarePlaces];

        for (const place of allPlaces) {
            const key = place.name?.toLowerCase().trim();
            if (!key || key === "unknown") continue;

            const existing = uniqueMap.get(key);
            
            if (!existing) {
                uniqueMap.set(key, place);
                continue;
            }

            // Prefer place with richer data
            const existingScore = calculateDataRichness(existing);
            const newScore = calculateDataRichness(place);
            
            if (newScore > existingScore) {
                // Keep better data but merge useful fields
                const merged = {
                    ...place,
                    wikipedia: existing.wikipedia || place.wikipedia,
                    photos: [...(existing.photos || []), ...(place.photos || [])].slice(0, 5)
                };
                uniqueMap.set(key, merged);
            }
        }

        const finalPlaces = Array.from(uniqueMap.values());

        // Prepare response with source breakdown
        const sourceBreakdown = {
            openstreetmap: finalPlaces.filter(p => p.sourceApi === 'openstreetmap').length,
            foursquare: finalPlaces.filter(p => p.sourceApi === 'foursquare').length,
            total: finalPlaces.length
        };

        return res.status(200).json({
            city: cityName,
            coordinates: { lat: latitude, lng: longitude },
            places: finalPlaces,
            metadata: {
                rawCounts: {
                    openstreetmap: osmPlaces.length,
                    foursquare: foursquarePlaces.length,
                    total: osmPlaces.length + foursquarePlaces.length
                },
                afterDeduplication: sourceBreakdown,
                apis: {
                    openstreetmap: {
                        status: osmPlaces.length > 0 ? 'success' : 'no_data',
                        description: 'Local places and comprehensive coverage'
                    },
                    foursquare: {
                        status: foursquarePlaces.length > 0 ? 'success' : 'no_data', 
                        description: 'Commercial venues with photos and ratings'
                    }
                }
            }
        });

    } catch (error) {
        console.error("[getPlacesFromBothAPIs] Error:", error.message);
        return res.status(500).json({ 
            message: "Error fetching places from APIs", 
            error: error.message 
        });
    }
};

const getCityById = async(req, res) => {
    try {
        const { id } = req.params;
        const name = req.query?.name || req.body?.name;
        let response = null;

        if (id) {
            response = await City.findById(id);
        }

        if (!response && name) {
            response = await City.findOne({
                name: { $regex: new RegExp(`^${name}$`, "i") },
            });
        }
        
        if (!response) {
            return res.status(404).json({ message: "City not found" });
        }
        
        return res.status(200).json(response);
    } catch (err) {
        console.error("[getCityById] Error:", err.message);
        return res.status(500).json({ message: "Server error", error: err.message });
    }
}

export { getCityStatus, getAllCities, requestCity, runCityPipeline, getPlacesFromBothAPIs,getCityById };
