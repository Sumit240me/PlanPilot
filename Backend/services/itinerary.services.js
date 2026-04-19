import { Place } from "../models/Place.models.js";
import { City } from "../models/City.models.js";
import { scorePlaces, isFamousPlace } from "./scoring.services.js";
import {
    MIN_PLACES_PER_DAY,
    SLOTS_PER_DAY,
    SLOT_ORDER,
    CATEGORY_CONFIG
} from "../config/categoryDistribution.js";

const ALL_CATEGORIES = ["heritage", "food", "adventure", "other"];
const MIN_FOOD_PLACES_PER_TRIP = 2;

const CATEGORY_LABELS = {
    heritage: "Heritage & Culture",
    food: "Local Cuisine",
    adventure: "Adventure & Nature",
    other: "Scenic & Relaxation"
};

const SLOT_LABELS = {
    morning: "Morning",
    afternoon: "Afternoon",
    evening: "Evening",
    night: "Night"
};

const SLOT_CATEGORY_PREFERENCE = {
    morning: ["heritage", "adventure", "other"],
    afternoon: ["heritage", "food", "other"],
    evening: ["food", "other", "heritage"],
    night: ["food", "other"]
};

function normalizePlaceValue(value) {
    return (value || "").toString().toLowerCase().trim().replace(/\s+/g, " ");
}

function getRoundedCoordinate(value) {
    return typeof value === "number" && Number.isFinite(value) ? value.toFixed(4) : "";
}

function getPlaceCoordinates(place) {
    const coordinates = place?.coordinates?.coordinates;
    if (Array.isArray(coordinates) && coordinates.length >= 2) {
        return { lng: coordinates[0], lat: coordinates[1] };
    }

    if (typeof place?.lng === "number" && typeof place?.lat === "number") {
        return { lng: place.lng, lat: place.lat };
    }

    if (typeof place?.longitude === "number" && typeof place?.latitude === "number") {
        return { lng: place.longitude, lat: place.latitude };
    }

    return null;
}

function getPlaceIdentityKey(place) {
    if (!place) return "";

    const namePart = normalizePlaceValue(place.name);
    const fallbackId = normalizePlaceValue(place.placeId);

    return namePart || fallbackId;
}

function getPlaceQuality(place) {
    const baseScore = place?._score?.total || 0;
    const photoBonus = hasPhotos(place) ? 5 : 0;
    const descriptionBonus = Math.min((place?.description || "").length / 80, 5);
    const ratingBonus = (place?.avgRating || 0) * 2;
    const popularityBonus = (place?.popularityScore || 0) / 20;

    return baseScore + photoBonus + descriptionBonus + ratingBonus + popularityBonus;
}

function dedupePlacesByIdentity(places = []) {
    const uniquePlaces = new Map();

    for (const place of places) {
        const key = getPlaceIdentityKey(place);
        if (!key) continue;

        const existing = uniquePlaces.get(key);
        if (!existing || getPlaceQuality(place) > getPlaceQuality(existing)) {
            uniquePlaces.set(key, place);
        }
    }

    return [...uniquePlaces.values()];
}

function isPlaceSelectable(place, usedIds, usedPlaceKeys) {
    if (!place) return false;

    const placeKey = getPlaceIdentityKey(place);
    if (usedIds.has(place.placeId)) return false;
    if (placeKey && usedPlaceKeys.has(placeKey)) return false;

    return true;
}

function calcEndTime(startTime, durationHours) {
    const [startH, startM] = startTime.split(":").map(Number);
    const totalMinutes = startH * 60 + startM + Math.round(durationHours * 60);
    const endH = Math.floor(totalMinutes / 60) % 24;
    const endM = totalMinutes % 60;
    return `${String(endH).padStart(2, "0")}:${String(endM).padStart(2, "0")}`;
}

