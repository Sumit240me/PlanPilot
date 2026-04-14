export const PLACES_PER_CITY = 40;

export const CATEGORY_TARGETS = {
    heritage: 10,
    food: 10,
    adventure: 10,
    other: 10
};

export const CATEGORY_CONFIG = {
    heritage: {
        target: 10,
        subCategories: ["museum", "monument", "fort", "palace", "temple", "church", "ruins", "other_heritage"],
        apiKinds: [
            "historic and protected sites",
            "monuments / landmarks",
            "history museum",
            "art museum",
            "castle",
            "fort",
            "palace",
            "ruins",
            "temple",
            "church",
            "monastery",
            "shrine",
            "spiritual center",
            "hindu temple",
            "mosque"
        ],
        slotPreference: ["morning", "afternoon"],
        moods: ["cultural", "spiritual", "hidden gems"],
        minDuration: 1.5,
        maxDuration: 4
    },
    food: {
        target: 10,
        subCategories: ["restaurant", "cafe", "street_food", "market_food", "bar", "dessert"],
        apiKinds: [
            "restaurant",
            "cafe",
            "coffee shop",
            "street food",
            "food market",
            "bar",
            "pub",
            "bakery",
            "dessert shop"
        ],
        slotPreference: ["afternoon", "evening"],
        moods: ["relaxing", "romantic", "cultural"],
        minDuration: 1,
        maxDuration: 2.5
    },
    adventure: {
        target: 10,
        subCategories: ["trekking", "water_sports", "climbing", "wildlife", "extreme_sports", "cycling"],
        apiKinds: [
            "adventure sports",
            "water sports",
            "ski area",
            "climbing spot",
            "national park",
            "nature preserve",
            "wildlife reserve",
            "waterfall",
            "mountain",
            "lake"
        ],
        slotPreference: ["morning"],
        moods: ["adventure", "hidden gems"],
        minDuration: 2,
        maxDuration: 6
    },
    other: {
        target: 10,
        subCategories: ["park", "night_view", "beach", "garden", "observation_deck", "shopping", "spa"],
        apiKinds: [
            "park",
            "botanical garden",
            "beach",
            "scenic lookout",
            "market",
            "shopping mall",
            "spa",
            "lighthouse",
            "viewpoint",
            "zoo",
            "aquarium"
        ],
        slotPreference: ["morning", "evening"],
        moods: ["relaxing", "romantic"],
        minDuration: 1,
        maxDuration: 3
    }
};

export const MIN_PLACES_PER_DAY = 4;

export const SLOTS_PER_DAY = {
    morning: { start: "08:00", maxDuration: 4 },
    afternoon: { start: "13:00", maxDuration: 3.5 },
    evening: { start: "18:00", maxDuration: 3 },
    night: { start: "21:00", maxDuration: 2 }
};

export const SLOT_ORDER = ["morning", "afternoon", "evening", "night"];

export const MOOD_CATEGORY_PREFERENCE = {
    adventure: { primary: ["adventure"], secondary: ["heritage", "other"], weights: { adventure: 0.5, heritage: 0.25, other: 0.25 } },
    cultural: { primary: ["heritage"], secondary: ["food", "other"], weights: { heritage: 0.5, food: 0.25, other: 0.25 } },
    romantic: { primary: ["food", "other"], secondary: ["heritage", "adventure"], weights: { food: 0.35, other: 0.35, heritage: 0.15, adventure: 0.15 } },
    relaxing: { primary: ["other", "food"], secondary: ["heritage"], weights: { other: 0.4, food: 0.35, heritage: 0.25 } },
    luxury: { primary: ["food", "heritage"], secondary: ["other", "adventure"], weights: { food: 0.35, heritage: 0.35, other: 0.20, adventure: 0.10 } },
    "hidden gems": { primary: ["adventure", "heritage"], secondary: ["other", "food"], weights: { adventure: 0.4, heritage: 0.3, other: 0.2, food: 0.1 } }
};

export function getCategoryDistributionForMood(mood) {
    const config = MOOD_CATEGORY_PREFERENCE[mood] || MOOD_CATEGORY_PREFERENCE.cultural;
    return config.weights;
}

export function getMinPlacesPerCategory(numDays) {
    const placesPerDay = MIN_PLACES_PER_DAY;
    const totalPlaces = placesPerDay * numDays;
    
    return {
        total: totalPlaces,
        perDay: placesPerDay,
        minPerCategory: Math.ceil(totalPlaces / 4)
    };
}
