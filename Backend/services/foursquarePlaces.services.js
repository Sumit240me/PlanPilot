import axios from "axios";

const BASE_URL = "https://api.foursquare.com/v3/places";
const API_KEY  = (process.env.FOURSQUARE_API_KEY || "").trim();

const CATEGORY_IDS = [
  "16000", "16032", "16020", "16017", "16019",
  "16047", "16010", "16050", "12000", "12068",
  "12076", "13000", "13065", "13032", "13003",
  "17000", "17114", "15000", "15032",
].join(",");

const RESPONSE_FIELDS = [
  "fsq_id", "name", "geocodes", "location", "categories",
  "rating", "popularity", "price", "photos", "description",
  "hours", "stats", "tastes", "features",
].join(",");

function getHeaders() {
  return {
    Authorization: API_KEY,
    Accept:        "application/json",
  };
}

async function pause(ms) {
  return new Promise((r) => setTimeout(r, ms));
}

// ─────────────────────────────────────────────────────────────────────────────
// HELPER — centralised error classifier
// Returns a string describing what went wrong
// Used by both findPlaceId and getPlaceDetails
// ─────────────────────────────────────────────────────────────────────────────
function classifyError(err, context) {
  const status = err.response?.status;

  if (status === 401) {
    console.error(`[Foursquare] 401 — API key rejected for "${context}"`);
    console.error(`[Foursquare] Key being sent: "${API_KEY}"`);
    return "auth_failed";
  }

  if (status === 404) {
    // Place ID exists but details page not found — treat same as 410
    console.warn(`[Foursquare] 404 — Place not found for "${context}" — skipping`);
    return "not_found";
  }

  if (status === 410) {
    // FIX 1 — 410 Gone handler
    // Place was permanently removed from Foursquare database
    // Very common for government buildings, remote locations, heritage sites
    console.warn(`[Foursquare] 410 — Place permanently removed from Foursquare: "${context}" — will use OpenTripMap data instead`);
    return "gone";
  }

  if (status === 429) {
    console.error(`[Foursquare] 429 — Daily limit reached. Wait until midnight UTC.`);
    return "rate_limited";
  }

  if (err.code === "ECONNABORTED" || err.message?.includes("aborted")) {
    console.warn(`[Foursquare] Stream aborted for "${context}" — request timed out`);
    return "timeout";
  }

  console.warn(`[Foursquare] Unexpected error for "${context}": ${err.message}`);
  return "unknown";
}

// ─────────────────────────────────────────────────────────────────────────────
// STEP 1 — Find a place by name + city
// Returns fsq_id string or null
// ─────────────────────────────────────────────────────────────────────────────
async function findPlaceId(placeName, cityName) {
  const url = `${BASE_URL}/search`;

  try {
    const response = await axios.get(url, {
      headers: getHeaders(),
      timeout: 10000,
      params: {
        query:  placeName,
        near:   `${cityName}, India`,
        limit:  1,
        fields: "fsq_id,name,geocodes",
      },
    });

    const results = response.data?.results || [];
    return results.length > 0 ? results[0].fsq_id : null;

  } catch (err) {
    classifyError(err, placeName);
    return null;
  }
}

// ─────────────────────────────────────────────────────────────────────────────
// STEP 2 — Get full details by fsq_id
// Returns enriched object or null
// ─────────────────────────────────────────────────────────────────────────────
async function getPlaceDetails(fsqId) {
  const url = `${BASE_URL}/${fsqId}`;

  try {
    const response = await axios.get(url, {
      headers: getHeaders(),
      timeout: 10000,
      params:  { fields: RESPONSE_FIELDS },
    });

    const result = response.data;
    if (!result) return null;

    const primaryCategory = result.categories?.[0];

    const photos = (result.photos || [])
  .slice(0, 5)
  .map((p) => `${p.prefix}500x300${p.suffix}`)
  .filter(Boolean);

    return {
      fsq_id:             result.fsq_id,
      place_id:           `fsq_${result.fsq_id}`,
      name:               result.name,
      lat:                result.geocodes?.main?.latitude,
      lng:                result.geocodes?.main?.longitude,
      rating:             result.rating
                            ? parseFloat((result.rating / 2).toFixed(1))
                            : null,
      user_ratings_total: result.stats?.total_ratings || 0,
      price_level:        result.price  || null,
      photos,
      types:              result.categories?.map((c) => c.name) || [],
      category_id:        primaryCategory?.id,
      category_name:      primaryCategory?.name,
      businessStatus:     "OPERATIONAL",
      description:        result.description || "",
      tastes:             result.tastes      || [],
      formatted_address:  result.location?.formatted_address || "",
      popularity:         result.popularity  || 0,
    };

  } catch (err) {
    classifyError(err, fsqId);
    return null;
  }
}