function buildActivity(place, slotName, arrivalTime) {
    const duration = place.typicalDurationHours || SLOTS_PER_DAY[slotName].maxDuration;
    const endTime = calcEndTime(arrivalTime, duration);

    return {
        placeId: place.placeId,
        name: place.name,
        city: place.city,
        state: place.state || "",
        category: place.category,
        subCategory: place.subCategory || "",
        description: place.description || "",
        indoorOrOutdoor: place.indoorOrOutdoor || "outdoor",
        arrivalTime,
        endTime,
        durationHours: duration,
        costLevel: place.costLevel || "budget",
        entryFee: place.entryFee || 0,
        photos: place.photos || [],
        tags: place.tags || [],
        moodMatch: place.moodMatch || [],
        avgRating: place.avgRating || 0,
        popularityScore: place.popularityScore || 0,
        coordinates: {
            lat: place.coordinates?.coordinates?.[1] || null,
            lng: place.coordinates?.coordinates?.[0] || null,
        },
        slot: slotName,
        slotLabel: SLOT_LABELS[slotName] || slotName,
        sourceApi: place.sourceApi || "unknown",
        scoringScore: place._score?.total || 0
    };
}

function calcDayCost(activities) {
    return activities.reduce((total, act) => total + (act.entryFee || 0), 0);
}

function calcDayHours(activities) {
    return parseFloat(
        activities.reduce((total, act) => total + (act.durationHours || 0), 0).toFixed(1)
    );
}

function generateDayTitle(activities) {
    const categories = [...new Set(activities.map(a => a.category))];
    const labels = categories.map(c => CATEGORY_LABELS[c] || c).slice(0, 2);
    return labels.join(" & ") || "A Day to Explore";
}

function generateDaySummary(activities, dayNumber, cityName) {
    const count = activities.length;
    const byCategory = {};
    activities.forEach(a => {
        byCategory[a.category] = (byCategory[a.category] || 0) + 1;
    });
    const totalHrs = calcDayHours(activities);
    
    const categorySummary = Object.entries(byCategory)
        .map(([cat, num]) => `${num} ${cat}`)
        .join(", ");

    return `Day ${dayNumber} — ${count} stops exploring ${categorySummary} in ${cityName}. About ${totalHrs} hours total.`;
}

function getSlotScore(place, slotName) {
    const baseScore = place._score?.slotScore?.[slotName] || 5;
    const categoryBonus = SLOT_CATEGORY_PREFERENCE[slotName]?.includes(place.category) ? 10 : 0;
    return baseScore + categoryBonus;
}

function hasPhotos(place) {
    return Array.isArray(place.photos) && place.photos.length > 0;
}

function rankCandidatesForSlot(candidates, slotName, preferPhotos = false, requirePhotos = false) {
    let pool = candidates;
    if (requirePhotos) {
        const withPhotos = candidates.filter(hasPhotos);
        if (withPhotos.length > 0) {
            pool = withPhotos;
        }
    }

    return [...pool].sort((a, b) => {
        const photoBonusA = preferPhotos && hasPhotos(a) ? 5 : 0;
        const photoBonusB = preferPhotos && hasPhotos(b) ? 5 : 0;
        
        const isFamousA = isFamousPlace(a) ? 50 : 0;
        const isFamousB = isFamousPlace(b) ? 50 : 0;
        
        const scoreA = (a._score?.total || 0) + getSlotScore(a, slotName) + photoBonusA + isFamousA;
        const scoreB = (b._score?.total || 0) + getSlotScore(b, slotName) + photoBonusB + isFamousB;
        return scoreB - scoreA;
    });
}

function getCategoryCounts(activities = []) {
    return activities.reduce((counts, activity) => {
        if (counts[activity.category] !== undefined) {
            counts[activity.category] += 1;
        }
        return counts;
    }, { heritage: 0, food: 0, adventure: 0, other: 0 });
}

