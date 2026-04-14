import { transformPlace } from "../services/transform.services.js";

// ─── Dummy OpenTripMap raw record ─────────────────────────────────────────────
const dummyOpenTripMap = {
  xid:         "N123456789",
  name:        "Amber Fort",
  lat:         26.9855,
  lng:         75.8513,
  rate:        4.7,
  ratingCount: 8500,
  kinds:       "historic,fortifications,architecture",
  preview:     { source: "https://example.com/amber-fort.jpg" },
  wikipedia_extracts: {
    text: "Amber Fort is a fort located in Amer, Rajasthan, India."
  },
};

// ─── Dummy Foursquare Places raw record ──────────────────────────────────────
const dummyFoursquare = {
  fsq_id:             "4b8c9a42f964a520e3d532e3",
  name:               "Hawa Mahal",
  lat:                26.9239,
  lng:                75.8267,
  rating:             4.5,
  ratingCount:        12400,
  price_level:        1,
  categories:         [{ id: "16026", name: "Historic Site" }],
  type:               "Historic Site",
  photos:             ["https://fastly.4sqi.net/img/general/original/abc123.jpg"],
  businessStatus:     "OPERATIONAL",
  description:        "Hawa Mahal is a palace in Jaipur, India.",
};

// ─── Dummy bad record — should return null ────────────────────────────────────
const dummyBadRecord = {
  xid:  "BAD001",
  name: "Unknown Spot",
  lat:  null,
  lng:  null,
  rate: 2.1,
};

// ─── Run tests ────────────────────────────────────────────────────────────────
console.log("=== TEST 1: OpenTripMap record ===");
const result1 = transformPlace(dummyOpenTripMap, "openTripMap", "Jaipur", "Rajasthan");
console.log(result1);
console.log("\nExpected: category=heritage, mood includes cultural, placeId starts with otm_");

console.log("\n=== TEST 2: Foursquare Places record ===");
const result2 = transformPlace(dummyFoursquare, "foursquare", "Jaipur", "Rajasthan");
console.log(result2);
console.log("\nExpected: category=heritage, placeId starts with fsq_, costLevel=budget");

console.log("\n=== TEST 3: Bad record — should return null ===");
const result3 = transformPlace(dummyBadRecord, "openTripMap", "Jaipur", "Rajasthan");
console.log(result3);
console.log("\nExpected: null");