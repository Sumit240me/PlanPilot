import express from "express";

import { protect,optionalAuth } from "../middleware/auth.middleware.js";
import { generateTrip, getTripById,getTripsByUser,rateTrip,updateTripStatus ,getAllTrips, deleteTrip, saveTrip} from "../controllers/trips.controller.js";

const router = express.Router();

// Order matters - specific routes before parameterised routes

router.post("/generate", protect, generateTrip);
router.get("/user/:userId", protect, getTripsByUser);
router.get("/getAllTrip", getAllTrips);
router.get("/:tripId", getTripById);
router.put("/:tripId/rate", protect, rateTrip);
router.put("/:tripId/status", protect, updateTripStatus);
router.delete("/", protect, deleteTrip);
router.post("/save", protect, saveTrip);
    
export default router;