function getBalancedPreferredOrder(slotName, categoryCounts) {
    const base = [...(SLOT_CATEGORY_PREFERENCE[slotName] || ALL_CATEGORIES)];
    const heritageCount = categoryCounts.heritage || 0;
    const nonHeritageCount = (categoryCounts.food || 0) + (categoryCounts.adventure || 0) + (categoryCounts.other || 0);

    if (heritageCount > nonHeritageCount) {
        return base.filter((cat) => cat !== "heritage").concat("heritage");
    }

    if (heritageCount < nonHeritageCount) {
        return ["heritage", ...base.filter((cat) => cat !== "heritage")];
    }

    return base;
}

function pickCategoryForSlot(slotName, usedCategoriesInDay, categoryCounts, availableCategories) {
    const preferredOrder = getBalancedPreferredOrder(slotName, categoryCounts);

    for (const cat of preferredOrder) {
        if (availableCategories.includes(cat) && !usedCategoriesInDay.has(cat)) {
            return cat;
        }
    }

    for (const cat of ALL_CATEGORIES) {
        if (availableCategories.includes(cat) && !usedCategoriesInDay.has(cat)) {
            return cat;
        }
    }

    let selected = null;
    let lowestCount = Infinity;
    const candidateOrder = [
        ...preferredOrder,
        ...ALL_CATEGORIES.filter((cat) => !preferredOrder.includes(cat))
    ];
    for (const cat of candidateOrder) {
        if (!availableCategories.includes(cat)) continue;
        const count = categoryCounts[cat] || 0;
        if (count < lowestCount) {
            lowestCount = count;
            selected = cat;
        }
    }

    return selected;
}

async function loadPlacesByCategory(cityName, preference) {
    const placesByCategory = {};

    for (const category of ALL_CATEGORIES) {
        const rawPlaces = await Place.find({
            city: { $regex: new RegExp(`^${cityName}$`, "i") },
            category
        }).lean();

        if (rawPlaces.length > 0) {
            const scored = dedupePlacesByIdentity(scorePlaces(rawPlaces, preference));
            placesByCategory[category] = scored;
        }
    }

    return placesByCategory;
}

async function loadAllScoredPlacesForCity(cityName, preference) {
    const places = await Place
        .find({ city: { $regex: new RegExp(`^${cityName}$`, "i") } })
        .lean();

    if (!places || places.length === 0) return [];

    return dedupePlacesByIdentity(scorePlaces(places, preference));
}

async function findNearbyCitiesInState(stateName, excludeCities = []) {
    const cities = await City
        .find({
            state: { $regex: new RegExp(`^${stateName}$`, "i") },
            status: "populated",
            name: { $nin: excludeCities },
        })
        .sort({ placeCount: -1 })
        .lean();

    return cities.map((c) => c.name);
}

async function getStateForCity(cityName) {
    const city = await City.findOne({ name: { $regex: new RegExp(`^${cityName}$`, "i") } }).lean();
    return city?.state || null;
}

function getAvailablePlace(pool, usedIds, usedPlaceKeys, preferredCategories = null) {
    const available = pool.filter((p) => isPlaceSelectable(p, usedIds, usedPlaceKeys));
    if (available.length === 0) return null;

    let candidates = available;
    
    if (preferredCategories && preferredCategories.length > 0) {
        const preferred = available.filter(p => preferredCategories.includes(p.category));
        if (preferred.length > 0) {
            candidates = preferred;
        }
    }

    candidates.sort((a, b) => {
        const scoreA = (a._score?.total || 0) + getSlotScore(a, "morning");
        const scoreB = (b._score?.total || 0) + getSlotScore(b, "morning");
        return scoreB - scoreA;
    });

    return candidates[0];
}

function pickBestForCategory(pool, usedIds, usedPlaceKeys, category, slotName, preferPhotos = false, requirePhotos = false) {
    const available = pool.filter((p) => 
        isPlaceSelectable(p, usedIds, usedPlaceKeys) && p.category === category
    );
    
    if (available.length === 0) return null;

    const ranked = rankCandidatesForSlot(available, slotName, preferPhotos, requirePhotos);
    return ranked[0];
}

