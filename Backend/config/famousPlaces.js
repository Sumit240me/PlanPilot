// config/famousPlaces.js
// Curated famous landmarks, restaurants, parks, and adventure spots per city.
// These are ALWAYS injected into the pipeline — they won't be missed by API discovery.
// Format: raw place objects compatible with transformPlace()
//
// Each city has:
//   - 3-5 iconic landmarks (heritage/adventure/other)
//   - 2-3 top restaurants/cafes (food)
//   - 1-2 parks/nature spots (other/adventure)
//
// Coordinates: [lat, lng] — will be converted to GeoJSON in pipeline

const FAMOUS_PLACES = {

  // ═══════════════════════════════════════════════════════════════════════════
  // NEW YORK
  // ═══════════════════════════════════════════════════════════════════════════
  "New York": [
    // ICONIC LANDMARKS
    {
      name: "Statue of Liberty",
      lat: 40.6892, lng: -74.0445,
      category_name: "monument",
      rating: 4.7, user_ratings_total: 85000,
      description: "Iconic copper statue on Liberty Island, a gift from France and symbol of freedom. One of the most recognized landmarks in the world.",
      tags: ["iconic", "landmark", "must-visit", "history"],
      sourceApi: "curated",
      isFamous: true
    },
    {
      name: "Central Park",
      lat: 40.7829, lng: -73.9654,
      category_name: "park",
      rating: 4.8, user_ratings_total: 120000,
      description: "843-acre urban park in Manhattan with lakes, gardens, walking trails, and iconic landmarks like Bethesda Fountain and Bow Bridge.",
      tags: ["park", "nature", "iconic", "relaxing", "family"],
      sourceApi: "curated",
      isFamous: true
    },
    {
      name: "Times Square",
      lat: 40.7580, lng: -73.9855,
      category_name: "scenic lookout",
      rating: 4.5, user_ratings_total: 95000,
      description: "Iconic commercial intersection and entertainment center known for its bright neon lights, Broadway theaters, and vibrant energy.",
      tags: ["iconic", "nightlife", "entertainment", "must-visit"],
      sourceApi: "curated",
      isFamous: true
    },
    {
      name: "Brooklyn Bridge",
      lat: 40.7061, lng: -73.9969,
      category_name: "monument",
      rating: 4.7, user_ratings_total: 70000,
      description: "Historic suspension bridge connecting Manhattan and Brooklyn, offering stunning skyline views. Perfect for a scenic walk.",
      tags: ["iconic", "bridge", "views", "walking"],
      sourceApi: "curated",
      isFamous: true
    },
    {
      name: "Empire State Building",
      lat: 40.7484, lng: -73.9857,
      category_name: "scenic lookout",
      rating: 4.6, user_ratings_total: 60000,
      description: "102-story Art Deco skyscraper with observation decks offering panoramic views of New York City.",
      tags: ["iconic", "views", "architecture", "must-visit"],
      sourceApi: "curated",
      isFamous: true
    },

    // RESTAURANTS & FOOD
    {
      name: "Joe's Pizza",
      lat: 40.7306, lng: -73.9969,
      category_name: "restaurant",
      rating: 4.5, user_ratings_total: 15000,
      description: "Legendary Greenwich Village pizza joint serving classic New York-style slices since 1975. A NYC institution.",
      tags: ["pizza", "iconic", "budget-friendly", "street-food"],
      sourceApi: "curated",
      isFamous: true
    },
    {
      name: "Katz's Delicatessen",
      lat: 40.7223, lng: -73.9874,
      category_name: "restaurant",
      rating: 4.5, user_ratings_total: 25000,
      description: "Iconic deli on the Lower East Side since 1888, famous for hand-carved pastrami sandwiches and classic New York deli experience.",
      tags: ["deli", "iconic", "historic", "must-visit"],
      sourceApi: "curated",
      isFamous: true
    },
    {
      name: "Chelsea Market",
      lat: 40.7424, lng: -74.0061,
      category_name: "food market",
      rating: 4.5, user_ratings_total: 20000,
      description: "Upscale food hall in a converted factory building with artisanal food vendors, restaurants, and bakeries.",
      tags: ["food-hall", "market", "diverse-cuisine", "shopping"],
      sourceApi: "curated",
      isFamous: true
    },

    // PARKS & NATURE
    {
      name: "High Line Park",
      lat: 40.7480, lng: -74.0048,
      category_name: "park",
      rating: 4.7, user_ratings_total: 45000,
      description: "Elevated linear park built on a historic freight railroad above Manhattan's west side, featuring gardens, art, and city views.",
      tags: ["park", "unique", "walking", "art", "views"],
      sourceApi: "curated",
      isFamous: true
    },

    // ZOOS & WILDLIFE
    {
      name: "Bronx Zoo",
      lat: 40.8506, lng: -73.8769,
      category_name: "zoo",
      rating: 4.5, user_ratings_total: 30000,
      description: "One of the world's largest metropolitan zoos with 6,000+ animals across 265 acres. Congo Gorilla Forest and Wild Asia Monorail are highlights.",
      tags: ["zoo", "wildlife", "family", "nature", "animals"],
      sourceApi: "curated",
      isFamous: true
    },
    {
      name: "Central Park Zoo",
      lat: 40.7678, lng: -73.9718,
      category_name: "zoo",
      rating: 4.3, user_ratings_total: 15000,
      description: "Intimate zoo in the heart of Central Park with snow leopards, penguins, sea lions, and a tropical rainforest exhibit.",
      tags: ["zoo", "family", "central-park", "wildlife"],
      sourceApi: "curated",
      isFamous: true
    },
  ],

  // ═══════════════════════════════════════════════════════════════════════════
  // LONDON
  // ═══════════════════════════════════════════════════════════════════════════
  "London": [
    {
      name: "Big Ben & Houses of Parliament",
      lat: 51.5007, lng: -0.1246,
      category_name: "monument",
      rating: 4.7, user_ratings_total: 75000,
      description: "The iconic clock tower (Elizabeth Tower) at the Palace of Westminster, one of the most recognized symbols of London.",
      tags: ["iconic", "landmark", "must-visit", "architecture"],
      sourceApi: "curated",
      isFamous: true
    },
    {
      name: "Tower of London",
      lat: 51.5081, lng: -0.0759,
      category_name: "castle",
      rating: 4.6, user_ratings_total: 50000,
      description: "Historic royal palace and fortress housing the Crown Jewels, with 1000 years of history including royal prisoners and executions.",
      tags: ["historic", "castle", "must-visit", "royalty"],
      sourceApi: "curated",
      isFamous: true
    },
    {
      name: "Buckingham Palace",
      lat: 51.5014, lng: -0.1419,
      category_name: "palace",
      rating: 4.5, user_ratings_total: 60000,
      description: "Official London residence of the British monarch. Famous for the Changing of the Guard ceremony.",
      tags: ["iconic", "royalty", "must-visit", "ceremony"],
      sourceApi: "curated",
      isFamous: true
    },
    {
      name: "London Eye",
      lat: 51.5033, lng: -0.1196,
      category_name: "scenic lookout",
      rating: 4.4, user_ratings_total: 70000,
      description: "Giant Ferris wheel on the South Bank offering panoramic views of the Thames and London skyline. 135 meters tall.",
      tags: ["iconic", "views", "romantic", "must-visit"],
      sourceApi: "curated",
      isFamous: true
    },
    {
      name: "Tower Bridge",
      lat: 51.5055, lng: -0.0754,
      category_name: "monument",
      rating: 4.7, user_ratings_total: 55000,
      description: "Iconic Victorian drawbridge over the Thames with an exhibition in the high-level walkways and stunning views.",
      tags: ["iconic", "bridge", "views", "architecture"],
      sourceApi: "curated",
      isFamous: true
    },

    // RESTAURANTS & FOOD
    {
      name: "Borough Market",
      lat: 51.5055, lng: -0.0910,
      category_name: "food market",
      rating: 4.6, user_ratings_total: 35000,
      description: "London's most renowned food market with gourmet street food, artisan produce, and international cuisine since the 13th century.",
      tags: ["food-market", "street-food", "gourmet", "must-visit"],
      sourceApi: "curated",
      isFamous: true
    },
    {
      name: "Dishoom King's Cross",
      lat: 51.5354, lng: -0.1260,
      category_name: "restaurant",
      rating: 4.6, user_ratings_total: 18000,
      description: "Award-winning Bombay-style café serving exceptional Indian breakfast, lunch, and dinner in a beautifully designed space.",
      tags: ["indian", "popular", "brunch", "atmospheric"],
      sourceApi: "curated",
      isFamous: true
    },
    {
      name: "Sketch London",
      lat: 51.5125, lng: -0.1415,
      category_name: "restaurant",
      rating: 4.3, user_ratings_total: 12000,
      description: "Unique, art-filled restaurant and bar destination in Mayfair. Famous for its pink Gallery and afternoon tea.",
      tags: ["luxury", "unique", "instagram", "afternoon-tea"],
      sourceApi: "curated",
      isFamous: true
    },

    // PARKS & NATURE
    {
      name: "Hyde Park",
      lat: 51.5073, lng: -0.1657,
      category_name: "park",
      rating: 4.7, user_ratings_total: 50000,
      description: "One of London's largest and most famous royal parks with the Serpentine lake, Speaker's Corner, and beautiful gardens.",
      tags: ["park", "iconic", "relaxing", "boating", "family"],
      sourceApi: "curated",
      isFamous: true
    },

    // ZOOS & WILDLIFE
    {
      name: "ZSL London Zoo",
      lat: 51.5353, lng: -0.1534,
      category_name: "zoo",
      rating: 4.4, user_ratings_total: 25000,
      description: "The world's oldest scientific zoo (1828) in Regent's Park with 750+ species. Land of the Lions and Gorilla Kingdom are must-sees.",
      tags: ["zoo", "wildlife", "family", "historic", "animals"],
      sourceApi: "curated",
      isFamous: true
    },
    {
      name: "Richmond Park",
      lat: 51.4430, lng: -0.2745,
      category_name: "nature preserve",
      rating: 4.7, user_ratings_total: 20000,
      description: "London's largest royal park and National Nature Reserve with 630 free-roaming red and fallow deer. Stunning wildlife in the city.",
      tags: ["wildlife", "deer", "nature", "park", "cycling"],
      sourceApi: "curated",
      isFamous: true
    },
  ],

  // ═══════════════════════════════════════════════════════════════════════════
  // PARIS
  // ═══════════════════════════════════════════════════════════════════════════
  "Paris": [
    {
      name: "Eiffel Tower",
      lat: 48.8584, lng: 2.2945,
      category_name: "monument",
      rating: 4.7, user_ratings_total: 150000,
      description: "Iconic 330-meter iron tower built in 1889. The most visited paid monument in the world with stunning panoramic views of Paris.",
      tags: ["iconic", "landmark", "must-visit", "views", "romantic"],
      sourceApi: "curated",
      isFamous: true
    },
    {
      name: "Louvre Museum",
      lat: 48.8606, lng: 2.3376,
      category_name: "art museum",
      rating: 4.7, user_ratings_total: 120000,
      description: "World's largest and most visited art museum, home to the Mona Lisa and Venus de Milo. Over 380,000 objects in its collection.",
      tags: ["museum", "art", "iconic", "must-visit", "culture"],
      sourceApi: "curated",
      isFamous: true
    },
    {
      name: "Arc de Triomphe",
      lat: 48.8738, lng: 2.2950,
      category_name: "monument",
      rating: 4.6, user_ratings_total: 55000,
      description: "Iconic triumphal arch at the center of Place Charles de Gaulle, honoring those who fought for France. Offers rooftop city views.",
      tags: ["iconic", "monument", "views", "history"],
      sourceApi: "curated",
      isFamous: true
    },
    {
      name: "Notre-Dame Cathedral",
      lat: 48.8530, lng: 2.3499,
      category_name: "church",
      rating: 4.7, user_ratings_total: 80000,
      description: "Medieval Catholic cathedral on the Île de la Cité, a masterpiece of French Gothic architecture (under restoration).",
      tags: ["iconic", "cathedral", "gothic", "historic"],
      sourceApi: "curated",
      isFamous: true
    },
    {
      name: "Sacré-Cœur Basilica",
      lat: 48.8867, lng: 2.3431,
      category_name: "church",
      rating: 4.6, user_ratings_total: 50000,
      description: "White-domed basilica at the summit of Montmartre, offering panoramic views of Paris. Built in Romano-Byzantine style.",
      tags: ["iconic", "views", "church", "montmartre"],
      sourceApi: "curated",
      isFamous: true
    },

    // RESTAURANTS & FOOD
    {
      name: "Le Bouillon Chartier",
      lat: 48.8747, lng: 2.3454,
      category_name: "restaurant",
      rating: 4.3, user_ratings_total: 25000,
      description: "Historic Parisian brasserie since 1896 in a stunning Belle Époque dining hall. Affordable classic French cuisine.",
      tags: ["french", "historic", "budget-friendly", "atmospheric"],
      sourceApi: "curated",
      isFamous: true
    },
    {
      name: "Café de Flore",
      lat: 48.8540, lng: 2.3326,
      category_name: "cafe",
      rating: 4.2, user_ratings_total: 15000,
      description: "Legendary Parisian café in Saint-Germain-des-Prés, once frequented by Sartre and Hemingway. Classic French café culture.",
      tags: ["cafe", "iconic", "literary", "romantic"],
      sourceApi: "curated",
      isFamous: true
    },
    {
      name: "L'As du Fallafel",
      lat: 48.8570, lng: 2.3589,
      category_name: "street food",
      rating: 4.5, user_ratings_total: 12000,
      description: "The best falafel in Paris, located in the Marais district. Always a queue — and always worth the wait.",
      tags: ["street-food", "falafel", "budget-friendly", "must-visit"],
      sourceApi: "curated",
      isFamous: true
    },

    // PARKS & ADVENTURE
    {
      name: "Luxembourg Gardens",
      lat: 48.8462, lng: 2.3372,
      category_name: "park",
      rating: 4.7, user_ratings_total: 40000,
      description: "Beautiful Parisian park with formal gardens, fountains, a palace, and tree-lined promenades. Perfect for a relaxing afternoon.",
      tags: ["park", "garden", "romantic", "relaxing", "iconic"],
      sourceApi: "curated",
      isFamous: true
    },
    {
      name: "Seine River Cruise",
      lat: 48.8600, lng: 2.3200,
      category_name: "scenic lookout",
      rating: 4.6, user_ratings_total: 30000,
      description: "Scenic boat cruises along the Seine offering views of the Eiffel Tower, Notre-Dame, and other Parisian landmarks.",
      tags: ["cruise", "scenic", "romantic", "must-visit"],
      sourceApi: "curated",
      isFamous: true
    },

    // ZOOS & WILDLIFE
    {
      name: "Parc Zoologique de Paris",
      lat: 48.8333, lng: 2.4167,
      category_name: "zoo",
      rating: 4.3, user_ratings_total: 12000,
      description: "Modern zoo in the Bois de Vincennes with 5 biozones representing different ecosystems. Giant 65-meter artificial rock landmark.",
      tags: ["zoo", "wildlife", "family", "nature", "animals"],
      sourceApi: "curated",
      isFamous: true
    },
    {
      name: "Fontainebleau Forest",
      lat: 48.4050, lng: 2.6990,
      category_name: "national park",
      rating: 4.6, user_ratings_total: 10000,
      description: "25,000-hectare royal hunting forest near Paris. Famous for rock climbing, hiking trails, and stunning autumn colors.",
      tags: ["forest", "nature", "hiking", "climbing", "day-trip"],
      sourceApi: "curated",
      isFamous: true
    },
  ],

  // ═══════════════════════════════════════════════════════════════════════════
  // TOKYO
  // ═══════════════════════════════════════════════════════════════════════════
  "Tokyo": [
    {
      name: "Senso-ji Temple",
      lat: 35.7148, lng: 139.7967,
      category_name: "temple",
      rating: 4.6, user_ratings_total: 65000,
      description: "Tokyo's oldest and most famous Buddhist temple in Asakusa. Known for its massive red lantern gate (Kaminarimon).",
      tags: ["temple", "iconic", "must-visit", "historic"],
      sourceApi: "curated",
      isFamous: true
    },
    {
      name: "Shibuya Crossing",
      lat: 35.6595, lng: 139.7004,
      category_name: "scenic lookout",
      rating: 4.5, user_ratings_total: 50000,
      description: "The world's busiest pedestrian crossing where up to 3,000 people cross simultaneously. An iconic Tokyo experience.",
      tags: ["iconic", "must-visit", "urban", "photography"],
      sourceApi: "curated",
      isFamous: true
    },
    {
      name: "Tokyo Tower",
      lat: 35.6586, lng: 139.7454,
      category_name: "scenic lookout",
      rating: 4.5, user_ratings_total: 40000,
      description: "333-meter communications tower inspired by the Eiffel Tower, with observation decks offering stunning city views.",
      tags: ["iconic", "views", "landmark", "romantic"],
      sourceApi: "curated",
      isFamous: true
    },
    {
      name: "Meiji Jingu Shrine",
      lat: 35.6764, lng: 139.6993,
      category_name: "shrine",
      rating: 4.7, user_ratings_total: 35000,
      description: "Serene Shinto shrine surrounded by a 170-acre forest in the heart of Tokyo. Dedicated to Emperor Meiji.",
      tags: ["shrine", "spiritual", "nature", "peaceful"],
      sourceApi: "curated",
      isFamous: true
    },
    {
      name: "Akihabara Electric Town",
      lat: 35.7022, lng: 139.7744,
      category_name: "market",
      rating: 4.4, user_ratings_total: 30000,
      description: "Tokyo's anime, manga, and electronics hub. A colorful district full of themed cafes, arcades, and shops.",
      tags: ["shopping", "anime", "unique", "entertainment"],
      sourceApi: "curated",
      isFamous: true
    },

    // RESTAURANTS & FOOD
    {
      name: "Tsukiji Outer Market",
      lat: 35.6654, lng: 139.7707,
      category_name: "food market",
      rating: 4.6, user_ratings_total: 45000,
      description: "Famous outer market with fresh sushi, seafood, and Japanese street food stalls. The best sushi breakfast in the world.",
      tags: ["sushi", "seafood", "must-visit", "market", "breakfast"],
      sourceApi: "curated",
      isFamous: true
    },
    {
      name: "Ichiran Ramen Shibuya",
      lat: 35.6617, lng: 139.6986,
      category_name: "restaurant",
      rating: 4.5, user_ratings_total: 20000,
      description: "Iconic tonkotsu ramen chain with individual booth seating. Customize your ramen's richness, spice, and noodle firmness.",
      tags: ["ramen", "iconic", "budget-friendly", "must-visit"],
      sourceApi: "curated",
      isFamous: true
    },
    {
      name: "Gonpachi Nishi-Azabu",
      lat: 35.6530, lng: 139.7265,
      category_name: "restaurant",
      rating: 4.3, user_ratings_total: 12000,
      description: "The restaurant that inspired the Kill Bill fight scene. Traditional Japanese dining with soba, yakitori, and tempura.",
      tags: ["japanese", "atmospheric", "famous", "unique"],
      sourceApi: "curated",
      isFamous: true
    },

    // PARKS & NATURE
    {
      name: "Shinjuku Gyoen National Garden",
      lat: 35.6852, lng: 139.7100,
      category_name: "park",
      rating: 4.7, user_ratings_total: 30000,
      description: "Beautiful 144-acre garden combining Japanese, English, and French garden styles. Stunning cherry blossoms in spring.",
      tags: ["park", "garden", "cherry-blossom", "relaxing", "nature"],
      sourceApi: "curated",
      isFamous: true
    },

    // ZOOS & WILDLIFE
    {
      name: "Ueno Zoo",
      lat: 35.7164, lng: 139.7714,
      category_name: "zoo",
      rating: 4.4, user_ratings_total: 20000,
      description: "Japan's oldest zoo (1882) in Ueno Park with giant pandas, gorillas, and 400+ species. A beloved Tokyo family destination.",
      tags: ["zoo", "wildlife", "panda", "family", "historic"],
      sourceApi: "curated",
      isFamous: true
    },
    {
      name: "Mount Takao",
      lat: 35.6251, lng: 139.2437,
      category_name: "national park",
      rating: 4.6, user_ratings_total: 18000,
      description: "Sacred mountain just 50 minutes from central Tokyo. Multiple hiking trails through lush forest to a shrine at the summit.",
      tags: ["hiking", "nature", "mountain", "shrine", "day-trip"],
      sourceApi: "curated",
      isFamous: true
    },
  ],

  // ═══════════════════════════════════════════════════════════════════════════
  // DUBAI
  // ═══════════════════════════════════════════════════════════════════════════
  "Dubai": [
    {
      name: "Burj Khalifa",
      lat: 25.1972, lng: 55.2744,
      category_name: "scenic lookout",
      rating: 4.7, user_ratings_total: 100000,
      description: "The world's tallest building at 828 meters with observation decks on floors 124, 125, and 148. Iconic Dubai landmark.",
      tags: ["iconic", "views", "must-visit", "architecture", "record-breaking"],
      sourceApi: "curated",
      isFamous: true
    },
    {
      name: "Dubai Mall",
      lat: 25.1985, lng: 55.2796,
      category_name: "shopping mall",
      rating: 4.6, user_ratings_total: 90000,
      description: "World's largest mall with 1,200+ shops, an aquarium, ice rink, and the famous Dubai Fountain show outside.",
      tags: ["shopping", "entertainment", "family", "dining"],
      sourceApi: "curated",
      isFamous: true
    },
    {
      name: "Palm Jumeirah",
      lat: 25.1124, lng: 55.1390,
      category_name: "beach",
      rating: 4.5, user_ratings_total: 50000,
      description: "Man-made palm-shaped island with luxury resorts, the iconic Atlantis hotel, pristine beaches, and water sports.",
      tags: ["iconic", "beach", "luxury", "resort", "water-sports"],
      sourceApi: "curated",
      isFamous: true
    },
    {
      name: "Dubai Desert Safari",
      lat: 25.0500, lng: 55.4000,
      category_name: "adventure sports",
      rating: 4.6, user_ratings_total: 40000,
      description: "Thrilling desert 4x4 dune bashing, camel riding, sandboarding, and traditional BBQ dinner under the stars.",
      tags: ["adventure", "desert", "must-visit", "unique", "thrilling"],
      sourceApi: "curated",
      isFamous: true
    },
    {
      name: "Dubai Marina Walk",
      lat: 25.0770, lng: 55.1330,
      category_name: "scenic lookout",
      rating: 4.5, user_ratings_total: 35000,
      description: "Stunning waterfront promenade along an artificial canal lined with restaurants, towers, and yachts.",
      tags: ["waterfront", "dining", "views", "nightlife", "romantic"],
      sourceApi: "curated",
      isFamous: true
    },

    // RESTAURANTS & FOOD
    {
      name: "Al Ustad Special Kebab",
      lat: 25.2640, lng: 55.3048,
      category_name: "restaurant",
      rating: 4.5, user_ratings_total: 8000,
      description: "Legendary Iranian kebab house in old Dubai operating since 1978. Authentic Middle Eastern flavors at affordable prices.",
      tags: ["middle-eastern", "kebab", "iconic", "budget-friendly"],
      sourceApi: "curated",
      isFamous: true
    },
    {
      name: "Pierchic",
      lat: 25.0933, lng: 55.1425,
      category_name: "restaurant",
      rating: 4.4, user_ratings_total: 6000,
      description: "Overwater seafood restaurant on a pier with Arabian Gulf views. One of Dubai's most romantic dining experiences.",
      tags: ["seafood", "luxury", "romantic", "fine-dining", "views"],
      sourceApi: "curated",
      isFamous: true
    },

    // ADVENTURE & NATURE
    {
      name: "Dubai Miracle Garden",
      lat: 25.0594, lng: 55.2447,
      category_name: "botanical garden",
      rating: 4.5, user_ratings_total: 25000,
      description: "World's largest natural flower garden with 150 million flowers arranged in stunning shapes including a life-size A380 aircraft.",
      tags: ["garden", "unique", "colorful", "family", "instagram"],
      sourceApi: "curated",
      isFamous: true
    },

    // ZOOS & WILDLIFE
    {
      name: "Dubai Safari Park",
      lat: 25.0798, lng: 55.4225,
      category_name: "wildlife reserve",
      rating: 4.3, user_ratings_total: 12000,
      description: "119-hectare wildlife park with African, Asian, and Arabian village zones housing 3,000+ animals including rare species.",
      tags: ["wildlife", "safari", "zoo", "family", "animals"],
      sourceApi: "curated",
      isFamous: true
    },
    {
      name: "Dubai Aquarium & Underwater Zoo",
      lat: 25.1978, lng: 55.2796,
      category_name: "aquarium",
      rating: 4.5, user_ratings_total: 20000,
      description: "One of the world's largest suspended aquariums inside Dubai Mall with 33,000+ marine animals. Walk-through tunnel and cage snorkeling.",
      tags: ["aquarium", "marine-life", "family", "underwater", "unique"],
      sourceApi: "curated",
      isFamous: true
    },
  ],

  // ═══════════════════════════════════════════════════════════════════════════
  // SINGAPORE
  // ═══════════════════════════════════════════════════════════════════════════
  "Singapore": [
    {
      name: "Marina Bay Sands",
      lat: 1.2834, lng: 103.8607,
      category_name: "scenic lookout",
      rating: 4.6, user_ratings_total: 60000,
      description: "Iconic triple-tower hotel with a rooftop infinity pool and SkyPark observation deck offering panoramic city views.",
      tags: ["iconic", "luxury", "views", "must-visit", "architecture"],
      sourceApi: "curated",
      isFamous: true
    },
    {
      name: "Gardens by the Bay",
      lat: 1.2816, lng: 103.8636,
      category_name: "botanical garden",
      rating: 4.7, user_ratings_total: 70000,
      description: "Futuristic garden with Supertree Grove, Cloud Forest, and Flower Dome. Stunning light show every evening.",
      tags: ["iconic", "garden", "futuristic", "must-visit", "family"],
      sourceApi: "curated",
      isFamous: true
    },
    {
      name: "Merlion Park",
      lat: 1.2868, lng: 103.8545,
      category_name: "monument",
      rating: 4.3, user_ratings_total: 50000,
      description: "Singapore's iconic half-lion, half-fish statue spouting water into the bay — the symbol of the nation.",
      tags: ["iconic", "landmark", "must-visit", "photography"],
      sourceApi: "curated",
      isFamous: true
    },
    {
      name: "Sentosa Island",
      lat: 1.2494, lng: 103.8303,
      category_name: "beach",
      rating: 4.5, user_ratings_total: 45000,
      description: "Resort island with beaches, Universal Studios, Adventure Cove waterpark, and nature trails.",
      tags: ["beach", "theme-park", "adventure", "family", "resort"],
      sourceApi: "curated",
      isFamous: true
    },

    // RESTAURANTS & FOOD
    {
      name: "Maxwell Food Centre",
      lat: 1.2802, lng: 103.8448,
      category_name: "food market",
      rating: 4.5, user_ratings_total: 20000,
      description: "Famous hawker center home to Tian Tian Hainanese Chicken Rice — Singapore's most famous affordable dining experience.",
      tags: ["hawker", "street-food", "budget-friendly", "must-visit", "local"],
      sourceApi: "curated",
      isFamous: true
    },
    {
      name: "Lau Pa Sat Festival Market",
      lat: 1.2803, lng: 103.8505,
      category_name: "food market",
      rating: 4.3, user_ratings_total: 15000,
      description: "Historic Victorian cast-iron hawker center in the CBD. Famous for its satay street that opens in the evening.",
      tags: ["hawker", "satay", "historic", "evening", "atmospheric"],
      sourceApi: "curated",
      isFamous: true
    },
    {
      name: "JUMBO Seafood Clarke Quay",
      lat: 1.2906, lng: 103.8465,
      category_name: "restaurant",
      rating: 4.4, user_ratings_total: 10000,
      description: "Singapore's famous chili crab restaurant at Clarke Quay riverside. The must-eat dish of Singapore.",
      tags: ["chili-crab", "seafood", "iconic", "waterfront"],
      sourceApi: "curated",
      isFamous: true
    },

    // PARKS & NATURE
    {
      name: "Singapore Botanic Gardens",
      lat: 1.3138, lng: 103.8159,
      category_name: "botanical garden",
      rating: 4.7, user_ratings_total: 25000,
      description: "UNESCO World Heritage tropical garden with the National Orchid Garden housing over 1,000 orchid species.",
      tags: ["garden", "unesco", "nature", "relaxing", "orchids"],
      sourceApi: "curated",
      isFamous: true
    },

    // ZOOS & WILDLIFE
    {
      name: "Singapore Zoo",
      lat: 1.4043, lng: 103.7930,
      category_name: "zoo",
      rating: 4.7, user_ratings_total: 35000,
      description: "Award-winning 'open concept' zoo with 300+ species in naturalistic habitats. Orangutan breakfast experience is world-famous.",
      tags: ["zoo", "wildlife", "family", "orangutan", "must-visit"],
      sourceApi: "curated",
      isFamous: true
    },
    {
      name: "Night Safari Singapore",
      lat: 1.4024, lng: 103.7890,
      category_name: "wildlife reserve",
      rating: 4.6, user_ratings_total: 28000,
      description: "World's first nocturnal zoo with 900+ animals from 100 species in naturalistic nighttime habitats. Tram and walking trails.",
      tags: ["wildlife", "night", "unique", "family", "adventure"],
      sourceApi: "curated",
      isFamous: true
    },
    {
      name: "Sungei Buloh Wetland Reserve",
      lat: 1.4472, lng: 103.7283,
      category_name: "nature preserve",
      rating: 4.5, user_ratings_total: 8000,
      description: "ASEAN Heritage Park — a mangrove wetland sanctuary with migratory birds, mudskippers, monitor lizards, and crocodiles.",
      tags: ["nature", "wetland", "birds", "wildlife", "hiking"],
      sourceApi: "curated",
      isFamous: true
    },
  ],

  // ═══════════════════════════════════════════════════════════════════════════
  // BARCELONA
  // ═══════════════════════════════════════════════════════════════════════════
  "Barcelona": [
    {
      name: "Sagrada Família",
      lat: 41.4036, lng: 2.1744,
      category_name: "church",
      rating: 4.8, user_ratings_total: 100000,
      description: "Gaudí's unfinished masterpiece basilica, under construction since 1882. The most visited monument in Spain.",
      tags: ["iconic", "gaudi", "architecture", "must-visit"],
      sourceApi: "curated",
      isFamous: true
    },
    {
      name: "Park Güell",
      lat: 41.4145, lng: 2.1527,
      category_name: "park",
      rating: 4.5, user_ratings_total: 70000,
      description: "Whimsical public park designed by Gaudí with colorful mosaic benches, gingerbread-like gatehouses, and stunning city views.",
      tags: ["gaudi", "park", "architecture", "views", "must-visit"],
      sourceApi: "curated",
      isFamous: true
    },
    {
      name: "La Rambla",
      lat: 41.3809, lng: 2.1734,
      category_name: "scenic lookout",
      rating: 4.3, user_ratings_total: 60000,
      description: "Barcelona's most famous tree-lined promenade stretching from Plaça de Catalunya to the waterfront. Artists, cafes, and energy.",
      tags: ["iconic", "promenade", "shopping", "nightlife"],
      sourceApi: "curated",
      isFamous: true
    },
    {
      name: "Casa Batlló",
      lat: 41.3916, lng: 2.1650,
      category_name: "palace",
      rating: 4.6, user_ratings_total: 40000,
      description: "Gaudí's stunning Art Nouveau masterpiece on Passeig de Gràcia. Known as the 'House of Bones' for its skeletal façade.",
      tags: ["gaudi", "architecture", "art-nouveau", "must-visit"],
      sourceApi: "curated",
      isFamous: true
    },
    {
      name: "Barceloneta Beach",
      lat: 41.3762, lng: 2.1920,
      category_name: "beach",
      rating: 4.3, user_ratings_total: 45000,
      description: "Barcelona's most popular beach — golden sand, seafood restaurants, and lively atmosphere right next to the old city.",
      tags: ["beach", "relaxing", "seafood", "water-sports"],
      sourceApi: "curated",
      isFamous: true
    },

    // RESTAURANTS & FOOD
    {
      name: "La Boqueria Market",
      lat: 41.3816, lng: 2.1716,
      category_name: "food market",
      rating: 4.5, user_ratings_total: 50000,
      description: "Barcelona's most famous public market on La Rambla. Fresh juices, jamón ibérico, seafood, and tapas since 1836.",
      tags: ["market", "food", "must-visit", "tapas", "fresh"],
      sourceApi: "curated",
      isFamous: true
    },
    {
      name: "Cal Pep",
      lat: 41.3835, lng: 2.1821,
      category_name: "restaurant",
      rating: 4.5, user_ratings_total: 8000,
      description: "Legendary tapas bar near the waterfront. Counter seating, fresh seafood, and some of the best tapas in Barcelona.",
      tags: ["tapas", "seafood", "iconic", "must-visit"],
      sourceApi: "curated",
      isFamous: true
    },

    // ADVENTURE
    {
      name: "Montjuïc Hill & Castle",
      lat: 41.3633, lng: 2.1653,
      category_name: "fort",
      rating: 4.4, user_ratings_total: 25000,
      description: "Hilltop fortress with panoramic harbor views, accessible by cable car. Home to museums, gardens, and the Olympic stadium.",
      tags: ["castle", "views", "cable-car", "gardens", "adventure"],
      sourceApi: "curated",
      isFamous: true
    },

    // ZOOS & WILDLIFE
    {
      name: "Barcelona Zoo",
      lat: 41.3874, lng: 2.1895,
      category_name: "zoo",
      rating: 4.2, user_ratings_total: 15000,
      description: "Historic zoo in Ciutadella Park with 400+ species including Borneo orangutans, Komodo dragons, and dolphins.",
      tags: ["zoo", "wildlife", "family", "animals", "park"],
      sourceApi: "curated",
      isFamous: true
    },
    {
      name: "Montserrat Natural Park",
      lat: 41.5933, lng: 1.8365,
      category_name: "national park",
      rating: 4.7, user_ratings_total: 22000,
      description: "Dramatic serrated mountain range near Barcelona with a Benedictine monastery, hiking trails, and stunning rock formations.",
      tags: ["mountain", "nature", "monastery", "hiking", "day-trip"],
      sourceApi: "curated",
      isFamous: true
    },
  ],

  // ═══════════════════════════════════════════════════════════════════════════
  // AMSTERDAM
  // ═══════════════════════════════════════════════════════════════════════════
  "Amsterdam": [
    {
      name: "Anne Frank House",
      lat: 52.3752, lng: 4.8840,
      category_name: "history museum",
      rating: 4.7, user_ratings_total: 50000,
      description: "The preserved hiding place where Anne Frank wrote her diary during WWII. One of the most moving museums in the world.",
      tags: ["museum", "historic", "must-visit", "moving"],
      sourceApi: "curated",
      isFamous: true
    },
    {
      name: "Rijksmuseum",
      lat: 52.3600, lng: 4.8852,
      category_name: "art museum",
      rating: 4.7, user_ratings_total: 55000,
      description: "The Netherlands' national museum housing Rembrandt's Night Watch, Vermeer's Milkmaid, and 8,000 other masterpieces.",
      tags: ["museum", "art", "must-visit", "dutch-masters"],
      sourceApi: "curated",
      isFamous: true
    },
    {
      name: "Van Gogh Museum",
      lat: 52.3584, lng: 4.8811,
      category_name: "art museum",
      rating: 4.7, user_ratings_total: 45000,
      description: "World's largest collection of Van Gogh artwork with 200+ paintings, 500 drawings, and 700 letters.",
      tags: ["museum", "art", "van-gogh", "must-visit"],
      sourceApi: "curated",
      isFamous: true
    },
    {
      name: "Dam Square",
      lat: 52.3731, lng: 4.8932,
      category_name: "scenic lookout",
      rating: 4.3, user_ratings_total: 35000,
      description: "Amsterdam's central square with the Royal Palace, National Monument, and Madame Tussauds. The heart of the city.",
      tags: ["iconic", "square", "shopping", "historic"],
      sourceApi: "curated",
      isFamous: true
    },

    // RESTAURANTS & FOOD
    {
      name: "Albert Cuyp Market",
      lat: 52.3558, lng: 4.8944,
      category_name: "food market",
      rating: 4.4, user_ratings_total: 15000,
      description: "Amsterdam's largest and most popular street market with Dutch stroopwafels, herring, and international food stalls.",
      tags: ["market", "street-food", "stroopwafels", "local"],
      sourceApi: "curated",
      isFamous: true
    },
    {
      name: "The Pancake Bakery",
      lat: 52.3757, lng: 4.8840,
      category_name: "restaurant",
      rating: 4.3, user_ratings_total: 8000,
      description: "Famous pancake house in a 17th-century warehouse on the Prinsengracht canal. Over 75 varieties of Dutch pancakes.",
      tags: ["pancakes", "dutch", "iconic", "canal-side"],
      sourceApi: "curated",
      isFamous: true
    },

    // PARKS & NATURE
    {
      name: "Vondelpark",
      lat: 52.3579, lng: 4.8686,
      category_name: "park",
      rating: 4.6, user_ratings_total: 30000,
      description: "Amsterdam's most famous park with open-air theater, rose garden, playgrounds, and café terraces. A green oasis in the city.",
      tags: ["park", "relaxing", "cycling", "picnic", "family"],
      sourceApi: "curated",
      isFamous: true
    },
    {
      name: "Amsterdam Canal Ring Cruise",
      lat: 52.3702, lng: 4.8952,
      category_name: "scenic lookout",
      rating: 4.5, user_ratings_total: 20000,
      description: "UNESCO World Heritage canal cruise through Amsterdam's 17th-century canal ring. The best way to see the city.",
      tags: ["cruise", "canal", "scenic", "romantic", "unesco"],
      sourceApi: "curated",
      isFamous: true
    },
  ],

  // ═══════════════════════════════════════════════════════════════════════════
  // ROME
  // ═══════════════════════════════════════════════════════════════════════════
  "Rome": [
    {
      name: "Colosseum",
      lat: 41.8902, lng: 12.4922,
      category_name: "ruins",
      rating: 4.7, user_ratings_total: 130000,
      description: "Ancient Roman amphitheater that once hosted gladiatorial games for 50,000 spectators. One of the New Seven Wonders of the World.",
      tags: ["iconic", "ancient", "must-visit", "history", "wonder"],
      sourceApi: "curated",
      isFamous: true
    },
    {
      name: "Vatican City & St. Peter's Basilica",
      lat: 41.9022, lng: 12.4539,
      category_name: "church",
      rating: 4.8, user_ratings_total: 100000,
      description: "The smallest country in the world housing St. Peter's Basilica, the Sistine Chapel, and Vatican Museums.",
      tags: ["iconic", "spiritual", "art", "must-visit", "michelangelo"],
      sourceApi: "curated",
      isFamous: true
    },
    {
      name: "Trevi Fountain",
      lat: 41.9009, lng: 12.4833,
      category_name: "monument",
      rating: 4.6, user_ratings_total: 75000,
      description: "The largest Baroque fountain in Rome. Throw a coin to ensure your return to Rome — legend says it works.",
      tags: ["iconic", "fountain", "romantic", "must-visit", "wish"],
      sourceApi: "curated",
      isFamous: true
    },
    {
      name: "Pantheon",
      lat: 41.8986, lng: 12.4769,
      category_name: "temple",
      rating: 4.7, user_ratings_total: 65000,
      description: "Best-preserved ancient Roman building with the world's largest unreinforced concrete dome. Built in 125 AD.",
      tags: ["ancient", "architecture", "must-visit", "dome"],
      sourceApi: "curated",
      isFamous: true
    },
    {
      name: "Roman Forum",
      lat: 41.8925, lng: 12.4853,
      category_name: "ruins",
      rating: 4.5, user_ratings_total: 55000,
      description: "The political, commercial, and religious center of ancient Rome. Walk the same paths as Julius Caesar.",
      tags: ["ancient", "ruins", "history", "must-visit"],
      sourceApi: "curated",
      isFamous: true
    },

    // RESTAURANTS & FOOD
    {
      name: "Da Enzo al 29",
      lat: 41.8879, lng: 12.4739,
      category_name: "restaurant",
      rating: 4.6, user_ratings_total: 12000,
      description: "Beloved Trastevere trattoria serving authentic Roman pasta — cacio e pepe, carbonara, and amatriciana at their finest.",
      tags: ["italian", "pasta", "authentic", "must-visit", "trastevere"],
      sourceApi: "curated",
      isFamous: true
    },
    {
      name: "Pizzeria Da Baffetto",
      lat: 41.8986, lng: 12.4703,
      category_name: "restaurant",
      rating: 4.3, user_ratings_total: 10000,
      description: "Legendary Roman pizzeria since 1959. Thin, crispy Roman-style pizza in a no-frills atmosphere near Piazza Navona.",
      tags: ["pizza", "iconic", "budget-friendly", "historic"],
      sourceApi: "curated",
      isFamous: true
    },
    {
      name: "Roscioli Caffè Pasticceria",
      lat: 41.8948, lng: 12.4737,
      category_name: "cafe",
      rating: 4.4, user_ratings_total: 5000,
      description: "Renowned Roman bakery-café known for exceptional pastries, cornetti, and Italian coffee in the historic center.",
      tags: ["cafe", "pastry", "breakfast", "italian-coffee"],
      sourceApi: "curated",
      isFamous: true
    },

    // PARKS & NATURE
    {
      name: "Villa Borghese Gardens",
      lat: 41.9142, lng: 12.4852,
      category_name: "park",
      rating: 4.6, user_ratings_total: 30000,
      description: "Rome's central park with the Borghese Gallery, lake with rowboats, panoramic terraces, and shaded walking paths.",
      tags: ["park", "garden", "gallery", "romantic", "relaxing"],
      sourceApi: "curated",
      isFamous: true
    },
  ],

  // ═══════════════════════════════════════════════════════════════════════════
  // BANGKOK
  // ═══════════════════════════════════════════════════════════════════════════
  "Bangkok": [
    {
      name: "Grand Palace",
      lat: 13.7500, lng: 100.4914,
      category_name: "palace",
      rating: 4.6, user_ratings_total: 70000,
      description: "Thailand's most sacred and iconic landmark complex housing the Emerald Buddha (Wat Phra Kaew). Bangkok's #1 attraction.",
      tags: ["iconic", "palace", "temple", "must-visit", "royalty"],
      sourceApi: "curated",
      isFamous: true
    },
    {
      name: "Wat Pho (Temple of the Reclining Buddha)",
      lat: 13.7463, lng: 100.4930,
      category_name: "temple",
      rating: 4.6, user_ratings_total: 50000,
      description: "Temple housing a 46-meter gold-leaf reclining Buddha and the largest collection of Buddha images in Thailand.",
      tags: ["temple", "buddha", "must-visit", "massage"],
      sourceApi: "curated",
      isFamous: true
    },
    {
      name: "Wat Arun (Temple of Dawn)",
      lat: 13.7437, lng: 100.4888,
      category_name: "temple",
      rating: 4.6, user_ratings_total: 40000,
      description: "Stunning riverside temple with a colorful 79-meter central prang decorated with porcelain. Beautiful at sunrise and sunset.",
      tags: ["temple", "iconic", "riverside", "photography"],
      sourceApi: "curated",
      isFamous: true
    },
    {
      name: "Chatuchak Weekend Market",
      lat: 13.7999, lng: 100.5506,
      category_name: "market",
      rating: 4.5, user_ratings_total: 45000,
      description: "One of the world's largest weekend markets with 15,000+ stalls selling everything from street food to vintage clothing.",
      tags: ["market", "shopping", "street-food", "must-visit"],
      sourceApi: "curated",
      isFamous: true
    },

    // RESTAURANTS & FOOD
    {
      name: "Yaowarat (Chinatown) Street Food",
      lat: 13.7377, lng: 100.5087,
      category_name: "street food",
      rating: 4.6, user_ratings_total: 25000,
      description: "Bangkok's legendary Chinatown food street — pad thai, mango sticky rice, grilled seafood, and noodles under neon signs.",
      tags: ["street-food", "chinatown", "must-visit", "night-food"],
      sourceApi: "curated",
      isFamous: true
    },
    {
      name: "Jay Fai",
      lat: 13.7542, lng: 100.5040,
      category_name: "restaurant",
      rating: 4.5, user_ratings_total: 15000,
      description: "Michelin-starred street food stall famous for crab omelette and drunken noodles. The queen of Thai street food wears ski goggles while cooking.",
      tags: ["michelin", "street-food", "iconic", "must-visit"],
      sourceApi: "curated",
      isFamous: true
    },
    {
      name: "Som Tam Nua",
      lat: 13.7454, lng: 100.5353,
      category_name: "restaurant",
      rating: 4.4, user_ratings_total: 10000,
      description: "Famous restaurant serving the best papaya salad (som tam) and fried chicken in Bangkok. Always packed — arrive early.",
      tags: ["thai", "papaya-salad", "popular", "budget-friendly"],
      sourceApi: "curated",
      isFamous: true
    },

    // PARKS & ADVENTURE
    {
      name: "Lumpini Park",
      lat: 13.7318, lng: 100.5417,
      category_name: "park",
      rating: 4.5, user_ratings_total: 20000,
      description: "Bangkok's green lung — a 142-acre park with lakes, jogging paths, paddle boats, and monitor lizards. Perfect for a morning jog.",
      tags: ["park", "relaxing", "jogging", "nature", "family"],
      sourceApi: "curated",
      isFamous: true
    },
    {
      name: "Chao Phraya River Long-tail Boat Tour",
      lat: 13.7400, lng: 100.4900,
      category_name: "adventure sports",
      rating: 4.4, user_ratings_total: 12000,
      description: "Traditional long-tail boat ride through Bangkok's canals (khlongs) and along the Chao Phraya River. See the real Bangkok from the water.",
      tags: ["boat", "adventure", "scenic", "canal", "unique"],
      sourceApi: "curated",
      isFamous: true
    },
  ],
};

export default FAMOUS_PLACES;
