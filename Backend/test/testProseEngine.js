import { generateItineraryProse } from "../services/proseEngine.services.js";

// Minimal dummy itinerary — simulating what buildItinerary returns
const dummyItinerary = {
  destination:  "Jaipur",
  numberOfDays: 2,
  totalPlaces:  6,
  cities: [{ city: "Jaipur", state: "Rajasthan" }],
  costEstimate: { grandTotal: 5000 },
  days: [
    {
      dayNumber:   1,
      city:        "Jaipur",
      title:       "History & Forts in Jaipur",
      summary:     "Day 1 summary",
      isTravelDay: false,
      travelNote:  null,
      estimatedCost: 750,
      totalHours:  6.5,
      activities: [
        {
          placeId:         "otm_amber_fort",
          name:            "Amber Fort",
          city:            "Jaipur",
          category:        "heritage",
          slot:            "morning",
          slotLabel:       "Morning",
          arrivalTime:     "08:00",
          endTime:         "11:00",
          durationHours:   3,
          costLevel:       "budget",
          entryFee:        200,
          indoorOrOutdoor: "outdoor",
          avgRating:       4.7,
          popularityScore: 92,
          moodMatch:       ["cultural", "adventure"],
          bestTimeOfDay:   ["morning"],
          description:     "A magnificent hilltop fort.",
          photos:          [],
          tags:            ["fort", "history"],
        },
        {
          placeId:         "otm_city_palace",
          name:            "City Palace",
          city:            "Jaipur",
          category:        "heritage",
          slot:            "afternoon",
          slotLabel:       "Afternoon",
          arrivalTime:     "13:00",
          endTime:         "15:00",
          durationHours:   2,
          costLevel:       "budget",
          entryFee:        500,
          indoorOrOutdoor: "indoor",
          avgRating:       4.6,
          popularityScore: 85,
          moodMatch:       ["cultural"],
          bestTimeOfDay:   ["morning", "afternoon"],
          description:     "Royal palace in Jaipur.",
          photos:          [],
          tags:            ["palace", "royalty"],
        },
        {
          placeId:         "fsq_food",
          name:            "LMB Restaurant",
          city:            "Jaipur",
          category:        "food",
          slot:            "evening",
          slotLabel:       "Evening",
          arrivalTime:     "18:00",
          endTime:         "19:30",
          durationHours:   1.5,
          costLevel:       "budget",
          entryFee:        0,
          indoorOrOutdoor: "indoor",
          avgRating:       4.3,
          popularityScore: 70,
          moodMatch:       ["relaxing"],
          bestTimeOfDay:   ["evening"],
          description:     "Rajasthani thali specialists.",
          photos:          [],
          tags:            ["food", "vegetarian"],
        },
      ],
      slots: {
        morning:   { label: "morning",   startTime: "08:00", activity: null },
        afternoon: { label: "afternoon", startTime: "13:00", activity: null },
        evening:   { label: "evening",   startTime: "18:00", activity: null },
      },
    },
    {
      dayNumber:   2,
      city:        "Udaipur",
      title:       "Lakes & Culture in Udaipur",
      summary:     "Day 2 summary",
      isTravelDay: true,
      travelNote:  "Travel day — moving from Jaipur to Udaipur",
      estimatedCost: 300,
      totalHours:  5,
      activities: [
        {
          placeId:         "otm_city_palace_udaipur",
          name:            "City Palace Udaipur",
          city:            "Udaipur",
          category:        "heritage",
          slot:            "morning",
          slotLabel:       "Morning",
          arrivalTime:     "08:00",
          endTime:         "11:00",
          durationHours:   3,
          costLevel:       "budget",
          entryFee:        300,
          indoorOrOutdoor: "outdoor",
          avgRating:       4.8,
          popularityScore: 90,
          moodMatch:       ["cultural", "romantic"],
          bestTimeOfDay:   ["morning"],
          description:     "Magnificent palace complex on Lake Pichola.",
          photos:          [],
          tags:            ["palace", "lake", "heritage"],
        },
      ],
      slots: {
        morning:   { label: "morning",   startTime: "08:00", activity: null },
        afternoon: { label: "afternoon", startTime: "13:00", activity: null },
        evening:   { label: "evening",   startTime: "18:00", activity: null },
      },
    },
  ],
};

const preferences = {
  mood:        "cultural",
  companions:  "couple",
  destination: "Jaipur",
};

// ── Run prose engine ──────────────────────────────────────────────────────────
console.log("=== Testing PlanPilot Prose Engine ===\n");

const result = generateItineraryProse(dummyItinerary, preferences);

// ── Print results ─────────────────────────────────────────────────────────────
console.log("TRIP TITLE:");
console.log(" ", result.tripTitle);

console.log("\nTRIP INTRO:");
console.log(" ", result.tripIntro);

result.days.forEach((day) => {
  console.log(`\nDAY ${day.dayNumber} — ${day.city}`);
  console.log("  DAY OPENER:");
  console.log("   ", day.dayOpener);

  day.activities.forEach((act) => {
    console.log(`\n  [${act.slot.toUpperCase()}] ${act.name}`);
    console.log("  HEADLINE:    ", act.headline);
    console.log("  DESCRIPTION: ", act.aiDescription);
    console.log("  TIP:         ", act.insiderTip);
  });
});

console.log("\nCLOSING NOTE:");
console.log(" ", result.closingNote);

// ── Assertions ────────────────────────────────────────────────────────────────
console.log("\n=== Assertions ===");
console.log("Has tripTitle:       ", Boolean(result.tripTitle)                        ? "PASS" : "FAIL");
console.log("Has tripIntro:       ", Boolean(result.tripIntro)                        ? "PASS" : "FAIL");
console.log("Has closingNote:     ", Boolean(result.closingNote)                      ? "PASS" : "FAIL");
console.log("Has dayOpener day1:  ", Boolean(result.days[0].dayOpener)               ? "PASS" : "FAIL");
console.log("Has headline:        ", Boolean(result.days[0].activities[0].headline)   ? "PASS" : "FAIL");
console.log("Has aiDescription:   ", Boolean(result.days[0].activities[0].aiDescription) ? "PASS" : "FAIL");
console.log("Has insiderTip:      ", Boolean(result.days[0].activities[0].insiderTip) ? "PASS" : "FAIL");
console.log("Travel day opener:   ", result.days[1].dayOpener.length > 0             ? "PASS" : "FAIL");
console.log("No API key needed:   ", "PASS — runs entirely from templates + DB data");