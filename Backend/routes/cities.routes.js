import express from "express";
import { getCityStatus, getAllCities, requestCity, getPlacesFromBothAPIs,getCityById } from "../controllers/cities.controller.js";

const router = express.Router();

router.get ("/:cityName/status", getCityStatus);
router.get ("/:cityName/places", getPlacesFromBothAPIs);
router.get ("/all",              getAllCities);
router.post("/request",          requestCity);
router.get("/getCityById" , getCityById)
router.get("/getCityById/:id",   getCityById);

export default router;