// ─────────────────────────────────────────────────────────────────────────────
// STEP 3 — Category-based discovery near coordinates
// ─────────────────────────────────────────────────────────────────────────────
async function searchPlacesByCategory(lat, lng, radiusMetres = 15000, limit = 30) {
  const url = `${BASE_URL}/search`;

  try {
    const response = await axios.get(url, {
      headers: getHeaders(),
      timeout: 10000,
      params: {
        ll:         `${lat},${lng}`,
        radius:     radiusMetres,
        categories: CATEGORY_IDS,
        limit,
        sort:       "POPULARITY",
        fields:     RESPONSE_FIELDS,
      },
    });

    return response.data?.results || [];

  } catch (err) {
    // FIX 2 — 410 can happen here too for category searches in remote areas
    const status = err.response?.status;
    if (status === 410 || status === 404) {
      console.warn("[Foursquare] Category search returned no results for this area — skipping discovery");
      return [];
    }
    console.warn("[Foursquare] searchPlacesByCategory failed:", err.message);
    return [];
  }
}

// ─────────────────────────────────────────────────────────────────────────────
// HELPER — normalise a raw search result into unified shape
// ─────────────────────────────────────────────────────────────────────────────
function normaliseSearchResult(raw) {
  const primaryCategory = raw.categories?.[0];
  const photos = (raw.photos || [])
    .slice(0, 5)
    .map((p) => `${p.prefix}500x300${p.suffix}`)
    .filter(Boolean);

  return {
    fsq_id:             raw.fsq_id,
    place_id:           `fsq_${raw.fsq_id}`,
    name:               raw.name,
    lat:                raw.geocodes?.main?.latitude,
    lng:                raw.geocodes?.main?.longitude,
    rating:             raw.rating
                          ? parseFloat((raw.rating / 2).toFixed(1))
                          : null,
    user_ratings_total: raw.stats?.total_ratings || 0,
    price_level:        raw.price  || null,
    photos,
    types:              raw.categories?.map((c) => c.name) || [],
    category_id:        primaryCategory?.id,
    category_name:      primaryCategory?.name,
    businessStatus:     "OPERATIONAL",
    description:        raw.description || "",
    tastes:             raw.tastes      || [],
    formatted_address:  raw.location?.formatted_address || "",
    popularity:         raw.popularity  || 0,
    sourceApi:          "foursquare",
  };
}

// ─────────────────────────────────────────────────────────────────────────────
// FIX 3 — FOURSQUARE COVERAGE CHECKER
// Some cities (Andaman, remote hill stations) have very thin Foursquare data
// This function tests one search before running the full enrichment loop
// If Foursquare returns nothing for a city, skip enrichment entirely
// and keep all places as OpenTripMap data — saves API calls and time
// ─────────────────────────────────────────────────────────────────────────────
async function hasFoursquareCoverage(lat, lng, cityName) {
  const url = `${BASE_URL}/search`;

  try {
    const response = await axios.get(url, {
      headers: getHeaders(),
      timeout: 8000,
      params: {
        ll:     `${lat},${lng}`,
        radius: 10000,
        limit:  3,          // just test with 3 results
        fields: "fsq_id,name",
      },
    });

    const count = response.data?.results?.length || 0;
    console.log(`[Foursquare] Coverage check for ${cityName}: ${count} places found nearby`);

    // If fewer than 3 places found, Foursquare has poor coverage here
    return count >= 3;

  } catch (err) {
    console.warn(`[Foursquare] Coverage check failed for ${cityName}: ${err.message}`);
    return false;
  }
}

