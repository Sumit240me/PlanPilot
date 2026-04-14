//PlanPilot Prose Engine
// Generate human-readable trip description entirely from MongoDB place data



// TRIP TITLE TEMPLATES
// One template is picked based on mood + companion combination
const TRIP_TITLE_TEMPLATES = {
    relaxing: {
        solo: "{days} Days of Solitude in {destination}",
        couple: "A Peaceful Escape to {destination}",
        family: "Slow Days and Warm Memories in {destination}",
        friends: "Laid-Back Days with Good Company in {destination}",
    },
    adventure: {
        solo: "Solo Adventure Through {destination}",
        couple: "An Adventurous Escape in {destination}",
        family: "Family Adventures Across {destination}",
        friends: "Epic {days}-Day Adventure in {destination}",
    },
    cultural: {
        solo: "A Deep Dive into {destination}",
        couple: "History and Heart in {destination}",
        family: "Stories and Stones — {destination} with Family",
        friends: "Culture and Laughter in {destination}",
    },
    romantic: {
        solo: "Finding Yourself in {destination}",
        couple: "A Romantic {days} Days in {destination}",
        family: "Love and Laughter in {destination}",
        friends: "Making Memories in {destination}",
    },
    luxury: {
        solo: "Indulgence and Solitude in {destination}",
        couple: "A Luxurious Escape to {destination}",
        family: "The Finest {days} Days in {destination}",
        friends: "Living the High Life in {destination}",
    },
    "hidden gems": {
        solo: "Off the Beaten Path in {destination}",
        couple: "Secret Corners of {destination}",
        family: "Discovering the Real {destination}",
        friends: "The Roads Less Travelled in {destination}",
    },
};


// ─────────────────────────────────────────────────────────────────────────────
// TRIP INTRO TEMPLATES
// One sentence sets the scene, second sentence sets expectations
// ─────────────────────────────────────────────────────────────────────────────
const TRIP_INTRO_TEMPLATES = {
    relaxing: [
        "{destination} has a way of slowing time down — and that is exactly what this trip is built around.",
        "Expect unhurried mornings, gentle afternoons, and evenings that drift into comfortable stillness.",
    ],
    adventure: [
        "{destination} is the kind of place that rewards those who push a little further.",
        "This itinerary is built for energy — every day has something that will make a good story.",
    ],
    cultural: [
        "{destination} carries centuries of history in its walls, streets, and rituals.",
        "This trip is designed to put you in the middle of it — not as a tourist, but as a curious traveller.",
    ],
    romantic: [
        "Few places set the stage for romance the way {destination} does.",
        "This itinerary is built around moments — the kind that stay with you long after you return home.",
    ],
    luxury: [
        "{destination} at its finest is something worth experiencing at least once.",
        "This itinerary skips nothing worth having — expect the best this city has to offer.",
    ],
    "hidden gems": [
        "Most people visit {destination} and see the surface — this trip goes deeper.",
        "Expect fewer crowds, more authentic moments, and the satisfaction of discovering what most tourists miss.",
    ],
};

// ─────────────────────────────────────────────────────────────────────────────
// DAY OPENER TEMPLATES
// Sets the tone for each day based on the activities in it
// ─────────────────────────────────────────────────────────────────────────────
const DAY_OPENER_TEMPLATES = {
    heritage: [
        "Today takes you through {city}'s most significant historical sites — places that have stood long before either of us and will stand long after.",
        "History is best understood in person, and today gives you plenty of opportunity to do exactly that in {city}.",
    ],
    nature: [
        "Today is about stepping outside the city noise and into something quieter and greener.",
        "Nature does not rush, and neither should you today — this day is built around {city}'s natural side.",
    ],
    adventure: [
        "Today has energy built into every slot — start early and keep moving.",
        "The best stories from any trip usually come from days like this one.",
    ],
    spiritual: [
        "Today moves at the pace of devotion — unhurried, reflective, and genuinely moving if you let it be.",
        "{city}'s spiritual side is one of its most honest faces — today you get to see it properly.",
    ],
    food: [
        "Today is unashamedly about eating well and eating local in {city}.",
        "The best way to understand a city is through its food — today gives you a proper education.",
    ],
    mixed: [
        "Today is one of those well-balanced days — a bit of everything that makes {city} worth visiting.",
        "No two slots today feel the same, which is exactly the point.",
    ],
};

