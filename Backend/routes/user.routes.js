import express from "express";
import {
    register,
    login,
    logout,
    getMe,
    updateProfile,
    changePassword,
    getMyTrips,getMyPreferences,
    updateScoresAfterTrip,
    addVisitedPlaces,
    deleteAccount
} from "../controllers/user.controller.js";

import { protect } from "../middleware/auth.middleware.js";

const router = express.Router();

// ---- Public routes - no token required
router.post("/register", register);
router.post("/login", login);
router.post("/logout", logout);

// --- Protected routes - valif JWT required ----------------

router.get("/me",   protect, getMe);
router.put("/me",   protect, updateProfile);
router.put("/me/password", protect, changePassword);
router.get("/me/trips",  protect, getMyTrips);
router.get("/me/preferences",  protect, getMyPreferences);
router.post("/me/update-score", protect, updateScoresAfterTrip);
router.post("/me/add-visited-places", protect, addVisitedPlaces);
router.delete("/me",  protect, deleteAccount);



export default router;