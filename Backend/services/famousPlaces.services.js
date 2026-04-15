// services/famousPlaces.services.js
// ═══════════════════════════════════════════════════════════════════════════════
// Automatically fetches famous/must-visit places for ANY city using APIs.
// No manual config needed — works for any new city added to tier1Cities.
//
// Strategy:
//   1. OpenTripMap rate=3 ("must-see") → iconic landmarks
//   2. Foursquare by specific categories sorted by POPULARITY:
//      - Top restaurants & cafes
//      - Zoos & aquariums
//      - National parks & nature reserves
//      - Parks & gardens
//
// All results are flagged with isFamous: true so the pipeline always includes them.
// ═══════════════════════════════════════════════════════════════════════════════

import axios from "axios";
import dotenv from "dotenv";
dotenv.config();

const OTM_BASE = "https://api.opentripmap.com/0.1/en/places";
const OTM_KEY  = (process.env.OPENTRIPMAP_API_KEY || "").trim();

const FSQ_BASE = "https://api.foursquare.com/v3/places";
const FSQ_KEY  = (process.env.FOURSQUARE_API_KEY || "").trim();

// Foursquare category IDs for targeted famous place discovery
// Docs: https://docs.foursquare.com/data-products/docs/categories
const FSQ_FAMOUS_CATEGORIES = {
    // Food & Dining (broad — catches restaurants, street food, bakeries, etc.)
    dining:         "13000",                 // Dining & Drinking (parent — broadest)
    restaurants:    "13065",                 // Restaurants
    cafes:          "13032",                 // Cafes & Coffee
    bakeries:       "13002",                 // Bakeries
    street_food:    "13145",                 // Street Food
    // Wildlife & Animals
    zoos:           "16032",                 // Zoos
    aquariums:      "16036",                 // Aquariums
    wildlife:       "16050",                 // Wildlife Sanctuaries
    // Parks & Nature
    parks:          "16047",                 // Parks (FIXED — was 16032)
    gardens:        "16019",                 // Gardens
    national_parks: "16020",                 // Nature & Outdoors
    // Other
    landmarks:      "16000",                 // Landmarks & Outdoors
};

const FSQ_FIELDS = [
    "fsq_id", "name", "geocodes", "location", "categories",
    "rating", "popularity", "price", "photos", "description", "stats",
].join(",");

function pause(ms) {
    return new Promise(r => setTimeout(r, ms));
}

// ─────────────────────────────────────────────────────────────────────────────
// 1. OpenTripMap — Fetch "must-see" rated places (rate=3, highest tier)
//    These are world/nationally famous landmarks & attractions
// ─────────────────────────────────────────────────────────────────────────────
async function fetchFamousFromOTM(lat, lng, limit = 5) {
    if (!OTM_KEY) {
        console.warn("[FamousPlaces] No OPENTRIPMAP_API_KEY — skipping OTM famous fetch");
        return [];
    }

    const url = `${OTM_BASE}/radius`;

    try {
        // rate=3 = "Must see" tier — internationally/nationally famous
        const response = await axios.get(url, {
            params: {
                radius: 25000,              // 25km radius to catch nearby attractions
                lon:    parseFloat(lng),
                lat:    parseFloat(lat),
                rate:   "3",                // Must-see tier only
                format: "json",
                limit:  limit,
                apikey: OTM_KEY,
            },
        });

        const rawList = response.data || [];
        console.log(`[FamousPlaces] OTM raw famous (rate=3): ${rawList.length}`);

        if (rawList.length === 0) {
            // Fallback: try rate=2 ("Should see") if rate=3 returns nothing
            console.log("[FamousPlaces] Trying OTM rate=0 fallback...");
            const fallback = await axios.get(url, {
                params: {
                    radius: 25000,
                    lon: parseFloat(lng),
                    lat: parseFloat(lat),
                    rate: "2",
                    format: "json",
                    limit: limit,
                    apikey: OTM_KEY,
                },
            });
            rawList.push(...(fallback.data || []).slice(0, limit));
            console.log(`[FamousPlaces] OTM fallback (rate=2): ${rawList.length}`);
        }

        // Fetch detail for each famous place (need name, coordinates, description)
        const detailed = [];
        for (const place of rawList.slice(0, limit)) {
            try {
                const detail = await axios.get(`${OTM_BASE}/xid/${place.xid}`, {
                    params: { apikey: OTM_KEY },
                });

                if (detail.data?.name) {
                    detailed.push({
                        ...detail.data,
                        rate:               place.rate,
                        ratingCount:        0,
                        lat:                detail.data.point?.lat || place.point?.lat,
                        lng:                detail.data.point?.lon || place.point?.lon,
                        sourceApi:          "openTripMap",
                        isFamous:           true,
                    });
                }
                await pause(120); // Rate limit: ~8 req/sec
            } catch (err) {
                console.warn(`[FamousPlaces] OTM detail skip ${place.xid}: ${err.message}`);
            }
        }

        return detailed;
    } catch (err) {
        console.warn(`[FamousPlaces] OTM famous fetch failed: ${err.message}`);
        return [];
    }
}

