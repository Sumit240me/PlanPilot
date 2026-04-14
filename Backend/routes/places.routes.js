import express from "express";
import {
  getPlacesByCity,
  getPlaceById,
  searchPlaces,
  recordVisit,
  recordSkip,
  ratePlace,
} from "../controllers/places.controller.js";

const router = express.Router();

// Order matters — put /search before /:placeId
// otherwise Express matches "search" as a placeId
router.get("/search",             searchPlaces);
router.get("/city/:cityName",     getPlacesByCity);
router.get("/:placeId",           getPlaceById);
router.put("/:placeId/visit",     recordVisit);
router.put("/:placeId/skip",      recordSkip);
router.put("/:placeId/rate",      ratePlace);

export default router;