// ─────────────────────────────────────────────────────────────────────────────
// HEADLINE TEMPLATES — per category
// Short punchy line that captures what is best about this place
// ─────────────────────────────────────────────────────────────────────────────
const HEADLINE_TEMPLATES = {
    heritage: [
        "One of {city}'s most important historical landmarks",
        "A window into {city}'s royal and ancient past",
        "Architecture that has survived centuries and still impresses",
        "The kind of place that reminds you history was lived, not just read",
    ],
    nature: [
        "Where {city} exhales — open skies and natural quiet",
        "The green side of {city} most visitors overlook",
        "A natural setting that earns its reputation",
        "Fresh air, open space, and genuine calm",
    ],
    beach: [
        "The water here is worth the trip on its own",
        "A beach that delivers exactly what a beach should",
        "Sand, water, and the particular freedom that comes with both",
        "One of the better stretches of coast in the region",
    ],
    spiritual: [
        "A place of genuine devotion — not just a tourist stop",
        "The kind of temple that stays with you after you leave",
        "Spiritual energy that is palpable even to those passing through",
        "One of {city}'s most sacred and atmospheric spaces",
    ],
    adventure: [
        "The most memorable thing you will do in {city}",
        "An experience that earns its place in the story of your trip",
        "Physical, exhilarating, and completely worth it",
        "Not for the faint-hearted — which is exactly why you should do it",
    ],
    food: [
        "Local food done with genuine pride",
        "The kind of meal that becomes a benchmark for everything after",
        "Authentic {city} flavours in a setting that matches",
        "Eat here and you will understand why locals keep coming back",
    ],
    shopping: [
        "The best market in {city} for genuine local crafts",
        "Where {city}'s artisans and traders have gathered for generations",
        "Browsing here is an experience in itself — buying is optional",
        "The kind of market that makes you wish you had packed a bigger bag",
    ],
};