// ─────────────────────────────────────────────────────────────────────────────
// 2. Foursquare — Fetch top places by specific category + POPULARITY sort
//    Used for restaurants, zoos, parks, national parks, etc.
// ─────────────────────────────────────────────────────────────────────────────
async function fetchFSQByCategory(lat, lng, categories, limit = 3) {
    if (!FSQ_KEY) {
        console.warn("[FamousPlaces] No FOURSQUARE_API_KEY — skipping FSQ category fetch");
        return [];
    }

    const url = `${FSQ_BASE}/search`;

    try {
        const response = await axios.get(url, {
            headers: { Authorization: FSQ_KEY, Accept: "application/json" },
            timeout: 10000,
            params: {
                ll:         `${lat},${lng}`,
                radius:     60000,          // 60km — catch nearby nature reserves too
                categories: categories,
                limit:      limit,
                sort:       "POPULARITY",   // Most popular first
                fields:     FSQ_FIELDS,
            },
        });

        const results = response.data?.results || [];

        // Normalize to our pipeline format
        return results.map(p => ({
            ...p,
            place_id:           `fsq_${p.fsq_id}`,
            lat:                p.geocodes?.main?.latitude,
            lng:                p.geocodes?.main?.longitude,
            rating:             p.rating ? parseFloat((p.rating / 2).toFixed(1)) : null,
            user_ratings_total: p.stats?.total_ratings || 0,
            photos:             (p.photos || []).slice(0, 3).map(photo =>
                                    `${photo.prefix}original${photo.suffix}`),
            category_name:      p.categories?.[0]?.name || "",
            formatted_address:  p.location?.formatted_address || "",
            description:        p.description || "",
            sourceApi:          "foursquare",
            isFamous:           true,
        }));
    } catch (err) {
        const status = err.response?.status;
        if (status === 410 || status === 404) {
            console.warn(`[FamousPlaces] FSQ no results for category ${categories}`);
            return [];
        }
        console.warn(`[FamousPlaces] FSQ category fetch failed: ${err.message}`);
        return [];
    }
}

// ─────────────────────────────────────────────────────────────────────────────
// MAIN — Fetch all famous places for a city (landmarks, restaurants, zoos, parks)
// Called by cities.controller.js during the pipeline
// ─────────────────────────────────────────────────────────────────────────────
export async function fetchFamousPlacesForCity(lat, lng, cityName) {
    console.log(`\n[FamousPlaces] ═══ Discovering famous places for ${cityName} ═══`);

    // 1. OTM "must-see" landmarks (rate=3)
    const otmFamous = await fetchFamousFromOTM(lat, lng, 5);
    console.log(`[FamousPlaces] ✓ OTM must-see landmarks: ${otmFamous.length}`);
    await pause(300);

    // 2. Food places — broad dining category to maximize results (min 5)
    const restaurants = await fetchFSQByCategory(lat, lng,
        [FSQ_FAMOUS_CATEGORIES.dining, FSQ_FAMOUS_CATEGORIES.restaurants,
         FSQ_FAMOUS_CATEGORIES.cafes, FSQ_FAMOUS_CATEGORIES.street_food].join(","),
        5   // At least 5 food places
    );
    console.log(`[FamousPlaces] ✓ Food & restaurants: ${restaurants.length}`);
    await pause(300);

    // 3. Zoos, aquariums & wildlife sanctuaries (min 3)
    const wildlife = await fetchFSQByCategory(lat, lng,
        [FSQ_FAMOUS_CATEGORIES.zoos, FSQ_FAMOUS_CATEGORIES.aquariums,
         FSQ_FAMOUS_CATEGORIES.wildlife].join(","),
        3   // At least 3 wildlife places
    );
    console.log(`[FamousPlaces] ✓ Zoos, aquariums & wildlife: ${wildlife.length}`);
    await pause(300);

    // 4. Parks & gardens (min 2)
    const parks = await fetchFSQByCategory(lat, lng,
        [FSQ_FAMOUS_CATEGORIES.parks, FSQ_FAMOUS_CATEGORIES.gardens].join(","),
        2   // At least 2 parks/gardens
    );
    console.log(`[FamousPlaces] ✓ Parks & gardens: ${parks.length}`);
    await pause(300);

    // 5. National parks & nature reserves (min 2)
    const nature = await fetchFSQByCategory(lat, lng,
        FSQ_FAMOUS_CATEGORIES.national_parks,
        2   // At least 2 nature/national parks
    );
    console.log(`[FamousPlaces] ✓ National parks & nature: ${nature.length}`);

    // ── Merge & deduplicate ─────────────────────────────────────────────────
    const allFamous = [...otmFamous, ...restaurants, ...wildlife, ...parks, ...nature];

    const seen = new Set();
    const unique = allFamous.filter(p => {
        const key = p.name?.toLowerCase().trim();
        if (!key || key === "unknown" || seen.has(key)) return false;
        seen.add(key);
        return true;
    });

    // ── Summary ─────────────────────────────────────────────────────────────
    console.log(`[FamousPlaces] ═══ ${cityName} TOTAL: ${unique.length} famous places ═══`);
    console.log(`[FamousPlaces]   Landmarks:    ${otmFamous.length}`);
    console.log(`[FamousPlaces]   Food:         ${restaurants.length}`);
    console.log(`[FamousPlaces]   Wildlife:     ${wildlife.length}`);
    console.log(`[FamousPlaces]   Parks:        ${parks.length}`);
    console.log(`[FamousPlaces]   Nature:       ${nature.length}`);
    console.log("");

    return unique;
}
