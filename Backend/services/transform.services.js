import { CATEGORY_CONFIG } from "../config/categoryDistribution.js"
import { categoryToMood, keywordToMood, categoryToCompanion } from '../config/moodMap.js'
import { categoryDuration, subCategoryDuration } from "../config/durationMap.js"

function uniqueArray(arr) {
    return [...new Set(arr)];
}

const NEW_CATEGORY_MAP = {
    heritage: ["heritage", "monument", "museum", "fort", "palace", "temple", "church", "ruins", "other_heritage"],
    food: ["food", "restaurant", "cafe", "street_food", "market_food", "bar", "dessert"],
    adventure: ["adventure", "trekking", "water_sports", "climbing", "wildlife", "extreme_sports", "nature"],
    other: ["other", "park", "night_view", "beach", "garden", "observation_deck", "shopping", "spa", "scenic"]
};

const API_KIND_TO_CATEGORY = {
    "historic and protected sites": "heritage",
    "monuments / landmarks": "heritage",
    "history museum": "heritage",
    "art museum": "heritage",
    "castle": "heritage",
    "fort": "heritage",
    "palace": "heritage",
    "ruins": "heritage",
    "temple": "heritage",
    "church": "heritage",
    "monastery": "heritage",
    "shrine": "heritage",
    "spiritual center": "heritage",
    "hindu temple": "heritage",
    "mosque": "heritage",
    "restaurant": "food",
    "cafe": "food",
    "coffee shop": "food",
    "street food": "food",
    "food market": "food",
    "bar": "food",
    "pub": "food",
    "bakery": "food",
    "dessert shop": "food",
    "adventure sports": "adventure",
    "water sports": "adventure",
    "ski area": "adventure",
    "climbing spot": "adventure",
    "national park": "adventure",
    "nature preserve": "adventure",
    "wildlife reserve": "adventure",
    "waterfall": "adventure",
    "mountain": "adventure",
    "lake": "adventure",
    "park": "other",
    "botanical garden": "other",
    "beach": "other",
    "scenic lookout": "other",
    "market": "other",
    "shopping mall": "other",
    "spa": "other",
    "lighthouse": "other",
    "viewpoint": "other",
    "zoo": "other",
    "aquarium": "other",
    "garden": "other"
};

const API_KIND_TO_SUBCATEGORY = {
    "history museum": "museum",
    "art museum": "museum",
    "monuments / landmarks": "monument",
    "historic and protected sites": "monument",
    "castle": "fort",
    "fort": "fort",
    "palace": "palace",
    "temple": "temple",
    "hindu temple": "temple",
    "church": "church",
    "church": "church",
    "ruins": "ruins",
    "monastery": "other_heritage",
    "shrine": "temple",
    "restaurant": "restaurant",
    "cafe": "cafe",
    "street food": "street_food",
    "food market": "market_food",
    "bar": "bar",
    "bakery": "cafe",
    "adventure sports": "extreme_sports",
    "water sports": "water_sports",
    "ski area": "trekking",
    "climbing spot": "climbing",
    "national park": "wildlife",
    "nature preserve": "wildlife",
    "wildlife reserve": "wildlife",
    "waterfall": "trekking",
    "mountain": "trekking",
    "lake": "trekking",
    "park": "park",
    "botanical garden": "park",
    "beach": "beach",
    "scenic lookout": "night_view",
    "viewpoint": "observation_deck",
    "lighthouse": "night_view",
    "market": "shopping",
    "shopping mall": "shopping",
    "spa": "spa",
    "zoo": "park",
    "aquarium": "park"
};

function resolveCategory(rawCategory) {
    if (!rawCategory) return "heritage";

    const lower = rawCategory.toLowerCase().trim();

    if (API_KIND_TO_CATEGORY[lower]) return API_KIND_TO_CATEGORY[lower];

    for (const [key, category] of Object.entries(API_KIND_TO_CATEGORY)) {
        if (lower.includes(key)) return category;
    }

    const subCategoryLower = lower.replace(/[^a-z]/g, "_");
    for (const [key, category] of Object.entries(API_KIND_TO_CATEGORY)) {
        if (key.includes(subCategoryLower) || subCategoryLower.includes(key.replace(/[^a-z]/g, "_"))) {
            return category;
        }
    }

    return "other";
}

