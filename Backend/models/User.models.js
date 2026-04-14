import mongoose from "mongoose";
import bcrypt from "bcrypt";


const categoryScoresSchema = new mongoose.Schema(
    {
        heritage: { type: Number, default: 0 },
        food: { type: Number, default: 0 },
        adventure: { type: Number, default: 0 },
        other: { type: Number, default: 0 },
    },
    { _id: false }
);

const categoryRatingCountSchema = new mongoose.Schema(
    {
        heritage: { type: Number, default: 0 },
        food: { type: Number, default: 0 },
        adventure: { type: Number, default: 0 },
        other: { type: Number, default: 0 },
    },
    { _id: false }
);

const userSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            trim: true,
        },
        email: {
            type: String,
            required: true
        },
        passwordHash: {
            type: String,
            required: true,
            select: false,
        },

        homeCity: {
            type: String,
            trim: true,
            default: "",
        },

        ageGroup: {
            type: String,
            enum: ["under-18", "18-24", "25-34", "35-44", "45-54", "55+", ""],
            default: "",
        },
        preferredCompanion: {
            type: String,
            enum: ["solo", "couple", "family", "friends", ""],
            default: "",
        },
        preferredBudget: {
            type: String,
            enum: ["budget", "mid-range", "luxury", ""],
            default: "",
        },
        preferredMoods: {
            type: [String],
            default: [],
        },

        categoryScores: {
            type: categoryScoresSchema,
            default: () => ({})
        },
        categoryRatingCount: {
            type: categoryRatingCountSchema,
            default: () => ({})
        },

        totalTrips: { type: Number, default: 0 },
        avgTripRating: { type: Number, default: 0 },
        totalTripRatings: { type: Number, default: 0 },

        visitedPlaceIds: {
            type: [String],
            default: [],
        },

        isActive: {
            type: Boolean,
            default: true
        },

        passwordResetToken: {
            type: String,
            select: false
        },
        passwordResetExpires: {
            type: Date,
            select: false
        },

        lastLoginAt: {
            type: Date,
            default: null
        },
    },
    {
        timestamps: true
    }
);

// Indexes

userSchema.index({ email: 1 });
userSchema.index({ homeCity: 1 });

// PRE-SAVE HOOK - hash password before saving
// Only runs on modifieing the hashed password

userSchema.pre("save", async function() {
    if (!this.isModified("passwordHash")) return;

    const salt = await bcrypt.genSalt(12);
    this.passwordHash = await bcrypt.hash(this.passwordHash, salt);
});

// Instance Method - compare password during login
userSchema.methods.comparePassword = async function (candidatePassword) {
    return bcrypt.compare(candidatePassword, this.passwordHash);
};

// Instance Method - update category scores after a trip is rated
userSchema.methods.updateCategoryScore = function (activityRatings) {
    const grouped = {};

    activityRatings.forEach(({ category, rating }) => {
        if (!category || !rating) return;
        if (!grouped[category]) grouped[category] = [];
        grouped[category].push(parseFloat(rating));
    });

    Object.entries(grouped).forEach(([category, ratings]) => {
        const newRatingsAvg = ratings.reduce((a, b) => a + b, 0) / ratings.length;
        const oldScore = this.categoryScores?.[category] || 0;
        const oldCount = this.categoryRatingCount?.[category] || 0;
        const newCount = oldCount + ratings.length;
        const newScore = parseFloat(
            ((oldScore * oldCount + newRatingsAvg * ratings.length) / newCount).toFixed(2)
        );

        if (!this.categoryScores) this.categoryScores = {};
        if (!this.categoryRatingCount) this.categoryRatingCount = {};
        this.categoryScores[category] = newScore;
        this.categoryRatingCount[category] = newCount;
    });

    return this;
};

// INSTANCE METHOD - update overall trip rating average

userSchema.methods.updateTripRating = function (newTripRating) {
    const oldCount = this.totalTripRatings || 0;
    const oldAvg = this.avgTripRating || 0;
    const newCount = oldCount + 1;
    const newAvg = parseFloat(
        ((oldAvg * oldCount + parseFloat(newTripRating)) / newCount).toFixed(2)
    );

    this.avgTripRating = newAvg;
    this.totalTripRatings = newCount;
    this.totalTrips = newCount;

    return this;
}

// INSTANCE METHOD - add visited places to history (deduplicated)

userSchema.methods.addVisitedPlaces = function (placeIds = []) {
    const existing = new Set(this.visitedPlaceIds);
    placeIds.forEach((id) => existing.add(id));
    this.visitedPlaceIds = [...existing];
    return this;
}

// static method - find users similar to a given preference profile
userSchema.static.findSimilarUsers = async function (preferences, excludeUserId, limit = 5) {
    const { preferredBudget, preferredCompanion } = preferences;

    const query = {
        isActive: true,
        totalTrips: { $gte: 1 }, 
    };
    // Match on budget and companion type
    if (preferredBudget) query.preferredBudget = preferredBudget;
    if (preferredCompanion) query.preferredCompanion = preferredCompanion;

    // Exclude the current user
    if (excludeUserId) query._id = { $ne: excludeUserId };

    return this.find(query)
        .sort({ avgTripRating: -1 })   // highest-rated travellers first
        .limit(limit)
        .select("visitedPlaceIds categoryScores avgTripRating")
        .lean();
};

const User = mongoose.model("User", userSchema);
export default User;