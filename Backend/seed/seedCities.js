// These are just run once to insert data about 30 cities and the places to be visited in those city

import mongoose from "mongoose";
import dotenv from "dotenv";
import {City} from "../models/City.models.js"
import tier1Cities from "../config/tier1Cities.js";

dotenv.config();

async function seedCities() {
    await mongoose.connect(process.env.MONGODBURI + "/PlanPilot");
    console.log("MongoDB connected");

    console.log(`Seeding ${tier1Cities.length} tier-1 cities...\n`);

    let inserted = 0;
    let skipped = 0;

    for (const cityData of tier1Cities) {
        try {

            const result = await City.findOneAndUpdate(
                { name: cityData.name },
                {
                    $set: {
                        name: cityData.name,
                        state: cityData.state,
                        country: cityData.country,
                        coordinates: {
                            type: "Point",
                            coordinates: cityData.coordinates,
                        },
                        tier: 1,
                    },
                    $setOnInsert: {
                        status: "pending",
                        placeCount: 0,
                    },
                },
                { upsert: true, returnDocument: 'after' }
            );

            // Check if this was new insert or existing
            
            // To detect if it's completely new, we can check if lastPopulatedAt is null and status is pending.
            if (result.status === "pending" && !result.lastPopulatedAt) {
                console.log(`Inserted: ${cityData.name}, ${cityData.state} `);
                inserted++;
            } else {
                console.log(`Skipped (exists): ${cityData.name} - status: ${result.status} `);
                skipped++;
            }

        } catch (err) {
            console.error(`  Error inserting ${cityData.name}:`, err.message);
        }
    }

    console.log(`\nDone. Inserted: ${inserted}, Skipped: ${skipped}`);
    await mongoose.disconnect();

}

seedCities();