// ─────────────────────────────────────────────────────────────────────────────
// DESCRIPTION TEMPLATES — per category
// 2-3 sentence description of what the place is and why it matters
// ─────────────────────────────────────────────────────────────────────────────
const DESCRIPTION_TEMPLATES = {
    heritage: [
        "{name} is one of those rare places where the scale of what you are looking at takes a moment to register. The craftsmanship on display here represents the ambition and aesthetic of an era that knew how to build things that last. Give yourself more time than you think you need.",
        "Walking through {name} gives you a sense of the lives that were lived here — the politics, the ceremony, the daily rhythms of a world that has since disappeared. The detail in the stonework alone justifies the visit. This is the kind of place photographs do not fully capture.",
        "{name} has stood here long enough to have seen the city around it change beyond recognition. What remains is both a monument and a reminder of what craftsmanship looked like before shortcuts became the norm. It deserves more than a quick pass.",
    ],
    nature: [
        "{name} is the kind of natural space that makes you realise how much time you spend indoors. The scale of it — the light, the air, the unobstructed horizon — is something you cannot manufacture or replicate. Arrive early to have it largely to yourself.",
        "There is a particular kind of quiet that comes with places like {name} — not silence exactly, but a filtering out of everything unnecessary. This is the spot on this itinerary where you are encouraged to slow down deliberately and stay longer than the schedule suggests.",
        "{name} has been drawing visitors for good reason. The natural setting here is genuinely impressive, and spending an hour or two here pays off in a way that no museum or monument can replicate. Come prepared to actually stop moving for a while.",
    ],
    beach: [
        "{name} delivers what a good beach should — water worth getting into, enough space to find your own patch, and a horizon that does its job properly. The light in the late afternoon here is worth planning around if your schedule allows it.",
        "Beaches earn reputations slowly and lose them quickly — {name} has held its for a reason. The water is clean, the atmosphere is relaxed, and the stretch of sand gives you enough room to choose your own level of engagement with the world. Come with no particular agenda.",
        "{name} is the kind of beach that does not need to oversell itself. It simply exists, and the water and the light do everything necessary. The evenings here are particularly good — the crowd thins and the colours shift in a way that is hard to describe accurately.",
    ],
    spiritual: [
        "{name} is a working place of devotion, not a monument — the rituals you will witness here are daily practice for the people performing them, not a show. That distinction matters and changes how you experience it. Quiet observation is both appropriate and rewarding.",
        "There is an atmosphere at {name} that is difficult to explain to someone who has not stood in it. The combination of architecture, incense, sound, and the visible sincerity of devotion creates something that stays with you after you leave. Come without expectations and you will leave with more than you anticipated.",
        "{name} has been a place of pilgrimage for longer than the city around it has existed in its current form. The devotion accumulated in a space like this over centuries is something you can feel even if you are not a believer. Dress appropriately and move quietly.",
    ],
    adventure: [
        "{name} offers the kind of experience you will be describing to people for years. The physical element is real — this is not a sanitised version of adventure — but the infrastructure is solid and the reward is proportional to the effort. Arrive early and go in without hesitation.",
        "What makes {name} worth doing is not just the activity itself but the perspective it gives you on the landscape around it. You will see parts of this region that the majority of visitors never encounter. The physical challenge is genuine but entirely manageable with a reasonable level of fitness.",
        "{name} is the point on the itinerary where the trip becomes a story rather than a schedule. The experience here is one that tends to mark a clear before and after in a trip. Commit to it fully and do not let the morning nerves talk you out of it.",
    ],
    food: [
        "{name} has been doing what it does long enough that the locals have strong opinions about it — which is always a good sign. The food here is rooted in regional tradition rather than adapted for outside tastes, and the difference is immediately apparent. Order what the table next to you is having.",
        "A meal at {name} is not just about the food — it is about understanding what this region actually eats when it is not performing for tourists. The flavours are assertive and the portions are generous. Come hungry and without a fixed idea of what you want.",
        "{name} earns its reputation through consistency and an absence of pretension. The kitchen here clearly knows what it is doing, and the result is food that tastes like somewhere specific rather than nowhere in particular. This is the meal of the trip.",
    ],
    shopping: [
        "{name} has the kind of energy that makes you want to slow down and look at everything properly. The crafts and textiles here are the real thing — made locally, priced honestly, and worth taking home. Set aside more time than you think you need and bring less certainty about what you are looking for.",
        "Shopping at {name} works best when you abandon the list and follow curiosity. The stalls and shops here cover a range of local craft traditions, and the vendors tend to know their products well. Bargaining is expected but aggressive negotiating is not — reasonable good humour on both sides produces the best results.",
        "{name} is the kind of market that gives you an honest cross-section of what this region makes and sells. The quality varies, as it does in any market, but the high end here is genuinely high. Go with time to spare and an eye for what is handmade versus manufactured.",
    ],
};

