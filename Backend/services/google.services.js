import axios from "axios";

const BASE_URL = "https://maps.googleapis.com/maps/api/place";
const API_KEY  = process.env.GOOGLE_PLACES_API_KEY;

// ─────────────────────────────────────────────────────────────────────────────
// Fields we request from Google Place Details
// Only request what you need — each field group costs differently
// Basic fields (name, place_id, geometry) are free
// Contact fields (opening_hours) cost more
// Atmosphere fields (rating, reviews, price_level) cost the most
// ─────────────────────────────────────────────────────────────────────────────
const DETAIL_FIELDS = [
  "place_id",
  "name",
  "geometry",
  "rating",
  "user_ratings_total",
  "price_level",
  "photos",
  "types",
  "business_status",
  "editorial_summary",
  "formatted_address",
].join(",");

// ─────────────────────────────────────────────────────────────────────────────
// STEP 1 — Find a place on Google by name + city
// Returns the Google place_id we need for the detail call
// ─────────────────────────────────────────────────────────────────────────────
async function findPlaceId(placeName, cityName) {
  const url      = `${BASE_URL}/findplacefromtext/json`;
  const input    = `${placeName} ${cityName} India`;

  const response = await axios.get(url, {
    params: {
      input,
      inputtype:  "textquery",
      fields:     "place_id,name,geometry",
      key:        API_KEY,
    },
  });

  const candidates = response.data?.candidates || [];
  if (candidates.length === 0) return null;

  // Return the first (best) match
  return candidates[0].place_id;
}

// ─────────────────────────────────────────────────────────────────────────────
// STEP 2 — Get full details for a place using its Google place_id
// Returns enriched raw object ready for transform.service.js
// ─────────────────────────────────────────────────────────────────────────────
async function getPlaceDetails(placeId) {
  const url = `${BASE_URL}/details/json`;

  const response = await axios.get(url, {
    params: {
      place_id: placeId,
      fields:   DETAIL_FIELDS,
      key:      API_KEY,
    },
  });

  const result = response.data?.result;
  if (!result) return null;

  // Normalise into the shape transform.service.js expects
  return {
    place_id:           result.place_id,
    name:               result.name,
    lat:                result.geometry?.location?.lat,
    lng:                result.geometry?.location?.lng,
    rating:             result.rating,
    user_ratings_total: result.user_ratings_total,
    price_level:        result.price_level,
    photos:             result.photos || [],
    types:              result.types  || [],
    businessStatus:     result.business_status,
    description:        result.editorial_summary?.overview || "",
    formatted_address:  result.formatted_address,
  };
}

// ─────────────────────────────────────────────────────────────────────────────
// MAIN FUNCTION — called by cities.controller.js
// Takes an array of OpenTripMap detailed place objects
// Enriches each one with Google data
// Returns array of enriched raw place objects
// ─────────────────────────────────────────────────────────────────────────────
async function enrichPlacesWithGoogle(openTripMapPlaces, cityName) {
  console.log(`[Google] Enriching ${openTripMapPlaces.length} places for ${cityName}...`);

  // Only enrich the top 25 — controlled here to save API budget
  const toEnrich      = openTripMapPlaces.slice(0, 25);
  const enrichedPlaces = [];

  for (const place of toEnrich) {
    try {
      // Step 1 — find Google place_id by name
      const googlePlaceId = await findPlaceId(place.name, cityName);

      if (!googlePlaceId) {
        console.warn(`[Google] No match found for: ${place.name}`);
        // Keep the OpenTripMap version without Google enrichment
        enrichedPlaces.push({ ...place, sourceApi: "openTripMap" });
        continue;
      }

      // Step 2 — get full details
      const details = await getPlaceDetails(googlePlaceId);

      if (!details) {
        console.warn(`[Google] No details returned for: ${place.name}`);
        enrichedPlaces.push({ ...place, sourceApi: "openTripMap" });
        continue;
      }

      // Merge — Google data wins for overlapping fields
      // OpenTripMap data fills in what Google does not have (wikipedia, etc.)
      enrichedPlaces.push({
        ...place,          // base from OpenTripMap
        ...details,        // Google enrichment overwrites where it has data
        sourceApi: "google",
        // Preserve OpenTripMap fields Google does not provide
        kinds:       place.kinds,
        wikipedia:   place.wikipedia,
        wikipedia_extracts: place.wikipedia_extracts,
      });

      console.log(`[Google] Enriched: ${place.name}`);

      // Pause 200ms between Google calls — respect rate limits
      await new Promise((r) => setTimeout(r, 200));

    } catch (err) {
      console.warn(`[Google] Error enriching ${place.name}:`, err.message);
      // Fall back to OpenTripMap version
      enrichedPlaces.push({ ...place, sourceApi: "openTripMap" });
    }
  }

  // Any remaining places beyond top 25 keep their OpenTripMap data
  const remaining = openTripMapPlaces.slice(25).map((p) => ({
    ...p,
    sourceApi: "openTripMap",
  }));

  console.log(`[Google] Done. ${enrichedPlaces.length} enriched, ${remaining.length} kept as-is`);
  return [...enrichedPlaces, ...remaining];
}

export { findPlaceId, getPlaceDetails, enrichPlacesWithGoogle };