function getCategoryForSlot(slotName, usedCategoriesInDay) {
    const preferred = SLOT_CATEGORY_PREFERENCE[slotName] || ALL_CATEGORIES;
    
    for (const cat of preferred) {
        if (!usedCategoriesInDay.has(cat)) {
            return cat;
        }
    }
    
    for (const cat of ALL_CATEGORIES) {
        if (!usedCategoriesInDay.has(cat)) {
            return cat;
        }
    }
    
    return null;
}

function buildOneDayWithAllCategories(pool, usedIds, usedPlaceKeys, slotOrder, targetCategories, options = {}) {
    const dayActivities = [];
    const daySlots = {};
    const usedCategoriesInDay = new Set();
    const categoryCounts = getCategoryCounts();
    const allowedCategories = new Set(
        targetCategories && targetCategories.length > 0 ? targetCategories : ALL_CATEGORIES
    );

    const famousFirst = options.dayNumber <= 2;
    const preferPhotos = options.dayNumber === 1;
    const requirePhotos = options.dayNumber === 1 && slotOrder[0] === "morning";

    for (const slotName of slotOrder) {
        const startTime = SLOTS_PER_DAY[slotName].start;
        
        let availableForSlot = pool.filter((p) => 
            isPlaceSelectable(p, usedIds, usedPlaceKeys) && allowedCategories.has(p.category)
        );

        if (availableForSlot.length === 0) {
            daySlots[slotName] = {
                label: slotName,
                startTime,
                activity: null,
                note: "No more places available"
            };
            continue;
        }

        let chosenPlace = null;
        const availableCategories = [...new Set(availableForSlot.map((p) => p.category))];
        const preferredCategory = pickCategoryForSlot(
            slotName,
            usedCategoriesInDay,
            categoryCounts,
            availableCategories
        );

        if (famousFirst && availableForSlot.some(p => isFamousPlace(p))) {
            const famousPlaces = availableForSlot.filter(p => isFamousPlace(p));
            if (famousPlaces.length > 0) {
                const rankedFamous = rankCandidatesForSlot(famousPlaces, slotName, preferPhotos, requirePhotos);
                if (rankedFamous.length > 0) {
                    chosenPlace = rankedFamous[0];
                }
            }
        }

        if (!chosenPlace && preferredCategory) {
            chosenPlace = pickBestForCategory(
                pool,
                usedIds,
                usedPlaceKeys,
                preferredCategory,
                slotName,
                preferPhotos,
                requirePhotos
            );
        }

        if (!chosenPlace) {
            const ranked = rankCandidatesForSlot(
                availableForSlot,
                slotName,
                preferPhotos,
                requirePhotos
            );
            chosenPlace = ranked[0];
        }

        if (chosenPlace) {
            usedIds.add(chosenPlace.placeId);
            const chosenKey = getPlaceIdentityKey(chosenPlace);
            if (chosenKey) {
                usedPlaceKeys.add(chosenKey);
            }
            const activity = buildActivity(chosenPlace, slotName, startTime);
            dayActivities.push(activity);
            daySlots[slotName] = { label: slotName, startTime, activity };
            usedCategoriesInDay.add(chosenPlace.category);
            if (categoryCounts[chosenPlace.category] !== undefined) {
                categoryCounts[chosenPlace.category] += 1;
            }
        } else {
            daySlots[slotName] = {
                label: slotName,
                startTime,
                activity: null
            };
        }
    }

    const sortedActivities = dayActivities.sort((a, b) => {
        const order = { morning: 0, afternoon: 1, evening: 2, night: 3 };
        return (order[a.slot] || 0) - (order[b.slot] || 0);
    });

    return { 
        slots: daySlots, 
        activities: sortedActivities,
        categoriesUsed: [...usedCategoriesInDay]
    };
}