// ─────────────────────────────────────────────────────────────────────────────
// INSIDER TIP TEMPLATES — per category
// One practical, specific tip per place type
// ─────────────────────────────────────────────────────────────────────────────
const INSIDER_TIP_TEMPLATES = {
    heritage: [
        "Arrive at opening time — the first hour has significantly fewer visitors and the light is better for photographs.",
        "Hire a local guide at the entrance rather than going in cold — the context they provide doubles what you take away from the place.",
        "The less-visited sections of the site are usually more interesting than the main courtyard that everyone photographs. Ask a guard which part sees the fewest visitors.",
        "Skip the audio guide and simply walk slowly — the place communicates better in quiet observation than in narrated explanation.",
    ],
    nature: [
        "The best views are almost never at the main viewpoint — ask a local where people actually go when they want to see it properly.",
        "Early morning is not just better for the light — it is genuinely a different experience. The sounds and the air are distinct from midday visits.",
        "Carry more water than you think you need. The trail or terrain here dehydrates faster than it looks like it will.",
        "Give yourself permission to stop moving and stay in one spot for fifteen minutes. The nature here rewards patience.",
    ],
    beach: [
        "The hour before sunset is when this beach is at its best. The light changes quickly — be there fifteen minutes early.",
        "The shacks at the far end of the beach are consistently better than the ones near the entrance. Walk further.",
        "Go in the water in the morning — by afternoon the current and the crowd are both stronger.",
        "Leave your valuables at the hotel. The beach is best experienced without anything worth worrying about.",
    ],
    spiritual: [
        "Remove your footwear before you are asked to — it signals respect and you will be treated differently for it.",
        "The early morning ritual is open to visitors and is the most authentic version of what happens here. Arriving by 6am is worth the alarm.",
        "Photography inside the inner sanctum is generally not appropriate even when not explicitly prohibited. Put the phone away.",
        "Sit down somewhere quiet for ten minutes rather than moving straight through. The place rewards stillness.",
    ],
    adventure: [
        "Book the first slot of the day — the conditions are better, the guides are fresher, and you will have the experience largely to yourselves.",
        "Listen to the safety briefing properly — not because the activity is particularly dangerous but because knowing what to do lets you relax and enjoy it.",
        "Wear clothes you do not mind getting dirty or wet. Anything else is the wrong choice.",
        "The photographs can wait until after — do the thing first and experience it properly before turning on the camera.",
    ],
    food: [
        "Order the thali if it is on the menu — it is the fastest way to understand what the kitchen is genuinely good at.",
        "The busiest table in the room is usually the most reliable indicator of what to order. Look before you sit down.",
        "Come for lunch rather than dinner — the food is fresher, the kitchen is less rushed, and the prices are usually lower.",
        "Ask the staff what the special is before you open the menu. The answer tells you what arrived fresh that day.",
    ],
    shopping: [
        "Walk the full market before buying anything — the first stall is never the best one.",
        "Fixed price shops exist in most markets and are worth finding if you are not comfortable negotiating.",
        "Buy one thing that is genuinely local rather than five things that could have come from anywhere.",
        "Mornings are better for shopping than afternoons — the vendors are in better form and less tired of talking.",
    ],
};

// ─────────────────────────────────────────────────────────────────────────────
// CLOSING NOTE TEMPLATES
// Warm two-sentence sign-off for the whole trip
// ─────────────────────────────────────────────────────────────────────────────
const CLOSING_NOTE_TEMPLATES = {
    relaxing: [
        "The best thing about a trip like this one is how unnecessary it makes hurrying feel — carry that feeling home with you.",
        "{destination} will still be here when you are ready to come back, and you will want to.",
    ],
    adventure: [
        "A trip like this one does not really end when you get on the plane home — the best parts of it tend to resurface in the months after.",
        "Come back when you are ready for the next version of this.",
    ],
    cultural: [
        "You cannot fully understand a place in a few days, but you can begin to — and beginning properly is more valuable than a surface-level tour.",
        "{destination} will make more sense to you now than it did before you arrived. That is the point.",
    ],
    romantic: [
        "The best trips are the ones that give you something to talk about for years — this one has been built to do exactly that.",
        "Come back for your anniversary. {destination} holds up on a second visit.",
    ],
    luxury: [
        "Travelling well is not an indulgence — it is the difference between a trip and an experience.",
        "You chose {destination} for a reason, and the city rewarded that choice.",
    ],
    "hidden gems": [
        "The version of {destination} you experienced on this trip is the one most visitors never find — remember that.",
        "Come back and go further. There is always more to find in a city willing to show you its quieter self.",
    ],
};

