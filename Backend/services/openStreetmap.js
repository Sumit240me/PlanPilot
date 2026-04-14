import axios from "axios";

const OVERPASS_URL = "https://overpass-api.de/api/interpreter";

// Convert OSM raw data → your format
function normalizeOSMElement(el) {
  return {
    place_id: `osm_${el.id}`,
    name: el.tags?.name || "Unknown",
    lat: el.lat || el.center?.lat,
    lng: el.lon || el.center?.lon,
    rating: null, // OSM doesn't provide ratings
    user_ratings_total: 0,
    price_level: null,
    photos: [],
    types: Object.values(el.tags || {}),
    category_name: el.tags?.amenity || el.tags?.tourism || "place",
    formatted_address: el.tags?.["addr:full"] || "",
    description: el.tags?.description || "",
    sourceApi: "openstreetmap",
  };
}

// 🔥 MAIN FUNCTION (replaces everything)
export async function getPlacesFromOSM(lat, lng, radius = 10000) {
  const query = `
    [out:json][timeout:25];
    (
      node(around:${radius},${lat},${lng})["tourism"];
      node(around:${radius},${lat},${lng})["amenity"];
      node(around:${radius},${lat},${lng})["shop"];
      way(around:${radius},${lat},${lng})["tourism"];
      way(around:${radius},${lat},${lng})["amenity"];
      way(around:${radius},${lat},${lng})["shop"];
    );
    out center;
  `;

  try {
    const response = await axios.post(OVERPASS_URL, query, {
      headers: { "Content-Type": "text/plain" },
      timeout: 15000,
    });

    const elements = response.data?.elements || [];

    return elements.map(normalizeOSMElement);

  } catch (err) {
    console.error("[OSM] Error fetching places:", err.message);
    return [];
  }
}