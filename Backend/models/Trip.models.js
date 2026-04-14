import mongoose from "mongoose";

// Activity schema - stored inside each day slot

const activitySchema = new mongoose.Schema(
    {
        placeId: {
            type: String,
            required: true
        },
        name: {
            type: String,
            required: true
        },
        city: {
            type: String
        },
        state: {
            type: String
        },
        category: {
            type: String,
        },
        slot: {
            type: String,
            enum: ["morning", "afternoon", "evening","night"],
        },
        arrivalTime: {
            type: String,
        },
        endTime: {
            type: String
        },
        durationHours: {
            type: Number
        },
        costLevel: {
            type: String
        },
        entryFee: {
            type: Number,
            default: 0
        },
        indoorOrOutdoor: {
            type: String
        },
        photos: {
            type: [String],
            default: []
        },
        tags: {
            type: [String],
            default: []
        },
        coordinates: {
            lat: { type: Number },
            lng: { type: Number },
        },

        // Take from porse
        headline: {
            type: String,
            default: ""
        },
        aiDescription: {
            type: String,
            default: ""
        },
        insiderTip: {
            type: String,
            default: ""
        },

        // Original description places collection
        description: {
            type: String,
            default: ""
        },
        // User feedback - filled after the trip
        userRating: {
            type: Number,
            min: 1,
            max: 5,
            default: null
        },
        wasSkipped: {
            type: Boolean,
            default: false
        },
        wasSwapped: {
            type: Boolean,
            default: false
        }
    },
    { _id: false }
);


// Day schema - one per trip day

const daySchema = new mongoose.Schema(
    {
        dayNumber: {
            type: Number,
            required: true
        },
        city: {
            type: String
        },
        state: {
            type: String
        },
        title: {
            type: String
        },
        summary: {
            type: String
        },
        dayOpener: {
            type: String,
            default: ""
        },
        isTravelDay: {
            type: Boolean,
            default: false
        },
        travelNote: {
            type: String,
            default: null
        },
        estimatedCost: {
            type: Number,
            default: 0
        },
        totalHours: { type: Number, default: 0 },
        activities: { type: [activitySchema], default: [] },
        slots: {
            morning: {
                label: { type: String },
                startTime: { type: String },
                activity: { type: activitySchema, default: null },
            },
            afternoon: {
                label: { type: String },
                startTime: { type: String },
                activity: { type: activitySchema, default: null },
            },
            evening: {
                label: { type: String },
                startTime: { type: String },
                activity: { type: activitySchema, default: null },
            },
        },
    },
    { _id: false }
);

// Cost estimate Schema

const costEstimateSchema = new mongoose.Schema(
    {
        entryFees: {
            type: Number,
            default: 0
        },
        estimatedFood: {
            type: Number,
            default: 0
        },
        estimatedTransport: {
            type: Number,
            default: 0
        },
        grandTotal: {
            type: Number,
            default: 0
        },
        perPerson: {
            type: Number,
            default: 0
        },
        note: {
            type: String,
            default: ""
        },
    },
    { _id: false }
);

// Main trip Schema

const tripSchema = new mongoose.Schema(
    {
        userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", default: null },

        destination: {
            type: String,
            required: true
        },
        state: {
            type: String
        },
        startDate: {
            type: Date,
            required: true
        },
        endDate: {
            type: Date,
            required: true
        },
        numberOfDays: {
            type: Number,
            required: true
        },
        mood: {
            type: String,
            enum: ["relaxing", "adventure", "cultural", "romantic", "luxury", "hidden gems"],
        },
        budget: {
            type: String,
            enum: ["budget", "mid-range", "luxury"],
        },
        companions: {
            type: String,
            enum: ["solo", "couple", "family", "friends"],
        },
        categories: {
            type: [String],
            enum: ["heritage", "food", "adventure", "other"],
            default: ["heritage", "food", "adventure", "other"]
        },
        extraNotes: {
            type: String,
            default: ""
        },

        // -- Cities covered ----
        cities: [
            {
                city: { type: String },
                state: { type: String },
                fromDay: { type: Number },

            },
        ],

        // --AI generaed content
        tripTitle: {
            type: String,
            default: ""
        },
        tripIntro: {
            type: String,
            default: ""
        },
        closingNote: {
            type: String,
            default: ""
        },


        // --- Itinerary-----
        days: {
            type: [daySchema],
            default: []
        },
        costEstimate: {
            type: costEstimateSchema,
            default: () => ({})
        },
        totalPlaces: {
            type: Number,
            default: 0
        },


        // ----- Status ------------
        status: {
            type: String,
            enum: ["planning", "confirmed", "active", "completed", "cancelled"],
            default: "planning",
        },

        image: {
            type: String,
            default: ""
        },

        // ── Post-trip feedback ──────────────────────────────────────────────────
        overallRating: { type: Number, min: 1, max: 5, default: null },
        overallFeedback: { type: String, default: "" },

        // Daily mood pulses - filled during the trip 
        dailyMoods: [
            {
                day: {
                    type: Number
                },
                mood: {
                    type: String,
                    enum: ["happy", "neutral", "sad"]
                },
                note: {
                    type: String,
                    default: ""
                },
                date: {
                    type: Date
                },
            },
        ],

        generatedAt: { type: Date, default: Date.now },
        aiProseError: { type: String, default: "" },
    },
    { timestamps: true }
);

tripSchema.index({ userId: 1 });
tripSchema.index({ destination: 1 });
tripSchema.index({ status: 1 });
tripSchema.index({ startDate: 1 });

const Trip = mongoose.model("Trip", tripSchema);
export default Trip;