// ─────────────────────────────────────────────────────────────────────────────
// TRAVEL DAY NOTES
// Used when the itinerary moves to a new city mid-trip
// ─────────────────────────────────────────────────────────────────────────────
const TRAVEL_DAY_NOTES = [
    "Today you move on — which is always a small bittersweet thing and always the right decision.",
    "The transition to {nextCity} is part of the experience — give yourself permission to enjoy the journey rather than treating it as dead time.",
    "Moving cities mid-trip is where the texture of a longer journey comes from. Today you gain that.",
];

// UTILITY - pick a random item from an array

function pick(arr) {
    if (!arr || arr.length === 0) return "";
    return arr[Math.floor(Math.random() * arr.length)];
}

// -- replace template variable with real values
function fill(template, vars = {}) {
    if (!template) return "";
    return template.replace(/\{(\w+)\}/g, (_, key) => vars[key] || "");
}

// detect the dominant category of a day's activites
// Used to pick the right day opener template

function getDominantCategory(activities) {
    if (!activities || activities.length === 0) return "mixed";

    const counts = {};
    activities.forEach((act) => {
        counts[act.category] = (counts[act.category] || 0) + 1;
    });

    // if one category has majority - use it
    const sorted = Object.entries(counts).sort((a, b) => b[1] - a[1]);
    if (sorted[0][1] >= 2) return sorted[0][0];

    return "mixed";
}

// GENERATE: trip title
function generateTripTitle(destination, mood, companions, numberOfDays) {
    const moodTemplates = TRIP_TITLE_TEMPLATES[mood] || TRIP_TITLE_TEMPLATES.cultural;
    const template = moodTemplates[companions] || moodTemplates.solo;

    return fill(template, { destination, days: numberOfDays });
}

// GENERATE:  trip intro
function generateTripIntro(destination, mood) {
    const template = TRIP_INTRO_TEMPLATES[mood] || TRIP_INTRO_TEMPLATES.cultural;
    return template
        .map((t) => fill(t, { destination }))
        .join(" ");
}


// GENERATE: day opener (2 sentences)
// Picks template based on dominant activity category for the day

function generateDayOpener(activities, city, isTravelDay, nextCity) {
    if (isTravelDay) {
        const template = pick(TRAVEL_DAY_NOTES);
        return fill(template, { nextCity: nextCity || city });
    }

    const dominant = getDominantCategory(activities);
    const templates = DAY_OPENER_TEMPLATES[dominant] || DAY_OPENER_TEMPLATES.heritage;
    const template = pick(templates);

    return fill(template, { city });
}

// GENERATE: activity headline
// one-line description of what is special about this place

function generateHeadline(activity) {
    const templates = HEADLINE_TEMPLATES[activity.category] || HEADLINE_TEMPLATES.heritage;
    const template = pick(templates);

    return fill(template, { city: activity.city, name: activity.name });
}

//GENERATE: activity description
// 2-3 sentence description build from category templates
// Enriched with real data: name, rating, tags, duration, entry fee

function generateDescription(activity) {
    const templates = DESCRIPTION_TEMPLATES[activity.category] || DESCRIPTION_TEMPLATES.heritage;
    const template = pick(templates)

    let description = fill(template, {
        name: activity.name,
        city: activity.city,
        category: activity.category,
    });

    // Enrich with real data 

    const facts = [];

    if (activity.avgRating && activity.avgRating >= 4.5) {
        facts.push(`Rated ${activity.avgRating} out of 5 visitors.`);
    }

    if (activity.durationHours) {
        facts.push(
            `Plan for about ${activity.durationHours} ${activity.durationHours === 1 ? "hour" : "hours"} here.`
        );
    }

    if (activity.entryFee > 0) {
        facts.push(`Entry is ₹${activity.entryFee} per person.`);
    } else if (activity.entryFee === 0) {
        facts.push("Entry is free.");
    }

    if (facts.length > 0) {
        // Add one fact - not all of them - keeps description tight

        description += " " + facts[0];
    }

    return description;
}