// ─────────────────────────────────────────────────────────────────────────────
// MAIN FUNCTION — called by cities.controller.js
// ─────────────────────────────────────────────────────────────────────────────
async function enrichPlacesWithFoursquare(openTripMapPlaces, cityName, lat, lng) {
  console.log(`[Foursquare] Starting enrichment for ${cityName} (${openTripMapPlaces.length} places)`);

  let callsThisSession = 0;
  const SESSION_LIMIT  = 900;

  // ── FIX 3 — Coverage check before enrichment loop ────────────────────────
  // For remote cities like Andaman, Foursquare returns mostly 410/404
  // Skip the whole enrichment loop and save all 50 API calls
  const covered = await hasFoursquareCoverage(lat, lng, cityName);
  callsThisSession++;

  if (!covered) {
    console.warn(
      `[Foursquare] Poor coverage for ${cityName} — ` +
      `skipping Foursquare enrichment, keeping all ${openTripMapPlaces.length} places as OpenTripMap data`
    );
    return openTripMapPlaces.map((p) => ({ ...p, sourceApi: "openTripMap" }));
  }

  // ── Enrichment loop ───────────────────────────────────────────────────────
  const toEnrich       = openTripMapPlaces.slice(0, 25);
  const enrichedPlaces = [];

  // FIX 4 — track consecutive 410/404 errors
  // If we get 5 in a row the city has no Foursquare data — stop early
  let consecutiveNotFound = 0;
  const MAX_CONSECUTIVE_NOT_FOUND = 5;

  for (const place of toEnrich) {

    if (callsThisSession >= SESSION_LIMIT) {
      console.warn("[Foursquare] Approaching daily call limit — stopping enrichment early");
      const remaining = openTripMapPlaces.slice(enrichedPlaces.length);
      remaining.forEach((p) => enrichedPlaces.push({ ...p, sourceApi: "openTripMap" }));
      break;
    }

    // FIX 4 — bail out early if many consecutive places are missing
    if (consecutiveNotFound >= MAX_CONSECUTIVE_NOT_FOUND) {
      console.warn(
        `[Foursquare] ${MAX_CONSECUTIVE_NOT_FOUND} consecutive places not found — ` +
        `Foursquare has poor data for ${cityName}, stopping enrichment`
      );
      const notYetProcessed = toEnrich.slice(enrichedPlaces.length);
      notYetProcessed.forEach((p) => enrichedPlaces.push({ ...p, sourceApi: "openTripMap" }));
      break;
    }

    try {
      const fsqId = await findPlaceId(place.name, cityName);
      callsThisSession++;
      await pause(400);

      if (!fsqId) {
        // findPlaceId returned null — could be 410, 404, or just not in database
        consecutiveNotFound++;
        enrichedPlaces.push({ ...place, sourceApi: "openTripMap" });
        continue;
      }

      const details = await getPlaceDetails(fsqId);
      callsThisSession++;
      await pause(400);

      if (!details) {
        consecutiveNotFound++;
        enrichedPlaces.push({ ...place, sourceApi: "openTripMap" });
        continue;
      }

      // Successful enrichment — reset the consecutive counter
      consecutiveNotFound = 0;

      enrichedPlaces.push({
        ...place,
        ...details,
        sourceApi:          "foursquare",
        kinds:              place.kinds,
        wikipedia:          place.wikipedia,
        wikipedia_extracts: place.wikipedia_extracts,
        tags: [
          ...(place.tags    || []),
          ...(details.tastes || []),
        ],
      });

      console.log(
        `[Foursquare] Enriched: ${place.name} ` +
        `(calls: ${callsThisSession}, consecutive misses reset to 0)`
      );

    } catch (err) {
      consecutiveNotFound++;
      console.warn(`[Foursquare] Unexpected error for ${place.name}:`, err.message);
      enrichedPlaces.push({ ...place, sourceApi: "openTripMap" });
      await pause(400);
    }
  }

  // Places beyond top 25 keep OpenTripMap data
  const remaining = openTripMapPlaces.slice(25).map((p) => ({
    ...p,
    sourceApi: "openTripMap",
  }));

  // ── Category discovery — only if coverage is good and budget remains ──────
  let discovered = [];

  if (callsThisSession < SESSION_LIMIT - 50 && covered) {
    try {
      const searchResults = await searchPlacesByCategory(lat, lng, 15000, 20);
      callsThisSession++;

      const existingNames = new Set(
        [...enrichedPlaces, ...remaining].map((p) => p.name?.toLowerCase().trim())
      );

      discovered = searchResults
        .map(normaliseSearchResult)
        .filter((p) => p.name && !existingNames.has(p.name.toLowerCase().trim()));

      console.log(`[Foursquare] Discovered ${discovered.length} additional places`);

    } catch (err) {
      console.warn("[Foursquare] Category discovery failed:", err.message);
    }
  }

  const allPlaces = [...enrichedPlaces, ...remaining, ...discovered];

  console.log(
    `[Foursquare] Done for ${cityName}. ` +
    `Enriched: ${enrichedPlaces.length}, ` +
    `kept as OpenTripMap: ${remaining.length}, ` +
    `discovered: ${discovered.length}, ` +
    `total: ${allPlaces.length}, ` +
    `API calls used: ${callsThisSession}`
  );

  return allPlaces;
}

export {
  findPlaceId,
  getPlaceDetails,
  searchPlacesByCategory,
  enrichPlacesWithFoursquare,
};