function fillExtraSlots(pool, usedIds, usedPlaceKeys, dayActivities, slotOrder, neededPlaces, options = {}) {
    const filledActivities = [...dayActivities];
    const usedSlots = new Set(filledActivities.map(a => a.slot));
    const availableSlots = slotOrder.filter(s => !usedSlots.has(s));
    const usedCategoriesInDay = new Set(filledActivities.map(a => a.category));
    const categoryCounts = getCategoryCounts(filledActivities);
    const allowedCategories = options.allowedCategories && options.allowedCategories.length > 0
        ? new Set(options.allowedCategories)
        : null;

    for (let i = 0; i < neededPlaces && availableSlots.length > 0; i++) {
        const slotName = availableSlots.shift();
        const startTime = SLOTS_PER_DAY[slotName].start;
        
        const available = pool.filter((p) => 
            isPlaceSelectable(p, usedIds, usedPlaceKeys) && (!allowedCategories || allowedCategories.has(p.category))
        );
        if (available.length === 0) break;

        const availableCategories = [...new Set(available.map((p) => p.category))];
        const preferredCategory = pickCategoryForSlot(
            slotName,
            usedCategoriesInDay,
            categoryCounts,
            availableCategories
        );
        const preferPhotos = options.dayNumber === 1;
        const requirePhotos = options.dayNumber === 1 && slotName === "morning";
        let chosen = null;

        if (preferredCategory) {
            chosen = pickBestForCategory(
                pool,
                usedIds,
                usedPlaceKeys,
                preferredCategory,
                slotName,
                preferPhotos,
                requirePhotos
            );
        }

        if (!chosen) {
            const ranked = rankCandidatesForSlot(
                available,
                slotName,
                preferPhotos,
                requirePhotos
            );
            chosen = ranked[0];
        }
        if (chosen) {
            usedIds.add(chosen.placeId);
            const chosenKey = getPlaceIdentityKey(chosen);
            if (chosenKey) {
                usedPlaceKeys.add(chosenKey);
            }
            const activity = buildActivity(chosen, slotName, startTime);
            filledActivities.push(activity);
            usedCategoriesInDay.add(chosen.category);
            if (categoryCounts[chosen.category] !== undefined) {
                categoryCounts[chosen.category] += 1;
            }
        }
    }

    return filledActivities.sort((a, b) => {
        const order = { morning: 0, afternoon: 1, evening: 2, night: 3 };
        return (order[a.slot] || 0) - (order[b.slot] || 0);
    });
}

function getTargetCategories(userPreferences = [], mood = "") {
    if (userPreferences && userPreferences.length > 0) {
        return userPreferences;
    }
    return ALL_CATEGORIES;
}

function ensureMinFoodPlacesForTrip(pool, usedIds, usedPlaceKeys, activities, slotOrder) {
    const foodCount = activities.filter(a => a.category === "food").length;
    
    if (foodCount >= MIN_FOOD_PLACES_PER_TRIP) {
        return activities;
    }

    const activitiesCopy = [...activities];
    const neededFood = MIN_FOOD_PLACES_PER_TRIP - foodCount;
    
    const availableFood = pool.filter(p => 
        isPlaceSelectable(p, usedIds, usedPlaceKeys) && p.category === "food"
    );
    
    if (availableFood.length === 0) return activitiesCopy;

    const nonFoodIndices = activitiesCopy
        .map((a, i) => ({ ...a, index: i }))
        .filter(a => a.category !== "food")
        .map(a => a.index);

    let foodAdded = 0;
    for (let i = 0; i < nonFoodIndices.length && foodAdded < neededFood; i++) {
        const replaceIndex = nonFoodIndices[i];
        const currentActivity = activitiesCopy[replaceIndex];
        
        const slotName = currentActivity.slot;
        const startTime = SLOTS_PER_DAY[slotName].start;
        
        const rankedFood = rankCandidatesForSlot(availableFood, slotName, false, false);
        if (rankedFood.length > 0) {
            const newFoodPlace = rankedFood[0];
            usedIds.add(newFoodPlace.placeId);
            const newFoodKey = getPlaceIdentityKey(newFoodPlace);
            if (newFoodKey) {
                usedPlaceKeys.add(newFoodKey);
            }
            
            const newActivity = buildActivity(newFoodPlace, slotName, startTime);
            activitiesCopy[replaceIndex] = newActivity;
            foodAdded++;
        }
    }

    return activitiesCopy;
}

