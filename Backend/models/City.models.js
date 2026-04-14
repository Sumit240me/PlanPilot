import mongoose from "mongoose";

const coordinatesSchema = new mongoose.Schema({
    type: {
        type: String,
        enum: ["Point"],
        default: "Point"
    },
    coordinates: {
        type: [Number],
        required: true
    },
}, { _id: false });

const categoryCountSchema = new mongoose.Schema({
    heritage: { type: Number, default: 0 },
    food: { type: Number, default: 0 },
    adventure: { type: Number, default: 0 },
    other: { type: Number, default: 0 }
}, { _id: false });

const citySchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            unique: true,
            trim: true
        },
        state: {
            type: String,
            trim: true
        },
        country: {
            type: String,
            default: "India"
        },
        coordinates: {
            type: coordinatesSchema,
            required: true
        },
        tier: {
            type: Number,
            enum: [1, 2, 3],
            default: 2
        },
        status: {
            type: String,
            enum: ["pending", "processing", "populated", "failed"],
            default: "pending",
        },
        placeCount: {
            type: Number,
            default: 0
        },
        categoryCounts: {
            type: categoryCountSchema,
            default: () => ({})
        },
        lastPopulatedAt: {
            type: Date,
            default: null
        },
        errorMessage: {
            type: String,
            default: ""
        }

    }, { timestamps: true }
)

citySchema.methods.updateCategoryCounts = async function() {
    const counts = await this.constructor.aggregate([
        { $match: { name: this.name } },
        { $group: { 
            _id: '$category',
            count: { $sum: 1 }
        }}
    ]);
    
    const categoryCounts = { heritage: 0, food: 0, adventure: 0, other: 0 };
    counts.forEach(c => { categoryCounts[c._id] = c.count; });
    this.categoryCounts = categoryCounts;
    this.placeCount = counts.reduce((sum, c) => sum + c.count, 0);
};

citySchema.statics.getCityCategoryStats = async function(cityName) {
    return this.aggregate([
        { $match: { name: new RegExp(`^${cityName}$`, 'i') } },
        { $group: {
            _id: '$category',
            count: { $sum: 1 },
            avgPopularity: { $avg: '$popularityScore' }
        }}
    ]);
};

export const City = mongoose.model("City",citySchema);