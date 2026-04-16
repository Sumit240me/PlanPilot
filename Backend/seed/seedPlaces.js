import mongoose from "mongoose";
import dotenv from "dotenv";
import { City } from "../models/City.models.js";
import { Place } from "../models/Place.models.js";
import { runCityPipeline } from "../controllers/cities.controller.js";
import { getAllCuratedFamousPlaces, getCuratedFamousPlacesForCity } from "../services/famousPlaces.services.js";
import { transformPlace } from "../services/transform.services.js";

dotenv.config();

// CONFIG
const DELAY_BETWEEN_CITIES_MS = 2000; // reduced (OSM is lighter)
const START_FROM_INDEX = 0;

async function seedCuratedFamousPlaces() {
    console.log("\n[FamousPlaces] ═══ Seeding curated famous places from config ═══\n");
    
    const curatedData = getAllCuratedFamousPlaces();
    const results = { inserted: 0, updated: 0, skipped: 0 };

    for (const { city, places } of curatedData) {
        console.log(`[FamousPlaces] Processing ${city}: ${places.length} places`);

        for (const rawPlace of places) {
            try {
                const cityDoc = await City.findOne({ 
                    name: { $regex: new RegExp(`^${city}$`, "i") } 
                });

                if (!cityDoc) {
                    console.log(`  [FamousPlaces] City not found in DB: ${city}`);
                    continue;
                }

                const transformed = transformPlace(
                    rawPlace,
                    "curated",
                    cityDoc.name,
                    cityDoc.state,
                    cityDoc.country
                );

                if (!transformed) {
                    console.log(`  [FamousPlaces] Transform failed for: ${rawPlace.name}`);
                    continue;
                }

                transformed.isFamous = true;

                const existing = await Place.findOne({ placeId: transformed.placeId });
                
                if (existing) {
                    await Place.findByIdAndUpdate(existing._id, transformed);
                    results.updated++;
                } else {
                    await Place.create(transformed);
                    results.inserted++;
                }
            } catch (err) {
                console.log(`  [FamousPlaces] Error for ${rawPlace.name}: ${err.message}`);
                results.skipped++;
            }
        }
    }

    console.log(`\n[FamousPlaces] Curated places seeded: ${results.inserted} inserted, ${results.updated} updated, ${results.skipped} skipped\n`);
    return results;
}

async function seedPlaces() {
  await mongoose.connect(process.env.MONGODBURI + "/PlanPilot");
  console.log("MongoDB connected\n");

  const pendingCities = await City.find({
    tier: 1,
    status: { $in: ["pending", "failed"] },
  }).sort({ name: 1 });

  if (pendingCities.length === 0) {
    console.log("No pending tier-1 cities found.");
    await mongoose.disconnect();
    return;
  }

  console.log(`Found ${pendingCities.length} cities to populate\n`);

  const results = {
    success: [],
    failed: [],
  };

  const citiesToProcess = pendingCities.slice(START_FROM_INDEX);

  for (let i = 0; i < citiesToProcess.length; i++) {
    const city = citiesToProcess[i];
    const num = START_FROM_INDEX + i + 1;

    console.log(`\n[${num}/${pendingCities.length}] Processing: ${city.name}, ${city.state}`);
    console.log("─".repeat(50));

    try {
      // Mark as processing
      await City.findByIdAndUpdate(city._id, { status: "processing" });

      const summary = await runCityPipeline(city);

      const totalStored = summary.inserted + summary.updated;

      await City.findByIdAndUpdate(city._id, {
        status: totalStored > 0 ? "populated" : "failed",
        placeCount: totalStored,
        lastPopulatedAt: new Date(),
        errorMessage: "",
      });

      console.log(`Result: ${JSON.stringify(summary)}`);
      results.success.push({ city: city.name, ...summary });

    } catch (err) {
      console.error(`Failed: ${city.name} - ${err.message}`);

      await City.findByIdAndUpdate(city._id, {
        status: "failed",
        errorMessage: err.message,
      });

      results.failed.push({ city: city.name, error: err.message });
    }

    // ⏳ Delay (important for Overpass API)
    if (i < citiesToProcess.length - 1) {
      console.log(`\nPausing ${DELAY_BETWEEN_CITIES_MS / 1000}s...`);
      await new Promise((r) => setTimeout(r, DELAY_BETWEEN_CITIES_MS));
    }
  }

  // Seed curated famous places from config
  console.log("\n" + "═".repeat(60));
  const curatedResults = await seedCuratedFamousPlaces();

  // FINAL SUMMARY
  console.log("\n" + "═".repeat(60));
  console.log("SEED COMPLETE");
  console.log(`Successful: ${results.success.length}`);
  console.log(`Failed: ${results.failed.length}`);
  console.log(`Curated famous places: ${curatedResults.inserted} inserted, ${curatedResults.updated} updated`);

  if (results.failed.length > 0) {
    console.log("\nFailed cities:");
    results.failed.forEach((f) =>
      console.log(` - ${f.city}: ${f.error}`)
    );
  }

  console.log("\nSuccess summary:");
  results.success.forEach((s) => {
    console.log(
      `  ${s.city}: ${s.inserted} inserted, ${s.updated} updated, ${s.skipped} skipped`
    );
  });

  await mongoose.disconnect();
  console.log("\nDisconnected from MongoDB.");
}

seedPlaces();