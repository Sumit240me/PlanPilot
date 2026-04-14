import { scorePlaces } from "../services/scoring.services.js";

// Dummy places — simulating what MongoDB returns
const dummyPlaces = [
  {
    placeId:         "otm_amber_fort",
    name:            "Amber Fort",
    category:        "heritage",
    costLevel:       "budget",
    avgRating:       4.7,
    ratingCount:     8500,
    popularityScore: 92,
    moodMatch:       ["cultural", "adventure"],
    companionMatch:  ["solo", "couple", "family", "friends"],
    bestTimeOfDay:   ["morning", "evening"],
    skipCount:       0,
  },
  {
    placeId:         "otm_sam_dunes",
    name:            "Sam Sand Dunes",
    category:        "nature",
    costLevel:       "mid-range",
    avgRating:       4.5,
    ratingCount:     3200,
    popularityScore: 80,
    moodMatch:       ["adventure", "romantic"],
    companionMatch:  ["couple", "friends"],
    bestTimeOfDay:   ["evening"],
    skipCount:       2,
  },
  {
    placeId:         "fsq_luxury_spa",
    name:            "Oberoi Luxury Spa",
    category:        "heritage",
    costLevel:       "luxury",
    avgRating:       4.9,
    ratingCount:     500,
    popularityScore: 70,
    moodMatch:       ["luxury", "romantic"],
    companionMatch:  ["couple"],
    bestTimeOfDay:   ["afternoon"],
    skipCount:       0,
  },
  {
    placeId:         "otm_city_palace",
    name:            "City Palace",
    category:        "heritage",
    costLevel:       "budget",
    avgRating:       4.6,
    ratingCount:     12000,
    popularityScore: 88,
    moodMatch:       ["cultural"],
    companionMatch:  ["solo", "couple", "family", "friends"],
    bestTimeOfDay:   ["morning", "afternoon"],
    skipCount:       0,
  },
];

// ── Test 1: Budget cultural couple ────────────────────────────────────────────
console.log("=== TEST 1: Budget + Cultural + Couple ===\n");
const result1 = scorePlaces(dummyPlaces, {
  mood:       "cultural",
  budget:     "budget",
  companions: "couple",
});
result1.forEach((p) => {
  console.log(`${p.name.padEnd(25)} score: ${p._score.total}`);
  console.log(`  breakdown: ${JSON.stringify(p._score.breakdown)}`);
});

// Expected:
// Luxury Spa is FILTERED OUT (luxury costLevel > budget)
// Amber Fort is top (cultural mood match + high rating + high popularity)
// City Palace is second

// ── Test 2: Mid-range romantic couple ────────────────────────────────────────
console.log("\n=== TEST 2: Mid-range + Romantic + Couple ===\n");
const result2 = scorePlaces(dummyPlaces, {
  mood:       "romantic",
  budget:     "mid-range",
  companions: "couple",
});
result2.forEach((p) => {
  console.log(`${p.name.padEnd(25)} score: ${p._score.total}`);
});

// Expected:
// Sam Sand Dunes and Luxury Spa compete for top — Sam has skip penalty though
// Amber Fort gets partial mood match (relaxing partially matches romantic)

// ── Test 3: Previously visited place gets zero novelty ────────────────────────
console.log("\n=== TEST 3: User already visited Amber Fort ===\n");
const result3 = scorePlaces(dummyPlaces, {
  mood:            "cultural",
  budget:          "budget",
  companions:      "solo",
  visitedPlaceIds: ["otm_amber_fort"],
});
result3.forEach((p) => {
  console.log(`${p.name.padEnd(25)} score: ${p._score.total} novelty: ${p._score.breakdown.novelty}`);
});

// Expected: Amber Fort gets 0 novelty points, City Palace likely ranked first

// ── Test 4: User with high heritage categoryScore gets bonus ──────────────────
console.log("\n=== TEST 4: User has heritage categoryScore of 5.0 ===\n");
const result4 = scorePlaces(dummyPlaces, {
  mood:           "cultural",
  budget:         "budget",
  companions:     "family",
  categoryScores: { heritage: 5.0, nature: 2.0 },
});
result4.forEach((p) => {
  console.log(`${p.name.padEnd(25)} score: ${p._score.total} bonus: ${p._score.breakdown.bonus}`);
});

// Expected: All heritage places get +10 bonus points
// Nature places (Sam Dunes) get smaller bonus based on their lower user score

console.log("\n=== All tests complete ===");