// GENERATE: insider tip
// Practical on-sentence tip based on category

function generateInsiderTip(activity) {
    const templates = INSIDER_TIP_TEMPLATES[activity.category] || INSIDER_TIP_TEMPLATES.heritage;
    let tip = pick(templates);

    // Override with time-of-day tip if we have real data
    if (activity.bestTimeOfDay?.includes("morning") && activity.slot !== "morning") {
        tip = `This place is actually best visited in the morning - the light and the crowd are both better.`
    }

    if (activity.bestTimeOfDay?.includes("evening") && activity.slot !== "evening") {
        tip = `Come back in the evening if you can - this place transforms after sunset.`;
    }

    // Add crowd tip for high-popularity places
    if (activity.popularityScore && activity.popularityScore >= 85) {
        tip += "Arrive at opening time to avoid the midday crowds.";
    }

    return tip;
}

// GENERATE: Closing note 

function generateClosingNote(destination, mood) {
    const templates = CLOSING_NOTE_TEMPLATES[mood] || CLOSING_NOTE_TEMPLATES.cultural;
    return templates
        .map((t) => fill(t, { destination }))
        .join(" ");
}

// MAIN FUNCTION - generateItineraryProse
// Drop-in replacement for openai.service.js generateItineraryProse
// Takes the same input, returns the same output shape

function generateItineraryProse(structuredItinerary, preferences) {
    const {
        mood = "cultural",
        companions = "solo",
        destination = "",
    } = preferences;

    if (!structuredItinerary || structuredItinerary.days?.length === 0) {
        return {
            ...structuredItinerary,
            tripTitle: `${structuredItinerary.numberOfDays} Days in ${destination}`,
            tripIntro: "",
            closingNote: "",
        };
    }

    console.log(
        `[ProseEngine] Generating prose for ${structuredItinerary.numberOfDays}-day` +
        `${mood} trip to ${destination}...`
    );

    // Generate trip-level prose
    const tripTitle = generateTripTitle(
        destination,
        mood,
        companions,
        structuredItinerary.numberOfDays
    );

    const tripIntro = generateTripIntro(destination, mood);
    const closingNote = generateClosingNote(destination, mood);

    // -- Generate per-day prose
    const enrichedDays = structuredItinerary.days.map((day, dayIndex) => {
        // Detect travel day - city changed from previous day
        // find the error
        const prevDay = structuredItinerary.days[dayIndex - 1];
        const isTravelDay = prevDay && prevDay.city !== day.city;
        const nextCity = day.city;

        // Generate day opener
        const dayOpener = generateDayOpener(
            day.activities,
            day.city,
            isTravelDay,
            nextCity
        );

        // Generate per-activity prose
        const enrichedActivities = day.activities.map((activity) => ({
            ...activity,
            headline: generateHeadline(activity),
            aiDescription: generateDescription(activity),
            insiderTip: generateInsiderTip(activity),
        }));

        // Re-build slots with enriched activities
        const enrichedSlots = { ...day.slots };
        ["morning", "afternoon", "evening"].forEach((slot) => {
            if (enrichedSlots[slot]?.activity) {
                const enriched = enrichedActivities.find(
                    (a) => a.slot === slot
                );
                if (enriched) {
                    enrichedSlots[slot] = {
                        ...enrichedSlots[slot],
                        activity: enriched,
                    };
                }
            }
        });

        return {
            ...day,
            dayOpener,
            activities: enrichedActivities,
            slots: enrichedSlots,
        };
    });

    console.log(
        `[ProseEngine] Done — generated prose for ${enrichedDays.length} days ` +
        `with ${enrichedDays.reduce((t, d) => t + d.activities.length, 0)} activities`
    );

    return {
        ...structuredItinerary,
        tripTitle,
        tripIntro,
        closingNote,
        days: enrichedDays,
    };
}

export { generateItineraryProse };