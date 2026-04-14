import { buildItinerary } from "../services/itinerary.services.js";

// Dummy scored places — simulating what scoring.service.js returns
const dummyScoredPlaces = [
  {
    placeId:              "otm_amber_fort",
    name:                 "Amber Fort",
    category:             "heritage",
    costLevel:            "budget",
    entryFee:             200,
    indoorOrOutdoor:      "outdoor",
    typicalDurationHours: 3,
    bestTimeOfDay:        ["morning", "evening"],
    avgRating:            4.7,
    popularityScore:      92,
    moodMatch:            ["cultural", "adventure"],
    description:          "A magnificent fort on the hills of Jaipur.",
    photos:               ["https://example.com/amber.jpg"],
    tags:                 ["fort", "history", "photography"],
    coordinates:          { coordinates: [75.8513, 26.9855] },
    sourceApi:            "openTripMap",
    _score:               { total: 88 },
  },
  {
    placeId:              "otm_city_palace",
    name:                 "City Palace",
    category:             "heritage",
    costLevel:            "budget",
    entryFee:             500,
    indoorOrOutdoor:      "indoor",
    typicalDurationHours: 2,
    bestTimeOfDay:        ["morning", "afternoon"],
    avgRating:            4.6,
    popularityScore:      88,
    moodMatch:            ["cultural"],
    description:          "Royal palace in the heart of Jaipur.",
    photos:               [],
    tags:                 ["palace", "royalty", "museum"],
    coordinates:          { coordinates: [75.8235, 26.9258] },
    sourceApi:            "openTripMap",
    _score:               { total: 82 },
  },
  {
    placeId:              "otm_hawa_mahal",
    name:                 "Hawa Mahal",
    category:             "heritage",
    costLevel:            "budget",
    entryFee:             50,
    indoorOrOutdoor:      "outdoor",
    typicalDurationHours: 1,
    bestTimeOfDay:        ["morning"],
    avgRating:            4.5,
    popularityScore:      85,
    moodMatch:            ["cultural", "relaxing"],
    description:          "The Palace of Winds — iconic pink facade.",
    photos:               [],
    tags:                 ["architecture", "photography"],
    coordinates:          { coordinates: [75.8267, 26.9239] },
    sourceApi:            "openTripMap",
    _score:               { total: 79 },
  },
  {
    placeId:              "otm_jantar_mantar",
    name:                 "Jantar Mantar",
    category:             "heritage",
    costLevel:            "budget",
    entryFee:             200,
    indoorOrOutdoor:      "outdoor",
    typicalDurationHours: 1.5,
    bestTimeOfDay:        ["morning", "afternoon"],
    avgRating:            4.4,
    popularityScore:      78,
    moodMatch:            ["cultural", "hidden gems"],
    description:          "UNESCO astronomical observatory.",
    photos:               [],
    tags:                 ["UNESCO", "science", "history"],
    coordinates:          { coordinates: [75.8244, 26.9247] },
    sourceApi:            "openTripMap",
    _score:               { total: 74 },
  },
  {
    placeId:              "fsq_lmb_restaurant",
    name:                 "LMB Restaurant",
    category:             "food",
    costLevel:            "budget",
    entryFee:             0,
    indoorOrOutdoor:      "indoor",
    typicalDurationHours: 1.5,
    bestTimeOfDay:        ["afternoon", "evening"],
    avgRating:            4.3,
    popularityScore:      72,
    moodMatch:            ["relaxing", "cultural"],
    description:          "Famous for traditional Rajasthani thali.",
    photos:               [],
    tags:                 ["rajasthani food", "thali", "vegetarian"],
    coordinates:          { coordinates: [75.8190, 26.9208] },
    sourceApi:            "foursquare",
    _score:               { total: 68 },
  },
  {
    placeId:              "otm_nahargarh",
    name:                 "Nahargarh Fort",
    category:             "heritage",
    costLevel:            "budget",
    entryFee:             100,
    indoorOrOutdoor:      "outdoor",
    typicalDurationHours: 2,
    bestTimeOfDay:        ["evening"],
    avgRating:            4.5,
    popularityScore:      80,
    moodMatch:            ["romantic", "adventure"],
    description:          "Hilltop fort with panoramic sunset views.",
    photos:               [],
    tags:                 ["sunset", "fort", "views"],
    coordinates:          { coordinates: [75.8006, 26.9381] },
    sourceApi:            "openTripMap",
    _score:               { total: 76 },
  },
  {
    placeId:              "fsq_bapu_bazaar",
    name:                 "Bapu Bazaar",
    category:             "shopping",
    costLevel:            "budget",
    entryFee:             0,
    indoorOrOutdoor:      "outdoor",
    typicalDurationHours: 2,
    bestTimeOfDay:        ["afternoon", "evening"],
    avgRating:            4.2,
    popularityScore:      70,
    moodMatch:            ["cultural", "relaxing"],
    description:          "Famous street market for textiles and handicrafts.",
    photos:               [],
    tags:                 ["market", "shopping", "local culture"],
    coordinates:          { coordinates: [75.8204, 26.9137] },
    sourceApi:            "foursquare",
    _score:               { total: 65 },
  },
  {
    placeId:              "otm_albert_hall",
    name:                 "Albert Hall Museum",
    category:             "heritage",
    costLevel:            "budget",
    entryFee:             150,
    indoorOrOutdoor:      "indoor",
    typicalDurationHours: 2,
    bestTimeOfDay:        ["afternoon"],
    avgRating:            4.4,
    popularityScore:      75,
    moodMatch:            ["cultural"],
    description:          "Oldest museum in Rajasthan with royal artefacts.",
    photos:               [],
    tags:                 ["museum", "history", "art"],
    coordinates:          { coordinates: [75.8190, 26.9107] },
    sourceApi:            "openTripMap",
    _score:               { total: 71 },
  },
  {
    placeId:              "otm_jal_mahal",
    name:                 "Jal Mahal",
    category:             "nature",
    costLevel:            "budget",
    entryFee:             0,
    indoorOrOutdoor:      "outdoor",
    typicalDurationHours: 1,
    bestTimeOfDay:        ["morning", "evening"],
    avgRating:            4.3,
    popularityScore:      73,
    moodMatch:            ["romantic", "relaxing"],
    description:          "A palace floating in the middle of Man Sagar Lake.",
    photos:               [],
    tags:                 ["lake", "sunset", "photography"],
    coordinates:          { coordinates: [75.8494, 26.9543] },
    sourceApi:            "openTripMap",
    _score:               { total: 67 },
  },
];