function resolveSubCategory(rawCategory, placeName) {
    const lower = rawCategory.toLowerCase().trim();
    
    if (API_KIND_TO_SUBCATEGORY[lower]) return API_KIND_TO_SUBCATEGORY[lower];

    const nameLower = (placeName || "").toLowerCase();

    const subCategoryPatterns = {
        museum: ["museum", "gallery", "exhibition"],
        monument: ["monument", "memorial", "statue"],
        fort: ["fort", "fortress", "castle", "citadel"],
        palace: ["palace", " mahal"],
        temple: ["temple", "mandir", "shrine", "pagoda"],
        church: ["church", "cathedral", "chapel"],
        ruins: ["ruins", "ancient", "archaeological"],
        restaurant: ["restaurant", "dining", "eatery"],
        cafe: ["cafe", "coffee", "tea house"],
        street_food: ["street food", "chaat", "snack"],
        market_food: ["market", "bazaar", "food court"],
        bar: ["bar", "pub", "lounge"],
        beach: ["beach", "coast", "shore"],
        park: ["park", "garden", "zoo"],
        night_view: ["viewpoint", "sunset", "sunrise", "rooftop"],
        observation_deck: ["tower", "deck", "observation"],
        shopping: ["market", "mall", "shopping"],
        spa: ["spa", "wellness", "resort"],
        trekking: ["trek", "hike", "mountain", "trail"],
        water_sports: ["water sport", "boat", "kayak"],
        climbing: ["climb", "rock", "boulder"],
        wildlife: ["safari", "wildlife", "nature reserve", "national park"]
    };

    for (const [subCat, keywords] of Object.entries(subCategoryPatterns)) {
        for (const keyword of keywords) {
            if (nameLower.includes(keyword)) return subCat;
        }
    }

    return "other";
}

function resolveMoodMatch(category, placeName) {
    const moods = [...(categoryToMood[category] || [])];
    const nameLower = (placeName || "").toLowerCase();

    for (const [keyword, extraMoods] of Object.entries(keywordToMood)) {
        if (nameLower.includes(keyword)) {
            moods.push(...extraMoods);
        }
    }

    return uniqueArray(moods);
}

function resolveDuration(category, subCategory, placeName) {
    const nameLower = (placeName || "").toLowerCase();

    for (const [keyword, hours] of Object.entries(subCategoryDuration)) {
        if (nameLower.includes(keyword)) return hours;
    }

    const config = CATEGORY_CONFIG[category];
    if (config) {
        const { minDuration, maxDuration } = config;
        if (minDuration && maxDuration) {
            return (minDuration + maxDuration) / 2;
        }
    }

    return categoryDuration[category] || 2;
}

function resolveCostLevel(priceLevel) {
    if (priceLevel === undefined || priceLevel === null) return "budget";
    if (typeof priceLevel === "string") {
        const lower = priceLevel.toLowerCase();
        if (lower.includes("luxury") || lower.includes("expensive")) return "luxury";
        if (lower.includes("mid") || lower.includes("moderate")) return "mid-range";
        return "budget";
    }

    if (priceLevel >= 3) return "luxury";
    if (priceLevel >= 2) return "mid-range";
    return "budget";
}

function resolvePopularityScore(rating, ratingCount) {
    const r = parseFloat(rating) || 0;
    const c = parseFloat(ratingCount) || 0;

    const ratingWeight = (r / 5) * 60;
    const countWeight = Math.min(c / 5000, 1) * 40;

    return Math.round(ratingWeight + countWeight);
}

function resolveIndoorOutdoor(category, subCategory, placeName) {
    const indoorCategories = ["food"];
    const outdoorCategories = ["adventure", "other"];

    if (indoorCategories.includes(category)) return "indoor";
    if (outdoorCategories.includes(category)) return "outdoor";

    const nameLower = (placeName || "").toLowerCase();

    const outdoorKeywords = ["park", "beach", "garden", "mountain", "lake", "waterfall", "fort", "ruins", "viewpoint"];
    const indoorKeywords = ["museum", "gallery", "mall", "temple", "church", "palace", "restaurant"];

    for (const keyword of outdoorKeywords) {
        if (nameLower.includes(keyword)) return "outdoor";
    }
    for (const keyword of indoorKeywords) {
        if (nameLower.includes(keyword)) return "indoor";
    }

    return category === "heritage" ? "both" : "outdoor";
}