function validateCityHasAllCategories(placesByCategory, minPerCategory = 1) {
    const available = [];
    for (const [category, places] of Object.entries(placesByCategory)) {
        if (places && places.length >= minPerCategory) {
            available.push(category);
        }
    }
    return available;
}

async function buildItinerary(initialScoredPlaces, numberOfDays, preferences = {}) {
    const {
        mood = "",
        companions = "",
        destination = "",
        budget = "budget",
        userCategoryPreferences = []
    } = preferences;

    if (!initialScoredPlaces || initialScoredPlaces.length === 0) {
        return {
            destination,
            numberOfDays,
            cities: [],
            days: [],
            costEstimate: {},
            totalPlaces: 0,
            error: "No places available to build an itinerary",
            generated: new Date().toISOString(),
        };
    }

    const usedIds = new Set();
    const usedPlaceKeys = new Set();
    const primaryState = await getStateForCity(destination);
    let currentCity = destination;

    const nearbyCityNames = primaryState
        ? await findNearbyCitiesInState(primaryState, [destination])
        : [];
    const cityQueue = [...nearbyCityNames];

    const targetCategories = getTargetCategories(userCategoryPreferences, mood);
    const slotOrder = SLOT_ORDER;

    let currentPool = dedupePlacesByIdentity([...initialScoredPlaces]);

    const placesByCategory = {};
    for (const category of ALL_CATEGORIES) {
        placesByCategory[category] = currentPool.filter(p => p.category === category);
    }

    const days = [];
    const citiesUsed = [{ city: destination, state: primaryState || "" }];

    for (let dayNum = 1; dayNum <= numberOfDays; dayNum++) {
        const availableCategories = validateCityHasAllCategories(placesByCategory, 1);
        
        if (availableCategories.length < targetCategories.length && cityQueue.length > 0) {
            const nextCityName = cityQueue.shift();
            console.log(`[Itinerary] Adding places from ${nextCityName}`);
            
            const nextCityPlaces = await loadAllScoredPlacesForCity(nextCityName, {
                mood,
                budget,
                companions,
                visitedPlaceIds: [...usedIds]
            });

            currentPool = dedupePlacesByIdentity([...currentPool, ...nextCityPlaces]);

            for (const place of nextCityPlaces) {
                if (!placesByCategory[place.category]) {
                    placesByCategory[place.category] = [];
                }
                if (isPlaceSelectable(place, usedIds, usedPlaceKeys)) {
                    placesByCategory[place.category].push(place);
                }
            }

            citiesUsed.push({ city: nextCityName, state: primaryState || "", fromDay: dayNum });
        }

        const dayCategories = targetCategories.filter(cat => 
            placesByCategory[cat] && placesByCategory[cat].length > 0
        );

        if (dayCategories.length === 0) {
            console.warn(`[Itinerary] No more places available for day ${dayNum}`);
            break;
        }

        const { slots, activities, categoriesUsed } = buildOneDayWithAllCategories(
            currentPool,
            usedIds,
            usedPlaceKeys,
            slotOrder,
            dayCategories,
            { dayNumber: dayNum }
        );

        for (const activity of activities) {
            const place = currentPool.find(p => p.placeId === activity.placeId);
            if (place) {
                placesByCategory[place.category] = placesByCategory[place.category]?.filter(
                    p => p.placeId !== place.placeId
                ) || [];
            }
        }

        const neededExtra = Math.max(0, MIN_PLACES_PER_DAY - activities.length);
        const filledActivities = fillExtraSlots(
            currentPool,
            usedIds,
            usedPlaceKeys,
            activities,
            slotOrder,
            neededExtra,
            { dayNumber: dayNum, allowedCategories: dayCategories }
        );

        for (const activity of filledActivities) {
            if (!categoriesUsed.includes(activity.category)) {
                categoriesUsed.push(activity.category);
            }
        }

        const estimatedCost = calcDayCost(filledActivities);
        const totalHours = calcDayHours(filledActivities);
        const title = generateDayTitle(filledActivities);
        const summary = generateDaySummary(filledActivities, dayNum, destination);

        const isTravelDay = citiesUsed.length > 1 && 
            citiesUsed[citiesUsed.length - 1]?.fromDay === dayNum;

        const categoryBreakdown = {};
        for (const act of filledActivities) {
            categoryBreakdown[act.category] = (categoryBreakdown[act.category] || 0) + 1;
        }


        days.push({
            dayNumber: dayNum,
            city: citiesUsed[citiesUsed.length - 1]?.city || destination,
            state: primaryState || "",
            title,
            summary,
            estimatedCost,
            totalHours,
            isTravelDay,
            travelNote: isTravelDay
                ? `Travel day — exploring ${citiesUsed[citiesUsed.length - 1]?.city}`
                : null,
            slots,
            activities: filledActivities,
            placesVisited: filledActivities.length,
            categoryBreakdown,
            allCategoriesCovered: dayCategories.every(cat => 
                filledActivities.some(act => act.category === cat)
            )
        });
    }
    const allActivitiesFlat = days.flatMap((day) => day.activities);
    ensureMinFoodPlacesForTrip(currentPool, usedIds, usedPlaceKeys, allActivitiesFlat, slotOrder);

    let foodCount = 0;
    for (const day of days) {
        const updatedActivities = [];
        for (const activity of day.activities) {
            if (activity.category === "food") {
                if (foodCount < MIN_FOOD_PLACES_PER_TRIP) {
                    updatedActivities.push(activity);
                    foodCount++;
                } else {
                    const availableNonFood = currentPool.filter(p => 
                        isPlaceSelectable(p, usedIds, usedPlaceKeys) && p.category !== "food"
                    );
                    if (availableNonFood.length > 0) {
                        const replacement = rankCandidatesForSlot(availableNonFood, activity.slot, false, false)[0];
                        if (replacement) {
                            usedIds.add(replacement.placeId);
                            const replacementKey = getPlaceIdentityKey(replacement);
                            if (replacementKey) {
                                usedPlaceKeys.add(replacementKey);
                            }
                            const newActivity = buildActivity(replacement, activity.slot, SLOTS_PER_DAY[activity.slot].start);
                            updatedActivities.push(newActivity);
                        } else {
                            updatedActivities.push(activity);
                        }
                    } else {
                        updatedActivities.push(activity);
                    }
                }
            } else {
                updatedActivities.push(activity);
            }
        }
        day.activities = updatedActivities;
    }

    const totalPlaces = usedPlaceKeys.size || usedIds.size;
    const costEstimate = calculateTripCost(days);

    return {
        destination,
        state: primaryState || "",
        mood,
        companions,
        numberOfDays,
        cities: citiesUsed,
        days,
        costEstimate,
        totalPlaces,
        placesPerDay: days.length > 0 ? Math.round(totalPlaces / days.length) : 0,
        generatedAt: new Date().toISOString(),
    };
}

function calculateTripCost(days) {
    const entryFees = days.reduce((t, d) => t + d.estimatedCost, 0);
    const foodPerDay = 500;
    const transportPerDay = 300;
    const foodTotal = days.length * foodPerDay;
    const transportTotal = days.length * transportPerDay;
    const grandTotal = entryFees + foodTotal + transportTotal;

    return {
        entryFees,
        estimatedFood: foodTotal,
        estimatedTransport: transportTotal,
        grandTotal,
        perPerson: grandTotal,
        note: "Estimate includes entry fees, local food, and local transport. Excludes hotel and flights."
    };
}

async function loadScoredPlacesForCity(cityName, preference) {
    const rawPlaces = await Place
        .find({ city: { $regex: new RegExp(`^${cityName}$`, "i") } })
        .lean();

    if (!rawPlaces || rawPlaces.length === 0) return [];

    return scorePlaces(rawPlaces, preference);
}

export { buildItinerary, loadScoredPlacesForCity, loadPlacesByCategory };