const preferences = {
  mood:        "cultural",
  companions:  "couple",
  destination: "Jaipur",
};

// ── TEST 1: 3-day trip ──────────────────────────────────────────────────────
console.log("=== TEST 1: 3-day Jaipur trip ===\n");
const itinerary3Day = buildItinerary(dummyScoredPlaces, 3, preferences);

itinerary3Day.days.forEach((day) => {
  console.log(`\nDay ${day.dayNumber}: ${day.title}`);
  console.log(`Summary: ${day.summary}`);
  console.log(`Cost: ₹${day.estimatedCost}  |  Hours: ${day.totalHours}`);

  Object.entries(day.slots).forEach(([slot, data]) => {
    if (data.activity) {
      console.log(`  ${slot.toUpperCase()}: ${data.activity.name} (${data.activity.arrivalTime}–${data.activity.endTime})`);
    } else {
      console.log(`  ${slot.toUpperCase()}: empty`);
    }
  });
});

console.log("\n--- Trip Cost Estimate ---");
console.log(`Entry fees:  ₹${itinerary3Day.costEstimate.entryFees}`);
console.log(`Food est:    ₹${itinerary3Day.costEstimate.estimatedFood}`);
console.log(`Transport:   ₹${itinerary3Day.costEstimate.estimatedTransport}`);
console.log(`Grand total: ₹${itinerary3Day.costEstimate.grandTotal}`);
console.log(`Note: ${itinerary3Day.costEstimate.note}`);

// ── TEST 2: 1-day trip ──────────────────────────────────────────────────────
console.log("\n\n=== TEST 2: 1-day trip ===\n");
const itinerary1Day = buildItinerary(dummyScoredPlaces, 1, preferences);

itinerary1Day.days.forEach((day) => {
  console.log(`Day ${day.dayNumber}: ${day.title}`);
  Object.entries(day.slots).forEach(([slot, data]) => {
    if (data.activity) {
      console.log(`  ${slot}: ${data.activity.name}`);
    }
  });
});

// ── TEST 3: Empty places array — should return gracefully ───────────────────
console.log("\n\n=== TEST 3: Empty places — graceful fallback ===\n");
const emptyResult = buildItinerary([], 3, preferences);
console.log("Error field:", emptyResult.error);
console.log("Days array:", emptyResult.days);

// ── TEST 4: Verify no place is used twice ───────────────────────────────────
console.log("\n\n=== TEST 4: No duplicate places across days ===\n");
const allUsedIds = itinerary3Day.days.flatMap(
  (day) => day.activities.map((a) => a.placeId)
);
const uniqueIds  = new Set(allUsedIds);
console.log(`Total activity slots filled: ${allUsedIds.length}`);
console.log(`Unique place IDs:            ${uniqueIds.size}`);
console.log(
  `No duplicates: ${allUsedIds.length === uniqueIds.size ? "PASS" : "FAIL"}`
);

// ── TEST 5: Verify structure shape ──────────────────────────────────────────
console.log("\n\n=== TEST 5: Output structure shape ===\n");
const day1 = itinerary3Day.days[0];
console.log("Has destination:   ", Boolean(itinerary3Day.destination) ? "PASS" : "FAIL");
console.log("Has numberOfDays:  ", itinerary3Day.numberOfDays === 3   ? "PASS" : "FAIL");
console.log("Has days array:    ", Array.isArray(itinerary3Day.days)  ? "PASS" : "FAIL");
console.log("Has costEstimate:  ", Boolean(itinerary3Day.costEstimate) ? "PASS" : "FAIL");
console.log("Day has title:     ", Boolean(day1.title)                ? "PASS" : "FAIL");
console.log("Day has slots:     ", Boolean(day1.slots)                ? "PASS" : "FAIL");
console.log("Day has activities:", Array.isArray(day1.activities)     ? "PASS" : "FAIL");
console.log("Activity has name: ", Boolean(day1.activities[0]?.name)  ? "PASS" : "FAIL");
console.log("Activity has times:", Boolean(day1.activities[0]?.arrivalTime) ? "PASS" : "FAIL");
console.log("Activity has coords:", Boolean(day1.activities[0]?.coordinates) ? "PASS" : "FAIL"); 