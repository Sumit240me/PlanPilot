import mongoose from "mongoose";

const connectDB = async() => {
    try {
        await mongoose.connect(process.env.MONGODBURI + "/PlanPilot", {
            serverSelectionTimeoutMS: 10000,
        });
        console.log("MongoDB connected");
    } catch (error) {
        console.error("MongoDB connection failed:", error.message);
        throw error;
    }
}

export default connectDB;