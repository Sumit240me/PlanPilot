const categoryToMood = {
    heritage: ["cultural", "spiritual"],
    food: ["relaxing", "romantic", "cultural"],
    adventure: ["adventure", "hidden gems"],
    other: ["relaxing", "romantic", "hidden gems"]
};

const keywordToMood = {
    "fort": ["cultural", "adventure"],
    "palace": ["cultural", "luxury"],
    "desert": ["adventure", "hidden gems"],
    "waterfall": ["adventure", "relaxing"],
    "backwater": ["relaxing", "romantic"],
    "sunset": ["romantic"],
    "sunrise": ["relaxing"],
    "trek": ["adventure"],
    "safari": ["adventure", "luxury"],
    "cave": ["adventure", "hidden gems"],
    "ruins": ["cultural", "hidden gems"],
    "wildlife": ["adventure"],
    "lake": ["relaxing", "romantic"],
    "valley": ["adventure", "relaxing"],
    "hill": ["relaxing", "adventure"],
    "spa": ["luxury", "relaxing"],
    "resort": ["luxury", "romantic"],
    "street food": ["cultural"],
    "market": ["cultural"],
    "monastery": ["spiritual", "hidden gems"],
    "temple": ["spiritual", "cultural"],
    "ghat": ["spiritual", "cultural"],
    "garden": ["relaxing"],
    "lighthouse": ["romantic", "hidden gems"],
    "island": ["relaxing", "romantic", "hidden gems"],
    "beach": ["relaxing", "romantic"],
    "mountain": ["adventure", "relaxing"],
    "park": ["relaxing", "family"],
    "museum": ["cultural"],
    "restaurant": ["relaxing", "romantic"],
    "cafe": ["relaxing"],
    "viewpoint": ["romantic", "hidden gems"],
    "scenic": ["relaxing", "romantic"],
    "night": ["romantic", "hidden gems"]
};

const categoryToCompanion = {
    heritage: ["solo", "couple", "family", "friends"],
    food: ["solo", "couple", "friends", "family"],
    adventure: ["friends", "solo", "couple"],
    other: ["couple", "family", "friends", "solo"]
};

export { categoryToMood, keywordToMood, categoryToCompanion };
