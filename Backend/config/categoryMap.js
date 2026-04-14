// config/categoryMap.js
// Maps raw API category strings from OpenTripMap and Foursquare
// into your 7 internal categories.
// Used by: transform.service.js

const categoryMap = {

  // ─── OpenTripMap "kinds" strings ───────────────────────────

  // Heritage
 "historic and protected sites": "heritage",
"monuments / landmarks":        "heritage",
"history museum":               "heritage",
"art museum":                   "heritage",
"castle":                       "heritage",
"fort":                         "heritage",
"palace":                       "heritage",
"ruins":                        "heritage",
"temple":                       "heritage",

// Nature
"park":                         "nature",
"national park":                "nature",
"nature preserve":              "nature",
"waterfall":                    "nature",
"lake":                         "nature",
"mountain":                     "nature",
"botanical garden":             "nature",
"wildlife reserve":             "nature",
"zoo":                          "nature",

// Beach
"beach":                        "beach",
"scenic lookout":               "beach",

// Spiritual
"spiritual center":             "spiritual",
"hindu temple":                 "spiritual",
"mosque":                       "spiritual",
"church":                       "spiritual",
"monastery":                    "spiritual",
"shrine":                       "spiritual",

// Adventure
"adventure sports":             "adventure",
"water sports":                 "adventure",
"ski area":                     "adventure",
"climbing spot":                "adventure",

// Food
"restaurant":                   "food",
"cafe":                         "food",
"coffee shop":                  "food",
"street food":                  "food",
"food market":                  "food",
"bar":                          "food",

// Shopping
"shopping mall":                "shopping",
"market":                       "shopping",
"flea market":                  "shopping",
};

export default categoryMap;