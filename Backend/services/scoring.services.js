import { CATEGORY_CONFIG, MOOD_CATEGORY_PREFERENCE, getCategoryDistributionForMood } from "../config/categoryDistribution.js";

const WEIGHTS = {
    moodMatch: 30,
    rating: 20,
    popularity: 20,
    novelty: 15,
    categoryFit: 15
};

function shouldDisqualify(place, preferences) {
    const { budget } = preferences;

    const budgetOrder = { budget: 1, "mid-range": 2, luxury: 3 };
    const userLevel = budgetOrder[budget] || 1;
    const placeLevel = budgetOrder[place.costLevel] || 1;

    if (placeLevel - userLevel >= 2) return true;

    return false;
}

function scoreMoodMatch(place, mood) {
    if (!place.moodMatch || place.moodMatch.length === 0) {
        return WEIGHTS.moodMatch * 0.5;
    }

    if (place.moodMatch.includes(mood)) {
        return WEIGHTS.moodMatch;
    }

    const partialPairs = {
        romantic: ["relaxing"],
        adventure: ["hidden gems"],
        cultural: ["spiritual"],
        luxury: ["romantic"],
        relaxing: ["romantic"],
        "hidden gems": ["adventure", "cultural"],
    };

    const partials = partialPairs[mood] || [];
    const hasPartial = place.moodMatch.some((m) => partials.includes(m));
    if (hasPartial) return WEIGHTS.moodMatch * 0.5;

    return 0;
}

function scoreRating(place) {
    if (!place.avgRating || place.avgRating === 0) {
        return WEIGHTS.rating * 0.5;
    }
    return (place.avgRating / 5) * WEIGHTS.rating;
}

function scorePopularity(place) {
    const pop = Math.min(place.popularityScore || 0, 100);
    return (pop / 100) * WEIGHTS.popularity;
}

function scoreNovelty(place, visitedPlaceIds) {
    if (!visitedPlaceIds || visitedPlaceIds.length === 0) {
        return WEIGHTS.novelty;
    }
    const alreadyVisited = visitedPlaceIds.includes(place.placeId);
    return alreadyVisited ? 0 : WEIGHTS.novelty;
}

function scoreCategoryFit(place, mood) {
    const config = MOOD_CATEGORY_PREFERENCE[mood];
    if (!config) return WEIGHTS.categoryFit * 0.5;

    if (config.primary.includes(place.category)) {
        return WEIGHTS.categoryFit;
    }
    if (config.secondary.includes(place.category)) {
        return WEIGHTS.categoryFit * 0.5;
    }
    return WEIGHTS.categoryFit * 0.2;
}

function scoreSlotFit(place, slotName) {
    const config = CATEGORY_CONFIG[place.category];
    if (!config) return 5;

    if (config.slotPreference.includes(slotName)) {
        return 10;
    }
    return 3;
}

function applySkipPenalty(baseScore, place) {
    if (!place.skipCount || place.skipCount === 0) return baseScore;
    const penalty = Math.min(place.skipCount * 1, 6);
    return Math.max(baseScore - penalty, 0);
}

export function scorePlaces(places, preferences) {
    const { mood, budget, companions, visitedPlaceIds = [], categoryScores = {} } = preferences;

    const candidates = places.filter(
        (place) => !shouldDisqualify(place, { budget, companions, mood })
    );

    const scored = candidates.map((place) => {
        const moodScore = scoreMoodMatch(place, mood);
        const ratingScore = scoreRating(place);
        const popularityScore = scorePopularity(place);
        const noveltyScore = scoreNovelty(place, visitedPlaceIds);
        const categoryFitScore = scoreCategoryFit(place, mood);
        const categoryBonus = (categoryScores[place.category] || 0) / 5 * 10;

        const rawScore = moodScore + ratingScore + popularityScore + noveltyScore + categoryFitScore + categoryBonus;
        const finalScore = applySkipPenalty(rawScore, place);

        return {
            ...place.toObject ? place.toObject() : place,
            _score: {
                total: Math.round(finalScore * 10) / 10,
                breakdown: {
                    mood: Math.round(moodScore),
                    rating: Math.round(ratingScore),
                    popularity: Math.round(popularityScore),
                    novelty: Math.round(noveltyScore),
                    categoryFit: Math.round(categoryFitScore),
                    bonus: Math.round(categoryBonus)
                },
                slotScore: {}
            }
        };
    });

    for (const place of scored) {
        for (const slot of ["morning", "afternoon", "evening", "night"]) {
            place._score.slotScore[slot] = scoreSlotFit(place, slot);
        }
    }

    scored.sort((a, b) => b._score.total - a._score.total);
    return scored;
}

export function scorePlacesByCategory(placesByCategory, preferences, numDays) {
    const { mood } = preferences;
    const totalPlacesNeeded = numDays * 4;
    const placesPerCategory = Math.ceil(totalPlacesNeeded / 4);

    const scoredByCategory = {};
    const allScoredPlaces = [];

    for (const [category, places] of Object.entries(placesByCategory)) {
        const scored = scorePlaces(places, preferences);
        scoredByCategory[category] = scored.slice(0, placesPerCategory);
        allScoredPlaces.push(...scoredByCategory[category]);
    }

    allScoredPlaces.sort((a, b) => b._score.total - a._score.total);
    return { scoredByCategory, allScoredPlaces };
}

export function filterByTimeSlot(scoredPlaces, timeSlot) {
    return scoredPlaces.filter(
        (p) => p.bestTimeOfDay?.includes(timeSlot)
    );
}

export function filterByCategory(scoredPlaces, category) {
    return scoredPlaces.filter((p) => p.category === category);
}

export function getTopPlacesPerCategory(scoredPlaces, perCategory = 10) {
    const grouped = {};
    for (const place of scoredPlaces) {
        if (!grouped[place.category]) grouped[place.category] = [];
        if (grouped[place.category].length < perCategory) {
            grouped[place.category].push(place);
        }
    }
    return grouped;
}
