import mongoose from 'mongoose'

const coordinatesSchema = new mongoose.Schema({
    type: {
        type: String,
        enum: ["Point"],
        default: "Point",
        required: true
    },
    coordinates: {
        type: [Number],
        required: true
    }
}, { _id: false })

const placeSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            trim: true
        },
        city: {
            type: String,
            required: true,
            trim: true,
            index: true
        },
        state: {
            type: String,
            trim: true
        },
        country: {
            type: String,
            trim: true
        },
        placeId: {
            type: String,
            required: true,
            unique: true,
            index: true
        },
        sourceApi: {
            type: String,
            enum: ["foursquare", "openTripMap", "openstreetmap", "curated"],
            required: true
        },
        coordinates: {
            type: coordinatesSchema,
            required: true,
            index: "2dsphere"
        },

        category: {
            type: String,
            enum: ["heritage", "food", "adventure", "other"],
            required: true
        },
        subCategory: {
            type: String,
            default: null
        },

        costLevel: { type: String, enum: ["budget", "mid-range", "luxury"], default: "budget" },
        entryFee: { type: Number, default: 0 },
        indoorOrOutdoor: { type: String, enum: ["indoor", "outdoor", "both"], default: "outdoor" },
        typicalDurationHours: { type: Number, default: 2 },
        bestTimeOfDay: { type: [String], default: ["morning"] },
        bestMonthsToVisit: { type: [String], default: [] },
        photos: { type: [String], default: [] },
        description: { type: String, default: "" },
        tags: { type: [String], default: [] },

        avgRating: {
            type: Number,
            default: 0
        },
        ratingCount: {
            type: Number,
            default: 0
        },
        popularityScore: {
            type: Number,
            default: 0,
            index: true
        },
        moodMatch: {
            type: [String],
            default: []
        },
        companionMatch: {
            type: [String],
            default: []
        },
        totalVisits: {
            type: Number,
            default: 0
        },
        skipCount: {
            type: Number,
            default: 0
        },
        lastUpdatedAt: {
            type: Date,
            default: Date.now,
            index: true
        }

    }
    , { timestamps: true })

placeSchema.index({ city: 1, category: 1 });
placeSchema.index({ city: 1, category: 1, popularityScore: -1 });

export const Place = mongoose.model('Place', placeSchema)