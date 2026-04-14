import { Place } from "../models/Place.models.js";
import { City } from "../models/City.models.js";
import { scorePlaces } from "./scoring.services.js";
import {
    MIN_PLACES_PER_DAY,
    SLOTS_PER_DAY,
    SLOT_ORDER,
    CATEGORY_CONFIG
} from "../config/categoryDistribution.js";

const ALL_CATEGORIES = ["heritage", "food", "adventure", "other"];

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

async function loadPlacesByCategory(cityName, preference) {
    const placesByCategory = {};

    for (const category of ALL_CATEGORIES) {
        const rawPlaces = await Place.find({
            city: { $regex: new RegExp(`^${cityName}$`, "i") },
            category
        }).lean();

        if (rawPlaces.length > 0) {
            const scored = scorePlaces(rawPlaces, preference);
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

    return scorePlaces(places, preference);
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

function getAvailablePlace(pool, usedIds, preferredCategories = null) {
    const available = pool.filter((p) => !usedIds.has(p.placeId));
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

function pickBestForCategory(pool, usedIds, category, preferredSlots = null) {
    const available = pool.filter((p) => 
        !usedIds.has(p.placeId) && p.category === category
    );
    
    if (available.length === 0) return null;

    available.sort((a, b) => (b._score?.total || 0) - (a._score?.total || 0));
    return available[0];
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

function buildOneDayWithAllCategories(pool, usedIds, slotOrder, targetCategories) {
    const dayActivities = [];
    const daySlots = {};
    const usedCategoriesInDay = new Set();
    const filledSlots = new Set();

    for (const category of targetCategories) {
        const place = pickBestForCategory(pool, usedIds, category);
        if (place) {
            usedIds.add(place.placeId);
            usedCategoriesInDay.add(category);
        }
    }

    for (const slotName of slotOrder) {
        const startTime = SLOTS_PER_DAY[slotName].start;
        
        const availableForSlot = pool.filter((p) => 
            !usedIds.has(p.placeId)
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
        const preferredCategory = getCategoryForSlot(slotName, usedCategoriesInDay);
        
        if (preferredCategory && !usedCategoriesInDay.has(preferredCategory)) {
            chosenPlace = pickBestForCategory(pool, usedIds, preferredCategory);
            if (chosenPlace) {
                usedCategoriesInDay.add(preferredCategory);
            }
        }

        if (!chosenPlace) {
            availableForSlot.sort((a, b) => {
                const scoreA = (a._score?.total || 0) + getSlotScore(a, slotName);
                const scoreB = (b._score?.total || 0) + getSlotScore(b, slotName);
                return scoreB - scoreA;
            });
            chosenPlace = availableForSlot[0];
        }

        if (chosenPlace) {
            usedIds.add(chosenPlace.placeId);
            const activity = buildActivity(chosenPlace, slotName, startTime);
            dayActivities.push(activity);
            daySlots[slotName] = { label: slotName, startTime, activity };
            filledSlots.add(slotName);
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

function fillExtraSlots(pool, usedIds, dayActivities, slotOrder, neededPlaces) {
    const filledActivities = [...dayActivities];
    const usedSlots = new Set(filledActivities.map(a => a.slot));
    const availableSlots = slotOrder.filter(s => !usedSlots.has(s));

    for (let i = 0; i < neededPlaces && availableSlots.length > 0; i++) {
        const slotName = availableSlots.shift();
        const startTime = SLOTS_PER_DAY[slotName].start;
        
        const available = pool.filter((p) => !usedIds.has(p.placeId));
        if (available.length === 0) break;

        available.sort((a, b) => {
            const scoreA = (a._score?.total || 0) + getSlotScore(a, slotName);
            const scoreB = (b._score?.total || 0) + getSlotScore(b, slotName);
            return scoreB - scoreA;
        });

        const chosen = available[0];
        if (chosen) {
            usedIds.add(chosen.placeId);
            const activity = buildActivity(chosen, slotName, startTime);
            filledActivities.push(activity);
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
    const primaryState = await getStateForCity(destination);
    let currentCity = destination;

    const nearbyCityNames = primaryState
        ? await findNearbyCitiesInState(primaryState, [destination])
        : [];
    const cityQueue = [...nearbyCityNames];

    const targetCategories = getTargetCategories(userCategoryPreferences, mood);
    const slotOrder = SLOT_ORDER;

    let currentPool = [...initialScoredPlaces];

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

            for (const place of nextCityPlaces) {
                if (!placesByCategory[place.category]) {
                    placesByCategory[place.category] = [];
                }
                if (!usedIds.has(place.placeId)) {
                    placesByCategory[place.category].push(place);
                }
            }

            currentPool = [...currentPool, ...nextCityPlaces];
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
            slotOrder,
            dayCategories
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
            activities,
            slotOrder,
            neededExtra
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

    const totalPlaces = [...usedIds].length;
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