function resolveBestTimeOfDay(category, subCategory, placeName) {
    const nameLower = (placeName || "").toLowerCase();

    if (nameLower.includes("sunrise")) return ["morning"];
    if (nameLower.includes("sunset") || nameLower.includes("night view")) return ["evening"];
    if (nameLower.includes("ghat") || nameLower.includes("aarti")) return ["morning", "evening"];
    if (nameLower.includes("night") || nameLower.includes("nightlife")) return ["night"];

    const config = CATEGORY_CONFIG[category];
    if (config?.slotPreference) {
        return config.slotPreference;
    }

    const map = {
        heritage: ["morning", "afternoon"],
        food: ["afternoon", "evening"],
        adventure: ["morning"],
        other: ["morning", "evening"]
    };

    return map[category] || ["morning"];
}

function shouldDiscard(raw) {
    if (!raw.lat || !raw.lng) return true;

    if (raw.businessStatus === "CLOSED_PERMANENTLY") return true;
    if (!raw.name) return true;

    return false;
}

function transformPlace(raw, sourceApi, cityName, stateName, countryName) {
    if (shouldDiscard(raw)) return null;

    let rawCategory;
    if (sourceApi === "openTripMap") {
        rawCategory = (raw.kinds || "").split(",")[0].trim();
    } else if (sourceApi === "foursquare") {
        rawCategory = Array.isArray(raw.categories) && raw.categories.length
            ? raw.categories[0].name || ""
            : raw.category_name || "";
    } else {
        rawCategory = raw.category_name || raw.type || "";
    }

    const category = resolveCategory(rawCategory);
    const subCategory = resolveSubCategory(rawCategory, raw.name);

    const moodMatch = resolveMoodMatch(category, raw.name);
    const companionMatch = categoryToCompanion[category] || categoryToCompanion[subCategory] || [];
    const duration = resolveDuration(category, subCategory, raw.name);
    const costLevel = resolveCostLevel(raw.price_level ?? raw.price ?? null);
    const popularity = resolvePopularityScore(
        raw.rating || raw.rate || 0,
        raw.ratingCount || raw.user_ratings_total || 0
    );
    const indoorOutdoor = resolveIndoorOutdoor(category, subCategory, raw.name);
    const bestTimeOfDay = resolveBestTimeOfDay(category, subCategory, raw.name);

    let placeId;
    if (sourceApi === "foursquare") {
        placeId = raw.place_id || `fsq_${raw.fsq_id}`;
    } else if (sourceApi === "openTripMap") {
        placeId = `otm_${raw.xid}`;
    } else {
        placeId = raw.place_id || `osm_${raw.id || Date.now()}`;
    }

    const photos = sourceApi === "foursquare"
        ? (raw.photos || []).slice(0, 3)
        : raw.preview?.source
            ? [raw.preview.source]
            : raw.photos || [];

    return {
        name: raw.name.trim(),
        city: cityName,
        state: stateName,
        country: countryName || raw.country || stateName,
        placeId,
        sourceApi,
        coordinates: {
            type: "Point",
            coordinates: [parseFloat(raw.lng), parseFloat(raw.lat)],
        },
        category,
        subCategory,
        costLevel,
        entryFee: raw.entryFee || raw.entry_fee || 0,
        indoorOrOutdoor: indoorOutdoor,
        typicalDurationHours: duration,
        bestTimeOfDay,
        bestMonthsToVisit: raw.bestMonths || [],
        photos: photos.filter(Boolean),
        description: raw.description || raw.wikipedia_extracts?.text || "",
        tags: raw.tags || [],
        avgRating: parseFloat(raw.rating || raw.rate || 0),
        ratingCount: parseInt(raw.ratingCount || raw.user_ratings_total || 0),
        popularityScore: popularity,
        moodMatch,
        companionMatch,
        totalVisits: 0,
        skipCount: 0,
        lastUpdatedAt: new Date(),
    }
}

export { transformPlace };
