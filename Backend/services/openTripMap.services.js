import axios from "axios";
import dotenv from "dotenv";
dotenv.config();

const BASE_URL = "https://api.opentripmap.com/0.1/en/places";
const API_KEY  = process.env.OPENTRIPMAP_API_KEY;

// ─────────────────────────────────────────────────────────────────────────────
// FIX 1 — Reduced to parent-level kinds only
// Sending too many kinds in one request causes 400 on OpenTripMap
// These parent categories cover everything you need
// ─────────────────────────────────────────────────────────────────────────────
const PRIORITY_KINDS = [
  "historic",
  "cultural",
  "natural",
  "religion",
  "sport",
  "amusements",
].join(",");

// ─────────────────────────────────────────────────────────────────────────────
// These are the detailed sub-kinds we use for FILTERING after fetching
// not for the API request itself
// ─────────────────────────────────────────────────────────────────────────────
const PRIORITY_SUBKINDS = [
  "fortifications",
  "palaces",
  "monuments",
  "architecture",
  "museums",
  "nature_reserves",
  "national_parks",
  "waterfalls",
  "beaches",
  "temples",
  "buddhist_temples",
  "hindu_temples",
  "historic",
  "cultural",
  "natural",
  "religion",
];

// ─────────────────────────────────────────────────────────────────────────────
// STEP 1 — Fetch raw list from OpenTripMap
// ─────────────────────────────────────────────────────────────────────────────
async function fetchRawList(lat, lng, radiusMetres = 15000) {
  const url = `${BASE_URL}/radius`;

  // FIX 2 — trim API key to remove any accidental whitespace from .env
  const cleanApiKey = (API_KEY || "").trim();
  console.log(API_KEY);

  if (!cleanApiKey) {
    throw new Error("[OpenTripMap] OPENTRIPMAP_API_KEY is missing from .env file");
  }

  const params = {
    radius:  radiusMetres,
    lon:     parseFloat(lng),   // FIX 3 — ensure numbers not strings
    lat:     parseFloat(lat),   // FIX 3 — ensure numbers not strings
    kinds:   PRIORITY_KINDS,    // FIX 1 — shorter kinds string
    rate:    "1",               // FIX 4 — was "2", use "1" to get all places
    format:  "json",
    limit:   200,
    apikey:  cleanApiKey,       // FIX 2 — trimmed key
  };

  // Log the full URL so you can test it directly in your browser
  const debugUrl = `${url}?radius=${params.radius}&lon=${params.lon}&lat=${params.lat}&kinds=${params.kinds}&rate=${params.rate}&format=${params.format}&limit=${params.limit}&apikey=${cleanApiKey}`;
  console.log("[OpenTripMap] Testing this URL in browser will confirm if key works:");
  console.log(debugUrl);

  try {
    const response = await axios.get(url, { params });

    const data = response.data || [];
    console.log(`[OpenTripMap] Raw API returned ${data.length} results`);
    return data;

  } catch (err) {
    // FIX 5 — specific error messages for each failure type
    const status = err.response?.status;
    const detail = err.response?.data;

    console.error("[OpenTripMap] Error response body:", detail);

    if (status === 400) {
      throw new Error(
        `[OpenTripMap] 400 Bad Request — likely causes:\n` +
        `  1. API key has whitespace — key received: "${cleanApiKey}"\n` +
        `  2. lat/lng are invalid — lat: ${lat}, lng: ${lng}\n` +
        `  3. Copy the debug URL above into your browser to test directly`
      );
    }
    if (status === 403) {
      throw new Error("[OpenTripMap] 403 Forbidden — API key is invalid or expired");
    }
    if (status === 429) {
      throw new Error("[OpenTripMap] 429 Rate limit exceeded — wait 60 seconds and retry");
    }

    throw new Error(`[OpenTripMap] fetchRawList failed with status ${status}: ${err.message}`);
  }
}

// ─────────────────────────────────────────────────────────────────────────────
// STEP 2 — Fetch full details for a single place by xid
// ─────────────────────────────────────────────────────────────────────────────
async function fetchPlaceDetail(xid) {
  const url      = `${BASE_URL}/xid/${xid}`;
  const cleanKey = (API_KEY || "").trim();

  const response = await axios.get(url, {
    params: { apikey: cleanKey },
  });

  return response.data || null;
}

// ─────────────────────────────────────────────────────────────────────────────
// STEP 3 — Filter raw list using sub-kinds, wikipedia, and rating
// Now uses PRIORITY_SUBKINDS for filtering instead of the request kinds
// ─────────────────────────────────────────────────────────────────────────────
function filterRawList(rawList) {
  return rawList.filter((place) => {
    const rate           = parseFloat(place.rate || 0);
    const kinds          = (place.kinds || "").split(",").map((k) => k.trim());
    const hasWikipedia   = Boolean(place.wikipedia);
    const hasGoodRating  = rate >= 2;
    const isPriorityKind = kinds.some((k) => PRIORITY_SUBKINDS.includes(k));

    return hasWikipedia || hasGoodRating || isPriorityKind;
  });
}

// ─────────────────────────────────────────────────────────────────────────────
// STEP 4 — Sort and limit
// ─────────────────────────────────────────────────────────────────────────────
function sortAndLimit(filteredList, limit = 40) {
  return filteredList
    .sort((a, b) => parseFloat(b.rate || 0) - parseFloat(a.rate || 0))
    .slice(0, limit);
}

// ─────────────────────────────────────────────────────────────────────────────
// MAIN FUNCTION
// ─────────────────────────────────────────────────────────────────────────────
async function getPlacesForCity(lat, lng, cityName) {
  console.log(`\n[OpenTripMap] Starting fetch for ${cityName} (lat:${lat}, lng:${lng})`);

  const rawList = await fetchRawList(lat, lng);

  const filtered = filterRawList(rawList);
  console.log(`[OpenTripMap] Raw: ${rawList.length} → After filter: ${filtered.length}`);

  const topPlaces = sortAndLimit(filtered, 40);
  console.log(`[OpenTripMap] Fetching details for top ${topPlaces.length} places...`);

  const detailedPlaces = [];

  for (const place of topPlaces) {
    try {
      const detail = await fetchPlaceDetail(place.xid);

      if (detail && detail.name) {
        detailedPlaces.push({
          ...detail,
          rate:        place.rate,
          ratingCount: 0,
          lat:         detail.point?.lat || place.point?.lat,
          lng:         detail.point?.lon || place.point?.lon,
        });
      }

      await new Promise((r) => setTimeout(r, 100));

    } catch (err) {
      console.warn(`[OpenTripMap] Skipped ${place.xid}: ${err.message}`);
    }
  }

  console.log(`[OpenTripMap] Done — ${detailedPlaces.length} detailed places ready\n`);
  return detailedPlaces;
}

export { getPlacesForCity };