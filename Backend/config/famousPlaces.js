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
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/Statue_of_Liberty_7.jpg/500px-Statue_of_Liberty_7.jpg"]
    },
    {
      name: "Central Park",
      lat: 40.7829, lng: -73.9654,
      category_name: "park",
      rating: 4.8, user_ratings_total: 120000,
      description: "843-acre urban park in Manhattan with lakes, gardens, walking trails, and iconic landmarks like Bethesda Fountain and Bow Bridge.",
      tags: ["park", "nature", "iconic", "relaxing", "family"],
      sourceApi: "curated",
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Central_Park_New_York_City_Midday.jpg/500px-Central_Park_New_York_City_Midday.jpg"]
    },
    {
      name: "Times Square",
      lat: 40.7580, lng: -73.9855,
      category_name: "scenic lookout",
      rating: 4.5, user_ratings_total: 95000,
      description: "Iconic commercial intersection and entertainment center known for its bright neon lights, Broadway theaters, and vibrant energy.",
      tags: ["iconic", "nightlife", "entertainment", "must-visit"],
      sourceApi: "curated",
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Times_Square_-_New_York_City.jpg/500px-Times_Square_-_New_York_City.jpg"]
    },
    {
      name: "Brooklyn Bridge",
      lat: 40.7061, lng: -73.9969,
      category_name: "monument",
      rating: 4.7, user_ratings_total: 70000,
      description: "Historic suspension bridge connecting Manhattan and Brooklyn, offering stunning skyline views. Perfect for a scenic walk.",
      tags: ["iconic", "bridge", "views", "walking"],
      sourceApi: "curated",
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/Brooklyn_Bridge_Postdlf.jpg/500px-Brooklyn_Bridge_Postdlf.jpg"]
    },
    {
      name: "Empire State Building",
      lat: 40.7484, lng: -73.9857,
      category_name: "scenic lookout",
      rating: 4.6, user_ratings_total: 60000,
      description: "102-story Art Deco skyscraper with observation decks offering panoramic views of New York City.",
      tags: ["iconic", "views", "architecture", "must-visit"],
      sourceApi: "curated",
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Empire_State_Building_from_Rockefeller_Center.jpg/500px-Empire_State_Building_from_Rockefeller_Center.jpg"]
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
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Joe%27s_Pizza.jpg/500px-Joe%27s_Pizza.jpg"]
    },
    {
      name: "Katz's Delicatessen",
      lat: 40.7223, lng: -73.9874,
      category_name: "restaurant",
      rating: 4.5, user_ratings_total: 25000,
      description: "Iconic deli on the Lower East Side since 1888, famous for hand-carved pastrami sandwiches and classic New York deli experience.",
      tags: ["deli", "iconic", "historic", "must-visit"],
      sourceApi: "curated",
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/Katz%27s_Delicatessen.jpg/500px-Katz%27s_Delicatessen.jpg"]
    },
    {
      name: "Chelsea Market",
      lat: 40.7424, lng: -74.0061,
      category_name: "food market",
      rating: 4.5, user_ratings_total: 20000,
      description: "Upscale food hall in a converted factory building with artisanal food vendors, restaurants, and bakeries.",
      tags: ["food-hall", "market", "diverse-cuisine", "shopping"],
      sourceApi: "curated",
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/Chelsea_Market.jpg/500px-Chelsea_Market.jpg"]
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
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/The_High_Line_in_New_York_City.jpg/500px-The_High_Line_in_New_York_City.jpg"]
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
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Bronx_Zoo_Lion.jpg/500px-Bronx_Zoo_Lion.jpg"]
    },
    {
      name: "Central Park Zoo",
      lat: 40.7678, lng: -73.9718,
      category_name: "zoo",
      rating: 4.3, user_ratings_total: 15000,
      description: "Intimate zoo in the heart of Central Park with snow leopards, penguins, sea lions, and a tropical rainforest exhibit.",
      tags: ["zoo", "family", "central-park", "wildlife"],
      sourceApi: "curated",
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Central_Park_Zoo.jpg/500px-Central_Park_Zoo.jpg"]
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
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Big_Ben_and_the_Houses_of_Parliament.jpg/500px-Big_Ben_and_the_Houses_of_Parliament.jpg"]
    },
    {
      name: "Tower of London",
      lat: 51.5081, lng: -0.0759,
      category_name: "castle",
      rating: 4.6, user_ratings_total: 50000,
      description: "Historic royal palace and fortress housing the Crown Jewels, with 1000 years of history including royal prisoners and executions.",
      tags: ["historic", "castle", "must-visit", "royalty"],
      sourceApi: "curated",
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Tower_of_London_viewed_from_the_River_Thames.jpg/500px-Tower_of_London_viewed_from_the_River_Thames.jpg"]
    },
    {
      name: "Buckingham Palace",
      lat: 51.5014, lng: -0.1419,
      category_name: "palace",
      rating: 4.5, user_ratings_total: 60000,
      description: "Official London residence of the British monarch. Famous for the Changing of the Guard ceremony.",
      tags: ["iconic", "royalty", "must-visit", "ceremony"],
      sourceApi: "curated",
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/Buckingham_Palace.jpg/500px-Buckingham_Palace.jpg"]
    },
    {
      name: "London Eye",
      lat: 51.5033, lng: -0.1196,
      category_name: "scenic lookout",
      rating: 4.4, user_ratings_total: 70000,
      description: "Giant Ferris wheel on the South Bank offering panoramic views of the Thames and London skyline. 135 meters tall.",
      tags: ["iconic", "views", "romantic", "must-visit"],
      sourceApi: "curated",
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/London_Eye.jpg/500px-London_Eye.jpg"]
    },
    {
      name: "Tower Bridge",
      lat: 51.5055, lng: -0.0754,
      category_name: "monument",
      rating: 4.7, user_ratings_total: 55000,
      description: "Iconic Victorian drawbridge over the Thames with an exhibition in the high-level walkways and stunning views.",
      tags: ["iconic", "bridge", "views", "architecture"],
      sourceApi: "curated",
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/Tower_Bridge_London_2.jpg/500px-Tower_Bridge_London_2.jpg"]
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
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Borough_Market.jpg/500px-Borough_Market.jpg"]
    },
    {
      name: "Dishoom King's Cross",
      lat: 51.5354, lng: -0.1260,
      category_name: "restaurant",
      rating: 4.6, user_ratings_total: 18000,
      description: "Award-winning Bombay-style café serving exceptional Indian breakfast, lunch, and dinner in a beautifully designed space.",
      tags: ["indian", "popular", "brunch", "atmospheric"],
      sourceApi: "curated",
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/Dishoom.jpg/500px-Dishoom.jpg"]
    },
    {
      name: "Sketch London",
      lat: 51.5125, lng: -0.1415,
      category_name: "restaurant",
      rating: 4.3, user_ratings_total: 12000,
      description: "Unique, art-filled restaurant and bar destination in Mayfair. Famous for its pink Gallery and afternoon tea.",
      tags: ["luxury", "unique", "instagram", "afternoon-tea"],
      sourceApi: "curated",
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Sketch_London.jpg/500px-Sketch_London.jpg"]
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
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Hyde_Park_London.jpg/500px-Hyde_Park_London.jpg"]
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
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/London_Zoo.jpg/500px-London_Zoo.jpg"]
    },
    {
      name: "Richmond Park",
      lat: 51.4430, lng: -0.2745,
      category_name: "nature preserve",
      rating: 4.7, user_ratings_total: 20000,
      description: "London's largest royal park and National Nature Reserve with 630 free-roaming red and fallow deer. Stunning wildlife in the city.",
      tags: ["wildlife", "deer", "nature", "park", "cycling"],
      sourceApi: "curated",
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Richmond_Park.jpg/500px-Richmond_Park.jpg"]
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
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Tour_Eiffel.jpg/500px-Tour_Eiffel.jpg"]
    },
    {
      name: "Louvre Museum",
      lat: 48.8606, lng: 2.3376,
      category_name: "art museum",
      rating: 4.7, user_ratings_total: 120000,
      description: "World's largest and most visited art museum, home to the Mona Lisa and Venus de Milo. Over 380,000 objects in its collection.",
      tags: ["museum", "art", "iconic", "must-visit", "culture"],
      sourceApi: "curated",
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Louvre_Museum_WP.jpg/500px-Louvre_Museum_WP.jpg"]
    },
    {
      name: "Arc de Triomphe",
      lat: 48.8738, lng: 2.2950,
      category_name: "monument",
      rating: 4.6, user_ratings_total: 55000,
      description: "Iconic triumphal arch at the center of Place Charles de Gaulle, honoring those who fought for France. Offers rooftop city views.",
      tags: ["iconic", "monument", "views", "history"],
      sourceApi: "curated",
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Arc_de_Triomphe.jpg/500px-Arc_de_Triomphe.jpg"]
    },
    {
      name: "Notre-Dame Cathedral",
      lat: 48.8530, lng: 2.3499,
      category_name: "church",
      rating: 4.7, user_ratings_total: 80000,
      description: "Medieval Catholic cathedral on the Île de la Cité, a masterpiece of French Gothic architecture (under restoration).",
      tags: ["iconic", "cathedral", "gothic", "historic"],
      sourceApi: "curated",
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Notre-Dame_de_Paris_2013-07-24.jpg/500px-Notre-Dame_de_Paris_2013-07-24.jpg"]
    },
    {
      name: "Sacré-Cœur Basilica",
      lat: 48.8867, lng: 2.3431,
      category_name: "church",
      rating: 4.6, user_ratings_total: 50000,
      description: "White-domed basilica at the summit of Montmartre, offering panoramic views of Paris. Built in Romano-Byzantine style.",
      tags: ["iconic", "views", "church", "montmartre"],
      sourceApi: "curated",
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/ab/ff/Sacr%C3%A9-Coeur_Basilica.jpg/500px-Sacr%C3%A9-Coeur_Basilica.jpg"]
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
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Bouillon_Chartier.jpg/500px-Bouillon_Chartier.jpg"]
    },
    {
      name: "Café de Flore",
      lat: 48.8540, lng: 2.3326,
      category_name: "cafe",
      rating: 4.2, user_ratings_total: 15000,
      description: "Legendary Parisian café in Saint-Germain-des-Prés, once frequented by Sartre and Hemingway. Classic French café culture.",
      tags: ["cafe", "iconic", "literary", "romantic"],
      sourceApi: "curated",
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Caf%C3%A9_de_Flore.jpg/500px-Caf%C3%A9_de_Flore.jpg"]
    },
    {
      name: "L'As du Fallafel",
      lat: 48.8570, lng: 2.3589,
      category_name: "street food",
      rating: 4.5, user_ratings_total: 12000,
      description: "The best falafel in Paris, located in the Marais district. Always a queue — and always worth the wait.",
      tags: ["street-food", "falafel", "budget-friendly", "must-visit"],
      sourceApi: "curated",
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Falafel.jpg/500px-Falafel.jpg"]
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
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Jardin_du_Luxembourg.jpg/500px-Jardin_du_Luxembourg.jpg"]
    },
    {
      name: "Seine River Cruise",
      lat: 48.8600, lng: 2.3200,
      category_name: "scenic lookout",
      rating: 4.6, user_ratings_total: 30000,
      description: "Scenic boat cruises along the Seine offering views of the Eiffel Tower, Notre-Dame, and other Parisian landmarks.",
      tags: ["cruise", "scenic", "romantic", "must-visit"],
      sourceApi: "curated",
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Seine_River_Cruise.jpg/500px-Seine_River_Cruise.jpg"]
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
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/Parc_Zoologique_de_Paris.jpg/500px-Parc_Zoologique_de_Paris.jpg"]
    },
    {
      name: "Fontainebleau Forest",
      lat: 48.4050, lng: 2.6990,
      category_name: "national park",
      rating: 4.6, user_ratings_total: 10000,
      description: "25,000-hectare royal hunting forest near Paris. Famous for rock climbing, hiking trails, and stunning autumn colors.",
      tags: ["forest", "nature", "hiking", "climbing", "day-trip"],
      sourceApi: "curated",
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/For%C3%AAt_de_Fontainebleau.jpg/500px-For%C3%AAt_de_Fontainebleau.jpg"]
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
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Sens%C5%8D-ji_Temple.jpg/500px-Sens%C5%8D-ji_Temple.jpg"]
    },
    {
      name: "Shibuya Crossing",
      lat: 35.6595, lng: 139.7004,
      category_name: "scenic lookout",
      rating: 4.5, user_ratings_total: 50000,
      description: "The world's busiest pedestrian crossing where up to 3,000 people cross simultaneously. An iconic Tokyo experience.",
      tags: ["iconic", "must-visit", "urban", "photography"],
      sourceApi: "curated",
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/Shibuya_Crossing.jpg/500px-Shibuya_Crossing.jpg"]
    },
    {
      name: "Tokyo Tower",
      lat: 35.6586, lng: 139.7454,
      category_name: "scenic lookout",
      rating: 4.5, user_ratings_total: 40000,
      description: "333-meter communications tower inspired by the Eiffel Tower, with observation decks offering stunning city views.",
      tags: ["iconic", "views", "landmark", "romantic"],
      sourceApi: "curated",
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Tokyo_Tower.jpg/500px-Tokyo_Tower.jpg"]
    },
    {
      name: "Meiji Jingu Shrine",
      lat: 35.6764, lng: 139.6993,
      category_name: "shrine",
      rating: 4.7, user_ratings_total: 35000,
      description: "Serene Shinto shrine surrounded by a 170-acre forest in the heart of Tokyo. Dedicated to Emperor Meiji.",
      tags: ["shrine", "spiritual", "nature", "peaceful"],
      sourceApi: "curated",
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/Meiji_Jing%C5%AB.jpg/500px-Meiji_Jing%C5%AB.jpg"]
    },
    {
      name: "Akihabara Electric Town",
      lat: 35.7022, lng: 139.7744,
      category_name: "market",
      rating: 4.4, user_ratings_total: 30000,
      description: "Tokyo's anime, manga, and electronics hub. A colorful district full of themed cafes, arcades, and shops.",
      tags: ["shopping", "anime", "unique", "entertainment"],
      sourceApi: "curated",
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Akihabara_electric_town.jpg/500px-Akihabara_electric_town.jpg"]
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
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Tsukiji_Market.jpg/500px-Tsukiji_Market.jpg"]
    },
    {
      name: "Ichiran Ramen Shibuya",
      lat: 35.6617, lng: 139.6986,
      category_name: "restaurant",
      rating: 4.5, user_ratings_total: 20000,
      description: "Iconic tonkotsu ramen chain with individual booth seating. Customize your ramen's richness, spice, and noodle firmness.",
      tags: ["ramen", "iconic", "budget-friendly", "must-visit"],
      sourceApi: "curated",
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Ichiran_Ramen.jpg/500px-Ichiran_Ramen.jpg"]
    },
    {
      name: "Gonpachi Nishi-Azabu",
      lat: 35.6530, lng: 139.7265,
      category_name: "restaurant",
      rating: 4.3, user_ratings_total: 12000,
      description: "The restaurant that inspired the Kill Bill fight scene. Traditional Japanese dining with soba, yakitori, and tempura.",
      tags: ["japanese", "atmospheric", "famous", "unique"],
      sourceApi: "curated",
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Gonpachi.jpg/500px-Gonpachi.jpg"]
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
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Shinjuku_Gyoen.jpg/500px-Shinjuku_Gyoen.jpg"]
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
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/Ueno_Zoo.jpg/500px-Ueno_Zoo.jpg"]
    },
    {
      name: "Mount Takao",
      lat: 35.6251, lng: 139.2437,
      category_name: "national park",
      rating: 4.6, user_ratings_total: 18000,
      description: "Sacred mountain just 50 minutes from central Tokyo. Multiple hiking trails through lush forest to a shrine at the summit.",
      tags: ["hiking", "nature", "mountain", "shrine", "day-trip"],
      sourceApi: "curated",
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Mount_Takao.jpg/500px-Mount_Takao.jpg"]
    },
  ],

  // ══════════════════════════════════════════════���════════════════════════════
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
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Burj_Khalifa.jpg/500px-Burj_Khalifa.jpg"]
    },
    {
      name: "Dubai Mall",
      lat: 25.1985, lng: 55.2796,
      category_name: "shopping mall",
      rating: 4.6, user_ratings_total: 90000,
      description: "World's largest mall with 1,200+ shops, an aquarium, ice rink, and the famous Dubai Fountain show outside.",
      tags: ["shopping", "entertainment", "family", "dining"],
      sourceApi: "curated",
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/c/c0/Dubai_Mall.jpg/500px-Dubai_Mall.jpg"]
    },
    {
      name: "Palm Jumeirah",
      lat: 25.1124, lng: 55.1390,
      category_name: "beach",
      rating: 4.5, user_ratings_total: 50000,
      description: "Man-made palm-shaped island with luxury resorts, the iconic Atlantis hotel, pristine beaches, and water sports.",
      tags: ["iconic", "beach", "luxury", "resort", "water-sports"],
      sourceApi: "curated",
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Palm_Jumeirah.jpg/500px-Palm_Jumeirah.jpg"]
    },
    {
      name: "Dubai Desert Safari",
      lat: 25.0500, lng: 55.4000,
      category_name: "adventure sports",
      rating: 4.6, user_ratings_total: 40000,
      description: "Thrilling desert 4x4 dune bashing, camel riding, sandboarding, and traditional BBQ dinner under the stars.",
      tags: ["adventure", "desert", "must-visit", "unique", "thrilling"],
      sourceApi: "curated",
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Dubai_Desert_Safari.jpg/500px-Dubai_Desert_Safari.jpg"]
    },
    {
      name: "Dubai Marina Walk",
      lat: 25.0770, lng: 55.1330,
      category_name: "scenic lookout",
      rating: 4.5, user_ratings_total: 35000,
      description: "Stunning waterfront promenade along an artificial canal lined with restaurants, towers, and yachts.",
      tags: ["waterfront", "dining", "views", "nightlife", "romantic"],
      sourceApi: "curated",
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/Dubai_Marina.jpg/500px-Dubai_Marina.jpg"]
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
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/Al_Ustad_Kebab.jpg/500px-Al_Ustad_Kebab.jpg"]
    },
    {
      name: "Pierchic",
      lat: 25.0933, lng: 55.1425,
      category_name: "restaurant",
      rating: 4.4, user_ratings_total: 6000,
      description: "Overwater seafood restaurant on a pier with Arabian Gulf views. One of Dubai's most romantic dining experiences.",
      tags: ["seafood", "luxury", "romantic", "fine-dining", "views"],
      sourceApi: "curated",
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Pierchic.jpg/500px-Pierchic.jpg"]
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
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Dubai_Miracle_Garden.jpg/500px-Dubai_Miracle_Garden.jpg"]
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
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Dubai_Safari_Park.jpg/500px-Dubai_Safari_Park.jpg"]
    },
    {
      name: "Dubai Aquarium & Underwater Zoo",
      lat: 25.1978, lng: 55.2796,
      category_name: "aquarium",
      rating: 4.5, user_ratings_total: 20000,
      description: "One of the world's largest suspended aquariums inside Dubai Mall with 33,000+ marine animals. Walk-through tunnel and cage snorkeling.",
      tags: ["aquarium", "marine-life", "family", "underwater", "unique"],
      sourceApi: "curated",
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/Dubai_Aquarium.jpg/500px-Dubai_Aquarium.jpg"]
    },
  ],

  // ═══════════════════════════════════════════════════════════════════
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
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/Marina_Bay_Sands.jpg/500px-Marina_Bay_Sands.jpg"]
    },
    {
      name: "Gardens by the Bay",
      lat: 1.2816, lng: 103.8636,
      category_name: "botanical garden",
      rating: 4.7, user_ratings_total: 70000,
      description: "Futuristic garden with Supertree Grove, Cloud Forest, and Flower Dome. Stunning light show every evening.",
      tags: ["iconic", "garden", "futuristic", "must-visit", "family"],
      sourceApi: "curated",
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Gardens_by_the_Bay.jpg/500px-Gardens_by_the_Bay.jpg"]
    },
    {
      name: "Merlion Park",
      lat: 1.2868, lng: 103.8545,
      category_name: "monument",
      rating: 4.3, user_ratings_total: 50000,
      description: "Singapore's iconic half-lion, half-fish statue spouting water into the bay — the symbol of the nation.",
      tags: ["iconic", "landmark", "must-visit", "photography"],
      sourceApi: "curated",
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Merlion_Singapore.jpg/500px-Merlion_Singapore.jpg"]
    },
    {
      name: "Sentosa Island",
      lat: 1.2494, lng: 103.8303,
      category_name: "beach",
      rating: 4.5, user_ratings_total: 45000,
      description: "Resort island with beaches, Universal Studios, Adventure Cove waterpark, and nature trails.",
      tags: ["beach", "theme-park", "adventure", "family", "resort"],
      sourceApi: "curated",
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Sentosa_Island.jpg/500px-Sentosa_Island.jpg"]
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
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/d/dc/Maxwell_Food_Centre.jpg/500px-Maxwell_Food_Centre.jpg"]
    },
    {
      name: "Lau Pa Sat Festival Market",
      lat: 1.2803, lng: 103.8505,
      category_name: "food market",
      rating: 4.3, user_ratings_total: 15000,
      description: "Historic Victorian cast-iron hawker center in the CBD. Famous for its satay street that opens in the evening.",
      tags: ["hawker", "satay", "historic", "evening", "atmospheric"],
      sourceApi: "curated",
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Lau_Pa_Sat.jpg/500px-Lau_Pa_Sat.jpg"]
    },
    {
      name: "JUMBO Seafood Clarke Quay",
      lat: 1.2906, lng: 103.8465,
      category_name: "restaurant",
      rating: 4.4, user_ratings_total: 10000,
      description: "Singapore's famous chili crab restaurant at Clarke Quay riverside. The must-eat dish of Singapore.",
      tags: ["chili-crab", "seafood", "iconic", "waterfront"],
      sourceApi: "curated",
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Chili_Crab.jpg/500px-Chili_Crab.jpg"]
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
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Singapore_Botanic_Gardens.jpg/500px-Singapore_Botanic_Gardens.jpg"]
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
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Singapore_Zoo.jpg/500px-Singapore_Zoo.jpg"]
    },
    {
      name: "Night Safari Singapore",
      lat: 1.4024, lng: 103.7890,
      category_name: "wildlife reserve",
      rating: 4.6, user_ratings_total: 28000,
      description: "World's first nocturnal zoo with 900+ animals from 100 species in naturalistic nighttime habitats. Tram and walking trails.",
      tags: ["wildlife", "night", "unique", "family", "adventure"],
      sourceApi: "curated",
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Night_Safari.jpg/500px-Night_Safari.jpg"]
    },
    {
      name: "Sungei Buloh Wetland Reserve",
      lat: 1.4472, lng: 103.7283,
      category_name: "nature preserve",
      rating: 4.5, user_ratings_total: 8000,
      description: "ASEAN Heritage Park — a mangrove wetland sanctuary with migratory birds, mudskippers, monitor lizards, and crocodiles.",
      tags: ["nature", "wetland", "birds", "wildlife", "hiking"],
      sourceApi: "curated",
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Sungei_Buloh.jpg/500px-Sungei_Buloh.jpg"]
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
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Sagrada_Fam%C3%ADlia.jpg/500px-Sagrada_Fam%C3%ADlia.jpg"]
    },
    {
      name: "Park Güell",
      lat: 41.4145, lng: 2.1527,
      category_name: "park",
      rating: 4.5, user_ratings_total: 70000,
      description: "Whimsical public park designed by Gaudí with colorful mosaic benches, gingerbread-like gatehouses, and stunning city views.",
      tags: ["gaudi", "park", "architecture", "views", "must-visit"],
      sourceApi: "curated",
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Park_G%C3%BCell.jpg/500px-Park_G%C3%BCell.jpg"]
    },
    {
      name: "La Rambla",
      lat: 41.3809, lng: 2.1734,
      category_name: "scenic lookout",
      rating: 4.3, user_ratings_total: 60000,
      description: "Barcelona's most famous tree-lined promenade stretching from Plaça de Catalunya to the waterfront. Artists, cafes, and energy.",
      tags: ["iconic", "promenade", "shopping", "nightlife"],
      sourceApi: "curated",
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/La_Rambla.jpg/500px-La_Rambla.jpg"]
    },
    {
      name: "Casa Batlló",
      lat: 41.3916, lng: 2.1650,
      category_name: "palace",
      rating: 4.6, user_ratings_total: 40000,
      description: "Gaudí's stunning Art Nouveau masterpiece on Passeig de Gràcia. Known as the 'House of Bones' for its skeletal façade.",
      tags: ["gaudi", "architecture", "art-nouveau", "must-visit"],
      sourceApi: "curated",
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/Casa_Batll%C3%B3.jpg/500px-Casa_Batll%C3%B3.jpg"]
    },
    {
      name: "Barceloneta Beach",
      lat: 41.3762, lng: 2.1920,
      category_name: "beach",
      rating: 4.3, user_ratings_total: 45000,
      description: "Barcelona's most popular beach — golden sand, seafood restaurants, and lively atmosphere right next to the old city.",
      tags: ["beach", "relaxing", "seafood", "water-sports"],
      sourceApi: "curated",
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Barceloneta_Beach.jpg/500px-Barceloneta_Beach.jpg"]
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
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/Mercat_de_la_Boqueria.jpg/500px-Mercat_de_la_Boqueria.jpg"]
    },
    {
      name: "Cal Pep",
      lat: 41.3835, lng: 2.1821,
      category_name: "restaurant",
      rating: 4.5, user_ratings_total: 8000,
      description: "Legendary tapas bar near the waterfront. Counter seating, fresh seafood, and some of the best tapas in Barcelona.",
      tags: ["tapas", "seafood", "iconic", "must-visit"],
      sourceApi: "curated",
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Cal_Pep.jpg/500px-Cal_Pep.jpg"]
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
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/Montju%C3%AFc.jpg/500px-Montju%C3%AFc.jpg"]
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
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Barcelona_Zoo.jpg/500px-Barcelona_Zoo.jpg"]
    },
    {
      name: "Montserrat Natural Park",
      lat: 41.5933, lng: 1.8365,
      category_name: "national park",
      rating: 4.7, user_ratings_total: 22000,
      description: "Dramatic serrated mountain range near Barcelona with a Benedictine monastery, hiking trails, and stunning rock formations.",
      tags: ["mountain", "nature", "monastery", "hiking", "day-trip"],
      sourceApi: "curated",
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Montserrat.jpg/500px-Montserrat.jpg"]
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
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/Anne_Frank_House.jpg/500px-Anne_Frank_House.jpg"]
    },
    {
      name: "Rijksmuseum",
      lat: 52.3600, lng: 4.8852,
      category_name: "art museum",
      rating: 4.7, user_ratings_total: 55000,
      description: "The Netherlands' national museum housing Rembrandt's Night Watch, Vermeer's Milkmaid, and 8,000 other masterpieces.",
      tags: ["museum", "art", "must-visit", "dutch-masters"],
      sourceApi: "curated",
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Rijksmuseum_Amsterdam.jpg/500px-Rijksmuseum_Amsterdam.jpg"]
    },
    {
      name: "Van Gogh Museum",
      lat: 52.3584, lng: 4.8811,
      category_name: "art museum",
      rating: 4.7, user_ratings_total: 45000,
      description: "World's largest collection of Van Gogh artwork with 200+ paintings, 500 drawings, and 700 letters.",
      tags: ["museum", "art", "van-gogh", "must-visit"],
      sourceApi: "curated",
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Van_Gogh_Museum.jpg/500px-Van_Gogh_Museum.jpg"]
    },
    {
      name: "Dam Square",
      lat: 52.3731, lng: 4.8932,
      category_name: "scenic lookout",
      rating: 4.3, user_ratings_total: 35000,
      description: "Amsterdam's central square with the Royal Palace, National Monument, and Madame Tussauds. The heart of the city.",
      tags: ["iconic", "square", "shopping", "historic"],
      sourceApi: "curated",
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Dam_Square.jpg/500px-Dam_Square.jpg"]
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
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Albert_Cuyp_Market.jpg/500px-Albert_Cuyp_Market.jpg"]
    },
    {
      name: "The Pancake Bakery",
      lat: 52.3757, lng: 4.8840,
      category_name: "restaurant",
      rating: 4.3, user_ratings_total: 8000,
      description: "Famous pancake house in a 17th-century warehouse on the Prinsengracht canal. Over 75 varieties of Dutch pancakes.",
      tags: ["pancakes", "dutch", "iconic", "canal-side"],
      sourceApi: "curated",
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Pancake_Bakery.jpg/500px-Pancake_Bakery.jpg"]
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
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Vondelpark.jpg/500px-Vondelpark.jpg"]
    },
    {
      name: "Amsterdam Canal Ring Cruise",
      lat: 52.3702, lng: 4.8952,
      category_name: "scenic lookout",
      rating: 4.5, user_ratings_total: 20000,
      description: "UNESCO World Heritage canal cruise through Amsterdam's 17th-century canal ring. The best way to see the city.",
      tags: ["cruise", "canal", "scenic", "romantic", "unesco"],
      sourceApi: "curated",
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Amsterdam_Canals.jpg/500px-Amsterdam_Canals.jpg"]
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
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Colosseum_in_Rome.jpg/500px-Colosseum_in_Rome.jpg"]
    },
    {
      name: "Vatican City & St. Peter's Basilica",
      lat: 41.9022, lng: 12.4539,
      category_name: "church",
      rating: 4.8, user_ratings_total: 100000,
      description: "The smallest country in the world housing St. Peter's Basilica, the Sistine Chapel, and Vatican Museums.",
      tags: ["iconic", "spiritual", "art", "must-visit", "michelangelo"],
      sourceApi: "curated",
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/St_Peter%27s_Basilica.jpg/500px-St_Peter%27s_Basilica.jpg"]
    },
    {
      name: "Trevi Fountain",
      lat: 41.9009, lng: 12.4833,
      category_name: "monument",
      rating: 4.6, user_ratings_total: 75000,
      description: "The largest Baroque fountain in Rome. Throw a coin to ensure your return to Rome — legend says it works.",
      tags: ["iconic", "fountain", "romantic", "must-visit", "wish"],
      sourceApi: "curated",
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Trevi_Fountain.jpg/500px-Trevi_Fountain.jpg"]
    },
    {
      name: "Pantheon",
      lat: 41.8986, lng: 12.4769,
      category_name: "temple",
      rating: 4.7, user_ratings_total: 65000,
      description: "Best-preserved ancient Roman building with the world's largest unreinforced concrete dome. Built in 125 AD.",
      tags: ["ancient", "architecture", "must-visit", "dome"],
      sourceApi: "curated",
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Pantheon_Rome.jpg/500px-Pantheon_Rome.jpg"]
    },
    {
      name: "Roman Forum",
      lat: 41.8925, lng: 12.4853,
      category_name: "ruins",
      rating: 4.5, user_ratings_total: 55000,
      description: "The political, commercial, and religious center of ancient Rome. Walk the same paths as Julius Caesar.",
      tags: ["ancient", "ruins", "history", "must-visit"],
      sourceApi: "curated",
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Roman_Forum.jpg/500px-Roman_Forum.jpg"]
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
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Roman_Pasta.jpg/500px-Roman_Pasta.jpg"]
    },
    {
      name: "Pizzeria Da Baffetto",
      lat: 41.8986, lng: 12.4703,
      category_name: "restaurant",
      rating: 4.3, user_ratings_total: 10000,
      description: "Legendary Roman pizzeria since 1959. Thin, crispy Roman-style pizza in a no-frills atmosphere near Piazza Navona.",
      tags: ["pizza", "iconic", "budget-friendly", "historic"],
      sourceApi: "curated",
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Roman_Pizza.jpg/500px-Roman_Pizza.jpg"]
    },
    {
      name: "Roscioli Caffè Pasticceria",
      lat: 41.8948, lng: 12.4737,
      category_name: "cafe",
      rating: 4.4, user_ratings_total: 5000,
      description: "Renowned Roman bakery-café known for exceptional pastries, cornetti, and Italian coffee in the historic center.",
      tags: ["cafe", "pastry", "breakfast", "italian-coffee"],
      sourceApi: "curated",
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/Roscioli_Caffe.jpg/500px-Roscioli_Caffe.jpg"]
    },

    // PARKS & NATURE
    {
      name: "Villa Borghese Gardens",
      lat: 41.9142, lng: 12.4852,
      category_name: "park",
      rating: 4.6, user_ratings_total: 30000,
      description: "Rome's central park with the Borghese Gallery, lake with rowboats, panoramic terraces, and shaded walking paths.",
      tags: ["park", "gallery", "romantic", "relaxing"],
      sourceApi: "curated",
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/Villa_Borghese.jpg/500px-Villa_Borghese.jpg"]
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
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Grand_Palace_Bangkok.jpg/500px-Grand_Palace_Bangkok.jpg"]
    },
    {
      name: "Wat Pho (Temple of the Reclining Buddha)",
      lat: 13.7463, lng: 100.4930,
      category_name: "temple",
      rating: 4.6, user_ratings_total: 50000,
      description: "Temple housing a 46-meter gold-leaf reclining Buddha and the largest collection of Buddha images in Thailand.",
      tags: ["temple", "buddha", "must-visit", "massage"],
      sourceApi: "curated",
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Wat_Pho.jpg/500px-Wat_Pho.jpg"]
    },
    {
      name: "Wat Arun (Temple of Dawn)",
      lat: 13.7437, lng: 100.4888,
      category_name: "temple",
      rating: 4.6, user_ratings_total: 40000,
      description: "Stunning riverside temple with a colorful 79-meter central prang decorated with porcelain. Beautiful at sunrise and sunset.",
      tags: ["temple", "iconic", "riverside", "photography"],
      sourceApi: "curated",
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Wat_Arun.jpg/500px-Wat_Arun.jpg"]
    },
    {
      name: "Chatuchak Weekend Market",
      lat: 13.7999, lng: 100.5506,
      category_name: "market",
      rating: 4.5, user_ratings_total: 45000,
      description: "One of the world's largest weekend markets with 15,000+ stalls selling everything from street food to vintage clothing.",
      tags: ["market", "shopping", "street-food", "must-visit"],
      sourceApi: "curated",
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/Chatuchak_Market.jpg/500px-Chatuchak_Market.jpg"]
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
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Yaowarat_Street_Food.jpg/500px-Yaowarat_Street_Food.jpg"]
    },
    {
      name: "Jay Fai",
      lat: 13.7542, lng: 100.5040,
      category_name: "restaurant",
      rating: 4.5, user_ratings_total: 15000,
      description: "Michelin-starred street food stall famous for crab omelette and drunken noodles. The queen of Thai street food wears ski goggles while cooking.",
      tags: ["michelin", "street-food", "iconic", "must-visit"],
      sourceApi: "curated",
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Jay_Fai.jpg/500px-Jay_Fai.jpg"]
    },
    {
      name: "Som Tam Nua",
      lat: 13.7454, lng: 100.5353,
      category_name: "restaurant",
      rating: 4.4, user_ratings_total: 10000,
      description: "Famous restaurant serving the best papaya salad (som tam) and fried chicken in Bangkok. Always packed — arrive early.",
      tags: ["thai", "papaya-salad", "popular", "budget-friendly"],
      sourceApi: "curated",
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Som_Tam.jpg/500px-Som_Tam.jpg"]
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
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Lumpini_Park.jpg/500px-Lumpini_Park.jpg"]
    },
    {
      name: "Chao Phraya River Long-tail Boat Tour",
      lat: 13.7400, lng: 100.4900,
      category_name: "adventure sports",
      rating: 4.4, user_ratings_total: 12000,
      description: "Traditional long-tail boat ride through Bangkok's canals (khlongs) and along the Chao Phraya River. See the real Bangkok from the water.",
      tags: ["boat", "adventure", "scenic", "canal", "unique"],
      sourceApi: "curated",
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/Chao_Phraya.jpg/500px-Chao_Phraya.jpg"]
    },
  ],

//   // ═══════════════════════════════════════════════════════════════════════════
//   // DELHI
//   // ═══════════════════════════════════════════════════════════════════════════
//   "Delhi": [
//     // ICONIC LANDMARKS & HERITAGE
//     {
//       name: "Red Fort (Lal Qila)",
//       lat: 28.6562, lng: 77.2410,
//       category_name: "fort",
//       rating: 4.5, user_ratings_total: 35000,
//       description: "UNESCO World Heritage site and symbol of India's sovereignty. This 17th-century Mughal fort witnessed India's independence celebrations.",
//       tags: ["heritage", "mughal", "iconic", "must-visit", "unesco"],
//       sourceApi: "curated",
//       isFamous: true,
//       photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/RedFort.jpg/500px-RedFort.jpg"]
//     },
//     {
//       name: "India Gate",
//       lat: 28.6129, lng: 77.2295,
//       category_name: "monument",
//       rating: 4.6, user_ratings_total: 45000,
//       description: "War memorial arch dedicated to soldiers who died in World War I. Surrounded by beautiful gardens and the Amar Jawan Jyoti flame.",
//       tags: ["monument", "war-memorial", "iconic", "evening", "picnic"],
//       sourceApi: "curated",
//       isFamous: true,
//       photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/India_Gate_in_Monsoon_rain.jpg/500px-India_Gate_in_Monsoon_rain.jpg"]
//     },
//     {
//       name: "Qutub Minar",
//       lat: 28.5244, lng: 77.1855,
//       category_name: "monument",
//       rating: 4.5, user_ratings_total: 30000,
//       description: "UNESCO World Heritage site - 73-meter tall tower built in 1193. The tallest brick minaret in the world.",
//       tags: ["heritage", "mughal", "iconic", "unesco", "architecture"],
//       sourceApi: "curated",
//       isFamous: true,
//       photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/Qutub_Minar.jpg/500px-Qutub_Minar.jpg"]
//     },
//     {
//       name: "Humayun's Tomb",
//       lat: 28.5933, lng: 77.2507,
//       category_name: "tomb",
//       rating: 4.6, user_ratings_total: 25000,
//       description: "UNESCO World Heritage site - the tomb of Emperor Humayun. Predecessor to the Taj Mahal with stunning Persian-inspired gardens.",
//       tags: ["heritage", "mughal", "unesco", "garden", "architecture"],
//       sourceApi: "curated",
//       isFamous: true,
//       photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Humayun%27s_Tomb.jpg/500px-Humayun%27s_Tomb.jpg"]
//     },
//     {
//       name: "Jama Masjid",
//       lat: 28.6508, lng: 77.2334,
//       category_name: "mosque",
//       rating: 4.6, user_ratings_total: 28000,
//       description: "Largest mosque in India built by Shah Jahan. Can hold 25,000 worshippers with three great gates and four towers.",
//       tags: ["heritage", "mughal", "architecture", "spiritual", "iconic"],
//       sourceApi: "curated",
//       isFamous: true,
//       photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Jama_Masjid%2C_Delhi.jpg/500px-Jama_Masjid%2C_Delhi.jpg"]
//     },
//     {
//       name: "Akshardham Temple",
//       lat: 28.6127, lng: 77.2766,
//       category_name: "temple",
//       rating: 4.6, user_ratings_total: 20000,
//       description: "Modern Hindu temple complex with stunning architecture, robotic exhibitions, and the Guinness record-holding Guinness Hall.",
//       tags: ["temple", "architecture", "cultural", "family", "spiritual"],
//       sourceApi: "curated",
//       isFamous: true,
//       photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Akshardham_%28New_Delhi%29.jpg/500px-Akshardham_%28New_Delhi%29.jpg"]
//     },
//     {
//       name: "Lotus Temple",
//       lat: 28.5535, lng: 77.2588,
//       category_name: "temple",
//       rating: 4.5, user_ratings_total: 22000,
//       description: "Bahá'í House of Worship shaped like a lotus flower with 27 marble petals. Open to all faiths for prayer and meditation.",
//       tags: ["temple", "architecture", "spiritual", "peaceful", "unique"],
//       sourceApi: "curated",
//       isFamous: true,
//       photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Lotus_Temple_wide.jpg/500px-Lotus_Temple_wide.jpg"]
//     },

//     // RESTAURANTS & FOOD
//     {
//       name: "Paranthe Wali Gali (Chandni Chowk)",
//       lat: 28.6507, lng: 77.2096,
//       category_name: "street food",
//       rating: 4.3, user_ratings_total: 15000,
//       description: "Famous lane in Old Delhi serving crispy parathas stuffed with everything from potatoes to paneer since generations.",
//       tags: ["street-food", "paratha", "old-delhi", "budget-friendly", "must-visit"],
//       sourceApi: "curated",
//       isFamous: true,
//       photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Chandni_Chowk.jpg/500px-Chandni_Chowk.jpg"]
//     },
//     {
//       name: "Karim's Restaurant",
//       lat: 28.6560, lng: 77.2340,
//       category_name: "restaurant",
//       rating: 4.4, user_ratings_total: 18000,
//       description: "Legendary Mughal restaurant near Jama Masjid serving authentic biryanis, kebabs, and Nihari since 1913.",
//       tags: ["mughlai", "historic", "must-visit", "kebab", "birynai"],
//       sourceApi: "curated",
//       isFamous: true,
//       photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/Karim%27s_Restaurant.jpg/500px-Karim%27s_Restaurant.jpg"]
//     },
//     {
//       name: "Dilli Haat INA",
//       lat: 28.5857, lng: 77.2122,
//       category_name: "food market",
//       rating: 4.3, user_ratings_total: 12000,
//       description: "Open-air food and craft market showcasing regional cuisines from across India. Great for trying different state's specialties.",
//       tags: ["food-market", "street-food", "handicrafts", "diverse-cuisine"],
//       sourceApi: "curated",
//       isFamous: true,
//       photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Dilli_Haat.jpg/500px-Dilli_Haat.jpg"]
//     },
//     {
//       name: "Bukhara Restaurant (ITC Maurya)",
//       lat: 28.5502, lng: 77.1814,
//       category_name: "restaurant",
//       rating: 4.6, user_ratings_total: 8000,
//       description: "World-renowned restaurant famous for Dal Bukhara, Murgh Malai Kabab. Bill Clinton's favorite Indian restaurant.",
//       tags: ["mughlai", "luxury", "iconic", "dal-bukhara", "famous"],
//       sourceApi: "curated",
//       isFamous: true,
//       photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/ITC_Maurya.jpg/500px-ITC_Maurya.jpg"]
//     },

//     // PARKS & NATURE
//     {
//       name: "Humayun's Tomb Gardens",
//       lat: 28.5928, lng: 77.2510,
//       category_name: "garden",
//       rating: 4.5, user_ratings_total: 10000,
//       description: "Beautiful Mughal-style gardens surrounding Humayun's Tomb. Perfect for morning walks and photography.",
//       tags: ["garden", "heritage", "peaceful", "morning", "photography"],
//       sourceApi: "curated",
//       isFamous: true,
//       photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Humayun%27s_tomb_garden.jpg/500px-Humayun%27s_tomb_garden.jpg"]
//     },
//     {
//       name: "Lodhi Gardens",
//       lat: 28.5921, lng: 77.2185,
//       category_name: "park",
//       rating: 4.4, user_ratings_total: 12000,
//       description: "Historic park with 15th-century tombs, connecting Lodhi and Sir Syed Ahmed Khan. Popular for morning jogs and evening strolls.",
//       tags: ["park", "heritage", "jogging", "peaceful", "historic"],
//       sourceApi: "curated",
//       isFamous: true,
//       photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Lodhi_Gardens.jpg/500px-Lodhi_Gardens.jpg"]
//     },

//     // WILDLIFE & NATURE RESERVES
//     {
//       name: "Okhla Bird Sanctuary",
//       lat: 28.5447, lng: 77.2764,
//       category_name: "nature preserve",
//       rating: 4.3, user_ratings_total: 5000,
//       description: "Wetland sanctuary on the Yamuna river with 300+ bird species. Migratory birds visit from October to March.",
//       tags: ["wildlife", "bird-watching", "nature", "photography", "migratory-birds"],
//       sourceApi: "curated",
//       isFamous: true,
//       photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Okhla_Bird_Sanctuary.jpg/500px-Okhla_Bird_Sanctuary.jpg"]
//     },
//     {
//       name: "Delhi Ridge Forest",
//       lat: 28.6178, lng: 77.2092,
//       category_name: "nature preserve",
//       rating: 4.2, user_ratings_total: 4000,
//       description: "Ancient rocky ridge area with historical monuments. The lung of Delhi providing natural habitat in the city.",
//       tags: ["nature", "forest", "hiking", "historic", "wildlife"],
//       sourceApi: "curated",
//       isFamous: true,
//       photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Delhi_Ridge.jpg/500px-Delhi_Ridge.jpg"]
//     },
//   ],

//   // ═══════════════════════════════════════════════════════════════════════════
//   // MUMBAI
//   // ═══════════════════════════════════════════════════════════════════════════
//   "Mumbai": [
//     // ICONIC LANDMARKS & HERITAGE
//     {
//       name: "Gateway of India",
//       lat: 18.9220, lng: 72.8347,
//       category_name: "monument",
//       rating: 4.6, user_ratings_total: 40000,
//       description: "Iconic 26-meter basalt arch built in 1924. Witnessed India's independence and remains Mumbai's most famous landmark.",
//       tags: ["iconic", "landmark", "must-visit", "architecture", "heritage"],
//       sourceApi: "curated",
//       isFamous: true,
//       photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Gateway_of_India.jpg/500px-Gateway_of_India.jpg"]
//     },
//     {
//       name: "Marine Drive",
//       lat: 18.9440, lng: 72.8237,
//       category_name: "scenic lookout",
//       rating: 4.7, user_ratings_total: 35000,
//       description: "6-km Queens Necklace promenade along the Arabian Sea. Mumbai's most romantic spot for evening walks and street food.",
//       tags: ["iconic", "sunset", "evening", "beach", "romantic"],
//       sourceApi: "curated",
//       isFamous: true,
//       photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Marine_Drive%2C_Mumbai.jpg/500px-Marine_Drive%2C_Mumbai.jpg"]
//     },
//     {
//       name: "Chhatrapati Shivaji Terminus",
//       lat: 18.9398, lng: 72.8355,
//       category_name: "heritage building",
//       rating: 4.5, user_ratings_total: 25000,
//       description: "UNESCO World Heritage site - stunning Victorian Gothic railway station. An architectural masterpiece blending Indian and British designs.",
//       tags: ["heritage", "unesco", "architecture", "railway", "victorian"],
//       sourceApi: "curated",
//       isFamous: true,
//       photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/CST_from_North.jpg/500px-CST_from_North.jpg"]
//     },
//     {
//       name: "Elephanta Caves",
//       lat: 18.9633, lng: 72.9315,
//       category_name: "temple",
//       rating: 4.4, user_ratings_total: 18000,
//       description: "UNESCO World Heritage rock-cut temples from 5th-8th century. Features the magnificent Trimurti sculpture of Hindu trinity.",
//       tags: ["heritage", "unesco", "cave", "temple", "island", "history"],
//       sourceApi: "curated",
//       isFamous: true,
//       photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Elephanta_caves.jpg/500px-Elephanta_caves.jpg"]
//     },
//     {
//       name: "Haji Ali Dargah",
//       lat: 18.9830, lng: 72.8230,
//       category_name: "mosque",
//       rating: 4.5, user_ratings_total: 22000,
//       description: "Stunning mosque on a tiny islet in the Arabian Sea. Accessible via a causeway during low tide. Spiritual and architectural marvel.",
//       tags: ["heritage", "spiritual", "architecture", "mosque", "iconic"],
//       sourceApi: "curated",
//       isFamous: true,
//       photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Haji_Ali_Dargah.jpg/500px-Haji_Ali_Dargah.jpg"]
//     },
//     {
//       name: "Sanjay Gandhi National Park",
//       lat: 19.2145, lng: 72.8702,
//       category_name: "national park",
//       rating: 4.3, user_ratings_total: 15000,
//       description: "One of the world's only parks within a city. Ancient Kanheri caves, 240 species of birds, and 1,000-year-old Buddhist caves.",
//       tags: ["national-park", "wildlife", "caves", "nature", "hiking"],
//       sourceApi: "curated",
//       isFamous: true,
//       photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/Sanjay_Gandhi_National_Park.jpg/500px-Sanjay_Gandhi_National_Park.jpg"]
//     },

//     // RESTAURANTS & FOOD
//     {
//       name: "Brittania & Co.",
//       lat: 18.9716, lng: 72.8319,
//       category_name: "restaurant",
//       rating: 4.4, user_ratings_total: 12000,
//       description: "Legendary Parsi restaurant since 1920. Famous for Berry Pulao, Sali Boti, and Mava Cake. A time capsule of old-world charm.",
//       tags: ["parsi", "historic", "iconic", "must-visit", "heritage"],
//       sourceApi: "curated",
//       isFamous: true,
//       photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Britannia_Restaurant.jpg/500px-Britannia_Restaurant.jpg"]
//     },
//     {
//       name: "Leopold Cafe",
//       lat: 18.9217, lng: 72.8334,
//       category_name: "cafe",
//       rating: 4.2, user_ratings_total: 15000,
//       description: "Iconic cafe since 1871 near Gateway of India. Famous for its steaks, sandwiches, and literary history from Trainspotting.",
//       tags: ["cafe", "historic", "iconic", "colaba", "bookworms"],
//       sourceApi: "curated",
//       isFamous: true,
//       photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/Leopold_Cafe.jpg/500px-Leopold_Cafe.jpg"]
//     },
//     {
//       name: "Crawford Market",
//       lat: 18.9313, lng: 72.8355,
//       category_name: "food market",
//       rating: 4.1, user_ratings_total: 10000,
//       description: "Victorian market famous for dry fruits, spices, and pets. Also known as Mahatma Jyotirao Phule Market with stunning architecture.",
//       tags: ["market", "victorian", "spices", "shopping", "architecture"],
//       sourceApi: "curated",
//       isFamous: true,
//       photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/Crawford_Market.jpg/500px-Crawford_Market.jpg"]
//     },
//     {
//       name: "Pali Street Food",
//       lat: 18.9700, lng: 72.8100,
//       category_name: "street food",
//       rating: 4.3, user_ratings_total: 8000,
//       description: "The vegetarian street food capital of Mumbai. Famous for Bhurji Pav, Kheema Pav, and delicious Parsi snacks.",
//       tags: ["street-food", "vegetarian", "pav", "local", "budget-friendly"],
//       sourceApi: "curated",
//       isFamous: true,
//       photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/Street_food_in_Mumbai.jpg/500px-Street_food_in_Mumbai.jpg"]
//     },

//     // BEACHES & WATERFRONT
//     {
//       name: "Juhu Beach",
//       lat: 19.0896, lng: 72.8256,
//       category_name: "beach",
//       rating: 4.3, user_ratings_total: 20000,
//       description: "Mumbai's most popular beach with street vendors, cricket games, and sunset views. Bhelpuri vendor famous nationwide.",
//       tags: ["beach", "sunset", "street-food", "evening", "popular"],
//       sourceApi: "curated",
//       isFamous: true,
//       photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Juhu_beach.jpg/500px-Juhu_beach.jpg"]
//     },
//     {
//       name: "Bandstand Promenade",
//       lat: 19.0357, lng: 72.8316,
//       category_name: "scenic lookout",
//       rating: 4.4, user_ratings_total: 15000,
//       description: "2.3 km seaside walkway in Bandra. Shah Rukh Khan's Mannat house is nearby. Perfect for evening strolls with city views.",
//       tags: ["waterfront", "promenade", "celebrity", "evening", "views"],
//       sourceApi: "curated",
//       isFamous: true,
//       photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Bandra_Worli_Sealink.jpg/500px-Bandra_Worli_Sealink.jpg"]
//     },
//   ],

//   // ═══════════════════════════════════════════════════════════════════════════
//   // JAIPUR
//   // ═══════════════════════════════════════════════════════════════════════════
//   "Jaipur": [
//     // ICONIC LANDMARKS & HERITAGE
//     {
//       name: "Hawa Mahal",
//       lat: 26.9239, lng: 75.8267,
//       category_name: "palace",
//       rating: 4.5, user_ratings_total: 35000,
//       description: "Palace of Winds with 953 intricately carved windows. Built in 1799 for royal ladies to observe street festivals unseen.",
//       tags: ["heritage", "iconic", "architecture", "must-visit", "pink-city"],
//       sourceApi: "curated",
//       isFamous: true,
//       photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Hawa_Mahal.jpg/500px-Hawa_Mahal.jpg"]
//     },
//     {
//       name: "Amber Fort",
//       lat: 26.9858, lng: 75.8513,
//       category_name: "fort",
//       rating: 4.7, user_ratings_total: 40000,
//       description: "UNESCO World Heritage hilltop fort with stunning Sheesh Mahal mirror work. Elephant rides to the main gate are famous.",
//       tags: ["heritage", "fort", "unesco", "architecture", "must-visit"],
//       sourceApi: "curated",
//       isFamous: true,
//       photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Amber_Fort.jpg/500px-Amber_Fort.jpg"]
//     },
//     {
//       name: "City Palace",
//       lat: 26.9068, lng: 75.8225,
//       category_name: "palace",
//       rating: 4.5, user_ratings_total: 25000,
//       description: "Royal residence blending Rajasthani and Mughal architecture. Chandra Mahal still houses the royal family.",
//       tags: ["heritage", "palace", "architecture", "museum", "royalty"],
//       sourceApi: "curated",
//       isFamous: true,
//       photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/City_Palace_Jaipur.jpg/500px-City_Palace_Jaipur.jpg"]
//     },
//     {
//       name: "Jantar Mantar",
//       lat: 26.9248, lng: 75.8246,
//       category_name: "monument",
//       rating: 4.4, user_ratings_total: 18000,
//       description: "UNESCO World Heritage site - 18 astronomical instruments built by Jai Singh II in 1734. World's largest stone sundial.",
//       tags: ["heritage", "unesco", "astronomy", "science", "architecture"],
//       sourceApi: "curated",
//       isFamous: true,
//       photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/Jantar_Mantar_Jaipur.jpg/500px-Jantar_Mantar_Jaipur.jpg"]
//     },
//     {
//       name: "Nahargarh Fort",
//       lat: 26.9525, lng: 75.8190,
//       category_name: "fort",
//       rating: 4.3, user_ratings_total: 12000,
//       description: "Hilltop fort with panoramic views of Jaipur city. Known for the 'Cheetal' restaurant and romantic sunset views.",
//       tags: ["fort", "views", "sunset", "romantic", "adventure"],
//       sourceApi: "curated",
//       isFamous: true,
//       photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Nahargarh_Fort.jpg/500px-Nahargarh_Fort.jpg"]
//     },
//     {
//       name: "Jal Mahal",
//       lat: 26.8934, lng: 75.8506,
//       category_name: "palace",
//       rating: 4.4, user_ratings_total: 20000,
//       description: "Water Palace in the middle of Man Sagar Lake. 5 stories with 4 submerged - stunning at sunset and during monsoon.",
//       tags: ["palace", "lake", "scenic", "sunset", "photography"],
//       sourceApi: "curated",
//       isFamous: true,
//       photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Jal_Mahal.jpg/500px-Jal_Mahal.jpg"]
//     },

//     // RESTAURANTS & FOOD
//     {
//       name: "Lassiwala (MI Road)",
//       lat: 26.9124, lng: 75.7875,
//       category_name: "restaurant",
//       rating: 4.3, user_ratings_total: 10000,
//       description: "Famous for creamy lassi served in clay cups since 1944. The OG shop near New Gate - now multiple branches.",
//       tags: ["lassi", "iconic", "drinks", "must-visit", "historic"],
//       sourceApi: "curated",
//       isFamous: true,
//       photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Lassi.jpg/500px-Lassi.jpg"]
//     },
//     {
//       name: "Suvarna Mahal (Royal Palace)",
//       lat: 26.9070, lng: 75.8226,
//       category_name: "restaurant",
//       rating: 4.6, user_ratings_total: 5000,
//       description: "Fine dining restaurant in the City Palace serving authentic Rajasthani thali. Royal ambiance with traditional performances.",
//       tags: ["royal", "rajasthani", "thali", "heritage", "dining"],
//       sourceApi: "curated",
//       isFamous: true,
//       photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/City_Palace_Jaipur.jpg/500px-City_Palace_Jaipur.jpg"]
//     },
//     {
//       name: "Chokhi Dhani",
//       lat: 26.8800, lng: 75.8500,
//       category_name: "restaurant",
//       rating: 4.4, user_ratings_total: 15000,
//       description: "Rajasthani village resort with authentic Rajasthani thali, folk performances, puppet shows, and traditional ambience.",
//       tags: ["rajasthani", "village", "cultural", "thali", "entertainment"],
//       sourceApi: "curated",
//       isFamous: true,
//       photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Rajasthani_Thali.jpg/500px-Rajasthani_Thali.jpg"]
//     },

//     // MARKETS & SHOPPING
//     {
//       name: "Johari Bazaar",
//       lat: 26.9264, lng: 75.8228,
//       category_name: "market",
//       rating: 4.2, user_ratings_total: 8000,
//       description: "Famous for Rajasthani jewelry, lac bangles, and Bandhani textiles. Bargaining is expected and part of the experience.",
//       tags: ["market", "shopping", "bangles", "jewelry", "textiles"],
//       sourceApi: "curated",
//       isFamous: true,
//       photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Johari_Bazaar.jpg/500px-Johari_Bazaar.jpg"]
//     },
//     {
//       name: "Chand Baori Stepwell",
//       lat: 27.0919, lng: 75.8587,
//       category_name: "monument",
//       rating: 4.7, user_ratings_total: 15000,
//       description: "UNESCO World Heritage stepwell with 3,500 steps descending 13 stories. One of the deepest in India featured in Batman movies.",
//       tags: ["heritage", "unesco", "stepwell", "photography", "unique"],
//       sourceApi: "curated",
//       isFamous: true,
//       photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Chand_Baori.jpg/500px-Chand_Baori.jpg"]
//     },
//   ],

//   // ═══════════════════════════════════════════════════════════════════════════
//   // AGRA
//   // ═══════════════════════════════════════════════════════════════════════════
//   "Agra": [
//     {
//       name: "Taj Mahal",
//       lat: 27.1751, lng: 78.0421,
//       category_name: "monument",
//       rating: 4.8, user_ratings_total: 80000,
//       description: "UNESCO World Heritage site - the crown jewel of India. White marble mausoleum built by Shah Jahan for his wife Mumtaz Mahal.",
//       tags: ["iconic", "heritage", "unesco", "must-visit", "wonder", "romantic"],
//       sourceApi: "curated",
//       isFamous: true,
//       photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/Taj_Mahal_%28Edited%29.jpeg/500px-Taj_Mahal_%28Edited%29.jpeg"]
//     },
//     {
//       name: "Agra Fort",
//       lat: 27.1767, lng: 78.0134,
//       category_name: "fort",
//       rating: 4.5, user_ratings_total: 25000,
//       description: "UNESCO World Heritage site - massive red sandstone fort where Shah Jahan was imprisoned by his son Aurangzeb.",
//       tags: ["heritage", "fort", "unesco", "mughal", "architecture"],
//       sourceApi: "curated",
//       isFamous: true,
//       photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Agra_Fort.jpg/500px-Agra_Fort.jpg"]
//     },
//     {
//       name: "Fatehpur Sikri",
//       lat: 27.0945, lng: 77.6679,
//       category_name: "ruins",
//       rating: 4.4, user_ratings_total: 20000,
//       description: "UNESCO World Heritage abandoned Mughal capital with stunning Buland Darwaza, Panch Mahal, and Tomb of Salim Chishti.",
//       tags: ["heritage", "unesco", "ruins", "mughal", "architecture", "day-trip"],
//       sourceApi: "curated",
//       isFamous: true,
//       photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Fatehpur_Sikri.jpg/500px-Fatehpur_Sikri.jpg"]
//     },
//     {
//       name: "Itimad-ud-Daulah (Baby Taj)",
//       lat: 27.1873, lng: 78.0276,
//       category_name: "tomb",
//       rating: 4.4, user_ratings_total: 15000,
//       description: "Nur Jahan's tomb often called Baby Taj. First Mughal structure entirely in white marble - precursor to the Taj Mahal.",
//       tags: ["heritage", "mughal", "tomb", "architecture", "photography"],
//       sourceApi: "curated",
//       isFamous: true,
//       photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Itimad-ud-Daulah.jpg/500px-Itimad-ud-Daulah.jpg"]
//     },
//     {
//       name: "Mehtab Bagh",
//       lat: 27.1813, lng: 78.0646,
//       category_name: "garden",
//       rating: 4.3, user_ratings_total: 8000,
//       description: "Garden with the best sunset view of Taj Mahal across the Yamuna. 25 acres with charbagh design aligned with the Taj.",
//       tags: ["garden", "sunset", "views", "taj-mahal", "photography"],
//       sourceApi: "curated",
//       isFamous: true,
//       photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Taj_Mahal_from_Mehtab_Bagh.jpg/500px-Taj_Mahal_from_Mehtab_Bagh.jpg"]
//     },

//     // RESTAURANTS & FOOD
//     {
//       name: "Panchi Paneer & Restaurant",
//       lat: 27.1750, lng: 78.0100,
//       category_name: "restaurant",
//       rating: 4.2, user_ratings_total: 6000,
//       description: "Famous for Petha (Agra's signature sweet), Paneer Tikka, and authentic Mughlai cuisine near Taj Mahal.",
//       tags: ["petha", "mughlai", "local", "sweet", "must-visit"],
//       sourceApi: "curated",
//       isFamous: true,
//       photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Petha.jpg/500px-Petha.jpg"]
//     },
//     {
//       name: "Dasaprakash Restaurant",
//       lat: 27.1878, lng: 78.0099,
//       category_name: "restaurant",
//       rating: 4.1, user_ratings_total: 5000,
//       description: "South Indian restaurant in Agra serving dosas, idlis, and authentic vegetarian thalis. A taste of South in North India.",
//       tags: ["south-indian", "vegetarian", "dosa", "thali", "budget-friendly"],
//       sourceApi: "curated",
//       isFamous: true,
//       photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Dosa.jpg/500px-Dosa.jpg"]
//     },
//     {
//       name: "Sadar Bazaar",
//       lat: 27.1830, lng: 78.0100,
//       category_name: "market",
//       rating: 4.0, user_ratings_total: 4000,
//       description: "Agra's famous market for leather goods, marble replicas of Taj Mahal, carpets, and the famous Agra Petha sweet.",
//       tags: ["market", "shopping", "leather", "petha", "souvenirs"],
//       sourceApi: "curated",
//       isFamous: true,
//       photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Agra_market.jpg/500px-Agra_market.jpg"]
//     },
//   ],

//   // ═══════════════════════════════════════════════════════════════════════════
//   // VARANASI
//   // ═══════════════════════════════════════════════════════════════════════════
//   "Varanasi": [
//     // ICONIC LANDMARKS & HERITAGE
//     {
//       name: "Kashi Vishwanath Temple",
//       lat: 25.3109, lng: 83.0107,
//       category_name: "temple",
//       rating: 4.7, user_ratings_total: 30000,
//       description: "One of the most famous Hindu temples dedicated to Lord Shiva. One of the 12 Jyotirlingas with immense spiritual significance.",
//       tags: ["temple", "spiritual", "hindu", "iconic", "must-visit"],
//       sourceApi: "curated",
//       isFamous: true,
//       photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Kashi_Vishwanath_Temple.jpg/500px-Kashi_Vishwanath_Temple.jpg"]
//     },
//     {
//       name: "Ghats of Varanasi",
//       lat: 25.3174, lng: 83.0080,
//       category_name: "scenic lookout",
//       rating: 4.8, user_ratings_total: 45000,
//       description: "88 ghats along the Ganges - Dashashwamedh, Manikarnika (ever-burning cremation), Assi, and more. The soul of Varanasi.",
//       tags: ["heritage", "ganges", "ghats", "spiritual", "iconic", "sunrise"],
//       sourceApi: "curated",
//       isFamous: true,
//       photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Varanasi_Ghats.jpg/500px-Varanasi_Ghats.jpg"]
//     },
//     {
//       name: "Sarnath",
//       lat: 25.3786, lng: 83.0218,
//       category_name: "temple",
//       rating: 4.5, user_ratings_total: 15000,
//       description: "Where Buddha delivered his first sermon after enlightenment. Dhamek Stupa, Ashoka Pillar, and archaeological museum.",
//       tags: ["buddhist", "heritage", "spiritual", "archaeological", "history"],
//       sourceApi: "curated",
//       isFamous: true,
//       photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Dhamekh_Stupa.jpg/500px-Dhamekh_Stupa.jpg"]
//     },
//     {
//       name: "Ramnagar Fort",
//       lat: 25.2914, lng: 83.0064,
//       category_name: "fort",
//       rating: 4.3, user_ratings_total: 8000,
//       description: "17th-century fort-cum-residence of the Kashi Naresh. Victorian architecture blending with Indian styles. Has a museum.",
//       tags: ["heritage", "fort", "museum", "architecture", "historic"],
//       sourceApi: "curated",
//       isFamous: true,
//       photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Ramnagar_Fort.jpg/500px-Ramnagar_Fort.jpg"]
//     },
//     {
//       name: "Banaras Hindu University",
//       lat: 25.2627, lng: 82.9958,
//       category_name: "heritage building",
//       rating: 4.4, user_ratings_total: 10000,
//       description: "Asia's largest residential university with stunning Gothic architecture. Bharat Kala Bhavan museum has rare manuscripts.",
//       tags: ["heritage", "architecture", "university", "museum", "cultural"],
//       sourceApi: "curated",
//       isFamous: true,
//       photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/BHU.jpg/500px-BHU.jpg"]
//     },

//     // RESTAURANTS & FOOD
//     {
//       name: "Kashi Chat Bhandar",
//       lat: 25.3175, lng: 83.0100,
//       category_name: "street food",
//       rating: 4.3, user_ratings_total: 5000,
//       description: "Legendary chaat shop near Assi Ghat since 1930. Famous for Tamatar Chaat, Gucchi Pattice, and lassi.",
//       tags: ["street-food", "chaat", "snacks", "historic", "must-visit"],
//       sourceApi: "curated",
//       isFamous: true,
//       photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/Chaat.jpg/500px-Chaat.jpg"]
//     },
//     {
//       name: "Deena Chat Bhandar",
//       lat: 25.3115, lng: 83.0105,
//       category_name: "street food",
//       rating: 4.2, user_ratings_total: 4000,
//       description: "Famous for Tam Chaat and chips chaat near Vishwanath Temple. Must-try for street food lovers.",
//       tags: ["street-food", "chaat", "snacks", "local", "budget-friendly"],
//       sourceApi: "curated",
//       isFamous: true,
//       photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/Chaat.jpg/500px-Chaat.jpg"]
//     },
//     {
//       name: "Kashi Vishwanath Gauri Ghat",
//       lat: 25.3105, lng: 83.0115,
//       category_name: "restaurant",
//       rating: 4.1, user_ratings_total: 3000,
//       description: "Simple thali restaurants near the temple with panoramic Ganga views. Lassi and malaiyo are local specialties.",
//       tags: ["thali", "views", "ganga", "local", "vegetarian"],
//       sourceApi: "curated",
//       isFamous: true,
//       photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Varanasi_Ghats.jpg/500px-Varanasi_Ghats.jpg"]
//     },

//     // EXPERIENCES
//     {
//       name: "Ganga Aarti at Dashashwamedh Ghat",
//       lat: 25.3068, lng: 83.0106,
//       category_name: "scenic lookout",
//       rating: 4.8, user_ratings_total: 35000,
//       description: "Mesmerizing evening fire ceremony with large flames, bells, and chanting. The ultimate Varanasi spiritual experience.",
//       tags: ["spiritual", "ganga", "aarti", "evening", "ceremony", "must-visit"],
//       sourceApi: "curated",
//       isFamous: true,
//       photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Ganga_Aarti.jpg/500px-Ganga_Aarti.jpg"]
//     },
//     {
//       name: "Morning Boat Ride on Ganges",
//       lat: 25.3100, lng: 83.0100,
//       category_name: "adventure sports",
//       rating: 4.7, user_ratings_total: 25000,
//       description: "Sunrise boat ride viewing all 88 ghats, sunrise aarti at Harishchandra Ghat, and morning rituals. Most iconic experience.",
//       tags: ["boat", "sunrise", "ganges", "ghats", "spiritual", "photography"],
//       sourceApi: "curated",
//       isFamous: true,
//       photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Boat_ride_on_Ganges.jpg/500px-Boat_ride_on_Ganges.jpg"]
//     },
//   ],

//   // ═══════════════════════════════════════════════════════════════════════════
//   // GOA
//   // ═══════════════════════════════════════════════════════════════════════════
//   "Goa": [
//     // ICONIC BEACHES & HERITAGE
//     {
//       name: "Basilica of Bom Jesus",
//       lat: 15.5009, lng: 73.9116,
//       category_name: "church",
//       rating: 4.6, user_ratings_total: 15000,
//       description: "UNESCO World Heritage baroque church built in 1594. Contains the mortal remains of St. Francis Xavier. India's most visited churches.",
//       tags: ["heritage", "unesco", "church", "portuguese", "spiritual"],
//       sourceApi: "curated",
//       isFamous: true,
//       photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/Basilica_of_Bom_Jesus.jpg/500px-Basilica_of_Bom_Jesus.jpg"]
//     },
//     {
//       name: "Se Cathedral",
//       lat: 15.4980, lng: 73.9125,
//       category_name: "church",
//       rating: 4.5, user_ratings_total: 12000,
//       description: "UNESCO World Heritage - Asia's largest church. Built in 16th century with a golden bell 'Golden Bell' said to be heard across Goa.",
//       tags: ["heritage", "unesco", "church", "architecture", "portuguese"],
//       sourceApi: "curated",
//       isFamous: true,
//       photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/Se_Cathedral.jpg/500px-Se_Cathedral.jpg"]
//     },
//     {
//       name: "Fort Aguada",
//       lat: 15.5137, lng: 73.7764,
//       category_name: "fort",
//       rating: 4.3, user_ratings_total: 10000,
//       description: "17th-century Portuguese fort with a lighthouse and stunning views of the Arabian Sea. Freshwater springs inside.",
//       tags: ["fort", "views", "lighthouse", "heritage", "sunset"],
//       sourceApi: "curated",
//       isFamous: true,
//       photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Fort_Aguada.jpg/500px-Fort_Aguada.jpg"]
//     },
//     {
//       name: "Dudhsagar Falls",
//       lat: 15.3139, lng: 74.3153,
//       category_name: "waterfall",
//       rating: 4.7, user_ratings_total: 20000,
//       description: "India's tallest waterfall (310m) in the Bhagwan Mahavir Wildlife Sanctuary. Four-tiered cascade looks like 'sea of milk'.",
//       tags: ["waterfall", "wildlife", "nature", "adventure", "monsoon"],
//       sourceApi: "curated",
//       isFamous: true,
//       photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Dudhsagar_Falls.jpg/500px-Dudhsagar_Falls.jpg"]
//     },
//     {
//       name: "Spice Plantation Tour",
//       lat: 15.4000, lng: 74.1000,
//       category_name: "nature preserve",
//       rating: 4.4, user_ratings_total: 8000,
//       description: "Tour lush spice plantations - cardamom, pepper, vanilla, cinnamon. Includes traditional Goan lunch and elephant ride.",
//       tags: ["spices", "plantation", "nature", "cultural", "elephant"],
//       sourceApi: "curated",
//       isFamous: true,
//       photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Spice_plantation.jpg/500px-Spice_plantation.jpg"]
//     },
//     {
//       name: "Tito's Street (Baga)",
//       lat: 15.5590, lng: 73.7520,
//       category_name: "restaurant",
//       rating: 4.0, user_ratings_total: 12000,
//       description: "Goa's most famous party street with clubs, bars, and restaurants. Tito's Lane is synonymous with Goan nightlife.",
//       tags: ["nightlife", "bars", "clubs", "party", "entertainment"],
//       sourceApi: "curated",
//       isFamous: true,
//       photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Goa_nightlife.jpg/500px-Goa_nightlife.jpg"]
//     },

//     // BEACHES
//     {
//       name: "Calangute Beach",
//       lat: 15.5458, lng: 73.7548,
//       category_name: "beach",
//       rating: 4.2, user_ratings_total: 18000,
//       description: "Queen's Beach - Goa's most popular beach with water sports, shacks, and vibrant atmosphere. Good for surfing.",
//       tags: ["beach", "water-sports", "shacks", "popular", "party"],
//       sourceApi: "curated",
//       isFamous: true,
//       photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/Calangute_Beach.jpg/500px-Calangute_Beach.jpg"]
//     },
//     {
//       name: "Anjuna Flea Market",
//       lat: 15.5785, lng: 73.7365,
//       category_name: "market",
//       rating: 4.3, user_ratings_total: 15000,
//       description: "Wednesday flea market famous for beach wear, jewelry, spices, and souvenirs. Tibetan and Kashmiri vendors dominate.",
//       tags: ["market", "shopping", "beach-wear", "spices", "souvenirs"],
//       sourceApi: "curated",
//       isFamous: true,
//       photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/Anjuna_beach.jpg/500px-Anjuna_beach.jpg"]
//     },

//     // RESTAURANTS & FOOD
//     {
//       name: "Fisherman's Wharf (Ribandar)",
//       lat: 15.5100, lng: 73.8600,
//       category_name: "restaurant",
//       rating: 4.3, user_ratings_total: 8000,
//       description: "Riverside Goan restaurant famous for Sol Kadhi, Fish Curry Rice, and Recheado Perad. Beautiful sunset views.",
//       tags: ["goan", "seafood", "curry", "sunset", "waterfront"],
//       sourceApi: "curated",
//       isFamous: true,
//       photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Goan_fish_curry.jpg/500px-Goan_fish_curry.jpg"]
//     },
//     {
//       name: "Coconut Groove (Anjuna)",
//       lat: 15.5800, lng: 73.7400,
//       category_name: "restaurant",
//       rating: 4.2, user_ratings_total: 6000,
//       description: "Beach shack famous for Pork Vindaloo, Crab Xacuti, and feni-based cocktails. Live music every evening.",
//       tags: ["goan", "seafood", "vindaloo", "beach-shack", "lively"],
//       sourceApi: "curated",
//       isFamous: true,
//       photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Goan_cuisine.jpg/500px-Goan_cuisine.jpg"]
//     },
//     {
//       name: "Mackie's Saturday Night Bazaar",
//       lat: 15.5200, lng: 73.9100,
//       category_name: "food market",
//       rating: 4.2, user_ratings_total: 5000,
//       description: "Saturday night market with Goan food, Feni tasting, live music, and crafts. Great atmosphere and local vibes.",
//       tags: ["market", "feni", "goan-food", "nightlife", "music"],
//       sourceApi: "curated",
//       isFamous: true,
//       photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Goa_nightlife.jpg/500px-Goa_nightlife.jpg"]
//     },
//   ],

//   // ═══════════════════════════════════════════════════════════════════════════
//   // UDAIPUR
//   // ═══════════════════════════════════════════════════════════════════════════
//   "Udaipur": [
//     {
//       name: "City Palace",
//       lat: 24.5764, lng: 73.6913,
//       category_name: "palace",
//       rating: 4.6, user_ratings_total: 20000,
//       description: "Largest palace complex in Rajasthan built by Maharana Udai Singh II. Stunning blend of Mughal and Rajasthani architecture.",
//       tags: ["heritage", "palace", "architecture", "lake-view", "must-visit"],
//       sourceApi: "curated",
//       isFamous: true,
//       photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/City_Palace_Udaipur.jpg/500px-City_Palace_Udaipur.jpg"]
//     },
//     {
//       name: "Lake Palace (Taj Lake Palace)",
//       lat: 24.5645, lng: 73.6938,
//       category_name: "palace",
//       rating: 4.7, user_ratings_total: 15000,
//       description: "Stunning white marble palace on Jag Niwas Island in Lake Pichola. Now a luxury hotel - appeared in James Bond Octopussy.",
//       tags: ["palace", "lake", "romantic", "luxury", "iconic", "architecture"],
//       sourceApi: "curated",
//       isFamous: true,
//       photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Lake_Palace_Udaipur.jpg/500px-Lake_Palace_Udaipur.jpg"]
//     },
//     {
//       name: "Jag Mandir Palace",
//       lat: 24.5720, lng: 73.6890,
//       category_name: "palace",
//       rating: 4.5, user_ratings_total: 12000,
//       description: "Island palace where Shah Jahan found refuge before building the Taj Mahal. The Gul Mahal houses an elephant museum.",
//       tags: ["palace", "lake", "heritage", "island", "architecture"],
//       sourceApi: "curated",
//       isFamous: true,
//       photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Jag_Mandir.jpg/500px-Jag_Mandir.jpg"]
//     },
//     {
//       name: "Lake Pichola Boat Ride",
//       lat: 24.5700, lng: 73.6900,
//       category_name: "scenic lookout",
//       rating: 4.7, user_ratings_total: 18000,
//       description: "Iconic boat ride at sunset with views of City Palace, Lake Palace, and Jag Mandir. Most romantic experience in Udaipur.",
//       tags: ["lake", "boat", "sunset", "romantic", "views", "must-visit"],
//       sourceApi: "curated",
//       isFamous: true,
//       photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Lake_Pichola.jpg/500px-Lake_Pichola.jpg"]
//     },
//     {
//       name: "Sajjangarh Palace (Monsoon Palace)",
//       lat: 24.5974, lng: 73.6851,
//       category_name: "palace",
//       rating: 4.4, user_ratings_total: 10000,
//       description: "Hilltop palace offering panoramic views of Udaipur city, lakes, and Aravalli hills. Best sunset viewpoint in the city.",
//       tags: ["palace", "views", "sunset", "panoramic", "hilltop"],
//       sourceApi: "curated",
//       isFamous: true,
//       photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/Sajjangarh_Palace.jpg/500px-Sajjangarh_Palace.jpg"]
//     },
//     {
//       name: "Bagore Ki Haveli",
//       lat: 24.5780, lng: 73.6880,
//       category_name: "heritage building",
//       rating: 4.3, user_ratings_total: 8000,
//       description: "18th-century haveli with 138 rooms and stunning mirror work. Famous Dharohar folk dance show every evening.",
//       tags: ["heritage", "haveli", "dance", "folk", "cultural", "evening"],
//       sourceApi: "curated",
//       isFamous: true,
//       photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Bagore_Ki_Haveli.jpg/500px-Bagore_Ki_Haveli.jpg"]
//     },

//     // RESTAURANTS & FOOD
//     {
//       name: "Ambrai Restaurant",
//       lat: 24.5795, lng: 73.6940,
//       category_name: "restaurant",
//       rating: 4.5, user_ratings_total: 7000,
//       description: "Lakefront restaurant with stunning views of Lake Palace and City Palace. Famous for Dal Baati Churma and Gatte ki Sabzi.",
//       tags: ["rajasthani", "lake-view", "dinner", "romantic", "heritage"],
//       sourceApi: "curated",
//       isFamous: true,
//       photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Rajasthani_Thali.jpg/500px-Rajasthani_Thali.jpg"]
//     },
//     {
//       name: "Jagdish Temple",
//       lat: 24.5763, lng: 73.6924,
//       category_name: "temple",
//       rating: 4.5, user_ratings_total: 10000,
//       description: "16th-century Indo-Aryan temple dedicated to Lord Vishnu. Stunning carved pillars and mandir with 1,500-year-old inscriptions.",
//       tags: ["temple", "hindu", "architecture", "heritage", "spiritual"],
//       sourceApi: "curated",
//       isFamous: true,
//       photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Jagdish_Temple.jpg/500px-Jagdish_Temple.jpg"]
//     },
//     {
//       name: "Shilpi Gram (Craft Village)",
//       lat: 24.5500, lng: 73.7000,
//       category_name: "market",
//       rating: 4.2, user_ratings_total: 5000,
//       description: "Rajasthani craft village with pottery, paintings, and traditional items. Watch artisans at work making Blue Pottery.",
//       tags: ["crafts", "shopping", "pottery", "traditional", "handicrafts"],
//       sourceApi: "curated",
//       isFamous: true,
//       photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Blue_Pottery.jpg/500px-Blue_Pottery.jpg"]
//     },
//   ],

//   // ═══════════════════════════════════════════════════════════════════════════
//   // AMRITSAR
//   // ═══════════════════════════════════════════════════════════════════════════
//   "Amritsar": [
//     {
//       name: "Golden Temple (Harmandir Sahib)",
//       lat: 31.6200, lng: 74.8765,
//       category_name: "temple",
//       rating: 4.8, user_ratings_total: 60000,
//       description: "Spiritual center of Sikhism with golden-plated sanctum surrounded by the holy pool (sarovar). Open 24 hours with free langar for all.",
//       tags: ["spiritual", "sikh", "heritage", "iconic", "must-visit", "langar"],
//       sourceApi: "curated",
//       isFamous: true,
//       photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/Golden_Temple.jpg/500px-Golden_Temple.jpg"]
//     },
//     {
//       name: "Wagah Border Ceremony",
//       lat: 31.6047, lng: 74.5705,
//       category_name: "monument",
//       rating: 4.7, user_ratings_total: 40000,
//       description: "Iconic flag-lowering ceremony at India-Pakistan border. Patriotic energy with soldiers' dramatic march and gate closing.",
//       tags: ["border", "ceremony", "patriotic", "evening", "must-visit"],
//       sourceApi: "curated",
//       isFamous: true,
//       photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/Wagah_border.jpg/500px-Wagah_border.jpg"]
//     },
//     {
//       name: "Jallianwala Bagh",
//       lat: 31.6203, lng: 74.8758,
//       category_name: "monument",
//       rating: 4.5, user_ratings_total: 25000,
//       description: "Memorial garden where British troops fired on unarmed civilians on April 13, 1919. Bullet marks still visible on walls.",
//       tags: ["heritage", "memorial", "history", "martyr", "freedom-struggle"],
//       sourceApi: "curated",
//       isFamous: true,
//       photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Jallianwala_Bagh.jpg/500px-Jallianwala_Bagh.jpg"]
//     },
//     {
//       name: "Durgiana Temple",
//       lat: 31.6347, lng: 74.8674,
//       category_name: "temple",
//       rating: 4.3, user_ratings_total: 10000,
//       description: "Silver-doored Hindu temple built in 1921. Similar architecture to Golden Temple with beautiful gilded spires.",
//       tags: ["temple", "hindu", "architecture", "heritage", "spiritual"],
//       sourceApi: "curated",
//       isFamous: true,
//       photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Durgiana_Temple.jpg/500px-Durgiana_Temple.jpg"]
//     },
//     {
//       name: "Gobindgarh Fort",
//       lat: 31.6347, lng: 74.8590,
//       category_name: "fort",
//       rating: 4.2, user_ratings_total: 6000,
//       description: "Historic fort now a living museum with Punjabi culture shows, weapon displays, and traditional food experiences.",
//       tags: ["fort", "heritage", "museum", "cultural", "entertainment"],
//       sourceApi: "curated",
//       isFamous: true,
//       photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Gobindgarh_Fort.jpg/500px-Gobindgarh_Fort.jpg"]
//     },

//     // RESTAURANTS & FOOD
//     {
//       name: "Kesar Da Dhaba",
//       lat: 31.6295, lng: 74.8645,
//       category_name: "restaurant",
//       rating: 4.4, user_ratings_total: 12000,
//       description: "Legendary vegetarian dhaba since 1932. Famous for Dal Makhani, Sarson Da Saag, and Makki Di Roti.",
//       tags: ["punjabi", "dhaba", "vegetarian", "historic", "must-visit"],
//       sourceApi: "curated",
//       isFamous: true,
//       photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Dal_Makhani.jpg/500px-Dal_Makhani.jpg"]
//     },
//     {
//       name: "Brothers' Dhaba",
//       lat: 31.6290, lng: 74.8635,
//       category_name: "restaurant",
//       rating: 4.3, user_ratings_total: 10000,
//       description: "Amritsari food legend famous for Amritsari Kulcha, Chole, and Lassi. Open since 1947 with unchanged recipes.",
//       tags: ["punjabi", "kulcha", "street-food", "historic", "must-visit"],
//       sourceApi: "curated",
//       isFamous: true,
//       photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Kulcha.jpg/500px-Kulcha.jpg"]
//     },
//     {
//       name: "Guru Ka Langar (Golden Temple)",
//       lat: 31.6195, lng: 74.8770,
//       category_name: "restaurant",
//       rating: 4.8, user_ratings_total: 20000,
//       description: "World's largest free community kitchen serving 100,000+ people daily. Volunteers prepare and serve simple vegetarian meals.",
//       tags: ["langar", "sikh", "free-food", "community", "spiritual"],
//       sourceApi: "curated",
//       isFamous: true,
//       photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/Golden_Temple.jpg/500px-Golden_Temple.jpg"]
//     },
//   ],

//   // ═══════════════════════════════════════════════════════════════════════════
//   // LUCKNOW
//   // ═══════════════════════════════════════════════════════════════════════════
//   "Lucknow": [
//     {
//       name: "Bara Imambara",
//       lat: 26.8548, lng: 80.9166,
//       category_name: "tomb",
//       rating: 4.6, user_ratings_total: 20000,
//       description: "UNESCO World Heritage 18th-century complex with world's largest vaulted hall without pillars. Famous for Bhul Bhulaiya maze.",
//       tags: ["heritage", "unesco", "mughal", "architecture", "unique"],
//       sourceApi: "curated",
//       isFamous: true,
//       photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Bara_Imambara.jpg/500px-Bara_Imambara.jpg"]
//     },
//     {
//       name: "Chhatrapati Shivaji Maharaj Terminus",
//       lat: 26.8312, lng: 80.9146,
//       category_name: "heritage building",
//       rating: 4.4, user_ratings_total: 15000,
//       description: "Stunning Victorian Gothic railway station blending Indian and British architecture. Built in 1914.",
//       tags: ["heritage", "architecture", "victorian", "railway", "iconic"],
//       sourceApi: "curated",
//       isFamous: true,
//       photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Lucknow_Charbagh_Station.jpg/500px-Lucknow_Charbagh_Station.jpg"]
//     },
//     {
//       name: "Rumi Darwaza",
//       lat: 26.8552, lng: 80.9158,
//       category_name: "monument",
//       rating: 4.5, user_ratings_total: 18000,
//       description: "27-meter tall ornate gateway built in 1784. Known as 'Turkish Gate' - symbol of Lucknow's Nawabi heritage.",
//       tags: ["heritage", "architecture", "nawab", "iconic", "gate"],
//       sourceApi: "curated",
//       isFamous: true,
//       photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Rumi_Darwaza.jpg/500px-Rumi_Darwaza.jpg"]
//     },
//     {
//       name: "Hazratganj",
//       lat: 26.8465, lng: 80.9390,
//       category_name: "market",
//       rating: 4.1, user_ratings_total: 10000,
//       description: "Heritage shopping street with colonial-era buildings. From Kosaf paraffin shop to modern cafes in old havelis.",
//       tags: ["market", "shopping", "heritage", "colonial", "architecture"],
//       sourceApi: "curated",
//       isFamous: true,
//       photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Hazratganj.jpg/500px-Hazratganj.jpg"]
//     },
//     {
//       name: "La Martiniere College",
//       lat: 26.8442, lng: 80.9205,
//       category_name: "heritage building",
//       rating: 4.3, user_ratings_total: 8000,
//       description: "One of the oldest colleges in India built by Frenchman Henry Martin. Uniforms for boys like Harry Potter.",
//       tags: ["heritage", "architecture", "british", "college", "historic"],
//       sourceApi: "curated",
//       isFamous: true,
//       photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/La_Martiniere_College.jpg/500px-La_Martiniere_College.jpg"]
//     },

//     // RESTAURANTS & FOOD
//     {
//       name: "Dastarkhwan",
//       lat: 26.8520, lng: 80.9150,
//       category_name: "restaurant",
//       rating: 4.5, user_ratings_total: 12000,
//       description: "Legendary restaurant serving authentic Lucknavi cuisine. Galouti Kebabs melt in your mouth - invented for toothless nawab.",
//       tags: ["awadhi", "kebab", "historic", "must-visit", "dum-pukht"],
//       sourceApi: "curated",
//       isFamous: true,
//       photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Galouti_Kebab.jpg/500px-Galouti_Kebab.jpg"]
//     },
//     {
//       name: "Ram Ashray (Chaat)",
//       lat: 26.8540, lng: 80.9390,
//       category_name: "street food",
//       rating: 4.3, user_ratings_total: 8000,
//       description: "Famous for Tikki, Tamatar Chaat, and Bedai at Hazratganj. Family-run since 1947.",
//       tags: ["street-food", "chaat", "snacks", "historic", "local"],
//       sourceApi: "curated",
//       isFamous: true,
//       photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/Chaat.jpg/500px-Chaat.jpg"]
//     },
//     {
//       name: "Moti Mahal Restaurant",
//       lat: 26.8445, lng: 80.9365,
//       category_name: "restaurant",
//       rating: 4.2, user_ratings_total: 7000,
//       description: "Historic restaurant serving Tunday Kebabi (galouti kebabs), biryani, and Lucknavi curries. Since 1907.",
//       tags: ["awadhi", "kebab", "biryani", "historic", "must-visit"],
//       sourceApi: "curated",
//       isFamous: true,
//       photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Galouti_Kebab.jpg/500px-Galouti_Kebab.jpg"]
//     },
//     {
//       name: "Neelkanth Desserts",
//       lat: 26.8510, lng: 80.9375,
//       category_name: "dessert shop",
//       rating: 4.3, user_ratings_total: 5000,
//       description: "Famous for Malai Gilori, Sheermal, and traditional Lucknavi sweets. Baked fresh daily.",
//       tags: ["sweets", "dessert", "traditional", "malai-gilori", "sheermal"],
//       sourceApi: "curated",
//       isFamous: true,
//       photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Indian_sweets.jpg/500px-Indian_sweets.jpg"]
//     },
//   ],

//   // ═══════════════════════════════════════════════════════════════════════════
//   // BANGALORE
//   // ═══════════════════════════════════════════════════════════════════════════
//   "Bangalore": [
//     {
//       name: "Bangalore Palace",
//       lat: 12.9983, lng: 77.5921,
//       category_name: "palace",
//       rating: 4.4, user_ratings_total: 20000,
//       description: "Tudor-style palace built in 1887 with fortified towers. Houses Victorian furniture, paintings, and ballroom.",
//       tags: ["heritage", "palace", "architecture", "tudor", "royalty"],
//       sourceApi: "curated",
//       isFamous: true,
//       photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Bangalore_Palace.jpg/500px-Bangalore_Palace.jpg"]
//     },
//     {
//       name: "Cubbon Park",
//       lat: 12.9766, lng: 77.6021,
//       category_name: "park",
//       rating: 4.5, user_ratings_total: 25000,
//       description: "300-acre urban park with 19th-century Bandstand, statues, and tree-lined paths. The lung of Bangalore.",
//       tags: ["park", "nature", "jogging", "historic", "colonial"],
//       sourceApi: "curated",
//       isFamous: true,
//       photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/Cubbon_Park.jpg/500px-Cubbon_Park.jpg"]
//     },
//     {
//       name: "Lalbagh Botanical Garden",
//       lat: 12.9507, lng: 77.5848,
//       category_name: "botanical garden",
//       rating: 4.5, user_ratings_total: 30000,
//       description: "240-acre garden with a 18th-century fortress, Glass House (like London), and 1,000+ plant species. Great for sunrise.",
//       tags: ["garden", "botanical", "nature", "glass-house", "heritage"],
//       sourceApi: "curated",
//       isFamous: true,
//       photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Lalbagh.jpg/500px-Lalbagh.jpg"]
//     },
//     {
//       name: "ISKCON Temple",
//       lat: 13.0099, lng: 77.5512,
//       category_name: "temple",
//       rating: 4.5, user_ratings_total: 15000,
//       description: "Stunning Hare Krishna temple with intricate carvings. Largest ISKCON temple with cultural programs and prasadam.",
//       tags: ["temple", "hindu", "spiritual", "architecture", "culture"],
//       sourceApi: "curated",
//       isFamous: true,
//       photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/ISKCON_Temple_Bangalore.jpg/500px-ISKCON_Temple_Bangalore.jpg"]
//     },
//     {
//       name: "Tipu Sultan's Summer Palace",
//       lat: 12.9559, lng: 77.5727,
//       category_name: "palace",
//       rating: 4.2, user_ratings_total: 12000,
//       description: "Indo-Saracenic palace built in 1791 where Tipu Sultan conducted business. Teakwood interiors with floral motifs.",
//       tags: ["heritage", "palace", "mysore", "architecture", "history"],
//       sourceApi: "curated",
//       isFamous: true,
//       photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Tipu_Sultan_Summer_Palace.jpg/500px-Tipu_Sultan_Summer_Palace.jpg"]
//     },

//     // RESTAURANTS & FOOD
//     {
//       name: "MTR (Mavalli Tiffin Room)",
//       lat: 12.9408, lng: 77.5746,
//       category_name: "restaurant",
//       rating: 4.4, user_ratings_total: 18000,
//       description: "Legendary 1924 restaurant famous for Rava Idli, Kesari Bath, and Filter Coffee. Open 24 hours since 1944.",
//       tags: ["south-indian", "historic", "idli", "must-visit", "breakfast"],
//       sourceApi: "curated",
//       isFamous: true,
//       photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Idli_sambar.jpg/500px-Idli_sambar.jpg"]
//     },
//     {
//       name: "Vidyarthi Bhavan",
//       lat: 12.9575, lng: 77.5714,
//       category_name: "restaurant",
//       rating: 4.4, user_ratings_total: 15000,
//       description: "Iconic 1943 restaurant famous for BeneeshMek. Crispy Masala Dosa served on banana leaf in unchanged ambiance.",
//       tags: ["south-indian", "dosa", "historic", "masala-dosa", "must-visit"],
//       sourceApi: "curated",
//       isFamous: true,
//       photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Dosa.jpg/500px-Dosa.jpg"]
//     },
//     {
//       name: "Toit Brewpub",
//       lat: 12.9348, lng: 77.6105,
//       category_name: "restaurant",
//       rating: 4.3, user_ratings_total: 12000,
//       description: "India's first brewpub with own craft beers. Italian wood-fired pizzas and lively atmosphere in Indiranagar.",
//       tags: ["brewpub", "craft-beer", "pizza", "nightlife", "popular"],
//       sourceApi: "curated",
//       isFamous: true,
//       photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Craft_beer.jpg/500px-Craft_beer.jpg"]
//     },
//     {
//       name: "VV Puram Food Street",
//       lat: 12.9535, lng: 77.5755,
//       category_name: "street food",
//       rating: 4.4, user_ratings_total: 10000,
//       description: "Night food street with 100+ vendors serving dosas, chaats, ice cream rolls, and South Indian specialties.",
//       tags: ["street-food", "night", "diverse", "budget-friendly", "local"],
//       sourceApi: "curated",
//       isFamous: true,
//       photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Dosa.jpg/500px-Dosa.jpg"]
//     },

//     // WILDLIFE & NATURE
//     {
//       name: " Bannerghatta National Park",
//       lat: 12.7782, lng: 77.5966,
//       category_name: "national park",
//       rating: 4.5, user_ratings_total: 18000,
//       description: "National park with butterfly park, zoo, safari, and temple. 25,000+ animals including tigers, lions, and elephants.",
//       tags: ["national-park", "safari", "wildlife", "butterfly", "nature"],
//       sourceApi: "curated",
//       isFamous: true,
//       photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Bannerghatta_National_Park.jpg/500px-Bannerghatta_National_Park.jpg"]
//     },
//     {
//       name: "Nandi Hills",
//       lat: 13.3735, lng: 77.6836,
//       category_name: "national park",
//       rating: 4.5, user_ratings_total: 15000,
//       description: "Ancient fort and hill station 60km from Bangalore. Popular for sunrise treks, paragliding, and Tipu Drop point.",
//       tags: ["hill", "sunrise", "trekking", "fort", "adventure", "paragliding"],
//       sourceApi: "curated",
//       isFamous: true,
//       photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/Nandi_Hills.jpg/500px-Nandi_Hills.jpg"]
//     },
//   ],

//   // ═══════════════════════════════════════════════════════════════════════════
//   // HYDERABAD
//   // ═══════════════════════════════════════════════════════════════════════════
//   "Hyderabad": [
//     {
//       name: "Charminar",
//       lat: 17.3616, lng: 78.4747,
//       category_name: "monument",
//       rating: 4.5, user_ratings_total: 40000,
//       description: "Iconic monument built in 1591 with four ornate minarets. Symbol of Hyderabad - Laad Bazaar beneath it is famous for bangles.",
//       tags: ["iconic", "heritage", "architecture", "must-visit", "shopping"],
//       sourceApi: "curated",
//       isFamous: true,
//       photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Charminar.jpg/500px-Charminar.jpg"]
//     },
//     {
//       name: "Golconda Fort",
//       lat: 17.3833, lng: 78.4011,
//       category_name: "fort",
//       rating: 4.5, user_ratings_total: 25000,
//       description: "Historic fort famous for diamond trade. Sound and light show depicts 400 years of Deccan history. Acoustic engineering marvel.",
//       tags: ["heritage", "fort", "history", "sound-light", "diamond"],
//       sourceApi: "curated",
//       isFamous: true,
//       photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Golconda_Fort.jpg/500px-Golconda_Fort.jpg"]
//     },
//     {
//       name: "Hussain Sagar Lake",
//       lat: 17.4356, lng: 78.4494,
//       category_name: "lake",
//       rating: 4.4, user_ratings_total: 20000,
//       description: "Heart-shaped lake with monolithic Buddha statue (18m). Necklace Road promenade is perfect for evening strolls.",
//       tags: ["lake", "buddha", "views", "sunset", "evening", "promenade"],
//       sourceApi: "curated",
//       isFamous: true,
//       photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Hussain_Sagar.jpg/500px-Hussain_Sagar.jpg"]
//     },
//     {
//       name: "Golconda Diamond Mines",
//       lat: 17.3830, lng: 78.4010,
//       category_name: "monument",
//       rating: 4.3, user_ratings_total: 10000,
//       description: "Ancient mines where Koh-i-Noor and Hope Diamond originated. Tour the mine shafts and see diamond cutting demonstrations.",
//       tags: ["heritage", "diamond", "mines", "history", "tour"],
//       sourceApi: "curated",
//       isFamous: true,
//       photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Golconda_Fort.jpg/500px-Golconda_Fort.jpg"]
//     },
//     {
//       name: "Chowmahalla Palace",
//       lat: 17.3583, lng: 78.4688,
//       category_name: "palace",
//       rating: 4.6, user_ratings_total: 12000,
//       description: "Nizam's palace with elegant courtyards and collection of vintage cars. One of the most beautiful palaces in India.",
//       tags: ["heritage", "palace", "nizam", "architecture", "luxury"],
//       sourceApi: "curated",
//       isFamous: true,
//       photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Chowmahalla_Palace.jpg/500px-Chowmahalla_Palace.jpg"]
//     },

//     // RESTAURANTS & FOOD
//     {
//       name: "Paradise Restaurant",
//       lat: 17.3875, lng: 78.4851,
//       category_name: "restaurant",
//       rating: 4.2, user_ratings_total: 15000,
//       description: "Legendary since 1950 for Hyderabadi Biryani and Mirchi Ka Salan. The birthplace of the iconic restaurant chain.",
//       tags: ["hyderabadi", "biryani", "historic", "must-visit", "curry"],
//       sourceApi: "curated",
//       isFamous: true,
//       photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Hyderabadi_Biryani.jpg/500px-Hyderabadi_Biryani.jpg"]
//     },
//     {
//       name: "Shah Ghouse Cafe",
//       lat: 17.3920, lng: 78.4825,
//       category_name: "restaurant",
//       rating: 4.3, user_ratings_total: 10000,
//       description: "Famous for Haleem during Ramzan and authentic biryani all year. Open since 1978 near Charminar.",
//       tags: ["hyderabadi", "haleem", "biryani", "night", "historic"],
//       sourceApi: "curated",
//       isFamous: true,
//       photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Hyderabadi_Biryani.jpg/500px-Hyderabadi_Biryani.jpg"]
//     },
//     {
//       name: "Pista House (Baker Street)",
//       lat: 17.4425, lng: 78.4485,
//       category_name: "restaurant",
//       rating: 4.3, user_ratings_total: 8000,
//       description: "Famous for Haleem, biryani, and Pakistani-style nihari. The go-to place for authentic non-vegetarian cuisine.",
//       tags: ["haleem", "hyderabadi", "biryani", "nihari", "must-visit"],
//       sourceApi: "curated",
//       isFamous: true,
//       photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Hyderabadi_Biryani.jpg/500px-Hyderabadi_Biryani.jpg"]
//     },
//     {
//       name: "Laad Bazaar",
//       lat: 17.3610, lng: 78.4740,
//       category_name: "market",
//       rating: 4.2, user_ratings_total: 12000,
//       description: "Bangle market beneath Charminar famous for lac bangles, pearls, and Bidriware. Shopping heaven since centuries.",
//       tags: ["market", "shopping", "bangles", "pearls", "traditional"],
//       sourceApi: "curated",
//       isFamous: true,
//       photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Charminar.jpg/500px-Charminar.jpg"]
//     },

//     // WILDLIFE & NATURE
//     {
//       name: "Nehru Zoological Park",
//       lat: 17.3517, lng: 78.5566,
//       category_name: "zoo",
//       rating: 4.3, user_ratings_total: 15000,
//       description: "One of the largest zoos in India with 1,500+ species. Lion safari, bear safari, and mammoth dinosaur park.",
//       tags: ["zoo", "safari", "wildlife", "family", "animals"],
//       sourceApi: "curated",
//       isFamous: true,
//       photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Zoo.jpg/500px-Zoo.jpg"]
//     },
//     {
//       name: "KBR National Park",
//       lat: 17.4165, lng: 78.4175,
//       category_name: "national park",
//       rating: 4.2, user_ratings_total: 5000,
//       description: "160-acre urban park with walking trails and over 130 species of birds. Perfect for morning bird watching.",
//       tags: ["national-park", "birds", "nature", "hiking", "morning"],
//       sourceApi: "curated",
//       isFamous: true,
//       photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/National_park.jpg/500px-National_park.jpg"]
//     },
//   ],

//   // ═══════════════════════════════════════════════════════════════════════════
//   // CHENNAI
//   // ═══════════════════════════════════════════════════════════════════════════
//   "Chennai": [
//     {
//       name: "Marina Beach",
//       lat: 13.0569, lng: 80.2824,
//       category_name: "beach",
//       rating: 4.4, user_ratings_total: 30000,
//       description: "Second longest urban beach in the world (13km). Sunrise walks, horse rides, and street food vendors galore.",
//       tags: ["beach", "sunrise", "longest", "evening", "family"],
//       sourceApi: "curated",
//       isFamous: true,
//       photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Marina_Beach_Chennai.jpg/500px-Marina_Beach_Chennai.jpg"]
//     },
//     {
//       name: "Kapaleeshwarar Temple",
//       lat: 13.0339, lng: 80.2615,
//       category_name: "temple",
//       rating: 4.6, user_ratings_total: 18000,
//       description: "6th-century Dravidian temple with 37-meter gopuram. Surrounded by the sacred tank (Kodiswana) and bustling bazaar.",
//       tags: ["temple", "hindu", "dravidian", "architecture", "spiritual"],
//       sourceApi: "curated",
//       isFamous: true,
//       photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Kapaleeshwarar_Temple.jpg/500px-Kapaleeshwarar_Temple.jpg"]
//     },
//     {
//       name: "Fort St. George",
//       lat: 13.0817, lng: 80.2921,
//       category_name: "fort",
//       rating: 4.3, user_ratings_total: 12000,
//       description: "First English fortress in India built in 1644. Houses St. Mary's Church and Tamil Nadu's legislative assembly.",
//       tags: ["heritage", "fort", "colonial", "british", "history"],
//       sourceApi: "curated",
//       isFamous: true,
//       photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/Fort_St._George.jpg/500px-Fort_St._George.jpg"]
//     },
//     {
//       name: "San Thome Basilica",
//       lat: 13.0312, lng: 80.2765,
//       category_name: "church",
//       rating: 4.5, user_ratings_total: 15000,
//       description: "Basilica built over St. Thomas' burial site - one of the 12 apostles. Gothic architecture with beautiful stained glass.",
//       tags: ["church", "christian", "st-thomas", "architecture", "heritage"],
//       sourceApi: "curated",
//       isFamous: true,
//       photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/San_Thome_Basilica.jpg/500px-San_Thome_Basilica.jpg"]
//     },
//     {
//       name: "Vivekananda House (Ice House)",
//       lat: 13.0550, lng: 80.2665,
//       category_name: "museum",
//       rating: 4.4, user_ratings_total: 10000,
//       description: "Where Swami Vivekananda stayed in 1893 before his famous Chicago speech. Now a heritage museum with spiritual exhibits.",
//       tags: ["heritage", "museum", "spiritual", "swami-vivekananda", "history"],
//       sourceApi: "curated",
//       isFamous: true,
//       photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Vivekananda_House.jpg/500px-Vivekananda_House.jpg"]
//     },

//     // RESTAURANTS & FOOD
//     {
//       name: "Murugan Idli Shop",
//       lat: 13.0525, lng: 80.2250,
//       category_name: "restaurant",
//       rating: 4.3, user_ratings_total: 12000,
//       description: "Legendary for fluffy idlis and variety dosas. Specializes in pongal and South Indian breakfast staples.",
//       tags: ["south-indian", "idli", "dosa", "breakfast", "vegetarian"],
//       sourceApi: "curated",
//       isFamous: true,
//       photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Idli_sambar.jpg/500px-Idli_sambar.jpg"]
//     },
//     {
//       name: "Saravana Bhavan",
//       lat: 13.0735, lng: 80.2635,
//       category_name: "restaurant",
//       rating: 4.2, user_ratings_total: 15000,
//       description: "World-famous vegetarian restaurant chain started in Chennai. Unlimited thali with 20+ items is legendary.",
//       tags: ["south-indian", "vegetarian", "thali", "unlimited", "must-visit"],
//       sourceApi: "curated",
//       isFamous: true,
//       photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/South_Indian_Thali.jpg/500px-South_Indian_Thali.jpg"]
//     },
//     {
//       name: "Buhari Hotel",
//       lat: 13.0560, lng: 80.2630,
//       category_name: "restaurant",
//       rating: 4.3, user_ratings_total: 10000,
//       description: "Legendary for Biryani, Chicken 65, and Tandoori dishes since 1960. Legendary non-vegetarian destination.",
//       tags: ["biryani", "tandoori", "non-veg", "historic", "chennai-special"],
//       sourceApi: "curated",
//       isFamous: true,
//       photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Hyderabadi_Biryani.jpg/500px-Hyderabadi_Biryani.jpg"]
//     },
//     {
//       name: "T Nagar (Thyagaraya Nagar)",
//       lat: 13.0418, lng: 80.2341,
//       category_name: "market",
//       rating: 4.1, user_ratings_total: 15000,
//       description: "Chennai's premier shopping district with silk sarees, jewelry, electronics. Best during festival season.",
//       tags: ["market", "shopping", "silk", "sarees", "jewelry"],
//       sourceApi: "curated",
//       isFamous: true,
//       photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Chennai_market.jpg/500px-Chennai_market.jpg"]
//     },

//     // WILDLIFE & NATURE
//     {
//       name: "Arignar Anna Zoological Park",
//       lat: 12.8780, lng: 80.0812,
//       category_name: "zoo",
//       rating: 4.3, user_ratings_total: 12000,
//       description: "Largest zoo in South Asia with 1,500+ species. Tiger Safari, Elephant Safari, and Nocturnal Animal House.",
//       tags: ["zoo", "safari", "wildlife", "family", "largest"],
//       sourceApi: "curated",
//       isFamous: true,
//       photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Zoo.jpg/500px-Zoo.jpg"]
//     },
//     {
//       name: "Vandalur Wildlife Sanctuary (ARRS)",
//       lat: 12.8700, lng: 80.0735,
//       category_name: "nature preserve",
//       rating: 4.4, user_ratings_total: 8000,
//       description: "Reserve forest near Chennai with ecological diversity, ancient temples, and cave exploration opportunities.",
//       tags: ["wildlife", "nature", "forest", "hiking", "ecology"],
//       sourceApi: "curated",
//       isFamous: true,
//       photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/National_park.jpg/500px-National_park.jpg"]
//     },
//   ],

//   // ═══════════════════════════════════════════════════════════════════════════
//   // KOLKATA
//   // ═══════════════════════════════════════════════════════════════════════════
//   "Kolkata": [
//     {
//       name: "Victoria Memorial",
//       lat: 22.5448, lng: 88.3426,
//       category_name: "monument",
//       rating: 4.6, user_ratings_total: 25000,
//       description: "White marble masterpiece built in memory of Queen Victoria. Indo-Saracenic architecture with 25 galleries housing British art.",
//       tags: ["heritage", "architecture", "british", "museum", "iconic"],
//       sourceApi: "curated",
//       isFamous: true,
//       photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Victoria_Memorial.jpg/500px-Victoria_Memorial.jpg"]
//     },
//     {
//       name: "Howrah Bridge",
//       lat: 22.5858, lng: 88.3431,
//       category_name: "monument",
//       rating: 4.5, user_ratings_total: 30000,
//       description: "Cantilever bridge over Hooghly - busiest cantilever bridge in the world. Iconic symbol of Kolkata with massive traffic.",
//       tags: ["iconic", "bridge", "architecture", "hooghly", "engineering"],
//       sourceApi: "curated",
//       isFamous: true,
//       photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/Howrah_Bridge.jpg/500px-Howrah_Bridge.jpg"]
//     },
//     {
//       name: "Indian Museum",
//       lat: 22.5582, lng: 88.3520,
//       category_name: "art museum",
//       rating: 4.4, user_ratings_total: 12000,
//       description: "Oldest museum in India (1814) with 6 galleries - Egyptian mummy, dinosaur fossils, and Buddhist sculptures.",
//       tags: ["museum", "heritage", "history", "mummy", "artifacts"],
//       sourceApi: "curated",
//       isFamous: true,
//       photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Indian_Museum.jpg/500px-Indian_Museum.jpg"]
//     },
//     {
//       name: "Dakshineswar Kali Temple",
//       lat: 22.6618, lng: 88.3429,
//       category_name: "temple",
//       rating: 4.6, user_ratings_total: 20000,
//       description: "9-spired temple on the banks of Ganga built by Rani Rashmoni. Where Sri Ramakrishna served as priest.",
//       tags: ["temple", "kolkata", "spiritual", "kali", "heritage"],
//       sourceApi: "curated",
//       isFamous: true,
//       photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/Dakshineswar_Kali_Temple.jpg/500px-Dakshineswar_Kali_Temple.jpg"]
//     },
//     {
//       name: "Eden Gardens Cricket Stadium",
//       lat: 22.5646, lng: 88.3431,
//       category_name: "scenic lookout",
//       rating: 4.4, user_ratings_total: 15000,
//       description: "One of the oldest and largest cricket stadiums in the world. Guided tours available when no matches.",
//       tags: ["cricket", "stadium", "iconic", "sports", "heritage"],
//       sourceApi: "curated",
//       isFamous: true,
//       photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Eden_Gardens.jpg/500px-Eden_Gardens.jpg"]
//     },
//     {
//       name: "Belur Math",
//       lat: 22.6265, lng: 88.3570,
//       category_name: "temple",
//       rating: 4.5, user_ratings_total: 10000,
//       description: "Headquarters of Ramakrishna Mission blending Hindu, Islamic, and Christian architecture. Beautiful grounds on the Ganga.",
//       tags: ["temple", "ramakrishna", "spiritual", "architecture", "heritage"],
//       sourceApi: "curated",
//       isFamous: true,
//       photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Belur_Math.jpg/500px-Belur_Math.jpg"]
//     },

//     // RESTAURANTS & FOOD
//     {
//       name: "Indian Coffee House",
//       lat: 22.5755, lng: 88.3620,
//       category_name: "cafe",
//       rating: 4.2, user_ratings_total: 12000,
//       description: "Legendary coffee house where intellectual discussions happened. Filter coffee served in brass tumblers since 1957.",
//       tags: ["coffee", "historic", "intellectual", "heritage", "filter-coffee"],
//       sourceApi: "curated",
//       isFamous: true,
//       photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Indian_Coffee.jpg/500px-Indian_Coffee.jpg"]
//     },
//     {
//       name: "Kbusters (Mitra Samrat)",
//       lat: 22.5695, lng: 88.3625,
//       category_name: "restaurant",
//       rating: 4.3, user_ratings_total: 8000,
//       description: "Kolkata's favorite for Kathi Rolls, Moglai Paratha, and Mughlai dishes. Bengali fast food institution.",
//       tags: ["bengali", "rolls", "mughlai", "street-food", "budget-friendly"],
//       sourceApi: "curated",
//       isFamous: true,
//       photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Bengali_food.jpg/500px-Bengali_food.jpg"]
//     },
//     {
//       name: "Peter Cat",
//       lat: 22.5700, lng: 88.3615,
//       category_name: "restaurant",
//       rating: 4.3, user_ratings_total: 10000,
//       description: "Legendary restaurant since 1960 famous for Chelo Kebab (rice plate with grilled kebab). Bengali hospitality meets Continental.",
//       tags: ["bengali", "kebab", "historic", "chelo", "must-visit"],
//       sourceApi: "curated",
//       isFamous: true,
//       photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Bengali_food.jpg/500px-Bengali_food.jpg"]
//     },
//     {
//       name: "New Market (Hogg Market)",
//       lat: 22.5610, lng: 88.3470,
//       category_name: "market",
//       rating: 4.1, user_ratings_total: 15000,
//       description: "Colonial era market with 2,000+ shops. Electronics, clothes, books, and legendary fish market nearby.",
//       tags: ["market", "shopping", "colonial", "electronics", "fish"],
//       sourceApi: "curated",
//       isFamous: true,
//       photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/New_Market_Kolkata.jpg/500px-New_Market_Kolkata.jpg"]
//     },

//     // WILDLIFE & NATURE
//     {
//       name: "Sundarbans National Park",
//       lat: 21.9456, lng: 88.8956,
//       category_name: "national park",
//       rating: 4.7, user_ratings_total: 15000,
//       description: "UNESCO World Heritage largest mangrove forest in the world. Home to Royal Bengal Tigers and unique wildlife.",
//       tags: ["national-park", "unesco", "mangrove", "tiger", "wildlife", "day-trip"],
//       sourceApi: "curated",
//       isFamous: true,
//       photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Sundarbans.jpg/500px-Sundarbans.jpg"]
//     },
//     {
//       name: "Alipore Zoological Garden",
//       lat: 22.5356, lng: 88.3326,
//       category_name: "zoo",
//       rating: 4.2, user_ratings_total: 12000,
//       description: "Oldest zoological park in India (1876) with Royal Bengal Tiger, White Tigers, and orangutan exhibits.",
//       tags: ["zoo", "heritage", "historic", "tiger", "animals"],
//       sourceApi: "curated",
//       isFamous: true,
//       photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Zoo.jpg/500px-Zoo.jpg"]
//     },
//   ],

//   // ═══════════════════════════════════════════════════════════════════════════
//   // CHANDIGARH
//   // ═══════════════════════════════════════════════════════════════════════════
//   "Chandigarh": [
//     {
//       name: "Rock Garden (Nek Chand)",
//       lat: 30.7475, lng: 76.8085,
//       category_name: "garden",
//       rating: 4.6, user_ratings_total: 20000,
//       description: "UNESCO World Heritage unique garden built by Nek Chand from industrial waste and discarded items. 5,000+ sculptures.",
//       tags: ["heritage", "unesco", "garden", "sculpture", "unique", "art"],
//       sourceApi: "curated",
//       isFamous: true,
//       photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Rock_Garden_Chandigarh.jpg/500px-Rock_Garden_Chandigarh.jpg"]
//     },
//     {
//       name: "Sukhna Lake",
//       lat: 30.7425, lng: 76.8185,
//       category_name: "lake",
//       rating: 4.4, user_ratings_total: 18000,
//       description: "Serene artificial lake in the Shivalik foothills. Morning yoga, boat rides, and beautiful sunrise views.",
//       tags: ["lake", "sunrise", "boating", "peaceful", "morning"],
//       sourceApi: "curated",
//       isFamous: true,
//       photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Sukhna_Lake.jpg/500px-Sukhna_Lake.jpg"]
//     },
//     {
//       name: "Rose Garden (Zakir Rose)",
//       lat: 30.7417, lng: 76.7856,
//       category_name: "garden",
//       rating: 4.3, user_ratings_total: 10000,
//       description: "Asia's largest rose garden with 50,000+ rose bushes of 1,600 varieties. Annual Rose Festival held here.",
//       tags: ["garden", "roses", "flowers", "festival", "nature"],
//       sourceApi: "curated",
//       isFamous: true,
//       photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Rose_Garden.jpg/500px-Rose_Garden.jpg"]
//     },
//     {
//       name: "Chandigarh Capitol Complex",
//       lat: 30.7714, lng: 76.7748,
//       category_name: "heritage building",
//       rating: 4.4, user_ratings_total: 8000,
//       description: "UNESCO World Heritage - Le Corbusier's masterpiece including High Court, Secretariat, and Assembly buildings.",
//       tags: ["heritage", "unesco", "le-corbusier", "architecture", "modern"],
//       sourceApi: "curated",
//       isFamous: true,
//       photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Capitol_Complex.jpg/500px-Capitol_Complex.jpg"]
//     },
//     {
//       name: "Punjab University Campus",
//       lat: 30.7622, lng: 76.7724,
//       category_name: "heritage building",
//       rating: 4.3, user_ratings_total: 5000,
//       description: "Le Corbusier designed campus with stunning architecture. Beautiful gardens and peaceful atmosphere.",
//       tags: ["heritage", "le-corbusier", "architecture", "university", "peaceful"],
//       sourceApi: "curated",
//       isFamous: true,
//       photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Punjab_University.jpg/500px-Punjab_University.jpg"]
//     },

//     // RESTAURANTS & FOOD
//     {
//       name: "Pal Dhaba",
//       lat: 30.7435, lng: 76.7850,
//       category_name: "restaurant",
//       rating: 4.4, user_ratings_total: 12000,
//       description: "Legendary dhaba since 1962 famous for Butter Chicken, Dal Makhani, and stuffed naans. Open 24 hours.",
//       tags: ["punjabi", "dhaba", "butter-chicken", "historic", "must-visit"],
//       sourceApi: "curated",
//       isFamous: true,
//       photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Dal_Makhani.jpg/500px-Dal_Makhani.jpg"]
//     },
//     {
//       name: "Sukhna Restaurant",
//       lat: 30.7420, lng: 76.8200,
//       category_name: "restaurant",
//       rating: 4.2, user_ratings_total: 5000,
//       description: "Lakeview restaurant serving authentic Punjabi and North Indian cuisine. Great ambiance with Sukhna Lake views.",
//       tags: ["punjabi", "lake-view", "dinner", "ambiance", "romantic"],
//       sourceApi: "curated",
//       isFamous: true,
//       photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Sukhna_Lake.jpg/500px-Sukhna_Lake.jpg"]
//     },
//     {
//       name: "Sector 17 Market",
//       lat: 30.7415, lng: 76.7980,
//       category_name: "market",
//       rating: 4.0, user_ratings_total: 8000,
//       description: "Chandigarh's main shopping area with brand stores, street vendors, and food stalls. Great for evening walks.",
//       tags: ["market", "shopping", "evening", "brands", "food"],
//       sourceApi: "curated",
//       isFamous: true,
//       photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/Chandigarh.jpg/500px-Chandigarh.jpg"]
//     },

//     // NEARBY WILDLIFE
//     {
//       name: "Chhatbir Zoo (Mahendra Chaudhary Zoological Park)",
//       lat: 30.7375, lng: 76.7760,
//       category_name: "zoo",
//       rating: 4.3, user_ratings_total: 8000,
//       description: "Famous for Bengal tigers, lions, and rare white tigers. 500+ species of birds. Good for family outings.",
//       tags: ["zoo", "tiger", "wildlife", "family", "animals"],
//       sourceApi: "curated",
//       isFamous: true,
//       photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Zoo.jpg/500px-Zoo.jpg"]
//     },
//   ],

  // ═══════════════════════════════════════════════════════════════════════════
  // JERUSALEM
  // ═══════════════════════════════════════════════════════════════════════════
  "Jerusalem": [
    {
      name: "Western Wall",
      lat: 31.7782, lng: 35.2353,
      category_name: "monument",
      rating: 4.8, user_ratings_total: 45000,
      description: "Holiest Jewish prayer site in Jerusalem. Ancient retaining wall of the Second Temple. Millions visit for spiritual connection.",
      tags: ["iconic", "jewish", "spiritual", "must-visit", "history"],
      sourceApi: "curated",
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Western_Wall.jpg/500px-Western_Wall.jpg"]
    },
    {
      name: "Church of the Holy Sepulchre",
      lat: 31.7785, lng: 35.2289,
      category_name: "church",
      rating: 4.7, user_ratings_total: 40000,
      description: "Traditional site of Jesus's burial and resurrection. One of Christianity's holiest sites, built by Emperor Constantine.",
      tags: ["christian", "historic", "spiritual", "must-visit", "pilgrimage"],
      sourceApi: "curated",
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Church_of_the_Holy_Sepulchre.jpg/500px-Church_of_the_Holy_Sepulchre.jpg"]
    },
    {
      name: "Dome of the Rock",
      lat: 31.7780, lng: 35.2358,
      category_name: "temple",
      rating: 4.7, user_ratings_total: 35000,
      description: "Iconic golden-domed shrine on Temple Mount. Built in 691 AD, believed to be Muhammad's ascension spot.",
      tags: ["islamic", "iconic", "temple-mount", "architecture", "must-visit"],
      sourceApi: "curated",
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/Dome_of_the_Rock.jpg/500px-Dome_of_the_Rock.jpg"]
    },
    {
      name: "Yad Vashem Holocaust Memorial",
      lat: 31.7763, lng: 35.1907,
      category_name: "museum",
      rating: 4.8, user_ratings_total: 30000,
      description: "World Holocaust remembrance center with museum, monuments, and names of victims. Deeply moving memorial experience.",
      tags: ["museum", "holocaust", "history", "memorial", "must-visit"],
      sourceApi: "curated",
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/Yad_Vashem.jpg/500px-Yad_Vashem.jpg"]
    },
    {
      name: "Mount of Olives",
      lat: 31.7800, lng: 35.2428,
      category_name: "cemetery",
      rating: 4.6, user_ratings_total: 20000,
      description: "Jewish cemetery with 3,000-year history. Biblical significance with stunning Old City views.",
      tags: ["biblical", "views", "cemetery", "religious", "sunset"],
      sourceApi: "curated",
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Mount_of_Olives.jpg/500px-Mount_of_Olives.jpg"]
    },

    // RESTAURANTS & FOOD
    {
      name: "Machane Yehuda Market",
      lat: 31.7822, lng: 35.2291,
      category_name: "food market",
      rating: 4.5, user_ratings_total: 25000,
      description: "Vibrant shuk with fresh produce, spices, and street food. The heart of Jerusalem's culinary scene.",
      tags: ["market", "street-food", "spices", "local", "must-visit"],
      sourceApi: "curated",
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Machane_Yehuda.jpg/500px-Machane_Yehuda.jpg"]
    },
    {
      name: "Azura",
      lat: 31.7882, lng: 35.2212,
      category_name: "restaurant",
      rating: 4.5, user_ratings_total: 8000,
      description: "Legendary Jerusalem restaurant famous for hummus, shawarma, and authentic Middle Eastern dishes.",
      tags: ["hummus", "middle-eastern", "historic", "must-visit", "local"],
      sourceApi: "curated",
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/Hummus.jpg/500px-Hummus.jpg"]
    },
    {
      name: "Palestine Bakery",
      lat: 31.7825, lng: 35.2268,
      category_name: "bakery",
      rating: 4.3, user_ratings_total: 5000,
      description: "Family-run bakery famous for fresh pita, maftoul, and traditional pastries.",
      tags: ["bakery", "bread", "pastries", "traditional", "local"],
      sourceApi: "curated",
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Bread.jpg/500px-Bread.jpg"]
    },

    // PARKS & NATURE
    {
      name: "Jerusalem Forest",
      lat: 31.7720, lng: 35.1850,
      category_name: "park",
      rating: 4.4, user_ratings_total: 12000,
      description: "Pine forest park near Yad Vashem. Hiking trails and peaceful nature escape from the city.",
      tags: ["park", "forest", "hiking", "nature", "peaceful"],
      sourceApi: "curated",
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Jerusalem_Forest.jpg/500px-Jerusalem_Forest.jpg"]
    },
  ],

  // ═══════════════════════════════════════════════════════════════════════════
  // DOHA
  // ═══════════════════════════════════════════════════════════════════════════
  "Doha": [
    {
      name: "Museum of Islamic Art",
      lat: 25.2867, lng: 51.5355,
      category_name: "art museum",
      rating: 4.7, user_ratings_total: 20000,
      description: "Iconic five-story museum housing Islamic art treasures from 7th-19th centuries. Stunning architecture.",
      tags: ["museum", "islamic", "art", "architecture", "must-visit"],
      sourceApi: "curated",
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Museum_of_Islamic_Art.jpg/500px-Museum_of_Islamic_Art.jpg"]
    },
    {
      name: "Katara Cultural Village",
      lat: 25.3198, lng: 51.5207,
      category_name: "cultural center",
      rating: 4.5, user_ratings_total: 15000,
      description: "Cultural village with amphitheater, galleries, and fine dining. Qatari heritage meets contemporary art.",
      tags: ["culture", "village", "art", "amphitheater", "dining"],
      sourceApi: "curated",
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/Katara.jpg/500px-Katara.jpg"]
    },
    {
      name: "Corniche",
      lat: 25.2861, lng: 51.5308,
      category_name: "scenic lookout",
      rating: 4.6, user_ratings_total: 25000,
      description: "7km waterfront promenade with stunning skyline views. Perfect for evening strolls.",
      tags: ["waterfront", "views", "evening", "promenade", "romantic"],
      sourceApi: "curated",
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/c/c0/Doha_Corniche.jpg/500px-Doha_Corniche.jpg"]
    },
    {
      name: "Souq Waqif",
      lat: 25.2866, lng: 51.5184,
      category_name: "market",
      rating: 4.5, user_ratings_total: 30000,
      description: "Restored traditional market with spices, textiles, and falconry. Authentic Qatari shopping experience.",
      tags: ["market", "shopping", "spices", "traditional", "souq"],
      sourceApi: "curated",
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Souq_Waqif.jpg/500px-Souq_Waqif.jpg"]
    },
    {
      name: "Aspire Park",
      lat: 25.2519, lng: 51.4875,
      category_name: "park",
      rating: 4.4, user_ratings_total: 12000,
      description: "Doha's largest park with the iconic Torso sculpture. Popular for families and fitness.",
      tags: ["park", "fitness", "family", "sculpture", "nature"],
      sourceApi: "curated",
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/Aspire_Park.jpg/500px-Aspire_Park.jpg"]
    },

    // RESTAURANTS & FOOD
    {
      name: "Al Jasra",
      lat: 25.2874, lng: 51.5231,
      category_name: "restaurant",
      rating: 4.4, user_ratings_total: 6000,
      description: "Elegant restaurant serving traditional Qatari cuisine in a heritage building.",
      tags: ["qatari", "traditional", "heritage", "fine-dining"],
      sourceApi: "curated",
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Qatari_Food.jpg/500px-Qatari_Food.jpg"]
    },
    {
      name: "Sheikha's Kitchen",
      lat: 25.2942, lng: 51.5173,
      category_name: "restaurant",
      rating: 4.3, user_ratings_total: 4000,
      description: "Popular local spot for Qatari breakfast, majboos, and traditional dishes.",
      tags: ["qatari", "breakfast", "local", "traditional"],
      sourceApi: "curated",
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/Breakfast.jpg/500px-Breakfast.jpg"]
    },

    // WATERFRONT & BEACH
    {
      name: "Katara Beach",
      lat: 25.3205, lng: 51.5210,
      category_name: "beach",
      rating: 4.3, user_ratings_total: 8000,
      description: "Public beach at Cultural Village. Clean sands and calm waters for families.",
      tags: ["beach", "family", "swimming", "water-sports"],
      sourceApi: "curated",
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Doha_Beach.jpg/500px-Doha_Beach.jpg"]
    },
  ],

  // ═══════════════════════════════════════════════════════════════════════════
  // SYDNEY
  // ═══════════════════════════════════════════════════════════════════════════
  "Sydney": [
    {
      name: "Sydney Opera House",
      lat: -33.8568, lng: 151.2153,
      category_name: "performing arts",
      rating: 4.7, user_ratings_total: 75000,
      description: "Iconic sail-shaped performing arts center. UNESCO site and Australia's most recognizable landmark.",
      tags: ["iconic", "architecture", "unesco", "must-visit", "performing-arts"],
      sourceApi: "curated",
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Sydney_Opera_House.jpg/500px-Sydney_Opera_House.jpg"]
    },
    {
      name: "Sydney Harbour Bridge",
      lat: -33.8522, lng: 151.2108,
      category_name: "monument",
      rating: 4.7, user_ratings_total: 60000,
      description: "Iron lattice bridge with stunning harbor views. Climb or walk across for iconic Sydney experience.",
      tags: ["iconic", "bridge", "views", "climbing", "must-visit"],
      sourceApi: "curated",
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Sydney_Harbour_Bridge.jpg/500px-Sydney_Harbour_Bridge.jpg"]
    },
    {
      name: "Bondi Beach",
      lat: -33.8908, lng: 151.2743,
      category_name: "beach",
      rating: 4.6, user_ratings_total: 45000,
      description: "World-famous beach with golden sands and surf culture. Scenic coastal walk to Icebergs pool.",
      tags: ["beach", "surf", "iconic", "coastal-walk", "must-visit"],
      sourceApi: "curated",
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Bondi_Beach.jpg/500px-Bondi_Beach.jpg"]
    },
    {
      name: "Taronga Zoo",
      lat: -33.8423, lng: 151.2416,
      category_name: "zoo",
      rating: 4.6, user_ratings_total: 35000,
      description: "Harborside zoo with 4,000+ animals. Sky Safari cable car and stunning city views.",
      tags: ["zoo", "wildlife", "family", "views", "must-visit"],
      sourceApi: "curated",
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Taronga_Zoo.jpg/500px-Taronga_Zoo.jpg"]
    },
    {
      name: "The Rocks",
      lat: -33.8534, lng: 151.2106,
      category_name: "neighborhood",
      rating: 4.5, user_ratings_total: 30000,
      description: "Historic waterfront neighborhood with cobblestone streets, markets, and heritage pubs.",
      tags: ["historic", "market", "neighborhood", "heritage", "pubs"],
      sourceApi: "curated",
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/The_Rocks.jpg/500px-The_Rocks.jpg"]
    },

    // RESTAURANTS & FOOD
    {
      name: "Sydney Fish Market",
      lat: -33.8697, lng: 151.1879,
      category_name: "food market",
      rating: 4.5, user_ratings_total: 25000,
      description: "Fresh seafood market with sushi, oyster bars, and daily auctions. Best for seafood lovers.",
      tags: ["seafood", "market", "sushi", "must-visit", "fish"],
      sourceApi: "curated",
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Sydney_Fish_Market.jpg/500px-Sydney_Fish_Market.jpg"]
    },
    {
      name: "Quay",
      lat: -33.8579, lng: 151.2502,
      category_name: "restaurant",
      rating: 4.6, user_ratings_total: 12000,
      description: "Fine dining with harbor views. Peter's famous for innovative Australian cuisine.",
      tags: ["fine-dining", "australian", "harbor-view", "celebration"],
      sourceApi: "curated",
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Australian_Cuisine.jpg/500px-Australian_Cuisine.jpg"]
    },
    {
      name: "The Interval",
      lat: -33.8568, lng: 151.2153,
      category_name: "cafe",
      rating: 4.3, user_ratings_total: 5000,
      description: "Opera House cafe with stunning harbor views. Perfect for pre-show drinks.",
      tags: ["cafe", "opera-house", "views", "drinks"],
      sourceApi: "curated",
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Sydney_Views.jpg/500px-Sydney_Views.jpg"]
    },

    // NATURE & BEACHES
    {
      name: "Royal Botanic Garden",
      lat: -33.8619, lng: 151.2153,
      category_name: "botanical garden",
      rating: 4.6, user_ratings_total: 20000,
      description: "Lush gardens surrounding Government House. Harbor views and native Australian flora.",
      tags: ["garden", "botanical", "nature", "harbor-views", "relaxing"],
      sourceApi: "curated",
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Botanic_Garden.jpg/500px-Botanic_Garden.jpg"]
    },
    {
      name: "Manly Beach",
      lat: -33.7966, lng: 151.7826,
      category_name: "beach",
      rating: 4.5, user_ratings_total: 25000,
      description: "Beach suburb accessible by ferry. Perfect surf, shops, and seafood restaurants.",
      tags: ["beach", "surf", "ferry", "family", "family"],
      sourceApi: "curated",
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Manly_Beach.jpg/500px-Manly_Beach.jpg"]
    },
  ],

  // ═══════════════════════════════════════════════════════════════════════════
  // LOS ANGELES
  // ══════════════════════════════════════════════════════════════════════���═���══
  "Los Angeles": [
    {
      name: "Hollywood Sign",
      lat: 34.1341, lng: -118.3215,
      category_name: "monument",
      rating: 4.5, user_ratings_total: 50000,
      description: "Iconic hillside sign spelling Hollywood. Most recognizable symbol of entertainment industry.",
      tags: ["iconic", "hollywood", "views", "must-visit", "photo-op"],
      sourceApi: "curated",
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Hollywood_Sign.jpg/500px-Hollywood_Sign.jpg"]
    },
    {
      name: "Hollywood Walk of Fame",
      lat: 34.1016, lng: -118.3267,
      category_name: "monument",
      rating: 4.4, user_ratings_total: 60000,
      description: "Stars embedded in sidewalk honoring entertainment icons. 2,600+ stars along Hollywood Blvd.",
      tags: ["iconic", "stars", "entertainment", "must-visit", "celebrity"],
      sourceApi: "curated",
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/Walk_of_Fame.jpg/500px-Walk_of_Fame.jpg"]
    },
    {
      name: "Venice Beach Boardwalk",
      lat: 33.9850, lng: -118.4695,
      category_name: "beach",
      rating: 4.4, user_ratings_total: 40000,
      description: "Eclectic beach boardwalk with performers, shops, and muscle beach. LA's most diverse beach experience.",
      tags: ["beach", "boardwalk", "skating", "street-performers", "unique"],
      sourceApi: "curated",
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Venice_Beach.jpg/500px-Venice_Beach.jpg"]
    },
    {
      name: "Santa Monica Pier",
      lat: 34.0086, lng: -118.4977,
      category_name: "beach",
      rating: 4.5, user_ratings_total: 45000,
      description: "Classic amusement park with Ferris wheel and Pacific Park. Historic LA beach destination.",
      tags: ["beach", "pier", "amusement-park", "family", "iconic"],
      sourceApi: "curated",
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Santa_Monica_Pier.jpg/500px-Santa_Monica_Pier.jpg"]
    },
    {
      name: "Griffith Observatory",
      lat: 34.1184, lng: -118.3004,
      category_name: "museum",
      rating: 4.7, user_ratings_total: 40000,
      description: "Art Deco landmark with planetarium and telescopes. Best views of LA and the Hollywood sign.",
      tags: ["observatory", "views", "planetarium", "science", "must-visit"],
      sourceApi: "curated",
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Griffith_Observatory.jpg/500px-Griffith_Observatory.jpg"]
    },

    // RESTAURANTS & FOOD
    {
      name: "Grand Central Market",
      lat: 34.0074, lng: -118.2492,
      category_name: "food market",
      rating: 4.4, user_ratings_total: 20000,
      description: "Downtown food hall since 1917. Oysters, ramen, and diverse cuisines under one roof.",
      tags: ["market", "food-hall", "downtown", "historic", "diverse"],
      sourceApi: "curated",
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Grand_Central_Market.jpg/500px-Grand_Central_Market.jpg"]
    },
    {
      name: "Philippe's Original",
      lat: 34.0017, lng: -118.2511,
      category_name: "restaurant",
      rating: 4.4, user_ratings_total: 15000,
      description: "Inventors of the French Dip sandwich since 1918. Historic dtahunt with communal tables.",
      tags: ["french-dip", "historic", "dtahunt", "must-visit"],
      sourceApi: "curated",
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/French_Dip.jpg/500px-French_Dip.jpg"]
    },
    {
      name: "Gjelina",
      lat: 34.0450, lng: -118.6722,
      category_name: "restaurant",
      rating: 4.4, user_ratings_total: 12000,
      description: "Venice hotspot for Californian cuisine. Famous for roasted vegetables and wood-fired pizzas.",
      tags: ["californian", "venice", "vegetables", "pizza", "popular"],
      sourceApi: "curated",
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/California_Cuisine.jpg/500px-California_Cuisine.jpg"]
    },

    // BEACHES & PARKS
    {
      name: "Runyon Canyon",
      lat: 34.1189, lng: -118.3622,
      category_name: "park",
      rating: 4.5, user_ratings_total: 25000,
      description: "Popular hiking trail with stunning LA views. Celebrity sightings common.",
      tags: ["hiking", "views", "fitness", "celebrity", "nature"],
      sourceApi: "curated",
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Runyon_Canyon.jpg/500px-Runyon_Canyon.jpg"]
    },
    {
      name: "Will Rogers State Beach",
      lat: 34.0300, lng: -118.5100,
      category_name: "beach",
      rating: 4.4, user_ratings_total: 15000,
      description: "Relaxed beach near Santa Monica. Popular for locals, less crowded than tourist spots.",
      tags: ["beach", "surf", "local", "relaxed"],
      sourceApi: "curated",
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Will_Rogers_Beach.jpg/500px-Will_Rogers_Beach.jpg"]
    },
  ],

  // ═══════════════════════════════════════════════════════════════════════════
  // SAN FRANCISCO
  // ═══════════════════════════════════════════════════════════════════════════
  "San Francisco": [
    {
      name: "Golden Gate Bridge",
      lat: 37.8199, lng: -122.4783,
      category_name: "monument",
      rating: 4.7, user_ratings_total: 80000,
      description: "Iconic orange suspension bridge. UNESCO site and San Francisco's most recognizable landmark.",
      tags: ["iconic", "bridge", "must-visit", "views", "engineering"],
      sourceApi: "curated",
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Golden_Gate_Bridge.jpg/500px-Golden_Gate_Bridge.jpg"]
    },
    {
      name: "Alcatraz Island",
      lat: 37.8267, lng: -122.4230,
      category_name: "prison",
      rating: 4.6, user_ratings_total: 55000,
      description: "Former prison island with tours. Famous for notorious inmates and escape attempts.",
      tags: ["prison", "history", "tour", "must-visit", "historic"],
      sourceApi: "curated",
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Alcatraz_Island.jpg/500px-Alcatraz_Island.jpg"]
    },
    {
      name: "Fisherman's Wharf",
      lat: 37.8080, lng: -122.4177,
      category_name: "neighborhood",
      rating: 4.3, user_ratings_total: 60000,
      description: "Waterfront with sea lions, shops, and seafood. Pier 39 and sourdough bread birthplace.",
      tags: ["waterfront", "seafood", "sea-lions", "family", "tourist"],
      sourceApi: "curated",
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Fisherman%27s_Wharf.jpg/500px-Fisherman%27s_Wharf.jpg"]
    },
    {
      name: "Cable Cars",
      lat: 37.7956, lng: -122.4075,
      category_name: "transportation",
      rating: 4.6, user_ratings_total: 40000,
      description: "Historic manually operated cable cars. UNESCO site and unique SF transportation experience.",
      tags: ["cable-car", "historic", "iconic", "tour", "transportation"],
      sourceApi: "curated",
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/SF_Cable_Car.jpg/500px-SF_Cable_Car.jpg"]
    },
    {
      name: "Golden Gate Park",
      lat: 37.7694, lng: -122.4862,
      category_name: "park",
      rating: 4.6, user_ratings_total: 35000,
      description: "Large urban park with gardens, museums, and bison. Like Central Park but with redwoods.",
      tags: ["park", "gardens", "museums", "nature", "bison"],
      sourceApi: "curated",
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Golden_Gate_Park.jpg/500px-Golden_Gate_Park.jpg"]
    },

    // RESTAURANTS & FOOD
    {
      name: "Ferry Building Marketplace",
      lat: 37.7955, lng: -122.3933,
      category_name: "food market",
      rating: 4.5, user_ratings_total: 25000,
      description: "Historic ferry terminal with artisan foods. Oysters, chocolate, and local purveyors.",
      tags: ["market", "ferry", "food-hall", "local", "artisan"],
      sourceApi: "curated",
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Ferry_Building.jpg/500px-Ferry_Building.jpg"]
    },
    {
      name: "Tartine Bakery",
      lat: 37.7613, lng: -122.4238,
      category_name: "bakery",
      rating: 4.5, user_ratings_total: 18000,
      description: "Iconic bakery famous for country bread and morning bun. Lines out the door daily.",
      tags: ["bakery", "bread", "iconic", "breakfast", "must-visit"],
      sourceApi: "curated",
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Bakery.jpg/500px-Bakery.jpg"]
    },
    {
      name: "Swan Oyster Depot",
      lat: 37.7966, lng: -122.4187,
      category_name: "restaurant",
      rating: 4.5, user_ratings_total: 12000,
      description: "Classic seafood counter since 1952. Fresh oysters andclam chowder on the waterfront.",
      tags: ["seafood", "oysters", "historic", "chowder", "must-visit"],
      sourceApi: "curated",
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Oyster.jpg/500px-Oyster.jpg"]
    },

    // PARKS & BEACHES
    {
      name: "Dolores Park",
      lat: 37.7596, lng: -122.4269,
      category_name: "park",
      rating: 4.5, user_ratings_total: 20000,
      description: "Popular Mission park with city views. Sunny spot for locals and picnics.",
      tags: ["park", "views", "sunny", "picnic", "local"],
      sourceApi: "curated",
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Dolores_Park.jpg/500px-Dolores_Park.jpg"]
    },
    {
      name: "Ocean Beach",
      lat: 37.7594, lng: -122.5107,
      category_name: "beach",
      rating: 4.4, user_ratings_total: 20000,
      description: "Wide Pacific beach near Golden Gate Park. Popular for surf and sunsets.",
      tags: ["beach", "surf", "sunsets", "wild", "nature"],
      sourceApi: "curated",
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Ocean_Beach.jpg/500px-Ocean_Beach.jpg"]
    },
  ],

  // ═══════════════════════════════════════════════════════════════════════════
  // LAS VEGAS
  // ═══════════════════════════════════════════════════════════════════════════
  "Las Vegas": [
    {
      name: "Strip (Las Vegas Boulevard)",
      lat: 36.1147, lng: -115.1727,
      category_name: "scenic lookout",
      rating: 4.5, user_ratings_total: 80000,
      description: "World-famous 4-mile casino strip. Lights, casinos, and entertainment capital of the world.",
      tags: ["iconic", "casino", "nightlife", "entertainment", "must-visit"],
      sourceApi: "curated",
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/Las_Vegas_Strip.jpg/500px-Las_Vegas_Strip.jpg"]
    },
    {
      name: "Bellagio Fountains",
      lat: 36.1129, lng: -115.1743,
      category_name: "fountain",
      rating: 4.7, user_ratings_total: 60000,
      description: "Iconic fountain show with 1,000+ nozzles. Free shows every 15-30 minutes.",
      tags: ["fountain", "free", "show", "romantic", "must-visit"],
      sourceApi: "curated",
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/c/c0/Bellagio_Fountains.jpg/500px-Bellagio_Fountains.jpg"]
    },
    {
      name: "Fremont Street Experience",
      lat: 36.1705, lng: -115.1430,
      category_name: "scenic lookout",
      rating: 4.4, user_ratings_total: 35000,
      description: "Historic vintage Vegas with light shows. Viva Vision canopy and classic casinos.",
      tags: ["historic", "light-show", "vintage", "nightlife", "entertainment"],
      sourceApi: "curated",
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Fremont_Street.jpg/500px-Fremont_Street.jpg"]
    },
    {
      name: "Red Rock Canyon",
      lat: 36.1360, lng: -115.4270,
      category_name: "national park",
      rating: 4.7, user_ratings_total: 25000,
      description: "Dramatic red rock formations 20 miles west. Hiking, climbing, and scenic drives.",
      tags: ["rock", "hiking", "nature", "scenic", "day-trip"],
      sourceApi: "curated",
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Red_Rock.jpg/500px-Red_Rock.jpg"]
    },
    {
      name: "Hoover Dam",
      lat: 36.0163, lng: -114.7428,
      category_name: "monument",
      rating: 4.6, user_ratings_total: 40000,
      description: "Historic dam on Arizona border. Engineering marvel with tours available.",
      tags: ["dam", "historic", "engineering", "tour", "must-visit"],
      sourceApi: "curated",
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Hoover_Dam.jpg/500px-Hoover_Dam.jpg"]
    },

    // RESTAURANTS & FOOD
    {
      name: "Bacchanal Buffet",
      lat: 36.1147, lng: -115.1750,
      category_name: "restaurant",
      rating: 4.3, user_ratings_total: 25000,
      description: "Famous Caesars buffet with 600+ items. The benchmark for Vegas buffets.",
      tags: ["buffet", "caesars", "famous", "variety"],
      sourceApi: "curated",
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Vegas_Buffet.jpg/500px-Vegas_Buffet.jpg"]
    },
    {
      name: "Hash House A Go Go",
      lat: 36.0474, lng: -115.1384,
      category_name: "restaurant",
      rating: 4.4, user_ratings_total: 18000,
      description: "Famous for massive portions and creative cocktails. Locals favorite since 2007.",
      tags: ["breakfast", "brunch", "massive-portions", "unique"],
      sourceApi: "curated",
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Hash_House.jpg/500px-Hash_House.jpg"]
    },
    {
      name: "Lotus of Siam",
      lat: 36.1251, lng: -115.0875,
      category_name: "restaurant",
      rating: 4.6, user_ratings_total: 15000,
      description: "Hidden Thai gem voted best in Vegas. Famous for sai grok and pad thai.",
      tags: ["thai", "hidden-gem", "famous", "must-visit"],
      sourceApi: "curated",
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Thai_Food.jpg/500px-Thai_Food.jpg"]
    },

    // NATURE & ENTERTAINMENT
    {
      name: "Area 15",
      lat: 36.2612, lng: -115.1184,
      category_name: "entertainment district",
      rating: 4.4, user_ratings_total: 12000,
      description: "Entertainment district with immersive experiences. omega Mart and flying theater.",
      tags: ["entertainment", "immersive", "unique", "art", "nightlife"],
      sourceApi: "curated",
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Area_15.jpg/500px-Area_15.jpg"]
    },
    {
      name: "Valley of Fire",
      lat: 36.4423, lng: -114.4735,
      category_name: "national park",
      rating: 4.7, user_ratings_total: 15000,
      description: "Ancient red rock formations 60 miles NE. Stunning hikes and petroglyphs.",
      tags: ["rock", "hiking", "history", "petroglyphs", "day-trip"],
      sourceApi: "curated",
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Valley_of_Fire.jpg/500px-Valley_of_Fire.jpg"]
    },
  ],

  // ═══════════════════════════════════════════════════════════════════════════
  // ISTANBUL
  // ═══════════════════════════════════════════════════════════════════════════
  "Istanbul": [
    {
      name: "Hagia Sophia",
      lat: 41.0086, lng: 28.9802,
      category_name: "museum",
      rating: 4.8, user_ratings_total: 70000,
      description: "Former cathedral-turned-mosque-turned-museum. Icon of Byzantine architecture for 1,500 years.",
      tags: ["iconic", "byzantine", "architecture", "must-visit", "history"],
      sourceApi: "curated",
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Hagia_Sophia.jpg/500px-Hagia_Sophia.jpg"]
    },
    {
      name: "Blue Mosque",
      lat: 41.0054, lng: 28.9768,
      category_name: "mosque",
      rating: 4.7, user_ratings_total: 55000,
      description: "Stunning 17th-century mosque with six minarets. Ottoman architectural masterpiece.",
      tags: ["mosque", "ottoman", "iconic", "must-visit", "architecture"],
      sourceApi: "curated",
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/Blue_Mosque.jpg/500px-Blue_Mosque.jpg"]
    },
    {
      name: "Grand Bazaar",
      lat: 41.0036, lng: 28.9635,
      category_name: "market",
      rating: 4.5, user_ratings_total: 60000,
      description: "Massive covered market with 4,000+ shops. One of world's oldest and largest bazaars.",
      tags: ["market", "shopping", "bazaar", "historic", "must-visit"],
      sourceApi: "curated",
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Grand_Bazaar.jpg/500px-Grand_Bazaar.jpg"]
    },
    {
      name: "Basilica Cistern",
      lat: 41.0087, lng: 28.9834,
      category_name: "monument",
      rating: 4.6, user_ratings_total: 35000,
      description: "Underground Byzantine cistern with Medusa columns. Cool escape from summer heat.",
      tags: ["cistern", "byzantine", "unique", "underground", "history"],
      sourceApi: "curated",
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Basilica_Cistern.jpg/500px-Basilica_Cistern.jpg"]
    },
    {
      name: "Bosphorus Strait",
      lat: 41.0763, lng: 29.0568,
      category_name: "scenic lookout",
      rating: 4.7, user_ratings_total: 40000,
      description: "Waterway separating Europe and Asia. Bosphorus cruise is iconic experience.",
      tags: ["bosporus", "cruise", "views", "europe-asia", "must-visit"],
      sourceApi: "curated",
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Bosphorus.jpg/500px-Bosphorus.jpg"]
    },

    // RESTAURANTS & FOOD
    {
      name: "Sultanahmet Koftecisi",
      lat: 41.0046, lng: 28.9787,
      category_name: "restaurant",
      rating: 4.3, user_ratings_total: 15000,
      description: "Legendary lamb kofta since 1950. Fast food Turkish style near Blue Mosque.",
      tags: ["kofta", "turkish", "fast-food", "historic", "must-visit"],
      sourceApi: "curated",
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Kofte.jpg/500px-Kofte.jpg"]
    },
    {
      name: "Karaköy Lokantasi",
      lat: 41.0210, lng: 28.9835,
      category_name: "restaurant",
      rating: 4.5, user_ratings_total: 12000,
      description: "Elegant meyhane beneath Galata Bridge. Meze, raki, and live music.",
      tags: ["meyhane", "raki", "turkish", "dining", "romantic"],
      sourceApi: "curated",
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/Turkish_Dining.jpg/500px-Turkish_Dining.jpg"]
    },
    {
      name: "Bagdat Street Food",
      lat: 41.0300, lng: 29.0600,
      category_name: "street food",
      rating: 4.4, user_ratings_total: 8000,
      description: "Modern Istanbul food street with international cuisines and trendy cafes.",
      tags: ["street-food", "modern", "trendy", "diverse"],
      sourceApi: "curated",
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Street_Food.jpg/500px-Street_Food.jpg"]
    },

    // PARKS & WATERFRONT
    {
      name: "Gülhane Park",
      lat: 41.0077, lng: 28.9812,
      category_name: "park",
      rating: 4.5, user_ratings_total: 20000,
      description: "Historic park near Topkapi Palace. Cherry blossoms and peaceful escape near tourist area.",
      tags: ["park", "cherry-blossom", "relaxing", "historic"],
      sourceApi: "curated",
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Gulhane_Park.jpg/500px-Gulhane_Park.jpg"]
    },
    {
      name: "Suadiye Beach",
      lat: 41.0400, lng: 29.0500,
      category_name: "beach",
      rating: 4.3, user_ratings_total: 10000,
      description: "Chic beach suburb on Asian side. Cabans, seafood restaurants, and Bosphorus views.",
      tags: ["beach", "seafood", "trendy", "asian-side"],
      sourceApi: "curated",
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/Suadiye.jpg/500px-Suadiye.jpg"]
    },
  ],

  // ═══════════════════════════════════════════════════════════════════════════
  // KUALA LUMPUR
  // ═══════════════════════════════════════════════════════════════════════════
  "Kuala Lumpur": [
    {
      name: "Petronas Twin Towers",
      lat: 3.1391, lng: 101.6868,
      category_name: "scenic lookout",
      rating: 4.6, user_ratings_total: 65000,
      description: "Iconic 452-meter towers with sky bridge. World's tallest building from 1998-2004.",
      tags: ["iconic", "skyscraper", "views", "must-visit", "architecture"],
      sourceApi: "curated",
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Petronas_Twin_Towers.jpg/500px-Petronas_Twin_Towers.jpg"]
    },
    {
      name: "Petaling Street (Chinatown)",
      lat: 3.1417, lng: 101.6998,
      category_name: "market",
      rating: 4.3, user_ratings_total: 35000,
      description: "Bustling night market with fake goods, street food, and vibrant energy.",
      tags: ["market", "night", "shopping", "street-food", "chinatown"],
      sourceApi: "curated",
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Petaling_Street.jpg/500px-Petaling_Street.jpg"]
    },
    {
      name: "Batu Caves",
      lat: 3.2374, lng: 101.6839,
      category_name: "temple",
      rating: 4.5, user_ratings_total: 40000,
      description: "Limestone caves with Hindu temples. 272 steps and stunning gold statue.",
      tags: ["temple", "hindu", "caves", "nature", "must-visit"],
      sourceApi: "curated",
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/Batu_Caves.jpg/500px-Batu_Caves.jpg"]
    },
    {
      name: "Merdeka Square",
      lat: 3.1387, lng: 101.6944,
      category_name: "scenic lookout",
      rating: 4.4, user_ratings_total: 25000,
      description: "Historic square with giant flagpole. Where Malaysia's independence was declared.",
      tags: ["historic", "square", "architecture", "independence"],
      sourceApi: "curated",
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Merdeka_Square.jpg/500px-Merdeka_Square.jpg"]
    },
    {
      name: "KL Tower",
      lat: 3.1307, lng: 101.7039,
      category_name: "scenic lookout",
      rating: 4.4, user_ratings_total: 25000,
      description: "Communication tower with observation deck. Views rival the Petronas at sunset.",
      tags: ["tower", "views", "sunset", "observation"],
      sourceApi: "curated",
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/KL_Tower.jpg/500px-KL_Tower.jpg"]
    },

    // RESTAURANTS & FOOD
    {
      name: "Jalan Alor Food Street",
      lat: 3.1431, lng: 101.6999,
      category_name: "street food",
      rating: 4.4, user_ratings_total: 25000,
      description: "Famous street with BBQ seafood, satay, and tropical fruits. Bustling evening scene.",
      tags: ["street-food", "bbq", "seafood", "must-visit", "evening"],
      sourceApi: "curated",
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Jalan_Alor.jpg/500px-Jalan_Alor.jpg"]
    },
    {
      name: "Makan @ Kantil",
      lat: 3.1420, lng: 101.6930,
      category_name: "restaurant",
      rating: 4.3, user_ratings_total: 8000,
      description: "Popular for nasi kandar and curry dishes. Budget-friendly local favorite.",
      tags: ["nasi-kandar", "curry", "budget-friendly", "local"],
      sourceApi: "curated",
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Nasi_Kandar.jpg/500px-Nasi_Kandar.jpg"]
    },
    {
      name: "Old Town White Coffee",
      lat: 3.1425, lng: 101.6945,
      category_name: "cafe",
      rating: 4.2, user_ratings_total: 10000,
      description: "Traditional white coffee and breakfast. Famous for kaya toast and soft-boiled eggs.",
      tags: ["coffee", "breakfast", "traditional", "toast"],
      sourceApi: "curated",
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/White_Coffee.jpg/500px-White_Coffee.jpg"]
    },

    // PARKS & NATURE
    {
      name: "Lake Gardens",
      lat: 3.1155, lng: 101.6886,
      category_name: "botanical garden",
      rating: 4.5, user_ratings_total: 18000,
      description: "Lush gardens with hibiscus and orchid displays. UNESCO listed landscape.",
      tags: ["garden", "botanical", "nature", "orchids", "relaxing"],
      sourceApi: "curated",
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Lake_Gardens.jpg/500px-Lake_Gardens.jpg"]
    },
    {
      name: "Kuala Lumpur Forest Reserve",
      lat: 3.1520, lng: 101.7100,
      category_name: "nature preserve",
      rating: 4.3, user_ratings_total: 8000,
      description: "Old-growth forest in the city. Rare Gibbons and lush nature trails.",
      tags: ["forest", "hiking", "nature", "wildlife", "green-escape"],
      sourceApi: "curated",
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Forest.jpg/500px-Forest.jpg"]
    },
  ],

  // ═══════════════════════════════════════════════════════════════════════════
  // HONG KONG
  // ═══════════════════════════════════════════════════════════════════════════
  "Hong Kong": [
    {
      name: "Victoria Peak",
      lat: 22.2758, lng: 114.1478,
      category_name: "scenic lookout",
      rating: 4.6, user_ratings_total: 60000,
      description: "Iconic hill with viewing platform. Best panoramic view of skyline and harbor.",
      tags: ["iconic", "views", "panoramic", "must-visit", "photography"],
      sourceApi: "curated",
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/Victoria_Peak.jpg/500px-Victoria_Peak.jpg"]
    },
    {
      name: "Temple Street Night Market",
      lat: 22.3271, lng: 114.2042,
      category_name: "market",
      rating: 4.3, user_ratings_total: 30000,
      description: "Famous night market with fortune tellers, street food, and bargain shopping.",
      tags: ["market", "night", "street-food", "fortune-telling", "bargain"],
      sourceApi: "curated",
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/Temple_Street.jpg/500px-Temple_Street.jpg"]
    },
    {
      name: "Star Ferry",
      lat: 22.2851, lng: 114.1120,
      category_name: "transportation",
      rating: 4.5, user_ratings_total: 40000,
      description: "Historic ferry since 1898. Iconic 10-minute ride between Kowloon and Central.",
      tags: ["ferry", "historic", "iconic", "views", "budget-friendly"],
      sourceApi: "curated",
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Star_Ferry.jpg/500px-Star_Ferry.jpg"]
    },
    {
      name: "Big Buddha (Tian Tan)",
      lat: 22.2559, lng: 113.9178,
      category_name: "temple",
      rating: 4.6, user_ratings_total: 45000,
      description: "34-meter bronze Buddha on Lantau Island. Cable car ride with stunning views.",
      tags: ["buddha", "temple", "cable-car", "landmark", "must-visit"],
      sourceApi: "curated",
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/Big_Buddha.jpg/500px-Big_Buddha.jpg"]
    },
    {
      name: "Man Mo Temple",
      lat: 22.2609, lng: 114.1847,
      category_name: "temple",
      rating: 4.4, user_ratings_total: 15000,
      description: "Historic temple from 1847. Man and Mo deities, incense coils, and serene atmosphere.",
      tags: ["temple", "historic", "taoist", "incense", "heritage"],
      sourceApi: "curated",
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Man_Mo_Temple.jpg/500px-Man_Mo_Temple.jpg"]
    },

    // RESTAURANTS & FOOD
    {
      name: "Dai pai dong",
      lat: 22.2857, lng: 114.1536,
      category_name: "restaurant",
      rating: 4.3, user_ratings_total: 15000,
      description: "Original dai pai dong experience. Open-air dining with traditional dishes.",
      tags: ["dai-pai-dong", "traditional", "local", "historic"],
      sourceApi: "curated",
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Dai_pai_dong.jpg/500px-Dai_pai_dong.jpg"]
    },
    {
      name: "Mongk Dim Sum",
      lat: 22.2819, lng: 114.1573,
      category_name: "restaurant",
      rating: 4.5, user_ratings_total: 20000,
      description: "Legendary dim sum spot. Har Gow and char siu bao favorites.",
      tags: ["dim-sum", "michelin", "must-visit", "breakfast"],
      sourceApi: "curated",
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/Dim_Sum.jpg/500px-Dim_Sum.jpg"]
    },
    {
      name: "Tim Ho Wan",
      lat: 22.2827, lng: 114.1574,
      category_name: "restaurant",
      rating: 4.4, user_ratings_total: 18000,
      description: "Michelin-starred dim sum. Baked BBQ pork buns are legendary.",
      tags: ["dim-sum", "michelin-star", "bbq-buns", "famous"],
      sourceApi: "curated",
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Baked_Buns.jpg/500px-Baked_Buns.jpg"]
    },

    // PARKS & BEACHES
    {
      name: "Hong Kong Park",
      lat: 22.2772, lng: 114.1723,
      category_name: "park",
      rating: 4.4, user_ratings_total: 15000,
      description: "Contemporary park with aviary and hot house. Peaceful urban escape.",
      tags: ["park", "aviary", "nature", "urban", "relaxing"],
      sourceApi: "curated",
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Hong_Kong_Park.jpg/500px-Hong_Kong_Park.jpg"]
    },
    {
      name: "Repulse Bay",
      lat: 22.2365, lng: 114.1972,
      category_name: "beach",
      rating: 4.4, user_ratings_total: 15000,
      description: "Popular beach with temple and seafood restaurants. Chic bay.",
      tags: ["beach", "seafood", "temple", "family"],
      sourceApi: "curated",
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Repulse_Bay.jpg/500px-Repulse_Bay.jpg"]
    },
  ],

  // ═══════════════════════════════════════════════════════════════════════════
  // LISBON
  // ═══════════════════════════════════════════════════════════════════════════
  "Lisbon": [
    {
      name: "Belém Tower",
      lat: 38.6916, lng: -9.2159,
      category_name: "monument",
      rating: 4.6, user_ratings_total: 45000,
      description: "Iconic 16th-century tower guarding the Tagus River. UNESCO World Heritage site and Portugal's symbol.",
      tags: ["iconic", "unesco", "tower", "must-visit", "portuguese"],
      sourceApi: "curated",
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Bel%C3%A9m_Tower.jpg/500px-Bel%C3%A9m_Tower.jpg"]
    },
    {
      name: "Jerónimos Monastery",
      lat: 38.6976, lng: -9.2210,
      category_name: "monastery",
      rating: 4.7, user_ratings_total: 40000,
      description: "UNESCO monastery where Vasco da Gama sailed from. Stunning Manueline architecture.",
      tags: ["monastery", "unesco", "architecture", "must-visit", "history"],
      sourceApi: "curated",
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/Jeronimos_Monastery.jpg/500px-Jeronimos_Monastery.jpg"]
    },
    {
      name: "São Jorge Castle",
      lat: 38.7139, lng: -9.1334,
      category_name: "castle",
      rating: 4.6, user_ratings_total: 35000,
      description: "Medieval castle on hilltop with panoramic views. Founded by Moors in 10th century.",
      tags: ["castle", "views", "medieval", "panoramic", "must-visit"],
      sourceApi: "curated",
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Castelo_de_S%C3%A3o_Jorge.jpg/500px-Castelo_de_S%C3%A3o_Jorge.jpg"]
    },
    {
      name: "Rossio Square",
      lat: 38.7107, lng: -9.1391,
      category_name: "scenic lookout",
      rating: 4.4, user_ratings_total: 25000,
      description: "Historic cobblestone square with wavy pattern. Heart of Baixa shopping district.",
      tags: ["square", "historic", "shopping", "baixa", "iconic"],
      sourceApi: "curated",
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Rossio_Square.jpg/500px-Rossio_Square.jpg"]
    },
    {
      name: "Tram 28",
      lat: 38.7120, lng: -9.1390,
      category_name: "transportation",
      rating: 4.5, user_ratings_total: 30000,
      description: "Iconic yellow tram through Alfama's narrow streets. Scenic route through historic Lisbon.",
      tags: ["tram", "iconic", "scenic", "alfama", "must-ride"],
      sourceApi: "curated",
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Tram_28.jpg/500px-Tram_28.jpg"]
    },

    // RESTAURANTS & FOOD
    {
      name: "Time Out Market",
      lat: 38.7067, lng: -9.1422,
      category_name: "food market",
      rating: 4.5, user_ratings_total: 30000,
      description: "Modern food hall with 40+ vendors. Best of Portuguese cuisine under one roof.",
      tags: ["market", "food-hall", "portuguese", "must-visit", "diverse"],
      sourceApi: "curated",
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Time_Out_Market.jpg/500px-Time_Out_Market.jpg"]
    },
    {
      name: "Casa das Bifanas",
      lat: 38.7089, lng: -9.1364,
      category_name: "restaurant",
      rating: 4.2, user_ratings_total: 8000,
      description: "Legendary for beefsteak sandwiches. Traditional Portuguese fast food since 1968.",
      tags: ["bifana", "fast-food", "historic", "local", "budget-friendly"],
      sourceApi: "curated",
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Portuguese_Food.jpg/500px-Portuguese_Food.jpg"]
    },
    {
      name: "Manteigaria",
      lat: 38.7076, lng: -9.1401,
      category_name: "bakery",
      rating: 4.4, user_ratings_total: 12000,
      description: "Famous pastéis de nata bakery. Lines out the door for warm custard tarts.",
      tags: ["pastéis", "nata", "custard", "must-visit", "famous"],
      sourceApi: "curated",
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Past%C3%A9is_de_Nata.jpg/500px-Past%C3%A9is_de_Nata.jpg"]
    },

    // PARKS & RIVER
    {
      name: "Parque das Nações",
      lat: 38.8976, lng: -9.0987,
      category_name: "park",
      rating: 4.4, user_ratings_total: 20000,
      description: "Waterfront park from Expo 98. cable car, aquarium, and modern architecture.",
      tags: ["park", "waterfront", "cable-car", "modern", "family"],
      sourceApi: "curated",
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Parque_das_Na%C3%A7%C3%B5es.jpg/500px-Parque_das_Na%C3%A7%C3%B5es.jpg"]
    },
    {
      name: "Tagus River Cruise",
      lat: 38.7100, lng: -9.1800,
      category_name: "scenic lookout",
      rating: 4.5, user_ratings_total: 18000,
      description: "Scenic river cruise passing under 25 de Abril Bridge with sunset views.",
      tags: ["cruise", "sunset", "river", "romantic", "views"],
      sourceApi: "curated",
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Tagus_River.jpg/500px-Tagus_River.jpg"]
    },
  ],

  // ═══════════════════════════════════════════════════════════════════════════
  // PORTO
  // ═══════════════════════════════════════════════════════════════════════════
  "Porto": [
    {
      name: "Livraria Lello",
      lat: 41.1465, lng: -8.6138,
      category_name: "bookstore",
      rating: 4.7, user_ratings_total: 35000,
      description: "Stunning neo-Gothic bookstore with carved stairs. JK Rowling inspiration.",
      tags: ["bookstore", "iconic", "beautiful", "must-visit", "harry-potter"],
      sourceApi: "curated",
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/Livraria_Lello.jpg/500px-Livraria_Lello.jpg"]
    },
    {
      name: "Dom Luís I Bridge",
      lat: 41.1395, lng: -8.6093,
      category_name: "bridge",
      rating: 4.6, user_ratings_total: 30000,
      description: "Double-deck iron bridge designed by Eiffel. Stunning views and walkable.",
      tags: ["bridge", "eiffel", "views", "iconic", "must-visit"],
      sourceApi: "curated",
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Dom_Lu%C3%ADs_I_Bridge.jpg/500px-Dom_Lu%C3%ADs_I_Bridge.jpg"]
    },
    {
      name: "Ribeira District",
      lat: 41.1407, lng: -8.6110,
      category_name: "neighborhood",
      rating: 4.5, user_ratings_total: 28000,
      description: "UNESCO riverside neighborhood with colorful houses. Historic center and port tasting.",
      tags: ["unesco", "historic", "riverside", "colorful", "port"],
      sourceApi: "curated",
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Ribeira_District.jpg/500px-Ribeira_District.jpg"]
    },
    {
      name: "Port Wine Cellars",
      lat: 41.1314, lng: -8.6158,
      category_name: "winery",
      rating: 4.5, user_ratings_total: 30000,
      description: "Aged port wine in Vila Nova de Gaia. Tours and tastings along the river.",
      tags: ["port-wine", "winery", "tasting", "must-visit", "tour"],
      sourceApi: "curated",
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Port_Cellars.jpg/500px-Port_Cellars.jpg"]
    },
    {
      name: "Clérigos Tower",
      lat: 41.1458, lng: -8.6106,
      category_name: "tower",
      rating: 4.4, user_ratings_total: 25000,
      description: "18th-century baroque tower with 240 steps. Panoramic city and river views.",
      tags: ["tower", "views", "baroque", "panoramic", "climb"],
      sourceApi: "curated",
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wWikipedia/commons/thumb/c/c0/Cl%C3%A9rigos_Tower.jpg/500px-Cl%C3%A9rigos_Tower.jpg"]
    },

    // RESTAURANTS & FOOD
    {
      name: "Mercado do Bolhão",
      lat: 41.1481, lng: -8.6056,
      category_name: "food market",
      rating: 4.4, user_ratings_total: 20000,
      description: "Historic market building with fresh produce, flowers, and local foods. Traditional atmosphere.",
      tags: ["market", "fresh", "flowers", "traditional", "local"],
      sourceApi: "curated",
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Mercado_do_Bolh%C3%A3o.jpg/500px-Mercado_do_Bolh%C3%A3o.jpg"]
    },
    {
      name: "Casa da Francesinha",
      lat: 41.1523, lng: -8.6091,
      category_name: "restaurant",
      rating: 4.5, user_ratings_total: 15000,
      description: "Legendary sandwich with多种 meats and cheese. Porto's signature dish.",
      tags: ["francesinha", "sandwich", "signature", "must-try", "local"],
      sourceApi: "curated",
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Francesinha.jpg/500px-Francesinha.jpg"]
    },
    {
      name: "Majestic Café",
      lat: 41.1473, lng: -8.6066,
      category_name: "cafe",
      rating: 4.3, user_ratings_total: 10000,
      description: "Art Deco cafe from 1934. Stunning interior with gilded mirrors.",
      tags: ["cafe", "art-deco", "historic", "coffee", "beautiful"],
      sourceApi: "curated",
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Majestic_Caf%C3%A9.jpg/500px-Majestic_Caf%C3%A9.jpg"]
    },

    // PARKS & RIVER
    {
      name: "Jardins do Palácio",
      lat: 41.1460, lng: -8.6290,
      category_name: "park",
      rating: 4.4, user_ratings_total: 12000,
      description: "Palace gardens with fountains andViews of Douro River. Peaceful escape.",
      tags: ["park", "gardens", "palace", "relaxing", "river-views"],
      sourceApi: "curated",
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Jardins_do_Pal%C3%A1cio.jpg/500px-Jardins_do_Pal%C3%A1cio.jpg"]
    },
    {
      name: "Douro River Cruise",
      lat: 41.1400, lng: -8.6100,
      category_name: "scenic lookout",
      rating: 4.5, user_ratings_total: 15000,
      description: "Riverside cruise through 6 bridges. Visit port cellars and enjoy theViews.",
      tags: ["cruise", "douro", "bridge", "tour", "romantic"],
      sourceApi: "curated",
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Douro_Cruise.jpg/500px-Douro_Cruise.jpg"]
    },
  ],

  // ═══════════════════════════════════════════════════════════════════════════
  // DUBLIN
  // ═══════════════════════════════════════════════════════════════════════════
  "Dublin": [
    {
      name: "Temple Bar",
      lat: 53.3456, lng: -6.2558,
      category_name: "neighborhood",
      rating: 4.4, user_ratings_total: 35000,
      description: "Cultural hub with pubs and galleries. Dublin's liveliest nightlife area.",
      tags: ["pub", "culture", "nightlife", "cobblestone", "must-visit"],
      sourceApi: "curated",
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Temple_Bar.jpg/500px-Temple_Bar.jpg"]
    },
    {
      name: "Trinity College",
      lat: 53.3438, lng: -6.2546,
      category_name: "university",
      rating: 4.6, user_ratings_total: 30000,
      description: "Ireland's oldest university (1592). Stunningarchitecture and Book of Kells.",
      tags: ["university", "historic", "architecture", "book-of-kells", "must-visit"],
      sourceApi: "curated",
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Trinity_College.jpg/500px-Trinity_College.jpg"]
    },
    {
      name: "Dublin Castle",
      lat: 53.3400, lng: -6.2569,
      category_name: "castle",
      rating: 4.4, user_ratings_total: 25000,
      description: "Historic castle with Viking origins. Gardens and state apartments.",
      tags: ["castle", "historic", "gardens", "viking", "history"],
      sourceApi: "curated",
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Dublin_Castle.jpg/500px-Dublin_Castle.jpg"]
    },
    {
      name: "St. Stephen's Green",
      lat: 53.3372, lng: -6.2594,
      category_name: "park",
      rating: 4.5, user_ratings_total: 20000,
      description: "Central Victorian park with gardens and lakes. Duck feeding tradition.",
      tags: ["park", "victorian", "gardens", "relaxing", "central"],
      sourceApi: "curated",
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/St_Stephens_Green.jpg/500px-St_Stephens_Green.jpg"]
    },
    {
      name: "Guinness Storehouse",
      lat: 53.3509, lng: -6.2376,
      category_name: "brewery",
      rating: 4.6, user_ratings_total: 40000,
      description: "Iconic stout brewery in former grain store. Gravity bar withViews.",
      tags: ["guinness", "brewery", "views", "must-visit", "beer"],
      sourceApi: "curated",
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Guinness_Storehouse.jpg/500px-Guinness_Storehouse.jpg"]
    },

    // RESTAURANTS & FOOD
    {
      name: "The Brazen Head",
      lat: 53.3413, lng: -6.2412,
      category_name: "pub",
      rating: 4.5, user_ratings_total: 20000,
      description: "Ireland's oldest pub (1198). Traditional music, food, and atmosphere.",
      tags: ["pub", "historic", "music", "traditional", "oldest"],
      sourceApi: "curated",
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Brazen_Head.jpg/500px-Brazen_Head.jpg"]
    },
    {
      name: "Beshoff's",
      lat: 53.3510, lng: -6.2509,
      category_name: "restaurant",
      rating: 4.3, user_ratings_total: 12000,
      description: "Legendary fish and chips since 1913. Dublin's favorite for cod and chips.",
      tags: ["fish-chips", "historic", "seafood", "must-visit"],
      sourceApi: "curated",
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Fish_and_Chips.jpg/500px-Fish_and_Chips.jpg"]
    },
    {
      name: "St. James's Gate",
      lat: 53.3427, lng: -6.2321,
      category_name: "restaurant",
      rating: 4.4, user_ratings_total: 10000,
      description: "Gourmet pub near the brewery. Modern Irish cuisine in historic building.",
      tags: ["pub", "modern", "irish", "gourmet", "craft-beer"],
      sourceApi: "curated",
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/Irish_Cuisine.jpg/500px-Irish_Cuisine.jpg"]
    },

    // PARKS & NATURE
    {
      name: "Phoenix Park",
      lat: 53.3560, lng: -6.3247,
      category_name: "park",
      rating: 4.6, user_ratings_total: 25000,
      description: "One of Europe's largest walled parks. Deer, Áras an Uachtaráin, andViews.",
      tags: ["park", "deer", "large", "cycling", "nature"],
      sourceApi: "curated",
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Phoenix_Park.jpg/500px-Phoenix_Park.jpg"]
    },
    {
      name: "Howth Head",
      lat: 53.3960, lng: -6.0638,
      category_name: "nature preserve",
      rating: 4.5, user_ratings_total: 15000,
      description: "Coastal peninsula with cliff walks. Seal colony and seafood villages.",
      tags: ["cliffs", "walking", "seals", "coastal", "day-trip"],
      sourceApi: "curated",
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Howth_Head.jpg/500px-Howth_Head.jpg"]
    },
  ],

  // ═══════════════════════════════════════════════════════════════════════════
  // COPENHAGEN
  // ═══════════════════════════════════════════════════════════════════════════
  "Copenhagen": [
    {
      name: "Tivoli Gardens",
      lat: 55.6763, lng: 12.5682,
      category_name: "amusement park",
      rating: 4.5, user_ratings_total: 40000,
      description: "World's second-oldest amusement park. Fantasy gardens and rides.",
      tags: ["amusement", "gardens", "historic", "must-visit", "family"],
      sourceApi: "curated",
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Tivoli_Gardens.jpg/500px-Tivoli_Gardens.jpg"]
    },
    {
      name: "Nyhavn",
      lat: 55.6732, lng: 12.5953,
      category_name: "harbor",
      rating: 4.6, user_ratings_total: 45000,
      description: "Iconic colorful harbor houses. Canal tours and waterfront dining.",
      tags: ["harbor", "colorful", "canal", "iconic", "must-visit"],
      sourceApi: "curated",
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Nyhavn.jpg/500px-Nyhavn.jpg"]
    },
    {
      name: "The Little Mermaid",
      lat: 55.6959, lng: 12.6001,
      category_name: "monument",
      rating: 4.3, user_ratings_total: 35000,
      description: "Iconic bronze statue based on Hans Christian Andersen tale.",
      tags: ["statue", "iconic", "bronze", "family", "symbol"],
      sourceApi: "curated",
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/The_Little_Mermaid.jpg/500px-The_Little_Mermaid.jpg"]
    },
    {
      name: "Christiania",
      lat: 55.6843, lng: 12.5851,
      category_name: "neighborhood",
      rating: 4.4, user_ratings_total: 25000,
      description: "Freet hippie community with unique atmosphere. Quirky buildings and cafes.",
      tags: ["alternative", "hippie", "unique", "community", "quirky"],
      sourceApi: "curated",
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Christiania.jpg/500px-Christiania.jpg"]
    },
    {
      name: "Amalienborg Palace",
      lat: 55.6850, lng: 12.5807,
      category_name: "palace",
      rating: 4.5, user_ratings_total: 25000,
      description: "Royal residence with changing of the guard. Square with palaces.",
      tags: ["palace", "royalty", "guard", "history", "must-visit"],
      sourceApi: "curated",
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Amalienborg.jpg/500px-Amalienborg.jpg"]
    },

    // RESTAURANTS & FOOD
    {
      name: "Torvehallerne",
      lat: 55.6867, lng: 12.5689,
      category_name: "food market",
      rating: 4.5, user_ratings_total: 20000,
      description: "Modern food hall with Danish produce. Coffee, chocolate, and gourmet.",
      tags: ["market", "food-hall", "danish", "gourmet", "coffee"],
      sourceApi: "curated",
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Torvehallerne.jpg/500px-Torvehallerne.jpg"]
    },
    {
      name: "Noma",
      lat: 55.6867, lng: 12.6121,
      category_name: "restaurant",
      rating: 4.8, user_ratings_total: 15000,
      description: "World's best restaurant (4x). New Nordic cuisine pioneer.",
      tags: ["fine-dining", "michelin", "nordic", "famous", "reservation"],
      sourceApi: "curated",
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Noma.jpg/500px-Noma.jpg"]
    },
    {
      name: "Pølse",
      lat: 55.6730, lng: 12.5400,
      category_name: "street food",
      rating: 4.3, user_ratings_total: 8000,
      description: "Classic Danish hot dog stand. Must-try street food at any time.",
      tags: ["hot-dog", "street-food", "classic", "must-try", "budget-friendly"],
      sourceApi: "curated",
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Hot_Dog.jpg/500px-Hot_Dog.jpg"]
    },

    // PARKS & NATURE
    {
      name: "Kongens Have",
      lat: 55.6877, lng: 12.5779,
      category_name: "park",
      rating: 4.5, user_ratings_total: 18000,
      description: "Royal garden near Rosenborg. Peaceful escape in the city.",
      tags: ["park", "gardens", "royal", "relaxing", "castle"],
      sourceApi: "curated",
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Kongens_Have.jpg/500px-Kongens_Have.jpg"]
    },
    {
      name: "Møn's Beach",
      lat: 55.6350, lng: 12.5200,
      category_name: "beach",
      rating: 4.4, user_ratings_total: 12000,
      description: "Popular beach near Amager. Clean sands and summer swimming.",
      tags: ["beach", "swimming", "summer", "family", "accessible"],
      sourceApi: "curated",
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Copenhagen_Beach.jpg/500px-Copenhagen_Beach.jpg"]
    },
  ],

  // ═══════════════════════════════════════════════════════════════════════════
  // STOCKHOLM
  // ═══════════════════════════════════════════════════════════════════════════
  "Stockholm": [
    {
      name: "Gamla Stan",
      lat: 59.3258, lng: 18.0706,
      category_name: "neighborhood",
      rating: 4.6, user_ratings_total: 35000,
      description: "Old Town with cobblestone streets. Colorful buildings and royal palace.",
      tags: ["old-town", "historic", "cobblestone", "royal", "must-visit"],
      sourceApi: "curated",
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Gamla_Stan.jpg/500px-Gamla_Stan.jpg"]
    },
    {
      name: "Royal Palace",
      lat: 59.3269, lng: 18.0711,
      category_name: "palace",
      rating: 4.5, user_ratings_total: 30000,
      description: "King's residence with chambers and museums. Changing of the guard daily.",
      tags: ["palace", "royalty", "guard", "museums", "historic"],
      sourceApi: "curated",
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/Royal_Palace_Stockholm.jpg/500px-Royal_Palace_Stockholm.jpg"]
    },
    {
      name: "Vasa Museum",
      lat: 59.3275, lng: 18.0914,
      category_name: "museum",
      rating: 4.6, user_ratings_total: 35000,
      description: "Intact warship from 1628. Preserved and displayed in own museum.",
      tags: ["museum", "warship", "history", "maritime", "must-visit"],
      sourceApi: "curated",
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/Vasa_Museum.jpg/500px-Vasa_Museum.jpg"]
    },
    {
      name: "ABBA Museum",
      lat: 59.3302, lng: 18.0674,
      category_name: "museum",
      rating: 4.4, user_ratings_total: 25000,
      description: "Interactive museum of famous band. Sing, dance, and costumes.",
      tags: ["museum", "music", "abbA", "interactive", "fun"],
      sourceApi: "curated",
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/ABBA_Museum.jpg/500px-ABBA_Museum.jpg"]
    },
    {
      name: "Skansen",
      lat: 59.3271, lng: 18.1062,
      category_name: "open-air museum",
      rating: 4.5, user_ratings_total: 25000,
      description: "Open-air museum on Djurgården. Historic buildings and animals.",
      tags: ["open-air", "museum", "animals", "historic", "family"],
      sourceApi: "curated",
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Skansen.jpg/500px-Skansen.jpg"]
    },

    // RESTAURANTS & FOOD
    {
      name: "Östermalm Market",
      lat: 59.3358, lng: 18.0756,
      category_name: "food market",
      rating: 4.4, user_ratings_total: 18000,
      description: "Upscale food hall with Swedish specialties. Cheese, charcuterie, and wine.",
      tags: ["market", "food-hall", "swedish", "gourmet", "upscale"],
      sourceApi: "curated",
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Ostermalm_Market.jpg/500px-Ostermalm_Market.jpg"]
    },
    {
      name: "Kajsanka",
      lat: 59.3296, lng: 18.0718,
      category_name: "restaurant",
      rating: 4.3, user_ratings_total: 12000,
      description: "Floating restaurant boat. Swedish classics with archipelagoViews.",
      tags: ["restaurant", "swedish", "floating", "views", "romantic"],
      sourceApi: "curated",
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Stockholm_Restaurant.jpg/500px-Stockholm_Restaurant.jpg"]
    },
    {
      name: "Meatballs for the People",
      lat: 59.3169, lng: 18.0693,
      category_name: "restaurant",
      rating: 4.4, user_ratings_total: 10000,
      description: "Gourmet Swedish meatballs. Organic and traditional recipes.",
      tags: ["meatballs", "swedish", "organic", "traditional", "famous"],
      sourceApi: "curated",
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Meatballs.jpg/500px-Meatballs.jpg"]
    },

    // PARKS & ARCHIPELAGO
    {
      name: "Djurgården",
      lat: 59.3271, lng: 18.1062,
      category_name: "park",
      rating: 4.5, user_ratings_total: 20000,
      description: "Green island with museums and nature. Cycling and walking trails.",
      tags: ["park", "island", "museums", "nature", "cycling"],
      sourceApi: "curated",
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/Djurgarden.jpg/500px-Djurgarden.jpg"]
    },
    {
      name: "Archipelago Cruise",
      lat: 59.3200, lng: 18.0800,
      category_name: "scenic lookout",
      rating: 4.6, user_ratings_total: 20000,
      description: "Cruise through 24,000 islands. Summer swimming and nature.",
      tags: ["archipelago", "cruise", "islands", "summer", "nature"],
      sourceApi: "curated",
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Archipelago.jpg/500px-Archipelago.jpg"]
    },
  ],

  // ═══════════════════════════════════════════════════════════════════════════
  // OSLO
  // ═══════════════════════════════════════════════════════════════════
  "Oslo": [
    {
      name: "National Museum",
      lat: 59.9173, lng: 10.7208,
      category_name: "museum",
      rating: 4.5, user_ratings_total: 25000,
      description: "Norway's largest art museum. Munch, classic, and contemporary art.",
      tags: ["museum", "art", "munch", "norwegian", "must-visit"],
      sourceApi: "curated",
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/National_Museum.jpg/500px-National_Museum.jpg"]
    },
    {
      name: "Vigeland Sculpture Park",
      lat: 59.9214, lng: 10.7308,
      category_name: "park",
      rating: 4.6, user_ratings_total: 30000,
      description: "202 bronze and granite sculptures by Gustav Vigeland. Emotion and movement.",
      tags: ["sculpture", "park", "art", "unique", "must-visit"],
      sourceApi: "curated",
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/Vigeland_Park.jpg/500px-Vigeland_Park.jpg"]
    },
    {
      name: "Akerhus Fortress",
      lat: 59.9063, lng: 10.6755,
      category_name: "fort",
      rating: 4.5, user_ratings_total: 25000,
      description: "Medieval fortress and prison. Views of harbor and city.",
      tags: ["fortress", "medieval", "history", "views", "harbor"],
      sourceApi: "curated",
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Akerhus_Fortress.jpg/500px-Akerhus_Fortress.jpg"]
    },
    {
      name: "Royal Palace",
      lat: 59.9169, lng: 10.7276,
      category_name: "palace",
      rating: 4.4, user_ratings_total: 20000,
      description: "King's residence on hill with park. Changing of guard daily at 1pm.",
      tags: ["palace", "royalty", "guard", "park", "historic"],
      sourceApi: "curated",
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Royal_Palace_Oslo.jpg/500px-Royal_Palace_Oslo.jpg"]
    },
    {
      name: "Oslo Opera House",
      lat: 59.9072, lng: 10.6899,
      category_name: "opera house",
      rating: 4.6, user_ratings_total: 25000,
      description: "Modern marble opera house. Walk on roof withViews over fjord.",
      tags: ["opera", "modern", "views", "architecture", "must-visit"],
      sourceApi: "curated",
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Oslo_Opera_House.jpg/500px-Oslo_Opera_House.jpg"]
    },

    // RESTAURANTS & FOOD
    {
      name: "Mathallen",
      lat: 59.9221, lng: 10.7627,
      category_name: "food market",
      rating: 4.4, user_ratings_total: 18000,
      description: "Artisan food hall with Norwegian producers. Chocolate, cheese, and more.",
      tags: ["market", "food-hall", "artisan", "norwegian", "gourmet"],
      sourceApi: "curated",
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Mathallen.jpg/500px-Mathallen.jpg"]
    },
    {
      name: "Kongens",
      lat: 59.9131, lng: 10.7207,
      category_name: "restaurant",
      rating: 4.5, user_ratings_total: 12000,
      description: "Classic Norwegian dining. Traditional dishes in historic setting.",
      tags: ["norwegian", "traditional", "historic", "fine-dining"],
      sourceApi: "curated",
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Kongens.jpg/500px-Kongens.jpg"]
    },
    {
      name: "Norsk Folkemuseum Food",
      lat: 59.9054, lng: 10.6878,
      category_name: "restaurant",
      rating: 4.3, user_ratings_total: 6000,
      description: "Outdoor museum café. Norwegian traditional food and waffles.",
      tags: ["museum", "traditional", "waffles", "local", "budget-friendly"],
      sourceApi: "curated",
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Norwegian_Food.jpg/500px-Norwegian_Food.jpg"]
    },

    // PARKS & FJORD
    {
      name: "Bygdøy Peninsula",
      lat: 59.9047, lng: 10.6804,
      category_name: "museum",
      rating: 4.5, user_ratings_total: 20000,
      description: "Museums by the fjord. Viking, Fram, and Kon-Tiki ships.",
      tags: ["museum", "fjord", "viking", "ships", "history"],
      sourceApi: "curated",
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Bygdo.jpg/500px-Bygdo.jpg"]
    },
    {
      name: "Nordmarka",
      lat: 59.9500, lng: 10.7000,
      category_name: "nature preserve",
      rating: 4.5, user_ratings_total: 15000,
      description: "Forest plateau for hiking. Lakes, cabins, and nature escape.",
      tags: ["forest", "hiking", "nature", "norwegian", "day-trip"],
      sourceApi: "curated",
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Nordmarka.jpg/500px-Nordmarka.jpg"]
    },
  ],

  // ═══════════════════════════════════════════════════════════════════
  // HELSINKI
  // ═══════════════════════════════════════════════════════════════════════════
  "Helsinki": [
    {
      name: "Suomenlinna Fortress",
      lat: 60.1157, lng: 24.9908,
      category_name: "fort",
      rating: 4.6, user_ratings_total: 30000,
      description: "Sea fortress on islands. UNESCO site spanning 3 centuries.",
      tags: ["fortress", "unesco", "island", "history", "must-visit"],
      sourceApi: "curated",
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Suomenlinna.jpg/500px-Suomenlinna.jpg"]
    },
    {
      name: "Temppeliaukio Church",
      lat: 60.1749, lng: 24.9243,
      category_name: "church",
      rating: 4.5, user_ratings_total: 25000,
      description: "Rock church carved into granite. Excellent acoustics and light.",
      tags: ["church", "unique", "rock", "architecture", "must-visit"],
      sourceApi: "curated",
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Temppeliaukio.jpg/500px-Temppeliaukio.jpg"]
    },
    {
      name: "Market Square",
      lat: 60.1669, lng: 24.9555,
      category_name: "market",
      rating: 4.4, user_ratings_total: 25000,
      description: "Waterfront market with local food. Helsinki's oldest market.",
      tags: ["market", "waterfront", "food", "local", "must-visit"],
      sourceApi: "curated",
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Market_Square.jpg/500px-Market_Square.jpg"]
    },
    {
      name: "Senate Square",
      lat: 60.1706, lng: 24.9521,
      category_name: "scenic lookout",
      rating: 4.4, user_ratings_total: 20000,
      description: "Historic square with cathedral. Russian Empire architecture and statues.",
      tags: ["square", "cathedral", "historic", "architecture", "iconic"],
      sourceApi: "curated",
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Senate_Square.jpg/500px-Senate_Square.jpg"]
    },
    {
      name: "Linnanmäki",
      lat: 60.1904, lng: 24.9392,
      category_name: "amusement park",
      rating: 4.3, user_ratings_total: 20000,
      description: "Classic amusement park with roller coasters. Part of nonprofit charity.",
      tags: ["amusement", "park", "coaster", "family", "fun"],
      sourceApi: "curated",
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Linnanmaki.jpg/500px-Linnanmaki.jpg"]
    },

    // RESTAURANTS & FOOD
    {
      name: "Old Market Hall",
      lat: 60.1669, lng: 24.9555,
      category_name: "food market",
      rating: 4.4, user_ratings_total: 18000,
      description: "Historic indoor market with delicatessens. Fine Finnish foods.",
      tags: ["market", "food-hall", "finnish", "delicatessen", "upscale"],
      sourceApi: "curated",
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Market_Hall.jpg/500px-Market_Hall.jpg"]
    },
    {
      name: "Korkeela",
      lat: 60.1710, lng: 24.9402,
      category_name: "restaurant",
      rating: 4.5, user_ratings_total: 12000,
      description: "Modern Finnish restaurant near the market. Innovative Nordic cuisine.",
      tags: ["finnish", "modern", "nordic", "innovative", "fine-dining"],
      sourceApi: "curated",
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/Finnish_Cuisine.jpg/500px-Finnish_Cuisine.jpg"]
    },
    {
      name: "Musiikkikappeli",
      lat: 60.1737, lng: 24.9428,
      category_name: "cafe",
      rating: 4.3, user_ratings_total: 8000,
      description: "Live music cafeteria with vegan options. Local artists and cozy atmosphere.",
      tags: ["cafe", "music", "vegan", "cozy", "live-music"],
      sourceApi: "curated",
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Musiikkikappeli.jpg/500px-Musiikkikappeli.jpg"]
    },

    // PARKS & NATURE
    {
      name: "Central Park",
      lat: 60.1850, lng: 24.9500,
      category_name: "park",
      rating: 4.4, user_ratings_total: 15000,
      description: "Large urban park with lakes and forests. Hiking and skiing paths.",
      tags: ["park", "lakes", "forest", "hiking", "skiing"],
      sourceApi: "curated",
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/Helsinki_Park.jpg/500px-Helsinki_Park.jpg"]
    },
    {
      name: "Suomenlahti Bay Beach",
      lat: 60.1600, lng: 24.9400,
      category_name: "beach",
      rating: 4.3, user_ratings_total: 10000,
      description: "City beach near the market. Summer swimming in the bay.",
      tags: ["beach", "swimming", "summer", "urban", "accessible"],
      sourceApi: "curated",
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/Helsinki_Beach.jpg/500px-Helsinki_Beach.jpg"]
    },
  ],

  // ═══════════════════════════════════════════════════════════════════
  // REYKJAVIK
  // ═══════════════════════════════════════════════════════════════════════════
  "Reykjavik": [
    {
      name: "Hallgrímskirkja",
      lat: 64.1429, lng: -21.9267,
      category_name: "church",
      rating: 4.6, user_ratings_total: 35000,
      description: "Iconic basalt column church. Panoramic city and mountain views.",
      tags: ["church", "iconic", "basalt", "views", "must-visit"],
      sourceApi: "curated",
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Hallgr%C3%ADmskirkja.jpg/500px-Hallgr%C3%ADmskirkja.jpg"]
    },
    {
      name: "Sun Voyager",
      lat: 64.1461, lng: -21.9226,
      category_name: "monument",
      rating: 4.4, user_ratings_total: 25000,
      description: "Sculpture of Viking ship. Dreams and voyages symbol by the sea.",
      tags: ["monument", "viking", "sea", "iconic", "symbol"],
      sourceApi: "curated",
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Sun_Voyager.jpg/500px-Sun_Voyager.jpg"]
    },
    {
      name: "Harpa Concert Hall",
      lat: 64.1469, lng: -21.9336,
      category_name: "concert hall",
      rating: 4.6, user_ratings_total: 30000,
      description: "Stunning glass concert hall. Honeycomb glass and harbor views.",
      tags: ["concert", "glass", "architecture", "views", "must-visit"],
      sourceApi: "curated",
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Harpa_Reykjavik.jpg/500px-Harpa_Reykjavik.jpg"]
    },
    {
      name: "Laugavegur",
      lat: 64.1440, lng: -21.9270,
      category_name: "street",
      rating: 4.4, user_ratings_total: 25000,
      description: "Main shopping street with boutiques and cafes. Trendy Reykjavik.",
      tags: ["shopping", "street", "boutiques", "cafes", "trendy"],
      sourceApi: "curated",
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Laugavegur.jpg/500px-Laugavegur.jpg"]
    },
    {
      name: "Blue Lagoon",
      lat: 63.9154, lng: -22.4509,
      category_name: "spa",
      rating: 4.7, user_ratings_total: 50000,
      description: "Geothermal spa in lava fields. Silica mud and steaming waters.",
      tags: ["spa", "geothermal", "lava", "must-visit", "iconic"],
      sourceApi: "curated",
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Blue_Lagoon.jpg/500px-Blue_Lagoon.jpg"]
    },

    // RESTAURANTS & FOOD
    {
      name: "Kolaportið",
      lat: 64.1463, lng: -21.9350,
      category_name: "food market",
      rating: 4.4, user_ratings_total: 18000,
      description: "Weekend market with Icelandic wool. Food and flea market.",
      tags: ["market", "wool", "food", "flea-market", "local"],
      sourceApi: "curated",
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/Kolaportid.jpg/500px-Kolaportid.jpg"]
    },
    {
      name: "Fish Market",
      lat: 64.1477, lng: -21.9331,
      category_name: "restaurant",
      rating: 4.5, user_ratings_total: 15000,
      description: "Upscale seafood restaurant. Fresh catch and Icelandic cuisine.",
      tags: ["seafood", "fine-dining", "icelandic", "fresh", "must-visit"],
      sourceApi: "curated",
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/Fish_Market.jpg/500px-Fish_Market.jpg"]
    },
    {
      name: "Bæjarins Beztu Pylsur",
      lat: 64.1419, lng: -21.9257,
      category_name: "street food",
      rating: 4.4, user_ratings_total: 12000,
      description: "Iconic hot dog stand since 1957. Best with raw onions and mustard.",
      tags: ["hot-dog", "iconic", "street-food", "classic", "must-try"],
      sourceApi: "curated",
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Hot_Dog.jpg/500px-Hot_Dog.jpg"]
    },

    // NATURE
    {
      name: "Þingvellir",
      lat: 64.2556, lng: -21.1302,
      category_name: "national park",
      rating: 4.8, user_ratings_total: 40000,
      description: "UNESCO park where plates separate. Almannagjá gorge and diving silfra.",
      tags: ["national-park", "unesco", "rift", "diving", "history"],
      sourceApi: "curated",
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Thingvellir.jpg/500px-Thingvellir.jpg"]
    },
    {
      name: "Mount Esja",
      lat: 64.2100, lng: -21.6200,
      category_name: "mountain",
      rating: 4.5, user_ratings_total: 12000,
      description: "Popular hiking mountain. Peaks above city and trails for all levels.",
      tags: ["mountain", "hiking", "views", "nature", "day-trip"],
      sourceApi: "curated",
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Mount_Esja.jpg/500px-Mount_Esja.jpg"]
    },
  ],

  // ═══════════════════════════════════════════════════════════════════════════
  // PRAGUE
  // ═══════════════════════════════════════════════════════════════════════════
  "Prague": [
    {
      name: "Charles Bridge",
      lat: 50.0865, lng: 14.4116,
      category_name: "bridge",
      rating: 4.7, user_ratings_total: 55000,
      description: "Historic stone bridge with baroque statues. 14 towers and stunning views.",
      tags: ["bridge", "historic", "baroque", "views", "must-visit"],
      sourceApi: "curated",
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Charles_Bridge.jpg/500px-Charles_Bridge.jpg"]
    },
    {
      name: "Prague Castle",
      lat: 50.0912, lng: 14.3995,
      category_name: "castle",
      rating: 4.7, user_ratings_total: 50000,
      description: "Largest ancient castle complex. Changing of guard and cathedral.",
      tags: ["castle", "historic", "cathedral", "must-visit", "architecture"],
      sourceApi: "curated",
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Prague_Castle.jpg/500px-Prague_Castle.jpg"]
    },
    {
      name: "Old Town Square",
      lat: 50.0871, lng: 14.4215,
      category_name: "scenic lookout",
      rating: 4.6, user_ratings_total: 45000,
      description: "Historic square with astronomical clock. Gothic churches and architecture.",
      tags: ["square", "historic", "gothic", "clock", "must-visit"],
      sourceApi: "curated",
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Old_Town_Square.jpg/500px-Old_Town_Square.jpg"]
    },
    {
      name: "St. Vitus Cathedral",
      lat: 50.0909, lng: 14.4009,
      category_name: "cathedral",
      rating: 4.7, user_ratings_total: 35000,
      description: "Gothic cathedral with stained glass. Royal tombs inside.",
      tags: ["cathedral", "gothic", "stained-glass", "royal", "architecture"],
      sourceApi: "curated",
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/St_Vitus_Cathedral.jpg/500px-St_Vitus_Cathedral.jpg"]
    },
    {
      name: "Charles University",
      lat: 50.0875, lng: 14.4204,
      category_name: "university",
      rating: 4.4, user_ratings_total: 15000,
      description: "Europe's second-oldest university. Beautiful historic building.",
      tags: ["university", "historic", "education", "beautiful", "old"],
      sourceApi: "curated",
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Charles_University.jpg/500px-Charles_University.jpg"]
    },

    // RESTAURANTS & FOOD
    {
      name: "Maharaja Indian Restaurant",
      lat: 50.0870, lng: 14.4211,
      category_name: "restaurant",
      rating: 4.3, user_ratings_total: 10000,
      description: "Popular Indian restaurant in Old Town. Tandoori and curry specialties.",
      tags: ["indian", "tandoori", "curry", "popular", "local"],
      sourceApi: "curated",
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Indian_Food.jpg/500px-Indian_Food.jpg"]
    },
    {
      name: "Lobelius",
      lat: 50.0836, lng: 14.4198,
      category_name: "restaurant",
      rating: 4.4, user_ratings_total: 8000,
      description: "Czech cuisine in historic building. Duck and goulash favorites.",
      tags: ["czech", "traditional", "duck", "goulash", "historic"],
      sourceApi: "curated",
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Czech_Cuisine.jpg/500px-Czech_Cuisine.jpg"]
    },
    {
      name: "Havelská Market",
      lat: 50.0871, lng: 14.4243,
      category_name: "market",
      rating: 4.3, user_ratings_total: 8000,
      description: "Medieval market with crafts. Trdelník chimney cake.",
      tags: ["market", "crafts", "trdelnik", "medieval", "street-food"],
      sourceApi: "curated",
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Market.jpg/500px-Market.jpg"]
    },

    // PARKS & RIVER
    {
      name: "Vysehrad",
      lat: 50.0658, lng: 14.4325,
      category_name: "fort",
      rating: 4.5, user_ratings_total: 20000,
      description: "Fortress with basilica and casemates. Panoramic city views.",
      tags: ["fortress", "views", "basilica", "historic", "panoramic"],
      sourceApi: "curated",
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Vysehrad.jpg/500px-Vysehrad.jpg"]
    },
    {
      name: "Divoka Sarka",
      lat: 50.0450, lng: 14.3450,
      category_name: "nature preserve",
      rating: 4.4, user_ratings_total: 10000,
      description: "Wild gorge with hiking trails. Deep forests and streams.",
      tags: ["gorge", "hiking", "nature", "forests", "day-trip"],
      sourceApi: "curated",
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Divoka_Sarka.jpg/500px-Divoka_Sarka.jpg"]
    },
  ],

  // ═══════════════════════════════════════════════════════════════════════════
  // VIENNA
  // ═══════════════════════════════════════════════════════════════════════════
  "Vienna": [
    {
      name: "Schönbrunn Palace",
      lat: 48.1861, lng: 16.5006,
      category_name: "palace",
      rating: 4.6, user_ratings_total: 50000,
      description: "Habsburg summer residence. 1,441 rooms and baroque gardens.",
      tags: ["palace", "baroque", "habsburg", "gardens", "must-visit"],
      sourceApi: "curated",
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Sch%C3%B6nbrunn_Palace.jpg/500px-Sch%C3%B6nbrunn_Palace.jpg"]
    },
    {
      name: "St. Stephen's Cathedral",
      lat: 48.2086, lng: 16.3735,
      category_name: "cathedral",
      rating: 4.6, user_ratings_total: 40000,
      description: "Iconic Gothic cathedral. 500-year-old tower with views.",
      tags: ["cathedral", "gothic", "iconic", "tower-views", "must-visit"],
      sourceApi: "curated",
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/St_Stephen.jpg/500px-St_Stephen.jpg"]
    },
    {
      name: "Hofburg",
      lat: 48.2060, lng: 16.3671,
      category_name: "palace",
      rating: 4.5, user_ratings_total: 35000,
      description: "Imperial palace with Sisi Museum. 600 years of history.",
      tags: ["palace", "imperial", "museum", "history", "sisi"],
      sourceApi: "curated",
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Hofburg.jpg/500px-Hofburg.jpg"]
    },
    {
      name: "Belvedere Palace",
      lat: 48.1921, lng: 16.4329,
      category_name: "palace",
      rating: 4.6, user_ratings_total: 30000,
      description: "Baroque palace with art gallery. Stunning gardens.",
      tags: ["palace", "baroque", "art", "gardens", "gallery"],
      sourceApi: "curated",
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/Belvedere.jpg/500px-Belvedere.jpg"]
    },
    {
      name: "Danube Tower",
      lat: 48.2142, lng: 16.4027,
      category_name: "scenic lookout",
      rating: 4.4, user_ratings_total: 20000,
      description: "Observation tower with views. Cafe rotating at top.",
      tags: ["tower", "views", "observation", "Danube", "must-visit"],
      sourceApi: "curated",
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Danube_Tower.jpg/500px-Danube_Tower.jpg"]
    },

    // RESTAURANTS & FOOD
    {
      name: "Naschmarkt",
      lat: 48.1976, lng: 16.4026,
      category_name: "food market",
      rating: 4.4, user_ratings_total: 25000,
      description: "Viennese food market since 1920. International cuisines and wine.",
      tags: ["market", "food", "wine", "international", "diverse"],
      sourceApi: "curated",
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Naschmarkt.jpg/500px-Naschmarkt.jpg"]
    },
    {
      name: "Figlmüller",
      lat: 48.2088, lng: 16.3732,
      category_name: "restaurant",
      rating: 4.4, user_ratings_total: 18000,
      description: "Famous for Wiener Schnitzel. Huge breaded pork cutlet.",
      tags: ["schnitzel", "austrian", "famous", "must-visit", "traditional"],
      sourceApi: "curated",
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Schnitzel.jpg/500px-Schnitzel.jpg"]
    },
    {
      name: "Café Central",
      lat: 48.2099, lng: 16.3689,
      category_name: "cafe",
      rating: 4.5, user_ratings_total: 15000,
      description: "Historic coffee house from 1876. Trotsky and artists met here.",
      tags: ["cafe", "historic", "coffee", "architecture", "tradition"],
      sourceApi: "curated",
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Caf%C3%A9_Central.jpg/500px-Caf%C3%A9_Central.jpg"]
    },

    // PARKS & RIVER
    {
      name: "Prater",
      lat: 48.2175, lng: 16.4126,
      category_name: "park",
      rating: 4.5, user_ratings_total: 25000,
      description: "Large public park with Giant Ferris Wheel. Green escape.",
      tags: ["park", "ferris-wheel", "large", "green", "family"],
      sourceApi: "curated",
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Prater.jpg/500px-Prater.jpg"]
    },
    {
      name: "Danube Island",
      lat: 48.2100, lng: 16.4100,
      category_name: "island",
      rating: 4.3, user_ratings_total: 15000,
      description: "Island with beach and bars. Summer party spot.",
      tags: ["island", "beach", "party", "summer", "nightlife"],
      sourceApi: "curated",
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Danube_Island.jpg/500px-Danube_Island.jpg"]
    },
  ],

  // ═══════════════════════════════════════════════════════════════════════════
  // BUDAPEST
  // ═══════════════════════════════════════════════════════════════════════════
  "Budapest": [
    {
      name: "Parliament Building",
      lat: 47.5095, lng: 19.0496,
      category_name: "building",
      rating: 4.7, user_ratings_total: 55000,
      description: "Magnificent dome and Gothic Revival. Danube views at night.",
      tags: ["parliament", "gothic", "iconic", "must-visit", "night-view"],
      sourceApi: "curated",
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Parliament_Budapest.jpg/500px-Parliament_Budapest.jpg"]
    },
    {
      name: "Chain Bridge",
      lat: 47.4999, lng: 19.0459,
      category_name: "bridge",
      rating: 4.6, user_ratings_total: 45000,
      description: "Iconic suspension bridge. Lions guarding each end.",
      tags: ["bridge", "iconic", "suspension", "views", "must-visit"],
      sourceApi: "curated",
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/Chain_Bridge.jpg/500px-Chain_Bridge.jpg"]
    },
    {
      name: "Buda Castle",
      lat: 47.4979, lng: 19.0259,
      category_name: "castle",
      rating: 4.5, user_ratings_total: 35000,
      description: "Hungarian kings' residence. Museum and panoramic views.",
      tags: ["castle", "museum", "panoramic", "history", "royal"],
      sourceApi: "curated",
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Buda_Castle.jpg/500px-Buda_Castle.jpg"]
    },
    {
      name: "Thermal Baths",
      lat: 47.5149, lng: 19.0364,
      category_name: "spa",
      rating: 4.6, user_ratings_total: 40000,
      description: "Historic Turkish baths. Art Nouveau in Széchenyi.",
      tags: ["spa", "thermal", "turkish", "art-nouveau", "must-visit"],
      sourceApi: "curated",
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Thermal_Baths.jpg/500px-Thermal_Baths.jpg"]
    },
    {
      name: "Fisherman's Bastion",
      lat: 47.5012, lng: 19.0345,
      category_name: "scenic lookout",
      rating: 4.7, user_ratings_total: 45000,
      description: "Neo-Romanesque terrace. 7 towers for tribes. Stunning views.",
      tags: ["bastion", "views", "panoramic", "romanesque", "must-visit"],
      sourceApi: "curated",
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Fisherman_Bastion.jpg/500px-Fisherman_Bastion.jpg"]
    },

    // RESTAURANTS & FOOD
    {
      name: "Central Market Hall",
      lat: 47.4981, lng: 19.0501,
      category_name: "food market",
      rating: 4.4, user_ratings_total: 25000,
      description: "Gothic market since 1897. Goulash and paprika souvenirs.",
      tags: ["market", "goulash", "paprika", "souvenirs", "historic"],
      sourceApi: "curated",
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Central_Market.jpg/500px-Central_Market.jpg"]
    },
    {
      name: "Goulash Restaurant",
      lat: 47.5036, lng: 19.0488,
      category_name: "restaurant",
      rating: 4.3, user_ratings_total: 12000,
      description: "Traditional Hungarian goulash. Hearty stew and wines.",
      tags: ["goulash", "hungarian", "traditional", "stew", "wine"],
      sourceApi: "curated",
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Goulash.jpg/500px-Goulash.jpg"]
    },
    {
      name: "Ruin Bar",
      lat: 47.5003, lng: 19.0706,
      category_name: "bar",
      rating: 4.4, user_ratings_total: 15000,
      description: "Bars in abandoned buildings. Szimpla kert and street art.",
      tags: ["bar", "ruin-bars", "unique", "street-art", "nightlife"],
      sourceApi: "curated",
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Ruin_Bar.jpg/500px-Ruin_Bar.jpg"]
    },

    // PARKS & RIVER
    {
      name: "Margaret Island",
      lat: 47.5319, lng: 19.0450,
      category_name: "park",
      rating: 4.5, user_ratings_total: 20000,
      description: "Danube island with gardens. Jogging and ruins of monastery.",
      tags: ["island", "gardens", "jogging", "ruins", "relaxing"],
      sourceApi: "curated",
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Margaret_Island.jpg/500px-Margaret_Island.jpg"]
    },
    {
      name: "Buda Hills",
      lat: 47.5500, lng: 19.0000,
      category_name: "nature preserve",
      rating: 4.4, user_ratings_total: 12000,
      description: "Wooded hills with funicular. Hiking and chairlift.",
      tags: ["hills", "hiking", "funicular", "nature", "views"],
      sourceApi: "curated",
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Buda_Hills.jpg/500px-Buda_Hills.jpg"]
    },
  ],

  // ═══════════════════════════════════════════════════════════════════════════
  // BERLIN
  // ═══════════════════════════════════════════════════════════════════════════
  "Berlin": [
    {
      name: "Brandenburg Gate",
      lat: 52.5163, lng: 13.3777,
      category_name: "monument",
      rating: 4.6, user_ratings_total: 60000,
      description: "Iconic 18th-century gate. Reunification symbol.",
      tags: ["iconic", "historic", "unification", "must-visit", "symbol"],
      sourceApi: "curated",
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Brandenburg_Gate.jpg/500px-Brandenburg_Gate.jpg"]
    },
    {
      name: "East Side Gallery",
      lat: 52.5050, lng: 13.4397,
      category_name: "monument",
      rating: 4.6, user_ratings_total: 40000,
      description: "Remaining Berlin Wall with murals. 131 artists painted.",
      tags: ["wall", "murals", "art", "historic", "must-visit"],
      sourceApi: "curated",
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/East_Side_Gallery.jpg/500px-East_Side_Gallery.jpg"]
    },
    {
      name: "Reichstag",
      lat: 52.5186, lng: 13.3755,
      category_name: "building",
      rating: 4.5, user_ratings_total: 35000,
      description: "Parliament building with glass dome. Nazi and division history.",
      tags: ["parliament", "dome", "history", "glass", "must-visit"],
      sourceApi: "curated",
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Reichstag.jpg/500px-Reichstag.jpg"]
    },
    {
      name: "Memorial to Murdered Jews",
      lat: 52.5139, lng: 13.3789,
      category_name: "memorial",
      rating: 4.6, user_ratings_total: 30000,
      description: "Concrete steles for Holocaust. Emotional and powerful.",
      tags: ["memorial", "holocaust", "concrete", "emotional", "must-visit"],
      sourceApi: "curated",
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/Holocaust_Memorial.jpg/500px-Holocaust_Memorial.jpg"]
    },
    {
      name: "Checkpoint Charlie",
      lat: 52.5075, lng: 13.3904,
      category_name: "monument",
      rating: 4.4, user_ratings_total: 35000,
      description: "Famous crossing point. US and Soviet tanks faced off.",
      tags: ["checkpoint", "cold-war", "historic", "wall", "tourist"],
      sourceApi: "curated",
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Checkpoint_Charlie.jpg/500px-Checkpoint_Charlie.jpg"]
    },

    // RESTAURANTS & FOOD
    {
      name: "Markthalle IX",
      lat: 52.4865, lng: 13.4198,
      category_name: "food market",
      rating: 4.4, user_ratings_total: 15000,
      description: "Hipster food market in Kreuzberg. International street food.",
      tags: ["market", "street-food", "hipster", "kreuzberg", "diverse"],
      sourceApi: "curated",
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Markthalle.jpg/500px-Markthalle.jpg"]
    },
    {
      name: "Currywurst",
      lat: 52.4930, lng: 13.4250,
      category_name: "street food",
      rating: 4.3, user_ratings_total: 12000,
      description: "Berlin's signature dish. Curry sausage with ketchup.",
      tags: ["currywurst", "street-food", "signature", "must-try", "budget-friendly"],
      sourceApi: "curated",
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/Currywurst.jpg/500px-Currywurst.jpg"]
    },
    {
      name: "Facil",
      lat: 52.5091, lng: 13.3673,
      category_name: "restaurant",
      rating: 4.4, user_ratings_total: 10000,
      description: "Famous for German cuisine. Michelin-starred dining.",
      tags: ["german", "michelin", "fine-dining", "celebration"],
      sourceApi: "curated",
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/German_Cuisine.jpg/500px-German_Cuisine.jpg"]
    },

    // PARKS & NATURE
    {
      name: "Tiergarten",
      lat: 52.5145, lng: 13.3501,
      category_name: "park",
      rating: 4.5, user_ratings_total: 25000,
      description: "Central park perfect for biking. Memorials and beer gardens.",
      tags: ["park", "biking", "beer-garden", "memorials", "green"],
      sourceApi: "curated",
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/7/7f/Tiergarten.jpg/500px-Tiergarten.jpg"]
    },
    {
      name: "Müggelsee",
      lat: 52.4500, lng: 13.6500,
      category_name: "lake",
      rating: 4.3, user_ratings_total: 12000,
      description: "Largest lake in Berlin. Swimming and beer garden.",
      tags: ["lake", "swimming", "beer-garden", "summer", "day-trip"],
      sourceApi: "curated",
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/M%C3%BCggelsee.jpg/500px-M%C3%BCggelsee.jpg"]
    },
  ],

  // ═══════════════════════════════════════════════════════════════════════════
  // MADRID
  // ═══════════════════════════════════════════════════════════════════════════
  "Madrid": [
    {
      name: "Royal Palace",
      lat: 40.4181, lng: -3.7135,
      category_name: "palace",
      rating: 4.6, user_ratings_total: 45000,
      description: "Largest royal palace in Europe. 3,000 rooms and gardens.",
      tags: ["palace", "royal", "largest", "gardens", "must-visit"],
      sourceApi: "curated",
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Royal_Palace_Madrid.jpg/500px-Royal_Palace_Madrid.jpg"]
    },
    {
      name: "Prado Museum",
      lat: 40.4138, lng: -3.6956,
      category_name: "art museum",
      rating: 4.7, user_ratings_total: 50000,
      description: "World's finest art collections. Goya, Velázquez, and more.",
      tags: ["museum", "art", "goya", "velazquez", "must-visit"],
      sourceApi: "curated",
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Prado_Museum.jpg/500px-Prado_Museum.jpg"]
    },
    {
      name: "Puerta del Sol",
      lat: 40.4168, lng: -3.7034,
      category_name: "square",
      rating: 4.4, user_ratings_total: 40000,
      description: "Central square with km zero. Tío Pepe sign and statue.",
      tags: ["square", "central", "km-zero", "iconic", "tourist"],
      sourceApi: "curated",
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/Puerta_del_Sol.jpg/500px-Puerta_del_Sol.jpg"]
    },
    {
      name: "Retiro Park",
      lat: 40.4108, lng: -3.6838,
      category_name: "park",
      rating: 4.6, user_ratings_total: 40000,
      description: "Beautiful park with lake. Crystal Palace and rose garden.",
      tags: ["park", "lake", "garden", "rose-garden", "relaxing"],
      sourceApi: "curated",
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wwikipedia/commons/thumb/b/bd/Retiro_Park.jpg/500px-Retiro_Park.jpg"]
    },
    {
      name: "Gran Vía",
      lat: 40.4195, lng: -3.7063,
      category_name: "street",
      rating: 4.4, user_ratings_total: 30000,
      description: "Main shopping street. Architecture and theaters.",
      tags: ["shopping", "street", "architecture", "theater", "entertainment"],
      sourceApi: "curated",
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Gran_Via.jpg/500px-Gran_Via.jpg"]
    },

    // RESTAURANTS & FOOD
    {
      name: "Mercado San Miguel",
      lat: 40.4171, lng: -3.7091,
      category_name: "food market",
      rating: 4.4, user_ratings_total: 25000,
      description: "Glass market with tapas. Over 30 vendors.",
      tags: ["market", "tapas", "gourmet", "spanish", "wine"],
      sourceApi: "curated",
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Mercado_San_Miguel.jpg/500px-Mercado_San_Miguel.jpg"]
    },
    {
      name: "Sobrino de Botín",
      lat: 40.4141, lng: -3.7079,
      category_name: "restaurant",
      rating: 4.3, user_ratings_total: 12000,
      description: "Oldest restaurant in the world (1725). Cochinillo suckling pig.",
      tags: ["oldest", "restaurant", "cochinillo", "historic", "must-visit"],
      sourceApi: "curated",
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/Botin.jpg/500px-Botin.jpg"]
    },
    {
      name: "Churriana",
      lat: 40.4200, lng: -3.7100,
      category_name: "restaurant",
      rating: 4.3, user_ratings_total: 8000,
      description: "Classic Madrid tavern. Patatas bravas and croquetas.",
      tags: ["spanish", "tavern", "tapas", "local", "budget-friendly"],
      sourceApi: "curated",
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Tapas.jpg/500px-Tapas.jpg"]
    },

    // PARKS & NATURE
    {
      name: "Casa de Campo",
      lat: 40.4300, lng: -3.7600,
      category_name: "park",
      rating: 4.4, user_ratings_total: 15000,
      description: "Huge park past the river. Zoo and cable car.",
      tags: ["park", "cable-car", "zoo", "large", "hiking"],
      sourceApi: "curated",
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Casa_de_Campo.jpg/500px-Casa_de_Campo.jpg"]
    },
    {
      name: "Rio Madrid",
      lat: 40.4100, lng: -3.6900,
      category_name: "river",
      rating: 4.3, user_ratings_total: 10000,
      description: "Urban beach along the river. Kayaking and sunbathing.",
      tags: ["river", "beach", "kayaking", "urban", "summer"],
      sourceApi: "curated",
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Rio_Madrid.jpg/500px-Rio_Madrid.jpg"]
    },
  ],

  // ═══════════════════════════════════════════════════════════════════════════
  // FLORENCE
  // ═══════════════════════════════════════════════════════════════════════════
  "Florence": [
    {
      name: "Duomo",
      lat: 43.7737, lng: 11.2551,
      category_name: "cathedral",
      rating: 4.8, user_ratings_total: 60000,
      description: "Brunelleschi's red dome. Terracotta from Giotto's Campanile.",
      tags: ["duomo", "dome", "brunelleschi", "must-visit", "iconic"],
      sourceApi: "curated",
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Brunelleschi%27s_dome.jpg/500px-Brunelleschi%27s_dome.jpg"]
    },
    {
      name: "Uffizi Gallery",
      lat: 43.7688, lng: 11.2553,
      category_name: "art museum",
      rating: 4.7, user_ratings_total: 55000,
      description: "World's greatest art collection. Botticelli and da Vinci.",
      tags: ["gallery", "art", "botticelli", "must-visit", "renaissance"],
      sourceApi: "curated",
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Uffizi_Gallery.jpg/500px-Uffizi_Gallery.jpg"]
    },
    {
      name: "Piazzale Michelangelo",
      lat: 43.7650, lng: 11.2616,
      category_name: "scenic lookout",
      rating: 4.5, user_ratings_total: 35000,
      description: "Panoramic viewpoint with replica David. Best sunset views.",
      tags: ["views", "panoramic", "sunset", "david", "must-visit"],
      sourceApi: "curated",
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Piazzale_Michelangelo.jpg/500px-Piazzale_Michelangelo.jpg"]
    },
    {
      name: "Ponte Vecchio",
      lat: 43.7713, lng: 11.2537,
      category_name: "bridge",
      rating: 4.6, user_ratings_total: 45000,
      description: "Historic bridge with shops. Vasari corridor above.",
      tags: ["bridge", "shops", "historic", "iconic", "must-visit"],
      sourceApi: "curated",
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Ponte_Vecchio.jpg/500px-Ponte_Vecchio.jpg"]
    },
    {
      name: "Accademia Gallery",
      lat: 43.7692, lng: 11.2560,
      category_name: "art museum",
      rating: 4.6, user_ratings_total: 40000,
      description: "Home to Michelangelo's David. The world's most famous statue.",
      tags: ["gallery", "david", "michelangelo", "must-visit", "statue"],
      sourceApi: "curated",
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/David_by_Michelangelo.jpg/500px-David_by_Michelangelo.jpg"]
    },

    // RESTAURANTS & FOOD
    {
      name: "Mercato Central",
      lat: 43.7692, lng: 11.2552,
      category_name: "food market",
      rating: 4.4, user_ratings_total: 20000,
      description: "Roofless market with fresh food. Truffles and pasta.",
      tags: ["market", "fresh", "truffles", "pasta", "local"],
      sourceApi: "curated",
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Mercato.jpg/500px-Mercato.jpg"]
    },
    {
      name: "Trattoria Zazà",
      lat: 43.7690, lng: 11.2527,
      category_name: "restaurant",
      rating: 4.4, user_ratings_total: 15000,
      description: "Popular for ribollita. Thick bread soup and wines.",
      tags: ["trattoria", "ribollita", "soup", "popular", "traditional"],
      sourceApi: "curated",
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Italian_Food.jpg/500px-Italian_Food.jpg"]
    },
    {
      name: "All'Antonio",
      lat: 43.7698, lng: 11.2540,
      category_name: "restaurant",
      rating: 4.3, user_ratings_total: 8000,
      description: "Bistecca alla fiorentina. Famous 1.2kg T-bone steak.",
      tags: ["steak", "bistecca", "fiorentina", "famous", "must-try"],
      sourceApi: "curated",
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Bistecca.jpg/500px-Bistecca.jpg"]
    },

    // PARKS & NATURE
    {
      name: "Boboli Gardens",
      lat: 43.7689, lng: 11.2478,
      category_name: "park",
      rating: 4.5, user_ratings_total: 25000,
      description: "Medieval gardens with statues. Behind Palazzo Pitti.",
      tags: ["gardens", "statues", "renaissance", "palace", "relaxing"],
      sourceApi: "curated",
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Boboli_Gardens.jpg/500px-Boboli_Gardens.jpg"]
    },
    {
      name: "Fiesole",
      lat: 43.8100, lng: 11.2900,
      category_name: "town",
      rating: 4.4, user_ratings_total: 15000,
      description: "Hilltop town with views. Roman theater and dinner escape.",
      tags: ["town", "views", "roman", "dinner", "day-trip"],
      sourceApi: "curated",
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Fiesole.jpg/500px-Fiesole.jpg"]
    },
  ],

  // ═══════════════════════════════════════════════════════════════════════════
  // VENICE
  // ═══════════════════════════════════════════════════════════════════════════
  "Venice": [
    {
      name: "St. Mark's Basilica",
      lat: 45.4341, lng: 12.3388,
      category_name: "basilica",
      rating: 4.7, user_ratings_total: 55000,
      description: "Byzantine treasure with golden mosaics. Doge's church.",
      tags: ["basilica", "byzantine", "mosaics", "must-visit", "gold"],
      sourceApi: "curated",
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/St_Mark%27s_Basilica.jpg/500px-St_Mark%27s_Basilica.jpg"]
    },
    {
      name: "Doge's Palace",
      lat: 45.4336, lng: 12.3402,
      category_name: "palace",
      rating: 4.6, user_ratings_total: 45000,
      description: "Gothic palace with prisons. Bridge of Sighs outside.",
      tags: ["palace", "gothic", "prison", "bridge-of-sighs", "must-visit"],
      sourceApi: "curated",
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Doge_Palace.jpg/500px-Doge_Palace.jpg"]
    },
    {
      name: "Grand Canal",
      lat: 45.4415, lng: 12.3290,
      category_name: "canal",
      rating: 4.7, user_ratings_total: 50000,
      description: "Main water highway with palazzi. Vaporetto ride is iconic.",
      tags: ["canal", "vaporetto", "palazzi", "iconic", "must-visit"],
      sourceApi: "curated",
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/Grand_Canal.jpg/500px-Grand_Canal.jpg"]
    },
    {
      name: "Rialto Bridge",
      lat: 45.4405, lng: 12.3358,
      category_name: "bridge",
      rating: 4.5, user_ratings_total: 40000,
      description: "Oldest bridge over the canal. Market below.",
      tags: ["bridge", "market", "historic", "iconic", "sunset"],
      sourceApi: "curated",
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Rialto_Bridge.jpg/500px-Rialto_Bridge.jpg"]
    },
    {
      name: "St. Mark's Campanile",
      lat: 45.4340, lng: 12.3391,
      category_name: "tower",
      rating: 4.5, user_ratings_total: 35000,
      description: "Tall bell tower in the square. Lift to the top for views.",
      tags: ["campanile", "tower", "views", "iconic", "lift"],
      sourceApi: "curated",
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Campanile.jpg/500px-Campanile.jpg"]
    },

    // RESTAURANTS & FOOD
    {
      name: "Rialto Market",
      lat: 45.4404, lng: 12.3350,
      category_name: "food market",
      rating: 4.4, user_ratings_total: 20000,
      description: "Fresh fish and produce. Fruit and vegetable stands.",
      tags: ["market", "fish", "produce", "fruit", "local"],
      sourceApi: "curated",
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Rialto_Market.jpg/500px-Rialto_Market.jpg"]
    },
    {
      name: "Da Marisa",
      lat: 45.4437, lng: 12.3183,
      category_name: "restaurant",
      rating: 4.5, user_ratings_total: 10000,
      description: "Tiny restaurant near Arsenal. Family-run for decades.",
      tags: ["restaurant", "family", "historic", "famous", "local"],
      sourceApi: "curated",
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Venice_Food.jpg/500px-Venice_Food.jpg"]
    },
    {
      name: "Cantina do Spade",
      lat: 45.4424, lng: 12.3199,
      category_name: "bacaro",
      rating: 4.3, user_ratings_total: 8000,
      description: "Wine bar with cicheti. Venetian tapas tradition.",
      tags: ["wine", "cicheti", "bacaro", "tapas", "budget-friendly"],
      sourceApi: "curated",
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Cicheti.jpg/500px-Cicheti.jpg"]
    },

    // CANALS & ISLANDS
    {
      name: "Burano",
      lat: 45.4600, lng: 12.4200,
      category_name: "island",
      rating: 4.6, user_ratings_total: 20000,
      description: "Colorful island with lace. Photo-worthy houses.",
      tags: ["island", "colorful", "lace", "photography", "day-trip"],
      sourceApi: "curated",
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Burano.jpg/500px-Burano.jpg"]
    },
    {
      name: "Lido Beach",
      lat: 45.3700, lng: 12.3500,
      category_name: "beach",
      rating: 4.3, user_ratings_total: 12000,
      description: "Long sandy beach near Venice. Summer resort area.",
      tags: ["beach", "sand", "summer", "resort", "accessible"],
      sourceApi: "curated",
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/Lido_Beach.jpg/500px-Lido_Beach.jpg"]
    },
  ],

  // ═══════════════════════════════════════════════════════════════════════════
  // CAPE TOWN
  // ═══════════════════════════════════════════════════════════════════════════
  "Cape Town": [
    {
      name: "Table Mountain",
      lat: -33.9628, lng: 18.4098,
      category_name: "mountain",
      rating: 4.7, user_ratings_total: 55000,
      description: "Flat-topped mountain with cable car. Panoramic city and ocean views.",
      tags: ["mountain", "cable-car", "views", "iconic", "must-visit"],
      sourceApi: "curated",
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Table_Mountain.jpg/500px-Table_Mountain.jpg"]
    },
    {
      name: "Robben Island",
      lat: -33.8078, lng: 18.4903,
      category_name: "island",
      rating: 4.6, user_ratings_total: 35000,
      description: "Nelson Mandela's prison. Ferry and somber history tours.",
      tags: ["island", "mandela", "history", "museum", "must-visit"],
      sourceApi: "curated",
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Robben_Island.jpg/500px-Robben_Island.jpg"]
    },
    {
      name: "Camps Bay",
      lat: -33.9530, lng: 18.3820,
      category_name: "beach",
      rating: 4.5, user_ratings_total: 30000,
      description: "Trendy beach with restaurants. Mountain backdrop.",
      tags: ["beach", "trendy", "restaurants", "sunset", "mountain"],
      sourceApi: "curated",
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Camps_Bay.jpg/500px-Camps_Bay.jpg"]
    },
    {
      name: "V&A Waterfront",
      lat: -33.9009, lng: 18.4193,
      category_name: "harbor",
      rating: 4.5, user_ratings_total: 40000,
      description: "Working harbor with shops. Two Oceans Aquarium and restaurants.",
      tags: ["harbor", "shopping", "aquarium", "restaurants", "family"],
      sourceApi: "curated",
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Waterfront.jpg/500px-Waterfront.jpg"]
    },
    {
      name: "Kirstenbosch",
      lat: -33.9887, lng: 18.7801,
      category_name: "botanical garden",
      rating: 4.6, user_ratings_total: 25000,
      description: "Scenic garden at foot of mountain. Summer concerts.",
      tags: ["garden", "botanical", "mountain", "concerts", "nature"],
      sourceApi: "curated",
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Kirstenbosch.jpg/500px-Kirstenbosch.jpg"]
    },

    // RESTAURANTS & FOOD
    {
      name: "Greenmarket Square",
      lat: -33.9180, lng: 18.4238,
      category_name: "market",
      rating: 4.3, user_ratings_total: 15000,
      description: "Trade craft market. African artwork and curios.",
      tags: ["market", "crafts", "art", "souvenirs", "african"],
      sourceApi: "curated",
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Greenmarket.jpg/500px-Greenmarket.jpg"]
    },
    {
      name: "The Bay",
      lat: -33.9529, lng: 18.3808,
      category_name: "restaurant",
      rating: 4.4, user_ratings_total: 12000,
      description: "Camps Bay restaurant with mountain views. Seafood.",
      tags: ["seafood", "views", "mountain", "romantic", "dining"],
      sourceApi: "curated",
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/Cape_Town_Food.jpg/500px-Cape_Town_Food.jpg"]
    },
    {
      name: "Bree Street",
      lat: -33.9211, lng: 18.4215,
      category_name: "street",
      rating: 4.3, user_ratings_total: 10000,
      description: "Trendy street with restaurants. Breweries and coffee.",
      tags: ["street", "trendy", "breweries", "coffee", "food"],
      sourceApi: "curated",
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Bree_Street.jpg/500px-Bree_Street.jpg"]
    },

    // BEACHES & NATURE
    {
      name: "Boulders Beach",
      lat: -34.1092, lng: 18.4503,
      category_name: "beach",
      rating: 4.6, user_ratings_total: 20000,
      description: "Penguin colony with boardwalk. Family-friendly.",
      tags: ["beach", "penguins", "wildlife", "family", "unique"],
      sourceApi: "curated",
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Boulders_Beach.jpg/500px-Boulders_Beach.jpg"]
    },
    {
      name: "Constantia Wine Farm",
      lat: -34.0300, lng: 18.4200,
      category_name: "winery",
      rating: 4.5, user_ratings_total: 15000,
      description: "Oldest wine region. Tasting and historic estates.",
      tags: ["wine", "winery", "historic", "tasting", "day-trip"],
      sourceApi: "curated",
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Wine_Farm.jpg/500px-Wine_Farm.jpg"]
    },
  ],

  // ═══════════════════════════════════════════════════════════════════════════
  // RIO DE JANEIRO
  // ═══════════════════════════════════════════════════════════════════════════
  "Rio de Janeiro": [
    {
      name: "Christ the Redeemer",
      lat: -22.9519, lng: -43.2105,
      category_name: "monument",
      rating: 4.7, user_ratings_total: 70000,
      description: "Iconic statue atop Corcovado. New Wonder of the World.",
      tags: ["statue", "iconic", "wonder", "must-visit", "panoramic"],
      sourceApi: "curated",
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Christ_the_Redeemer.jpg/500px-Christ_the_Redeemer.jpg"]
    },
    {
      name: "Copacabana Beach",
      lat: -22.9711, lng: -43.1822,
      category_name: "beach",
      rating: 4.5, user_ratings_total: 55000,
      description: "World-famous4km beach. Promenade and volleyball.",
      tags: ["beach", "iconic", "promenade", "volleyball", "must-visit"],
      sourceApi: "curated",
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Copacabana.jpg/500px-Copacabana.jpg"]
    },
    {
      name: "Sugarloaf Mountain",
      lat: -22.9480, lng: -43.1565,
      category_name: "mountain",
      rating: 4.6, user_ratings_total: 40000,
      description: "Cable car to peak. Sunset and bay views.",
      tags: ["mountain", "cable-car", "views", "sunset", "iconic"],
      sourceApi: "curated",
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Sugarloaf.jpg/500px-Sugarloaf.jpg"]
    },
    {
      name: "Ipanema Beach",
      lat: -22.9830, lng: -43.2100,
      category_name: "beach",
      rating: 4.5, user_ratings_total: 35000,
      description: "Chic beach from song. Trendy shops and cafes.",
      tags: ["beach", "chic", "shopping", "sunset", "trendy"],
      sourceApi: "curated",
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Ipanema.jpg/500px-Ipanema.jpg"]
    },
    {
      name: "Maracanã Stadium",
      lat: -22.9122, lng: -43.2296,
      category_name: "stadium",
      rating: 4.5, user_ratings_total: 30000,
      description: "Legendary football stadium. stadium tours available.",
      tags: ["stadium", "football", "tour", "historic", "sports"],
      sourceApi: "curated",
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Maracana.jpg/500px-Maracana.jpg"]
    },

    // RESTAURANTS & FOOD
    {
      name: "Mercadoão",
      lat: -22.9608, lng: -43.1801,
      category_name: "food market",
      rating: 4.4, user_ratings_total: 20000,
      description: "Massive market building. Feijoada and churrasco.",
      tags: ["market", "feijoada", "churrasco", "brazilian", "food"],
      sourceApi: "curated",
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Mercadao.jpg/500px-Mercadao.jpg"]
    },
    {
      name: "Feijoada Restaurant",
      lat: -22.9507, lng: -43.2100,
      category_name: "restaurant",
      rating: 4.3, user_ratings_total: 12000,
      description: "Traditional black bean stew. Saturday tradition.",
      tags: ["feijoada", "brazilian", "traditional", "stew", "local"],
      sourceApi: "curated",
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Feijoada.jpg/500px-Feijoada.jpg"]
    },
    {
      name: "Brazilian Bar",
      lat: -22.9700, lng: -43.1950,
      category_name: "bar",
      rating: 4.3, user_ratings_total: 10000,
      description: "Samba bar with live music. Caipirinha and dancing.",
      tags: ["bar", "samba", "music", "caipirinha", "nightlife"],
      sourceApi: "curated",
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Brazilian_Bar.jpg/500px-Brazilian_Bar.jpg"]
    },

    // BEACHES & NATURE
    {
      name: "Tijuca Forest",
      lat: -22.9500, lng: -43.2800,
      category_name: "national park",
      rating: 4.6, user_ratings_total: 20000,
      description: "Largest urban forest in world. Hiking and waterfalls.",
      tags: ["forest", "hiking", "waterfalls", "nature", "urban"],
      sourceApi: "curated",
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Tijuca_Forest.jpg/500px-Tijuca_Forest.jpg"]
    },
    {
      name: "Botanical Garden",
      lat: -27.9538, lng: -43.3864,
      category_name: "botanical garden",
      rating: 4.4, user_ratings_total: 15000,
      description: "Lush garden with 8,000 species. Endangered monkeys.",
      tags: ["garden", "botanical", "nature", "monkeys", "relaxing"],
      sourceApi: "curated",
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/Botanical_Garden_Rio.jpg/500px-Botanical_Garden_Rio.jpg"]
    },
  ],

  // ═══════════════════════════════════════════════════════════════════════════
  // TORONTO
  // ═══════════════════════════════════════════════════════════════════════════
  "Toronto": [
    {
      name: "CN Tower",
      lat: 43.6425, lng: -79.3892,
      category_name: "scenic lookout",
      rating: 4.5, user_ratings_total: 50000,
      description: "Iconic553m tower with glass floor. EdgeWalk experience.",
      tags: ["tower", "iconic", "glass-floor", "views", "must-visit"],
      sourceApi: "curated",
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/CN_Tower.jpg/500px-CN_Tower.jpg"]
    },
    {
      name: "Royal Ontario Museum",
      lat: 43.6677, lng: -79.3948,
      category_name: "art museum",
      rating: 4.5, user_ratings_total: 30000,
      description: "Canada's largest museum. Dinosaur and world cultures.",
      tags: ["museum", "dinosaurs", "art", "culture", "family"],
      sourceApi: "curated",
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/ROM.jpg/500px-ROM.jpg"]
    },
    {
      name: "St. Lawrence Market",
      lat: 43.6487, lng: -79.3813,
      category_name: "food market",
      rating: 4.4, user_ratings_total: 25000,
      description: "Historic market since 1845. Peameal bacon sandwich.",
      tags: ["market", "historic", "food", "bacon", "local"],
      sourceApi: "curated",
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/St_Lawrence.jpg/500px-St_Lawrence.jpg"]
    },
    {
      name: "Distillery District",
      lat: 43.6544, lng: -79.3598,
      category_name: "neighborhood",
      rating: 4.5, user_ratings_total: 30000,
      description: "Pedestrian village with galleries. Christmas market famous.",
      tags: ["village", "galleries", "christmas", "art", "walkable"],
      sourceApi: "curated",
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/Distillery.jpg/500px-Distillery.jpg"]
    },
    {
      name: "High Park",
      lat: 43.6604, lng: -79.4647,
      category_name: "park",
      rating: 4.5, user_ratings_total: 25000,
      description: "Large park with zoo. Cherry blossoms and trails.",
      tags: ["park", "zoo", "cherry-blossom", "nature", "family"],
      sourceApi: "curated",
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/High_Park.jpg/500px-High_Park.jpg"]
    },

    // RESTAURANTS & FOOD
    {
      name: "Kensington Market",
      lat: 43.6541, lng: -79.4020,
      category_name: "market",
      rating: 4.4, user_ratings_total: 25000,
      description: "Eclectic market with vintage. Global cuisines.",
      tags: ["market", "vintage", "global", "eclectic", "food"],
      sourceApi: "curated",
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Kensington.jpg/500px-Kensington.jpg"]
    },
    {
      name: "Pai Northern Thai",
      lat: 43.6495, lng: -79.3917,
      category_name: "restaurant",
      rating: 4.5, user_ratings_total: 15000,
      description: "Popular Thai restaurant. Pad Thai and curry.",
      tags: ["thai", "popular", "curry", "pad-thai", "must-visit"],
      sourceApi: "curated",
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/Thai_Food.jpg/500px-Thai_Food.jpg"]
    },
    {
      name: "St. Lawrence Market Food Hall",
      lat: 43.6487, lng: -79.3813,
      category_name: "restaurant",
      rating: 4.3, user_ratings_total: 10000,
      description: "Upstairs food vendors. Hot lamb and sausages.",
      tags: ["food-hall", "lamb", "sausage", "historic", "local"],
      sourceApi: "curated",
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/St_Lawrence_Food.jpg/500px-St_Lawrence_Food.jpg"]
    },

    // PARKS & ISLAND
    {
      name: "Toronto Islands",
      lat: 43.6200, lng: -79.4000,
      category_name: "island",
      rating: 4.5, user_ratings_total: 20000,
      description: "Ferry to centre island. Beaches and bicycle rentals.",
      tags: ["island", "beach", "ferry", "cycling", "family"],
      sourceApi: "curated",
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Toronto_Islands.jpg/500px-Toronto_Islands.jpg"]
    },
    {
      name: "Rouge Park",
      lat: 43.8200, lng: -79.1600,
      category_name: "park",
      rating: 4.4, user_ratings_total: 10000,
      description: "Urban wilderness park. Hiking and wildlife.",
      tags: ["park", "hiking", "wildlife", "nature", "urban-wilderness"],
      sourceApi: "curated",
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Rouge_Park.jpg/500px-Rouge_Park.jpg"]
    },
  ],

  // ═══════════════════════════════════════════════════════════════════════════
  // VANCOUVER
  // ═══════════════════════════════════════════════════════════════════════════
  "Vancouver": [
    {
      name: "Stanley Park",
      lat: 49.3000, lng: -123.1417,
      category_name: "park",
      rating: 4.6, user_ratings_total: 45000,
      description: "Urban park with seawall. Totem poles and beaches.",
      tags: ["park", "seawall", "totem-poles", "beach", "must-visit"],
      sourceApi: "curated",
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Stanley_Park.jpg/500px-Stanley_Park.jpg"]
    },
    {
      name: "Granville Island",
      lat: 49.2692, lng: -123.1336,
      category_name: "island",
      rating: 4.5, user_ratings_total: 30000,
      description: "Market with crafts. Public market and brewery.",
      tags: ["island", "market", "crafts", "breweries", "art"],
      sourceApi: "curated",
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Granville_Island.jpg/500px-Granville_Island.jpg"]
    },
    {
      name: "Capilano Suspension Bridge",
      lat: 49.3400, lng: -123.1110,
      category_name: "bridge",
      rating: 4.5, user_ratings_total: 35000,
      description: "Suspension bridge in rainforest. Cliffwalk added.",
      tags: ["bridge", "rainforest", "adventure", "nature", "must-visit"],
      sourceApi: "curated",
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Capilano.jpg/500px-Capilano.jpg"]
    },
    {
      name: "Gastown",
      lat: 49.2823, lng: -123.1093,
      category_name: "neighborhood",
      rating: 4.4, user_ratings_total: 25000,
      description: "Historic quarter with steam clock. Boutiques and pubs.",
      tags: ["neighborhood", "historic", "steam-clock", "boutiques", "pubs"],
      sourceApi: "curated",
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Gastown.jpg/500px-Gastown.jpg"]
    },
    {
      name: "Grouse Mountain",
      lat: 49.3719, lng: -123.1024,
      category_name: "mountain",
      rating: 4.5, user_ratings_total: 25000,
      description: "Mountain with ski runs. Skyride and hiking.",
      tags: ["mountain", "skiing", "skyride", "hiking", "views"],
      sourceApi: "curated",
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Grouse_Mountain.jpg/500px-Grouse_Mountain.jpg"]
    },

    // RESTAURANTS & FOOD
    {
      name: "Richmond Night Market",
      lat: 49.1900, lng: -123.1600,
      category_name: "market",
      rating: 4.3, user_ratings_total: 20000,
      description: "Night market with Asian street food. Karaoke and shopping.",
      tags: ["market", "asian", "night", "street-food", "karaoke"],
      sourceApi: "curated",
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Night_Market.jpg/500px-Night_Market.jpg"]
    },
    {
      name: "Japadog",
      lat: 49.2820, lng: -123.1100,
      category_name: "street food",
      rating: 4.3, user_ratings_total: 10000,
      description: "Japanese hot dog stand. Popular on food carts.",
      tags: ["hot-dog", "japanese", "street-food", "trendy", "fusion"],
      sourceApi: "curated",
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Japadog.jpg/500px-Japadog.jpg"]
    },
    {
      name: "Vancouver Art Gallery Cafe",
      lat: 49.2828, lng: -123.1212,
      category_name: "cafe",
      rating: 4.2, user_ratings_total: 8000,
      description: "Gallery cafe with patio. Light lunch and coffee.",
      tags: ["cafe", "gallery", "patio", "lunch", "coffee"],
      sourceApi: "curated",
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Vancouver_Cafe.jpg/500px-Vancouver_Cafe.jpg"]
    },

    // BEACHES & NATURE
    {
      name: "Kitsilano Beach",
      lat: 49.2760, lng: -123.1855,
      category_name: "beach",
      rating: 4.5, user_ratings_total: 18000,
      description: "Popular beach with pool. Mountain views from sand.",
      tags: ["beach", "pool", "mountain-views", "summer", "family"],
      sourceApi: "curated",
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Kitsilano_Beach.jpg/500px-Kitsilano_Beach.jpg"]
    },
    {
      name: "Lynn Canyon",
      lat: 49.3400, lng: -122.9400,
      category_name: "nature preserve",
      rating: 4.5, user_ratings_total: 15000,
      description: "Canyon with trails and waterfalls. Free entry.",
      tags: ["canyon", "hiking", "waterfalls", "nature", "free"],
      sourceApi: "curated",
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Lynn_Canyon.jpg/500px-Lynn_Canyon.jpg"]
    },
  ],

  // ═══════════════════════════════════════════════════════════════════════════════════
  // SEOUL
  // ═══════════════════════════════════════════════════════════════════════════
  "Seoul": [
    {
      name: "Gyeongbokgung Palace",
      lat: 37.5790, lng: 126.9770,
      category_name: "palace",
      rating: 4.6, user_ratings_total: 45000,
      description: "Main Joseon palace. Changing of guard and hanbok rentals.",
      tags: ["palace", "hanbok", "historical", "must-visit", "korean"],
      sourceApi: "curated",
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Gyeongbokgung.jpg/500px-Gyeongbokgung.jpg"]
    },
    {
      name: "Bukchon Hanok",
      lat: 37.5825, lng: 126.9835,
      category_name: "neighborhood",
      rating: 4.5, user_ratings_total: 30000,
      description: "Traditional Korean houses. Walking with hanbok.",
      tags: ["hanok", "traditional", "walking", "village", "culture"],
      sourceApi: "curated",
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Bukchon.jpg/500px-Bukchon.jpg"]
    },
    {
      name: "Myeongdong",
      lat: 37.5638, lng: 126.9868,
      category_name: "shopping district",
      rating: 4.4, user_ratings_total: 40000,
      description: "Popular shopping street. Makeup and fashion.",
      tags: ["shopping", "makeup", "fashion", "street-food", "trendy"],
      sourceApi: "curated",
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Myeongdong.jpg/500px-Myeongdong.jpg"]
    },
    {
      name: "N Seoul Tower",
      lat: 37.5516, lng: 126.9882,
      category_name: "tower",
      rating: 4.5, user_ratings_total: 35000,
      description: "Namsan mountain tower. Lock bridge and views.",
      tags: ["tower", "views", "lock-bridge", "romantic", "must-visit"],
      sourceApi: "curated",
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/N_Seoul_Tower.jpg/500px-N_Seoul_Tower.jpg"]
    },
    {
      name: "Cheonggyecheon",
      lat: 37.5692, lng: 126.9976,
      category_name: "stream",
      rating: 4.4, user_ratings_total: 25000,
      description: "Urban stream with fountains. Walking and relax.",
      tags: ["stream", "fountains", "walking", "relaxing", "urban"],
      sourceApi: "curated",
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Cheonggyecheon.jpg/500px-Cheonggyecheon.jpg"]
    },

    // RESTAURANTS & FOOD
    {
      name: "Gwangjang Market",
      lat: 37.5653, lng: 127.0197,
      category_name: "food market",
      rating: 4.5, user_ratings_total: 25000,
      description: "Traditional market with food. Mandu and kimbap.",
      tags: ["market", "mandu", "kimbap", "traditional", "local"],
      sourceApi: "curated",
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Gwangjang.jpg/500px-Gwangjang.jpg"]
    },
    {
      name: "Myeongdong Kyoja",
      lat: 37.5638, lng: 126.9868,
      category_name: "restaurant",
      rating: 4.4, user_ratings_total: 15000,
      description: "Famous for kalguksu. Knife-cut noodles.",
      tags: ["kalguksu", "noodles", "famous", "must-visit", "local"],
      sourceApi: "curated",
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Kalguksu.jpg/500px-Kalguksu.jpg"]
    },
    {
      name: "Insadong",
      lat: 37.5717, lng: 126.9856,
      category_name: "neighborhood",
      rating: 4.4, user_ratings_total: 20000,
      description: "Traditional crafts and tea. Art galleries.",
      tags: ["crafts", "tea", "art", "traditional", "galleries"],
      sourceApi: "curated",
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Insadong.jpg/500px-Insadong.jpg"]
    },

    // PARKS & MOUNTAIN
    {
      name: "Bukaksan",
      lat: 37.5900, lng: 126.9600,
      category_name: "mountain",
      rating: 4.4, user_ratings_total: 15000,
      description: "Mountain with fortress trails. City wall views.",
      tags: ["mountain", "trails", "wall", "hiking", "nature"],
      sourceApi: "curated",
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/Bukaksan.jpg/500px-Bukaksan.jpg"]
    },
    {
      name: "Hangang River Park",
      lat: 37.5300, lng: 126.9700,
      category_name: "park",
      rating: 4.4, user_ratings_total: 20000,
      description: "River parks along the water. Cycling and picnics.",
      tags: ["river", "park", "cycling", "picnic", "family"],
      sourceApi: "curated",
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Hangang.jpg/500px-Hangang.jpg"]
    },
  ],

  // ═══════════════════════════════════════════════════════════════════════════
  // KYOTO
  // ═══════════════════════════════════════════════════════════════════════════
  "Kyoto": [
    {
      name: "Fushimi Inari Shrine",
      lat: 34.9765, lng: 135.7728,
      category_name: "shrine",
      rating: 4.7, user_ratings_total: 55000,
      description: "Thousands of red torii gates. Hiking trail to mountain.",
      tags: ["shrine", "torii", "gates", "hiking", "must-visit"],
      sourceApi: "curated",
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/Fushimi_Inari.jpg/500px-Fushimi_Inari.jpg"]
    },
    {
      name: "Arashiyama Bamboo Grove",
      lat: 35.0094, lng: 135.6731,
      category_name: "forest",
      rating: 4.6, user_ratings_total: 45000,
      description: "Bamboo forest along river. Bicycle and rickshaw.",
      tags: ["bamboo", "forest", "river", "iconic", "must-visit"],
      sourceApi: "curated",
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Bamboo_Grove.jpg/500px-Bamboo_Grove.jpg"]
    },
    {
      name: "Kinkaku-ji",
      lat: 35.0394, lng: 135.7282,
      category_name: "temple",
      rating: 4.6, user_ratings_total: 40000,
      description: "Golden pavilion in pond. World Heritage.",
      tags: ["temple", "golden", "pond", "world-heritage", "iconic"],
      sourceApi: "curated",
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Kinkakuji.jpg/500px-Kinkakuji.jpg"]
    },
    {
      name: "Gion District",
      lat: 35.0037, lng: 135.7779,
      category_name: "neighborhood",
      rating: 4.5, user_ratings_total: 35000,
      description: "Geisha quarter with wooden houses. Tea houses.",
      tags: ["geisha", "traditional", "tea-houses", "walk", "culture"],
      sourceApi: "curated",
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Gion.jpg/500px-Gion.jpg"]
    },
    {
      name: "Philosopher's Path",
      lat: 35.0212, lng: 135.6680,
      category_name: "path",
      rating: 4.5, user_ratings_total: 25000,
      description: "Stone path through cherry trees. Canals and temples.",
      tags: ["path", "cherry-blossom", "canal", "temples", "romantic"],
      sourceApi: "curated",
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Philosophers_Path.jpg/500px-Philosophers_Path.jpg"]
    },

    // RESTAURANTS & FOOD
    {
      name: "Nishiki Market",
      lat: 35.0041, lng: 135.7648,
      category_name: "food market",
      rating: 4.5, user_ratings_total: 30000,
      description: "Kitchen row with pickles. Fresh fish and knives.",
      tags: ["market", "pickles", "fish", "kitchen", "traditional"],
      sourceApi: "curated",
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Nishiki_Market.jpg/500px-Nishiki_Market.jpg"]
    },
    {
      name: "Kifuku Tei",
      lat: 35.0055, lng: 135.7600,
      category_name: "restaurant",
      rating: 4.4, user_ratings_total: 12000,
      description: "Traditional Kyoto cuisine. Kaiseki and tofu.",
      tags: ["kaiseki", "tofu", "traditional", "kyoto-cuisine", "famous"],
      sourceApi: "curated",
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Kaiseki.jpg/500px-Kaiseki.jpg"]
    },
    {
      name: "Gion Nanba",
      lat: 35.0037, lng: 135.7779,
      category_name: "restaurant",
      rating: 4.3, user_ratings_total: 8000,
      description: "Famous for tofu dishes. Buddhist vegetarian.",
      tags: ["tofu", "vegetarian", "buddhist", "traditional", "famous"],
      sourceApi: "curated",
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Kyoto_Tofu.jpg/500px-Kyoto_Tofu.jpg"]
    },

    // TEMPLES & GARDENS
    {
      name: "Ryoan-ji",
      lat: 35.0264, lng: 135.7174,
      category_name: "temple",
      rating: 4.6, user_ratings_total: 30000,
      description: "Famous rock garden. Fifteen stones puzzle.",
      tags: ["temple", "rock-garden", "zen", "meditation", "unique"],
      sourceApi: "curated",
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Ryoanji.jpg/500px-Ryoanji.jpg"]
    },
    {
      name: "Daigo-ji",
      lat: 34.9800, lng: 135.7500,
      category_name: "temple",
      rating: 4.5, user_ratings_total: 20000,
      description: "Mountain temple with pagoda. Cherry blossom spot.",
      tags: ["temple", "pagoda", "mountain", "cherry-blossom", "scenic"],
      sourceApi: "curated",
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/Daigoji.jpg/500px-Daigoji.jpg"]
    },
  ],

  // ═══════════════════════════════════════════════════════════════════════════
  // PHUKET
  // ═══════════════════════════════════════════════════════════════════════════
  "Phuket": [
    {
      name: "Big Buddha",
      lat: 7.8931, lng: 98.3686,
      category_name: "monument",
      rating: 4.6, user_ratings_total: 35000,
      description: "45-meter marble Buddha. Panoramic island views.",
      tags: ["buddha", "monument", "views", "iconic", "must-visit"],
      sourceApi: "curated",
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Big_Buddha_Phuket.jpg/500px-Big_Buddha_Phuket.jpg"]
    },
    {
      name: "Patong Beach",
      lat: 7.8966, lng: 98.2965,
      category_name: "beach",
      rating: 4.4, user_ratings_total: 40000,
      description: "Most famous beach. Nightlife and water sports.",
      tags: ["beach", "nightlife", "water-sports", "party", "must-visit"],
      sourceApi: "curated",
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Patong_Beach.jpg/500px-Patong_Beach.jpg"]
    },
    {
      name: "Old Phuket Town",
      lat: 7.8827, lng: 98.3875,
      category_name: "neighborhood",
      rating: 4.5, user_ratings_total: 25000,
      description: "Sino-Portuguese architecture. Cafes and murals.",
      tags: ["architecture", "portuguese", "cafes", "murals", "heritage"],
      sourceApi: "curated",
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Old_Phuket_Town.jpg/500px-Old_Phuket_Town.jpg"]
    },
    {
      name: "Phi Phi Islands",
      lat: 7.7407, lng: 98.7784,
      category_name: "islands",
      rating: 4.7, user_ratings_total: 45000,
      description: "Island hopping and Maya Bay. Diving paradise.",
      tags: ["islands", "diving", "maya-bay", "beaches", "must-visit"],
      sourceApi: "curated",
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Phi_Phi.jpg/500px-Phi_Phi.jpg"]
    },
    {
      name: "Wat Chalong",
      lat: 7.8942, lng: 98.3420,
      category_name: "temple",
      rating: 4.5, user_ratings_total: 25000,
      description: "Important Buddhist temple. Healing shrine.",
      tags: ["temple", "buddhist", "shrine", "culture", "historical"],
      sourceApi: "curated",
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Wat_Chalong.jpg/500px-Wat_Chalong.jpg"]
    },

    // RESTAURANTS & FOOD
    {
      name: "Phuket Weekend Market",
      lat: 7.8886, lng: 98.3908,
      category_name: "food market",
      rating: 4.4, user_ratings_total: 20000,
      description: "Night market with local food. Souvenirs and fresh fruit.",
      tags: ["market", "night", "food", "souvenirs", "fruit"],
      sourceApi: "curated",
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Phuket_Market.jpg/500px-Phuket_Market.jpg"]
    },
    {
      name: "Mee Sap",
      lat: 7.8950, lng: 98.3050,
      category_name: "restaurant",
      rating: 4.3, user_ratings_total: 10000,
      description: "Famous for local noodles. Hokkien noodles.",
      tags: ["noodles", "local", "hokkien", "famous", "budget-friendly"],
      sourceApi: "curated",
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Noodles.jpg/500px-Noodles.jpg"]
    },
    {
      name: "Raya Restaurant",
      lat: 7.8820, lng: 98.3860,
      category_name: "restaurant",
      rating: 4.3, user_ratings_total: 8000,
      description: "Seafood by the beach. Fresh catch daily.",
      tags: ["seafood", "beach", "fresh", "thai", "dining"],
      sourceApi: "curated",
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Phuket_Seafood.jpg/500px-Phuket_Seafood.jpg"]
    },

    // BEACHES & ISLANDS
    {
      name: "Kata Beach",
      lat: 7.8163, lng: 98.2960,
      category_name: "beach",
      rating: 4.4, user_ratings_total: 20000,
      description: "Family-friendly beach. Surfing and restaurants.",
      tags: ["beach", "family", "surfing", " relaxed", "resorts"],
      sourceApi: "curated",
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/Kata_Beach.jpg/500px-Kata_Beach.jpg"]
    },
    {
      name: "James Bond Island",
      lat: 8.2751, lng: 98.5350,
      category_name: "island",
      rating: 4.4, user_ratings_total: 25000,
      description: "石灰岩岛屿from 'The Man with the Golden Gun' film.",
      tags: ["island", "limestone", "film", "tour", "scenic"],
      sourceApi: "curated",
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/James_Bond_Island.jpg/500px-James_Bond_Island.jpg"]
    },
  ],

  // ═══════════════════════════════════════════════════════════════════════════
  // PATTAYA
  // ═══════════════════════════════════════════════════════════════════════════
  "Pattaya": [
    {
      name: "Sanctuary of Truth",
      lat: 12.9579, lng: 100.4905,
      category_name: "temple",
      rating: 4.5, user_ratings_total: 30000,
      description: "巨大的木制寺庙 by the sea. Carved from teak.",
      tags: ["temple", "carved", "teak", "unique", "must-visit"],
      sourceApi: "curated",
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Sanctuary_of_Truth.jpg/500px-Sanctuary_of_Truth.jpg"]
    },
    {
      name: "Walking Street",
      lat: 12.9276, lng: 100.8829,
      category_name: "street",
      rating: 4.3, user_ratings_total: 35000,
      description: "Famous nightlife street. Entertainment until dawn.",
      tags: ["street", "nightlife", "entertainment", "night", "party"],
      sourceApi: "curated",
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Walking_Street.jpg/500px-Walking_Street.jpg"]
    },
    {
      name: "Nong Noche Village",
      lat: 12.8689, lng: 100.4603,
      category_name: "garden",
      rating: 4.4, user_ratings_total: 25000,
      description: "Botanical garden with shows. Orchids and cultural shows.",
      tags: ["garden", "orchids", "shows", "cultural", "family"],
      sourceApi: "curated",
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Nong_Noche.jpg/500px-Nong_Noche.jpg"]
    },
    {
      name: "Floating Market",
      lat: 12.8901, lng: 100.8967,
      category_name: "market",
      rating: 4.3, user_ratings_total: 20000,
      description: "Four regions floating market. Souvenirs and food.",
      tags: ["market", "floating", "souvenirs", "food", "thai"],
      sourceApi: "curated",
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Floating_Market.jpg/500px-Floating_Market.jpg"]
    },
    {
      name: "Viewpoint",
      lat: 12.9150, lng: 100.5100,
      category_name: "scenic lookout",
      rating: 4.4, user_ratings_total: 20000,
      description: "Hilltop viewpoint with Golden Buddha. Bay views.",
      tags: ["viewpoint", "buddha", "views", "panoramic", "photo-op"],
      sourceApi: "curated",
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Pattaya_Viewpoint.jpg/500px-Pattaya_Viewpoint.jpg"]
    },

    // RESTAURANTS & FOOD
    {
      name: "Central Festival",
      lat: 12.9363, lng: 100.8822,
      category_name: "shopping mall",
      rating: 4.3, user_ratings_total: 20000,
      description: "Beachfront shopping complex. Restaurants and cinema.",
      tags: ["mall", "shopping", "restaurants", "cinema", "family"],
      sourceApi: "curated",
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/Central_Festival.jpg/500px-Central_Festival.jpg"]
    },
    {
      name: "Moom Aroi",
      lat: 12.9350, lng: 100.8810,
      category_name: "restaurant",
      rating: 4.3, user_ratings_total: 10000,
      description: "Popular for Thai seafood. Beachfront terrace.",
      tags: ["seafood", "thai", "beachfront", "popular", "dining"],
      sourceApi: "curated",
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Seafood_Restaurant.jpg/500px-Seafood_Restaurant.jpg"]
    },
    {
      name: "Sister Restaurant",
      lat: 12.9400, lng: 100.8780,
      category_name: "restaurant",
      rating: 4.2, user_ratings_total: 8000,
      description: "Famous for Thai cuisine. Outdoor seating.",
      tags: ["thai", "outdoor", "local", "budget-friendly", "famous"],
      sourceApi: "curated",
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Thai_Cuisine_Pattaya.jpg/500px-Thai_Cuisine_Pattaya.jpg"]
    },

    // BEACHES
    {
      name: "Jomtien Beach",
      lat: 12.9185, lng: 100.8890,
      category_name: "beach",
      rating: 4.3, user_ratings_total: 20000,
      description: "Relaxed beach alternative. Water sports.",
      tags: ["beach", "relaxed", "water-sports", "family", "quieter"],
      sourceApi: "curated",
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Jomtien_Beach.jpg/500px-Jomtien_Beach.jpg"]
    },
    {
      name: "Coral Island",
      lat: 12.9100, lng: 100.7800,
      category_name: "island",
      rating: 4.4, user_ratings_total: 15000,
      description: "Islands off Pattaya. Speedboats and diving.",
      tags: ["island", "diving", "speedboats", "beach", "excursion"],
      sourceApi: "curated",
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Coral_Island.jpg/500px-Coral_Island.jpg"]
    },
  ],

  // ═══════════════════════════════════════════════════════════════════════════
  // BALI
  // ═══════════════════════════════════════════════════════════════════════════
  "Bali": [
    {
      name: "Tanah Lot",
      lat: -8.5058, lng: 115.0865,
      category_name: "temple",
      rating: 4.5, user_ratings_total: 45000,
      description: "Sea temple on rock formation. Sunset and crashing waves.",
      tags: ["temple", "sunset", "sea", "iconic", "must-visit"],
      sourceApi: "curated",
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Tanah_Lot.jpg/500px-Tanah_Lot.jpg"]
    },
    {
      name: "Ubud Rice Terraces",
      lat: -8.4219, lng: 115.2584,
      category_name: "terrace",
      rating: 4.6, user_ratings_total: 40000,
      description: "Stunning tiered rice paddies. Instagram hotspot.",
      tags: ["terrace", "nature", "instagram", "scenic", "must-visit"],
      sourceApi: "curated",
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Ubud_Terraces.jpg/500px-Ubud_Terraces.jpg"]
    },
    {
      name: "Kuta Beach",
      lat: -8.7183, lng: 115.1686,
      category_name: "beach",
      rating: 4.4, user_ratings_total: 40000,
      description: "Popular surf beach. Parties and sunset.",
      tags: ["beach", "surf", "sunset", "party", "must-visit"],
      sourceApi: "curated",
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Kuta_Beach.jpg/500px-Kuta_Beach.jpg"]
    },
    {
      name: "Uluwatu Temple",
      lat: -8.8291, lng: 115.0875,
      category_name: "temple",
      rating: 4.6, user_ratings_total: 35000,
      description: "Cliffside temple with kecak dance. Ocean views.",
      tags: ["temple", "cliff", "kecak", "sunset", "must-visit"],
      sourceApi: "curated",
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Uluwatu.jpg/500px-Uluwatu.jpg"]
    },
    {
      name: "Seminyak",
      lat: -8.6916, lng: 115.1606,
      category_name: "beach",
      rating: 4.4, user_ratings_total: 30000,
      description: "Trendy beach with clubs. Pool clubs and sunset bars.",
      tags: ["beach", "clubs", "sunset", "trendy", "nightlife"],
      sourceApi: "curated",
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Seminyak.jpg/500px-Seminyak.jpg"]
    },

    // RESTAURANTS & FOOD
    {
      name: "Ubud Food Markets",
      lat: -8.5060, lng: 115.2620,
      category_name: "food market",
      rating: 4.4, user_ratings_total: 20000,
      description: "Morning markets with local warungs. Bali food.",
      tags: ["market", "warung", "local", "food", "traditional"],
      sourceApi: "curated",
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Ubud_Market.jpg/500px-Ubud_Market.jpg"]
    },
    {
      name: "Made's Warung",
      lat: -8.6842, lng: 115.1625,
      category_name: "restaurant",
      rating: 4.3, user_ratings_total: 12000,
      description: "Famous for nasi camps. Traditional flavors.",
      tags: ["nasi-goreng", "warung", "traditional", "famous", "local"],
      sourceApi: "curated",
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Bali_Food.jpg/500px-Bali_Food.jpg"]
    },
    {
      name: "Cafe Moka",
      lat: -8.5052, lng: 115.2587,
      category_name: "cafe",
      rating: 4.3, user_ratings_total: 8000,
      description: "Popular cafe for brunch. European and Balinese dishes.",
      tags: ["cafe", "brunch", "european", "popular", "cozy"],
      sourceApi: "curated",
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Cafe.jpg/500px-Cafe.jpg"]
    },

    // BEACHES & TEMPLES
    {
      name: "Tirta Empul",
      lat: -8.4125, lng: 115.3165,
      category_name: "temple",
      rating: 4.5, user_ratings_total: 25000,
      description: "Holy water temple with pools. Purification ritual.",
      tags: ["temple", "holy-water", "purification", "spiritual", "culture"],
      sourceApi: "curated",
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Tirta_Empul.jpg/500px-Tirta_Empul.jpg"]
    },
    {
      name: "Nusa Islands",
      lat: -8.7300, lng: 115.2400,
      category_name: "islands",
      rating: 4.5, user_ratings_total: 18000,
      description: "Islands off Bali with beaches. Surfing and diving.",
      tags: ["islands", "beach", "surfing", "diving", "day-trip"],
      sourceApi: "curated",
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Nusa_Dua.jpg/500px-Nusa_Dua.jpg"]
    },
  ],

  // ═══════════════════════════════════════════════════════════════════════════
  // JAKARTA
  // ═══════════════════════════════════════════════════════════════════════════
  "Jakarta": [
    {
      name: "Monas",
      lat: -6.1754, lng: 106.8272,
      category_name: "monument",
      rating: 4.5, user_ratings_total: 35000,
      description: "National Monument with observation deck. City views.",
      tags: ["monument", "views", "landmark", "history", "must-visit"],
      sourceApi: "curated",
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/Monas.jpg/500px-Monas.jpg"]
    },
    {
      name: "Kota Tua",
      lat: -6.1417, lng: 106.8133,
      category_name: "neighborhood",
      rating: 4.4, user_ratings_total: 25000,
      description: "Old Town with Dutch buildings. Fatahillah Museum.",
      tags: ["old-town", "dutch", "museum", "heritage", "historic"],
      sourceApi: "curated",
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Kota_Tua.jpg/500px-Kota_Tua.jpg"]
    },
    {
      name: "Grand Indonesia",
      lat: -6.1955, lng: 106.8208,
      category_name: "shopping mall",
      rating: 4.4, user_ratings_total: 30000,
      description: "Premier shopping mall. Cinema and restaurants.",
      tags: ["mall", "shopping", "cinema", "dining", "luxury"],
      sourceApi: "curated",
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Grand_Indonesia.jpg/500px-Grand_Indonesia.jpg"]
    },
    {
      name: "Jakarta Cathedral",
      lat: -6.1361, lng: 106.8111,
      category_name: "cathedral",
      rating: 4.4, user_ratings_total: 20000,
      description: "Neo-gothic cathedral. Jakarta's oldest cathedral.",
      tags: ["cathedral", "gothic", "church", "historic", "architecture"],
      sourceApi: "curated",
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Cathedral.jpg/500px-Cathedral.jpg"]
    },
    {
      name: "Ragunan Zoo",
      lat: -6.3101, lng: 106.8206,
      category_name: "zoo",
      rating: 4.4, user_ratings_total: 25000,
      description: "Large zoo with 3,000 animals. Pandas and elephants.",
      tags: ["zoo", "pandas", "family", "animals", "nature"],
      sourceApi: "curated",
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Ragunan_Zoo.jpg/500px-Ragunan_Zoo.jpg"]
    },

    // RESTAURANTS & FOOD
    {
      name: "Laksa Jakarta",
      lat: -6.1754, lng: 106.8272,
      category_name: "restaurant",
      rating: 4.3, user_ratings_total: 10000,
      description: "Famous for Betawi laksa. Coconut milk noodle soup.",
      tags: ["laksa", "noodles", "betawi", "traditional", "famous"],
      sourceApi: "curated",
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Laksa.jpg/500px-Laksa.jpg"]
    },
    {
      name: "Sate Khas Senen",
      lat: -6.1700, lng: 106.8500,
      category_name: "restaurant",
      rating: 4.3, user_ratings_total: 12000,
      description: "Classic Indonesian satay. Peanut sauce.",
      tags: ["satay", "peanut-sauce", "indonesian", "street-food", "must-try"],
      sourceApi: "curated",
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Satay.jpg/500px-Satay.jpg"]
    },
    {
      name: "Menteng",
      lat: -6.1950, lng: 106.8350,
      category_name: "neighborhood",
      rating: 4.3, user_ratings_total: 10000,
      description: "Colonial neighborhood with cafes. Heritage buildings.",
      tags: ["colonial", "cafes", "heritage", "walk", "historic"],
      sourceApi: "curated",
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Menteng.jpg/500px-Menteng.jpg"]
    },

    // PARKS & MALLS
    {
      name: "Taman Mini",
      lat: -6.3100, lng: 106.8900,
      category_name: "park",
      rating: 4.4, user_ratings_total: 20000,
      description: "Indonesia park in miniature. Cultural exhibits.",
      tags: ["park", "miniature", "culture", "family", "indonesian"],
      sourceApi: "curated",
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/Taman_Mini.jpg/500px-Taman_Mini.jpg"]
    },
    {
      name: "Ancol Beach",
      lat: -6.1300, lng: 106.8800,
      category_name: "beach",
      rating: 4.2, user_ratings_total: 15000,
      description: "Beach resort area. Dufan theme park.",
      tags: ["beach", "resort", "theme-park", "family", "entertainment"],
      sourceApi: "curated",
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/Ancol.jpg/500px-Ancol.jpg"]
    },
  ],

  // ═══════════════════════════════════════════════════════════════════════════
  // MANILA
  // ═══════════════════════════════════════════════════════════════════════════
  "Manila": [
    {
      name: "Intramuros",
      lat: 14.5925, lng: 120.9713,
      category_name: "fort",
      rating: 4.5, user_ratings_total: 35000,
      description: "Walled city from Spanish era. Fort Santiago inside.",
      tags: ["fort", "spanish", "walled-city", "historic", "must-visit"],
      sourceApi: "curated",
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/Intramuros.jpg/500px-Intramuros.jpg"]
    },
    {
      name: "Rizal Park",
      lat: 14.5796, lng: 120.9817,
      category_name: "park",
      rating: 4.4, user_ratings_total: 25000,
      description: "Historic park honoring national hero. Lakeside.",
      tags: ["park", "lakeside", "historic", "hero", "family"],
      sourceApi: "curated",
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/Rizal_Park.jpg/500px-Rizal_Park.jpg"]
    },
    {
      name: "Binondo",
      lat: 14.5998, lng: 120.9642,
      category_name: "neighborhood",
      rating: 4.4, user_ratings_total: 20000,
      description: "Chinatown with binondo food. World's oldest.",
      tags: ["chinatown", "food", "historic", "dim-sum", "cultural"],
      sourceApi: "curated",
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Binondo.jpg/500px-Binondo.jpg"]
    },
    {
      name: "San Agustin Church",
      lat: 14.5925, lng: 120.9743,
      category_name: "church",
      rating: 4.6, user_ratings_total: 25000,
      description: "Baroque church with organ. UNESCO site.",
      tags: ["church", "baroque", "unesco", "music", "historic"],
      sourceApi: "curated",
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/San_Agustin.jpg/500px-San_Agustin.jpg"]
    },
    {
      name: "Makati",
      lat: 14.5547, lng: 121.0244,
      category_name: "business district",
      rating: 4.4, user_ratings_total: 30000,
      description: "Business district with malls. Nightlife.",
      tags: ["business", "malls", "nightlife", "dining", "modern"],
      sourceApi: "curated",
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Makati.jpg/500px-Makati.jpg"]
    },

    // RESTAURANTS & FOOD
    {
      name: "Divisoria Market",
      lat: 14.6038, lng: 120.9655,
      category_name: "market",
      rating: 4.3, user_ratings_total: 15000,
      description: "Busy market in Binondo. Fruits and cheap goods.",
      tags: ["market", "fruits", "shopping", "bargain", "local"],
      sourceApi: "curated",
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Divisoria.jpg/500px-Divisoria.jpg"]
    },
    {
      name: "Carenderia",
      lat: 14.5950, lng: 120.9700,
      category_name: "restaurant",
      rating: 4.2, user_ratings_total: 10000,
      description: "Local eateries serving Filipino food. Sinigang and adobo.",
      tags: ["filipino", "sinigang", "adobo", "local", "budget-friendly"],
      sourceApi: "curated",
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Filipino_Food.jpg/500px-Filipino_Food.jpg"]
    },
    {
      name: "Aristocrat Restaurant",
      lat: 14.5630, lng: 121.0285,
      category_name: "restaurant",
      rating: 4.3, user_ratings_total: 12000,
      description: "Famous for Filipino chicken. Old and crispy.",
      tags: ["chicken", "filipino", "historic", "famous", "family"],
      sourceApi: "curated",
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Aristocrat.jpg/500px-Aristocrat.jpg"]
    },

    // PARKS & BAY
    {
      name: "Manila Bay Walk",
      lat: 14.5800, lng: 120.9800,
      category_name: "scenic lookout",
      rating: 4.4, user_ratings_total: 20000,
      description: "Bay walk with sunset views. Food stalls.",
      tags: ["bay", "sunset", "views", "street-food", "romantic"],
      sourceApi: "curated",
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Manila_Bay.jpg/500px-Manila_Bay.jpg"]
    },
    {
      name: "Tagaytay",
      lat: 14.0100, lng: 120.8500,
      category_name: "nature preserve",
      rating: 4.5, user_ratings_total: 18000,
      description: "Taal volcano view. Weekend escape from Manila.",
      tags: ["tagaytay", "volcano", "view", "weekend", "nature"],
      sourceApi: "curated",
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Tagaytay.jpg/500px-Tagaytay.jpg"]
    },
  ],

  // ═══════════════════════════════════════════════════════════════════════════
  // HO CHI MINH CITY
  // ══════════════════════════════���═���══════════════════════════════════════════
  "Ho Chi Minh City": [
    {
      name: "Reunification Palace",
      lat: 10.7765, lng: 106.6954,
      category_name: "palace",
      rating: 4.4, user_ratings_total: 30000,
      description: "Historic palace from war. Tanks in front.",
      tags: ["palace", "war", "history", "communist", "must-visit"],
      sourceApi: "curated",
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Reunification_Palace.jpg/500px-Reunification_Palace.jpg"]
    },
    {
      name: "Ben Thanh Market",
      lat: 10.7725, lng: 106.6803,
      category_name: "market",
      rating: 4.4, user_ratings_total: 40000,
      description: "Central market with souvenirs. Fresh food and goods.",
      tags: ["market", "souvenirs", "food", "shopping", "must-visit"],
      sourceApi: "curated",
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Ben_Thanh.jpg/500px-Ben_Thanh.jpg"]
    },
    {
      name: "Notre Dame Cathedral",
      lat: 10.7798, lng: 106.6824,
      category_name: "cathedral",
      rating: 4.5, user_ratings_total: 25000,
      description: "Vietnamese cathedral built with bricks. City center.",
      tags: ["cathedral", "church", "french", "colonial", "iconic"],
      sourceApi: "curated",
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/Notre_Dame_Saigon.jpg/500px-Notre_Dame_Saigon.jpg"]
    },
    {
      name: "War Museum",
      lat: 10.7757, lng: 106.6927,
      category_name: "museum",
      rating: 4.5, user_ratings_total: 30000,
      description: "War relics and exhibits. Emotional experience.",
      tags: ["museum", "war", "history", "emotional", "must-visit"],
      sourceApi: "curated",
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/War_Museum.jpg/500px-War_Museum.jpg"]
    },
    {
      name: "Bitexco Tower",
      lat: 10.7696, lng: 106.7019,
      category_name: "scenic lookout",
      rating: 4.4, user_ratings_total: 20000,
      description: "Skyscraper with observation deck. City views.",
      tags: ["tower", "views", "skyscraper", "observation", "landmark"],
      sourceApi: "curated",
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Bitexco.jpg/500px-Bitexco.jpg"]
    },

    // RESTAURANTS & FOOD
    {
      name: "Pho Phuong",
      lat: 10.7730, lng: 106.6860,
      category_name: "restaurant",
      rating: 4.5, user_ratings_total: 15000,
      description: "Famous for pho. Beef noodle soup.",
      tags: ["pho", "noodles", "famous", "beef", "must-try"],
      sourceApi: "curated",
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Pho.jpg/500px-Pho.jpg"]
    },
    {
      name: "Banh Mi",
      lat: 10.7690, lng: 106.6830,
      category_name: "street food",
      rating: 4.4, user_ratings_total: 12000,
      description: "Vietnamese sandwich. Fresh baguette with fillings.",
      tags: ["banh-mi", "sandwich", "street-food", "famous", "must-try"],
      sourceApi: "curated",
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Banh_Mi.jpg/500px-Banh_Mi.jpg"]
    },
    {
      name: "Chinatown",
      lat: 10.7960, lng: 106.6520,
      category_name: "neighborhood",
      rating: 4.3, user_ratings_total: 15000,
      description: "Chinese area with herbs and incense. Traditional.",
      tags: ["chinatown", "herbs", "incense", "traditional", "culture"],
      sourceApi: "curated",
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/Chinatown_HCMC.jpg/500px-Chinatown_HCMC.jpg"]
    },

    // RIVER & CUISINE
    {
      name: "Saigon River",
      lat: 10.7700, lng: 106.7000,
      category_name: "river",
      rating: 4.4, user_ratings_total: 20000,
      description: "River cruises and dinner boats. City skyline.",
      tags: ["river", "cruise", "dinner", "skyline", "romantic"],
      sourceApi: "curated",
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Saigon_River.jpg/500px-Saigon_River.jpg"]
    },
    {
      name: "Cu Chi Tunnels",
      lat: 10.9500, lng: 106.5300,
      category_name: "historical site",
      rating: 4.6, user_ratings_total: 35000,
      description: "War tunnels for tours. Underground adventure.",
      tags: ["tunnels", "war", "history", "tour", "must-visit"],
      sourceApi: "curated",
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Cu_Chi.jpg/500px-Cu_Chi.jpg"]
    },
  ],

  // ═══════════════════════════════════════════════════════════════════════════
  // HANOI
  // ═══════════════════════════════════════════════════════════════════════════
  "Hanoi": [
    {
      name: "Ho Chi Minh Mausoleum",
      lat: 21.0368, lng: 105.8541,
      category_name: "memorial",
      rating: 4.5, user_ratings_total: 30000,
      description: "Preserved Ho Chi Minh. Mausoleum and museum.",
      tags: ["mausoleum", "ho-chi-minh", "memorial", "must-visit", "history"],
      sourceApi: "curated",
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Mausoleum.jpg/500px-Mausoleum.jpg"]
    },
    {
      name: "Old Quarter",
      lat: 21.0340, lng: 105.8520,
      category_name: "neighborhood",
      rating: 4.5, user_ratings_total: 35000,
      description: "36 streets with guilds. Street food central.",
      tags: ["old-quarter", "street-food", "historic", "crafts", "must-visit"],
      sourceApi: "curated",
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Old_Quarter.jpg/500px-Old_Quarter.jpg"]
    },
    {
      name: "Hoan Kiem Lake",
      lat: 21.0285, lng: 105.8494,
      category_name: "lake",
      rating: 4.6, user_ratings_total: 30000,
      description: "Lake with turtle temple. Morning tai chi.",
      tags: ["lake", "turtle", "temple", "morning", "relaxing"],
      sourceApi: "curated",
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Hoan_Kiem.jpg/500px-Hoan_Kiem.jpg"]
    },
    {
      name: "One Pillar Pagoda",
      lat: 21.0347, lng: 105.8357,
      category_name: "temple",
      rating: 4.5, user_ratings_total: 22000,
      description: "Unique pagoda on pillar. Buddhist temple.",
      tags: ["pagoda", "buddhist", "unique", "historic", "iconic"],
      sourceApi: "curated",
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/One_Pillar.jpg/500px-One_Pillar.jpg"]
    },
    {
      name: "Water Puppet Show",
      lat: 21.0288, lng: 105.8514,
      category_name: "theater",
      rating: 4.4, user_ratings_total: 25000,
      description: "Traditional water puppetry. Thang Long theater.",
      tags: ["puppet", "theater", "traditional", "culture", "must-see"],
      sourceApi: "curated",
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Water_Puppet.jpg/500px-Water_Puppet.jpg"]
    },

    // RESTAURANTS & FOOD
    {
      name: "Bun Cha",
      lat: 21.0297, lng: 105.8490,
      category_name: "restaurant",
      rating: 4.5, user_ratings_total: 15000,
      description: "Grilled pork and noodles. Vietnam's signature.",
      tags: ["bun-cha", "grilled-pork", "famous", "must-try", "local"],
      sourceApi: "curated",
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Bun_Cha.jpg/500px-Bun_Cha.jpg"]
    },
    {
      name: "Pho 10",
      lat: 21.0280, lng: 105.8500,
      category_name: "restaurant",
      rating: 4.4, user_ratings_total: 12000,
      description: "Famous pho restaurant. Beef noodle soup.",
      tags: ["pho", "beef", "noodles", "famous", "popular"],
      sourceApi: "curated",
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/Hanoi_Pho.jpg/500px-Hanoi_Pho.jpg"]
    },
    {
      name: "Egg Coffee",
      lat: 21.0300, lng: 105.8520,
      category_name: "cafe",
      rating: 4.4, user_ratings_total: 10000,
      description: "Egg coffee specialty. Creamy vietnamese coffee.",
      tags: ["coffee", "egg", "vietnamese", "unique", "caffeine"],
      sourceApi: "curated",
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Egg_Coffee.jpg/500px-Egg_Coffee.jpg"]
    },

    // PARKS & TEMPLES
    {
      name: "West Lake",
      lat: 21.0170, lng: 105.8200,
      category_name: "lake",
      rating: 4.4, user_ratings_total: 15000,
      description: "Largest lake in Hanoi. Tranquil escape.",
      tags: ["lake", "largest", "tranquil", "cycling", "nature"],
      sourceApi: "curated",
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/West_Lake.jpg/500px-West_Lake.jpg"]
    },
    {
      name: "Bach Ma Temple",
      lat: 21.0280, lng: 105.8330,
      category_name: "temple",
      rating: 4.3, user_ratings_total: 10000,
      description: "Oldest temple in Hanoi. Buddhist history.",
      tags: ["temple", "oldest", "buddhist", "history", "heritage"],
      sourceApi: "curated",
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Bach_Ma.jpg/500px-Bach_Ma.jpg"]
    },
  ],

  // ═══════════════════════════════════════════════════════════════════════════
  // MACAU
  // ═══════════════════════════════════════════════════════════════════════════
  "Macau": [
    {
      name: "Ruins of St. Paul's",
      lat: 22.1958, lng: 113.5409,
      category_name: "ruins",
      rating: 4.6, user_ratings_total: 50000,
      description: "Iconic church facade. Macau's symbol.",
      tags: ["ruins", "church", "iconic", "must-visit", "portuguese"],
      sourceApi: "curated",
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/St_Pauls_Ruins.jpg/500px-St_Pauls_Ruins.jpg"]
    },
    {
      name: " Senado Square",
      lat: 22.1935, lng: 113.5406,
      category_name: "square",
      rating: 4.5, user_ratings_total: 35000,
      description: "Portuguese cobblestone square. Wave-patterned.",
      tags: ["square", "portuguese", "cobblestone", "historic", "must-visit"],
      sourceApi: "curated",
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Senado_Square.jpg/500px-Senado_Square.jpg"]
    },
    {
      name: "Casinos of Cotai",
      lat: 22.1470, lng: 113.5600,
      category_name: "casino",
      rating: 4.5, user_ratings_total: 50000,
      description: "Las Vegas of the East. Luxury casinos.",
      tags: ["casino", "cotai", "luxury", "gambling", "entertainment"],
      sourceApi: "curated",
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/Cotai_Casinos.jpg/500px-Cotai_Casinos.jpg"]
    },
    {
      name: "A-Ma Temple",
      lat: 22.1863, lng: 113.5315,
      category_name: "temple",
      rating: 4.5, user_ratings_total: 25000,
      description: "Oldest temple in Macau. Goddess of seafarers.",
      tags: ["temple", "oldest", "godess", "culture", "historic"],
      sourceApi: "curated",
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/A_Ma_Temple.jpg/500px-A_Ma_Temple.jpg"]
    },
    {
      name: "Macau Tower",
      lat: 22.1281, lng: 113.5597,
      category_name: "scenic lookout",
      rating: 4.5, user_ratings_total: 30000,
      description: "Observation tower with skywalk. Bungee jumping.",
      tags: ["tower", "skywalk", "bungee", "views", "adventure"],
      sourceApi: "curated",
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/Macau_Tower.jpg/500px-Macau_Tower.jpg"]
    },

    // RESTAURANTS & FOOD
    {
      name: "Macau Food Markets",
      lat: 22.1950, lng: 113.5400,
      category_name: "food market",
      rating: 4.3, user_ratings_total: 15000,
      description: "Local markets with egg tarts. Pork buns.",
      tags: ["market", "egg-tarts", "food", "portuguese", "local"],
      sourceApi: "curated",
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/Macau_Food.jpg/500px-Macau_Food.jpg"]
    },
    {
      name: "Lord Stow's Bakery",
      lat: 22.1952, lng: 113.5435,
      category_name: "bakery",
      rating: 4.4, user_ratings_total: 12000,
      description: "Legendary egg tart bakery. Portuguese pastéis.",
      tags: ["egg-tart", "bakery", "portuguese", "famous", "must-try"],
      sourceApi: "curated",
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/Egg_Tart.jpg/500px-Egg_Tart.jpg"]
    },
    {
      name: "Portuguese Cuisine",
      lat: 22.1900, lng: 113.5450,
      category_name: "restaurant",
      rating: 4.3, user_ratings_total: 10000,
      description: "Portuguese dishes. Bacalhau and curry.",
      tags: ["portuguese", "bacalhau", "curry", "colonial", "dining"],
      sourceApi: "curated",
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Portuguese_Dishes.jpg/500px-Portuguese_Dishes.jpg"]
    },

    // PARKS & BEACHES
    {
      name: "Coloanem Park",
      lat: 22.1320, lng: 113.5600,
      category_name: "park",
      rating: 4.3, user_ratings_total: 12000,
      description: "Parks and beaches in Cotai. Entertainment hub.",
      tags: ["park", "beach", "entertainment", "resort", "family"],
      sourceApi: "curated",
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Cotai_Strip.jpg/500px-Cotai_Strip.jpg"]
    },
    {
      name: "Ruins of St. Paul's",
      lat: 22.1958, lng: 113.5409,
      category_name: "ruins",
      rating: 4.6, user_ratings_total: 50000,
      description: "Iconic church facade. Macau's symbol.",
      tags: ["ruins", "church", "iconic", "must-visit", "portuguese"],
      sourceApi: "curated",
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/St_Pauls_Ruins.jpg/500px-St_Pauls_Ruins.jpg"]
    },
  ],

  // ═══════════════════════════════════════════════════════════════════════════
  // MECCA
  // ═══════════════════════════════════════════════════════════════════════════
  "Mecca": [
    {
      name: "Masjid al-Haram",
      lat: 21.4200, lng: 39.8262,
      category_name: "mosque",
      rating: 4.9, user_ratings_total: 100000,
      description: "Largest mosque in world. Kaaba inside.",
      tags: ["mosque", "kaaba", "largest", "islamic", "must-visit"],
      sourceApi: "curated",
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Masjid_al-Haram.jpg/500px-Masjid_al-Haram.jpg"]
    },
    {
      name: "Kaaba",
      lat: 21.4225, lng: 39.8252,
      category_name: "shrine",
      rating: 4.9, user_ratings_total: 100000,
      description: "Most sacred site in Islam. Black cube.",
      tags: ["kaaba", "shrine", "sacred", "islam", "pilgrimage"],
      sourceApi: "curated",
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/Kaaba.jpg/500px-Kaaba.jpg"]
    },
    {
      name: "Mount Arafat",
      lat: 21.3548, lng: 40.0565,
      category_name: "mountain",
      rating: 4.8, user_ratings_total: 60000,
      description: "Where Prophet gave farewell. Pilgrimage site.",
      tags: ["mountain", "pilgrimage", "prophet", "sacred", "islam"],
      sourceApi: "curated",
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/Mount_Arafat.jpg/500px-Mount_Arafat.jpg"]
    },
    {
      name: "Mina",
      lat: 21.4000, lng: 39.9300,
      category_name: "valley",
      rating: 4.6, user_ratings_total: 40000,
      description: "Valley for stoning rituals. Pilgrimage.",
      tags: ["valley", "pilgrimage", "rituals", "islam", "sacred"],
      sourceApi: "curated",
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Mina.jpg/500px-Mina.jpg"]
    },
    {
      name: "Abraj Al Bait",
      lat: 21.4135, lng: 39.8265,
      category_name: "building",
      rating: 4.7, user_ratings_total: 50000,
      description: "Royal clock tower. World's tallest building.",
      tags: ["building", "clock-tower", "skyscraper", "landmark", "modern"],
      sourceApi: "curated",
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Abraj_Al_Bait.jpg/500px-Abraj_Al_Bait.jpg"]
    },

    // FOOD & SERVICES
    {
      name: "Mecca Markets",
      lat: 21.4200, lng: 39.8300,
      category_name: "market",
      rating: 4.3, user_ratings_total: 20000,
      description: "Markets selling prayer items. Dates and gifts.",
      tags: ["market", "prayer", "dates", "souvenirs", "shopping"],
      sourceApi: "curated",
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Mecca_Market.jpg/500px-Mecca_Market.jpg"]
    },
    {
      name: "Local Restaurants",
      lat: 21.4150, lng: 39.8250,
      category_name: "restaurant",
      rating: 4.2, user_ratings_total: 15000,
      description: "Restaurants around the mosque. Traditional food.",
      tags: ["restaurant", "local", "traditional", "dates", "hummus"],
      sourceApi: "curated",
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/Mecca_Food.jpg/500px-Mecca_Food.jpg"]
    },
    {
      name: "Hotel Cafes",
      lat: 21.4130, lng: 39.8270,
      category_name: "cafe",
      rating: 4.2, user_ratings_total: 12000,
      description: "Cafes in luxury hotels. Coffee and dates.",
      tags: ["cafe", "hotel", "coffee", "dates", "luxury"],
      sourceApi: "curated",
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Hotel_Cafe.jpg/500px-Hotel_Cafe.jpg"]
    },

    // PILGRIMAGE
    {
      name: "Safa and Marwa",
      lat: 21.4180, lng: 39.8280,
      category_name: "mountain",
      rating: 4.6, user_ratings_total: 30000,
      description: "Sa'i between hills. Pilgrimage ritual.",
      tags: ["hill", "pilgrimage", "ritual", "sacred", "islam"],
      sourceApi: "curated",
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Safa_Marwa.jpg/500px-Safa_Marwa.jpg"]
    },
    {
      name: "Hira Cave",
      lat: 21.4240, lng: 39.8450,
      category_name: "cave",
      rating: 4.7, user_ratings_total: 25000,
      description: "Cave where Quran revealed. On Jabal al-Nur.",
      tags: ["cave", "quran", "prophet", "pilgrimage", "sacred"],
      sourceApi: "curated",
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Hira_Cave.jpg/500px-Hira_Cave.jpg"]
    },
  ],

  // ═══════════════════════════════════════════════════════════════════════════
  // ANTALYA
  // ═══════════════════════════════════════════════════════════════════════════
  "Antalya": [
    {
      name: "Kaleici",
      lat: 36.8939, lng: 30.3414,
      category_name: "neighborhood",
      rating: 4.5, user_ratings_total: 30000,
      description: "Old town with harbor. Hadrian's Gate entrance.",
      tags: ["old-town", "harbor", "ottomon", "historic", "must-visit"],
      sourceApi: "curated",
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Kaleici.jpg/500px-Kaleici.jpg"]
    },
    {
      name: "Düden Waterfalls",
      lat: 37.0330, lng: 30.8600,
      category_name: "waterfall",
      rating: 4.5, user_ratings_total: 25000,
      description: "Lush green waterfalls. Nature escapes.",
      tags: ["waterfall", "nature", "green", "scenic", "must-visit"],
      sourceApi: "curated",
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/Duden_Waterfalls.jpg/500px-Duden_Waterfalls.jpg"]
    },
    {
      name: "Konyaalti Beach",
      lat: 36.8620, lng: 30.3260,
      category_name: "beach",
      rating: 4.4, user_ratings_total: 25000,
      description: "Blue Flag beach with promenade. Views of mountains.",
      tags: ["beach", "blue-flag", "promenade", "sunset", "family"],
      sourceApi: "curated",
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Konyaalti_Beach.jpg/500px-Konyaalti_Beach.jpg"]
    },
    {
      name: "Perge Ancient City",
      lat: 36.9581, lng: 30.8540,
      category_name: "ruins",
      rating: 4.5, user_ratings_total: 20000,
      description: "Greek and Roman ruins. Stadium and theater.",
      tags: ["ruins", "greek", "roman", "stadium", "history"],
      sourceApi: "curated",
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Perge.jpg/500px-Perge.jpg"]
    },
    {
      name: "Aspendos Theater",
      lat: 37.0570, lng: 31.0350,
      category_name: "theater",
      rating: 4.6, user_ratings_total: 25000,
      description: "Best-preserved Roman theater. Opera performances.",
      tags: ["theater", "roman", "opera", "preserved", "must-visit"],
      sourceApi: "curated",
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Aspendos.jpg/500px-Aspendos.jpg"]
    },

    // RESTAURANTS & FOOD
    {
      name: "Kaleici Market",
      lat: 36.8939, lng: 30.3414,
      category_name: "market",
      rating: 4.4, user_ratings_total: 15000,
      description: "Old town market with Turkish crafts. Spices.",
      tags: ["market", "crafts", "spices", "souvenirs", "local"],
      sourceApi: "curated",
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Antalya_Market.jpg/500px-Antalya_Market.jpg"]
    },
    {
      name: "Pide House",
      lat: 36.8940, lng: 30.3400,
      category_name: "restaurant",
      rating: 4.3, user_ratings_total: 10000,
      description: "Turkish flatbread. Meat and cheese pide.",
      tags: ["pide", "turkish", "bread", "famous", "must-try"],
      sourceApi: "curated",
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Pide.jpg/500px-Pide.jpg"]
    },
    {
      name: "Meyhane",
      lat: 36.8935, lng: 30.3415,
      category_name: "restaurant",
      rating: 4.3, user_ratings_total: 12000,
      description: "Traditional Turkish meyhane. Raki and meze.",
      tags: ["meyhane", "raki", "meze", "traditional", "nightlife"],
      sourceApi: "curated",
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Meyhane.jpg/500px-Meyhane.jpg"]
    },

    // BEACHES & RUINS
    {
      name: "Lara Beach",
      lat: 36.8550, lng: 30.7900,
      category_name: "beach",
      rating: 4.4, user_ratings_total: 20000,
      description: "Long sandy beach. Luxury hotels and resorts.",
      tags: ["beach", "sandy", "luxury", "resorts", "family"],
      sourceApi: "curated",
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Lara_Beach.jpg/500px-Lara_Beach.jpg"]
    },
    {
      name: "Kemer Beach",
      lat: 36.5900, lng: 30.5600,
      category_name: "beach",
      rating: 4.4, user_ratings_total: 15000,
      description: "Beach by Taurus mountains. Yacht tours.",
      tags: ["beach", "mountains", "yacht", "tour", "scenic"],
      sourceApi: "curated",
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Kemer.jpg/500px-Kemer.jpg"]
    },
  ],

  // ═══════════════════════════════════════════════════════════════════
  // CANCUN
  // ═════════════════════════════════════════════════════════════════════════
  "Cancun": [
    {
      name: "Chichen Itza",
      lat: 20.6843, lng: -88.5678,
      category_name: "ruins",
      rating: 4.8, user_ratings_total: 65000,
      description: "Ancient Mayan pyramid. New Wonder of the World.",
      tags: ["ruins", "mayan", "pyramid", "wonder", "must-visit"],
      sourceApi: "curated",
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Chichen_Itza.jpg/500px-Chichen_Itza.jpg"]
    },
    {
      name: "Isla Mujeres",
      lat: 21.2300, lng: -86.7300,
      category_name: "island",
      rating: 4.5, user_ratings_total: 30000,
      description: "Island with beaches and turtles. Ferry from Cancun.",
      tags: ["island", "beach", "turtles", "ferry", "day-trip"],
      sourceApi: "curated",
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/Isla_Mujeres.jpg/500px-Isla_Mujeres.jpg"]
    },
    {
      name: "Cancun Beach",
      lat: 21.1111, lng: -86.7667,
      category_name: "beach",
      rating: 4.5, user_ratings_total: 45000,
      description: "White sand beach with resorts. Turquoise waters.",
      tags: ["beach", "white-sand", "resorts", "turquoise", "party"],
      sourceApi: "curated",
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Cancun_Beach.jpg/500px-Cancun_Beach.jpg"]
    },
    {
      name: "Xcaret Park",
      lat: 20.6269, lng: -87.0749,
      category_name: "park",
      rating: 4.5, user_ratings_total: 35000,
      description: "Eco-park with beaches and shows. Underground rivers.",
      tags: ["park", "ecotourism", "shows", "swimming", "family"],
      sourceApi: "curated",
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/Xcaret.jpg/500px-Xcaret.jpg"]
    },
    {
      name: "Playa Delfines",
      lat: 21.0364, lng: -86.8778,
      category_name: "beach",
      rating: 4.4, user_ratings_total: 20000,
      description: "Beach with fewer crowds. Instagram sign.",
      tags: ["beach", "instagram", "sign", "less-crowded", "photo-op"],
      sourceApi: "curated",
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/Playa_Delfines.jpg/500px-Playa_Delfines.jpg"]
    },

    // RESTAURANTS & FOOD
    {
      name: "La Habichuela",
      lat: 21.1113, lng: -86.7685,
      category_name: "restaurant",
      rating: 4.4, user_ratings_total: 12000,
      description: "Famous for Mexican Caribbean. Ocean views.",
      tags: ["mexican", "seafood", "ocean-view", "romantic", "famous"],
      sourceApi: "curated",
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Mexican_Food.jpg/500px-Mexican_Food.jpg"]
    },
    {
      name: "La Parrilla",
      lat: 21.1108, lng: -86.7652,
      category_name: "restaurant",
      rating: 4.3, user_ratings_total: 10000,
      description: "Traditional Mexican food. Live music.",
      tags: ["mexican", "traditional", "live-music", "dining", "family"],
      sourceApi: "curated",
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Cancun_Food.jpg/500px-Cancun_Food.jpg"]
    },
    {
      name: "Market 28",
      lat: 21.1159, lng: -86.7735,
      category_name: "market",
      rating: 4.3, user_ratings_total: 8000,
      description: "Local market with crafts. Cheap souvenirs.",
      tags: ["market", "crafts", "souvenirs", "bargain", "local"],
      sourceApi: "curated",
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Market_28.jpg/500px-Market_28.jpg"]
    },

    // RUINS & BEACHES
    {
      name: "Tulum Ruins",
      lat: 20.2114, lng: -87.4657,
      category_name: "ruins",
      rating: 4.6, user_ratings_total: 35000,
      description: "Mayan ruins by beach. Cliffs and ocean.",
      tags: ["ruins", "mayan", "beach", "cliffs", "scenic"],
      sourceApi: "curated",
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Tulum_Ruins.jpg/500px-Tulum_Ruins.jpg"]
    },
    {
      name: "Cozumel",
      lat: 20.5100, lng: -86.9500,
      category_name: "island",
      rating: 4.5, user_ratings_total: 25000,
      description: "Island for diving. Snorkeling and beaches.",
      tags: ["island", "diving", "snorkeling", "beaches", "ferry"],
      sourceApi: "curated",
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Cozumel.jpg/500px-Cozumel.jpg"]
    },
  ],

  // ═══════════════════════════════════════════════════════════════════════════
  // MEXICO CITY
  // ═══════════════════════════════════════════════════════════════════════════
  "Mexico City": [
    {
      name: "Zocalo",
      lat: 19.4326, lng: -99.1332,
      category_name: "square",
      rating: 4.6, user_ratings_total: 45000,
      description: "Main square in capital. Cathedral and National Palace.",
      tags: ["square", "cathedral", "historic", "capital", "must-visit"],
      sourceApi: "curated",
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Zocalo.jpg/500px-Zocalo.jpg"]
    },
    {
      name: "Chapultepec Castle",
      lat: 19.4204, lng: -99.1955,
      category_name: "castle",
      rating: 4.5, user_ratings_total: 30000,
      description: "Castle on hill in park. Museum and views.",
      tags: ["castle", "park", "museum", "views", "historic"],
      sourceApi: "curated",
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/Chapultepec_Castle.jpg/500px-Chapultepec_Castle.jpg"]
    },
    {
      name: "Frida Kahlo Museum",
      lat: 19.3557, lng: -99.1609,
      category_name: "museum",
      rating: 4.6, user_ratings_total: 35000,
      description: "Famous Blue House of artist. Art and gardens.",
      tags: ["museum", "frida-kahlo", "art", "blue-house", "must-visit"],
      sourceApi: "curated",
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/Frida_Kahlo.jpg/500px-Frida_Kahlo.jpg"]
    },
    {
      name: "Roma Neighborhood",
      lat: 19.4023, lng: -99.1556,
      category_name: "neighborhood",
      rating: 4.4, user_ratings_total: 25000,
      description: "Trendy neighborhood with cafes. Art galleries.",
      tags: ["neighborhood", "trendy", "cafes", "art", "galleries"],
      sourceApi: "curated",
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Roma.jpg/500px-Roma.jpg"]
    },
    {
      name: "Basilica of Guadalupe",
      lat: 19.4194, lng: -99.1325,
      category_name: "basilica",
      rating: 4.7, user_ratings_total: 40000,
      description: "Most visited Catholic site. Religious pilgrimage.",
      tags: ["basilica", "religious", "pilgrimage", "sacred", "must-visit"],
      sourceApi: "curated",
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Basilica.jpg/500px-Basilica.jpg"]
    },

    // RESTAURANTS & FOOD
    {
      name: "Tortas",
      lat: 19.4300, lng: -99.1400,
      category_name: "restaurant",
      rating: 4.3, user_ratings_total: 12000,
      description: "Classic Mexican sandwiches. Mexico City favorite.",
      tags: ["tortas", "sandwich", "mexican", "street-food", "budget-friendly"],
      sourceApi: "curated",
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Tortas.jpg/500px-Tortas.jpg"]
    },
    {
      name: "Pujol",
      lat: 19.4175, lng: -99.1612,
      category_name: "restaurant",
      rating: 4.7, user_ratings_total: 15000,
      description: "World's Best Restaurant. Mexican fine dining.",
      tags: ["mexican", "fine-dining", "michelin", "molecular", "famous"],
      sourceApi: "curated",
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Pujol.jpg/500px-Pujol.jpg"]
    },
    {
      name: "Cantina",
      lat: 19.4250, lng: -99.1350,
      category_name: "cantina",
      rating: 4.3, user_ratings_total: 10000,
      description: "Traditional cantina with mezcal. Live music.",
      tags: ["cantina", "mezcal", "traditional", "music", "nightlife"],
      sourceApi: "curated",
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Mezcal.jpg/500px-Mezcal.jpg"]
    },

    // PARKS & LAKES
    {
      name: "Chapultepec Park",
      lat: 19.4110, lng: -99.1900,
      category_name: "park",
      rating: 4.5, user_ratings_total: 25000,
      description: "Huge city park with castle. Zoo and museums.",
      tags: ["park", "castle", "zoo", "museums", "large"],
      sourceApi: "curated",
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Chapultepec_Park.jpg/500px-Chapultepec_Park.jpg"]
    },
    {
      name: "Xochimilco",
      lat: 19.2650, lng: -99.1050,
      category_name: "lake",
      rating: 4.4, user_ratings_total: 20000,
      description: "Floating gardens on trajineras. Colorful boats.",
      tags: ["floating-gardens", "trajinera", "colorful", "cultural", "day-trip"],
      sourceApi: "curated",
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/Xochimilco.jpg/500px-Xochimilco.jpg"]
    },
  ],

  // ═══════════════════════════════════════════════════════════════════════════
  // ORLANDO
  // ═══════════════════════════════════════════════════════════════════════════
  "Orlando": [
    {
      name: "Walt Disney World",
      lat: 28.3852, lng: -81.5639,
      category_name: "theme park",
      rating: 4.7, user_ratings_total: 100000,
      description: "World's largest resort. Magic Kingdom and more.",
      tags: ["disney", "theme-park", "magic", "family", "must-visit"],
      sourceApi: "curated",
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Disney_World.jpg/500px-Disney_World.jpg"]
    },
    {
      name: "Universal Studios",
      lat: 28.4791, lng: -81.4678,
      category_name: "theme park",
      rating: 4.6, user_ratings_total: 70000,
      description: "Movie-themed park. Harry Potter world.",
      tags: ["universal", "harry-potter", "theme-park", "movies", "family"],
      sourceApi: "curated",
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Universal_Studios.jpg/500px-Universal_Studios.jpg"]
    },
    {
      name: "SeaWorld",
      lat: 28.4104, lng: -81.4638,
      category_name: "theme park",
      rating: 4.4, user_ratings_total: 40000,
      description: "Marine park with shows.roller coasters.",
      tags: ["seaworld", "marine", "shows", "roller-coaster", "family"],
      sourceApi: "curated",
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/SeaWorld.jpg/500px-SeaWorld.jpg"]
    },
    {
      name: "Kenndey Space Center",
      lat: 28.5721, lng: -80.6490,
      category_name: "museum",
      rating: 4.6, user_ratings_total: 35000,
      description: "NASA launch center. Space Shuttle exhibit.",
      tags: ["nasa", "space", "museum", "history", "must-visit"],
      sourceApi: "curated",
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Space_Center.jpg/500px-Space_Center.jpg"]
    },
    {
      name: "ICON Park",
      lat: 28.4388, lng: -81.4708,
      category_name: "entertainment district",
      rating: 4.4, user_ratings_total: 25000,
      description: "Entertainment wheel. Restaurants and bars.",
      tags: ["wheel", "entertainment", "restaurants", "nightlife", "view"],
      sourceApi: "curated",
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/ICON_Park.jpg/500px-ICON_Park.jpg"]
    },

    // RESTAURANTS & FOOD
    {
      name: "Disney Springs",
      lat: 28.3567, lng: -81.4210,
      category_name: "entertainment district",
      rating: 4.4, user_ratings_total: 30000,
      description: "Disney shopping and dining. Boats and restaurants.",
      tags: ["disney", "shopping", "dining", "entertainment", "family"],
      sourceApi: "curated",
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/Disney_Springs.jpg/500px-Disney_Springs.jpg"]
    },
    {
      name: "Universal CityWalk",
      lat: 28.4791, lng: -81.4678,
      category_name: "entertainment district",
      rating: 4.3, user_ratings_total: 20000,
      description: "Universal complex for restaurants. Cinema and clubs.",
      tags: ["universal", "restaurants", "cinema", "clubs", "nightlife"],
      sourceApi: "curated",
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/CityWalk.jpg/500px-CityWalk.jpg"]
    },
    {
      name: "Florida Mall",
      lat: 28.4592, lng: -81.3955,
      category_name: "shopping mall",
      rating: 4.3, user_ratings_total: 25000,
      description: "Large shopping mall. Hundreds of stores.",
      tags: ["shopping", "mall", "hundreds", "stores", "dining"],
      sourceApi: "curated",
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Florida_Mall.jpg/500px-Florida_Mall.jpg"]
    },

    // NATURE & PARKS
    {
      name: "Wekiwa Springs",
      lat: 28.7800, lng: -81.4300,
      category_name: "state park",
      rating: 4.5, user_ratings_total: 15000,
      description: "Crystal spring for swimming. Kayaking.",
      tags: ["spring", "swimming", "kayaking", "nature", "day-trip"],
      sourceApi: "curated",
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Wekiwa.jpg/500px-Wekiwa.jpg"]
    },
    {
      name: "Gatorland",
      lat: 28.4494, lng: -81.4047,
      category_name: "theme park",
      rating: 4.4, user_ratings_total: 18000,
      description: "Alligator theme park. Swamp and shows.",
      tags: ["alligator", "swamp", "shows", "family", "fun"],
      sourceApi: "curated",
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Gatorland.jpg/500px-Gatorland.jpg"]
    },
  ],

  // ═══════════════════════════════════════════════════════════════════════════
  // MIAMI
  // ══════════════���═���══════════════════════════════════════════════════════════
  "Miami": [
    {
      name: "South Beach",
      lat: 25.7907, lng: -80.1399,
      category_name: "beach",
      rating: 4.5, user_ratings_total: 50000,
      description: "Famous beach with Art Deco. Party and celebrities.",
      tags: ["beach", "art-deco", "party", "celebrities", "iconic"],
      sourceApi: "curated",
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/South_Beach.jpg/500px-South_Beach.jpg"]
    },
    {
      name: "Little Havana",
      lat: 25.7633, lng: -80.1910,
      category_name: "neighborhood",
      rating: 4.5, user_ratings_total: 25000,
      description: "Cuban neighborhood with Calle 8. Dominoes and music.",
      tags: ["cuban", "neighborhood", "dominoes", "music", "culture"],
      sourceApi: "curated",
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/Little_Havana.jpg/500px-Little_Havana.jpg"]
    },
    {
      name: "Wynwood Walls",
      lat: 25.7992, lng: -80.1998,
      category_name: "neighborhood",
      rating: 4.5, user_ratings_total: 30000,
      description: "Street art murals. Art galleries and cafes.",
      tags: ["street-art", "murals", "galleries", "instagram", "trendy"],
      sourceApi: "curated",
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/Wynwood.jpg/500px-Wynwood.jpg"]
    },
    {
      name: "Vizcaya Museum",
      lat: 25.7509, lng: -80.2140,
      category_name: "museum",
      rating: 4.5, user_ratings_total: 20000,
      description: "Italian villa on bay. Gardens and art.",
      tags: ["museum", "villa", "gardens", "italian", "historic"],
      sourceApi: "curated",
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Vizcaya.jpg/500px-Vizcaya.jpg"]
    },
    {
      name: "Ocean Drive",
      lat: 25.7826, lng: -80.1323,
      category_name: "street",
      rating: 4.4, user_ratings_total: 35000,
      description: "Art Deco street with clubs. Neon and nightlife.",
      tags: ["street", "art-deco", "clubs", "neon", "nightlife"],
      sourceApi: "curated",
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Ocean_Drive.jpg/500px-Ocean_Drive.jpg"]
    },

    // RESTAURANTS & FOOD
    {
      name: "Joe's Stone Crab",
      lat: 25.7696, lng: -80.1368,
      category_name: "restaurant",
      rating: 4.5, user_ratings_total: 15000,
      description: "Famous stone crabs. Beach restaurant.",
      tags: ["stone-crab", "famous", "seafood", "beach", "must-visit"],
      sourceApi: "curated",
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Joes_Stone_Crab.jpg/500px-Joes_Stone_Crab.jpg"]
    },
    {
      name: "Versailles Restaurant",
      lat: 25.7633, lng: -80.1910,
      category_name: "restaurant",
      rating: 4.3, user_ratings_total: 10000,
      description: "Cuban restaurant in Little Havana. Coffee and sandwiches.",
      tags: ["cuban", "coffee", "sandwiches", "historic", "local"],
      sourceApi: "curated",
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/Cuban_Food.jpg/500px-Cuban_Food.jpg"]
    },
    {
      name: "Lincoln Road",
      lat: 25.7907, lng: -80.1320,
      category_name: "street",
      rating: 4.4, user_ratings_total: 25000,
      description: "Pedestrian mall with shops. Restaurants and art.",
      tags: ["mall", "shops", "restaurants", "art", "walking"],
      sourceApi: "curated",
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Lincoln_Road.jpg/500px-Lincoln_Road.jpg"]
    },

    // BEACHES & PARKS
    {
      name: "Key Biscayne",
      lat: 25.6900, lng: -80.1600,
      category_name: "island",
      rating: 4.5, user_ratings_total: 20000,
      description: "Island beach park. Crandon Park and beaches.",
      tags: ["island", "beach", "park", "family", "nature"],
      sourceApi: "curated",
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Key_Biscayne.jpg/500px-Key_Biscayne.jpg"]
    },
    {
      name: "Everglades",
      lat: 25.3100, lng: -80.6000,
      category_name: "nature preserve",
      rating: 4.6, user_ratings_total: 25000,
      description: "Subtropical wetland with alligators. Airboat tours.",
      tags: ["wetland", "alligators", "airboat", "nature", "tour"],
      sourceApi: "curated",
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/Everglades.jpg/500px-Everglades.jpg"]
    },
  ],

  // ═══════════════════════════════════════════════════════════════════════════
  // CHICAGO
  // ═══════════════════════════════════════════════════════════════════════════
  "Chicago": [
    {
      name: "Willis Tower",
      lat: 41.8789, lng: -87.6359,
      category_name: "scenic lookout",
      rating: 4.5, user_ratings_total: 50000,
      description: "Iconic skyscraper with Skydeck. Glass floor.",
      tags: ["tower", "skydeck", "glass-floor", "views", "must-visit"],
      sourceApi: "curated",
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/Willis_Tower.jpg/500px-Willis_Tower.jpg"]
    },
    {
      name: "Millennium Park",
      lat: 41.8827, lng: -87.6233,
      category_name: "park",
      rating: 4.5, user_ratings_total: 35000,
      description: "Cloud Gate (The Bean). Summer concerts.",
      tags: ["park", "bean", "cloud-gate", "concerts", "must-visit"],
      sourceApi: "curated",
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Millennium_Park.jpg/500px-Millennium_Park.jpg"]
    },
    {
      name: "Navy Pier",
      lat: 41.8913, lng: -87.6051,
      category_name: "entertainment district",
      rating: 4.4, user_ratings_total: 40000,
      description: "Lakefront pier with rides. Fireworks shows.",
      tags: ["pier", "rides", "fireworks", "family", "entertainment"],
      sourceApi: "curated",
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/Navy_Pier.jpg/500px-Navy_Pier.jpg"]
    },
    {
      name: "Museum Campus",
      lat: 41.8653, lng: -87.6167,
      category_name: "museum",
      rating: 4.6, user_ratings_total: 30000,
      description: "Field Museum and Shedd Aquarium. Lakefront.",
      tags: ["museum", "field-museum", "shedd", "aquarium", "family"],
      sourceApi: "curated",
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Museum_Campus.jpg/500px-Museum_Campus.jpg"]
    },
    {
      name: "Magnificent Mile",
      lat: 41.8962, lng: -87.6245,
      category_name: "shopping district",
      rating: 4.5, user_ratings_total: 35000,
      description: "Michigan Avenue shopping. Hotels and restaurants.",
      tags: ["shopping", "michigan-avenue", "hotels", "dining", "luxury"],
      sourceApi: "curated",
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Magnificent_Mile.jpg/500px-Magnificent_Mile.jpg"]
    },

    // RESTAURANTS & FOOD
    {
      name: "Chicago Hot Dog",
      lat: 41.8800, lng: -87.6300,
      category_name: "street food",
      rating: 4.3, user_ratings_total: 12000,
      description: "Chicago classic with all toppings. Must-try.",
      tags: ["hot-dog", "chicago-style", "street-food", "must-try"],
      sourceApi: "curated",
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Chicago_Hot_Dog.jpg/500px-Chicago_Hot_Dog.jpg"]
    },
    {
      name: "Pizzeria Uno",
      lat: 41.8946, lng: -87.6305,
      category_name: "restaurant",
      rating: 4.4, user_ratings_total: 15000,
      description: "Where deep dish pizza was invented. Classic.",
      tags: ["pizza", "deep-dish", "invented", "famous", "historic"],
      sourceApi: "curated",
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Deep_Dish_Pizza.jpg/500px-Deep_Dish_Pizza.jpg"]
    },
    {
      name: "Giordano's",
      lat: 41.8962, lng: -87.6300,
      category_name: "restaurant",
      rating: 4.4, user_ratings_total: 18000,
      description: "Famous for stuffed pizza. Queues out door.",
      tags: ["pizza", "stuffed", "famous", "must-visit", "lines"],
      sourceApi: "curated",
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Giardanos.jpg/500px-Giardanos.jpg"]
    },

    // PARKS & LAKE
    {
      name: "Lincoln Park",
      lat: 41.9213, lng: -87.6341,
      category_name: "park",
      rating: 4.5, user_ratings_total: 25000,
      description: "Park along lake with zoo. Running and cycling.",
      tags: ["park", "zoo", "lakeside", "running", "nature"],
      sourceApi: "curated",
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Lincoln_Park.jpg/500px-Lincoln_Park.jpg"]
    },
    {
      name: "Lakefront Trail",
      lat: 41.8900, lng: -87.6100,
      category_name: "trail",
      rating: 4.5, user_ratings_total: 20000,
      description: "Paved path along lake. Bikes and skates.",
      tags: ["trail", "lake", "cycling", "skating", "views"],
      sourceApi: "curated",
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Lakefront_Trail.jpg/500px-Lakefront_Trail.jpg"]
    },
  ],

  // ═══════════════════════════════════════════════════════════════════════════
  // BEIJING
  // ═══════════════════════════════════════════════════════════════════════════
  "Beijing": [
    {
      name: "Great Wall",
      lat: 40.4319, lng: 116.5704,
      category_name: "monument",
      rating: 4.8, user_ratings_total: 80000,
      description: "Ancient fortification. Section at Mutianyu.",
      tags: ["great-wall", "monument", "ancient", "must-visit", "wonder"],
      sourceApi: "curated",
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Great_Wall.jpg/500px-Great_Wall.jpg"]
    },
    {
      name: "Forbidden City",
      lat: 39.9163, lng: 116.3972,
      category_name: "palace",
      rating: 4.7, user_ratings_total: 60000,
      description: "Imperial palace complexes. Palace Museum.",
      tags: ["palace", "imperial", "museum", "history", "must-visit"],
      sourceApi: "curated",
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/Forbidden_City.jpg/500px-Forbidden_City.jpg"]
    },
    {
      name: "Tiananmen Square",
      lat: 39.9054, lng: 116.3975,
      category_name: "square",
      rating: 4.5, user_ratings_total: 40000,
      description: "World's largest square. Monument to people.",
      tags: ["square", "largest", "monument", "historic", "tourist"],
      sourceApi: "curated",
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Tiananmen.jpg/500px-Tiananmen.jpg"]
    },
    {
      name: "Temple of Heaven",
      lat: 39.8832, lng: 116.4131,
      category_name: "temple",
      rating: 4.6, user_ratings_total: 35000,
      description: "Imperial temple with circular hall. Park with locals.",
      tags: ["temple", "circular-hall", "park", "cultural", "iconic"],
      sourceApi: "curated",
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Temple_of_Heaven.jpg/500px-Temple_of_Heaven.jpg"]
    },
    {
      name: "798 Art District",
      lat: 39.9328, lng: 116.4312,
      category_name: "neighborhood",
      rating: 4.4, user_ratings_total: 20000,
      description: "Former factory turned galleries. Contemporary art.",
      tags: ["art", "gallery", "contemporary", "trendy", "culture"],
      sourceApi: "curated",
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/798_Art_District.jpg/500px-798_Art_District.jpg"]
    },

    // RESTAURANTS & FOOD
    {
      name: "Peking Duck",
      lat: 39.9100, lng: 116.4150,
      category_name: "restaurant",
      rating: 4.5, user_ratings_total: 25000,
      description: "Signature roasted duck. Crispy skin.",
      tags: ["peking-duck", "roasted", "signature", "must-try", "famous"],
      sourceApi: "curated",
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/Peking_Duck.jpg/500px-Peking_Duck.jpg"]
    },
    {
      name: "Wangfujing Street",
      lat: 39.9143, lng: 116.4275,
      category_name: "street",
      rating: 4.3, user_ratings_total: 20000,
      description: "Famous shopping street. Night market with snacks.",
      tags: ["street", "shopping", "night-market", "snacks", "shopping"],
      sourceApi: "curated",
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Wangfujing.jpg/500px-Wangfujing.jpg"]
    },
    {
      name: "Nanluoguxiang",
      lat: 39.9400, lng: 116.4107,
      category_name: "neighborhood",
      rating: 4.4, user_ratings_total: 15000,
      description: "Hutong with cafes. Traditional to modern.",
      tags: ["hutong", "cafes", "traditional", "trendy", "walk"],
      sourceApi: "curated",
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Nanluoguxiang.jpg/500px-Nanluoguxiang.jpg"]
    },

    // PARKS & PALACES
    {
      name: "Summer Palace",
      lat: 39.9990, lng: 116.1070,
      category_name: "palace",
      rating: 4.7, user_ratings_total: 40000,
      description: "Imperial garden with lake. Boat rides.",
      tags: ["palace", "garden", "lake", "boating", "must-visit"],
      sourceApi: "curated",
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Summer_Palace.jpg/500px-Summer_Palace.jpg"]
    },
    {
      name: "Beihai Park",
      lat: 39.9350, lng: 116.3900,
      category_name: "park",
      rating: 4.4, user_ratings_total: 15000,
      description: "Lake and temple in city. Traditional gardens.",
      tags: ["park", "lake", "temple", "gardens", "peaceful"],
      sourceApi: "curated",
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/Beihai_Park.jpg/500px-Beihai_Park.jpg"]
    },
  ],

  // ═══════════════════════════════════════════════════════════════════════════
  // SHANGHAI
  // ═══════════════════════════════════════════════════════════════════════════
  "Shanghai": [
    {
      name: "The Bund",
      lat: 31.2403, lng: 121.4902,
      category_name: "scenic lookout",
      rating: 4.6, user_ratings_total: 50000,
      description: "Waterfront with colonial architecture. Night lights.",
      tags: ["bund", "colonial", "night-lights", "views", "must-visit"],
      sourceApi: "curated",
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/The_Bund.jpg/500px-The_Bund.jpg"]
    },
    {
      name: "Pearl Tower",
      lat: 31.2200, lng: 121.4900,
      category_name: "scenic lookout",
      rating: 4.5, user_ratings_total: 40000,
      description: "TV tower with observation deck. Futuristic.",
      tags: ["tower", "observation", "futuristic", "views", "iconic"],
      sourceApi: "curated",
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Pearl_Tower.jpg/500px-Pearl_Tower.jpg"]
    },
    {
      name: "Yu Garden",
      lat: 31.2259, lng: 121.4807,
      category_name: "garden",
      rating: 4.5, user_ratings_total: 30000,
      description: "Classic Ming dynasty garden. Pavilion and rocks.",
      tags: ["garden", "ming", "pavilion", "classic", "must-visit"],
      sourceApi: "curated",
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Yu_Garden.jpg/500px-Yu_Garden.jpg"]
    },
    {
      name: "French Concession",
      lat: 31.2045, lng: 121.4747,
      category_name: "neighborhood",
      rating: 4.5, user_ratings_total: 25000,
      description: "Tree-lined streets with colonial houses. cafes.",
      tags: ["french", "colonial", "tree-lined", "cafes", "walkable"],
      sourceApi: "curated",
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/French_Concession.jpg/500px-French_Concession.jpg"]
    },
    {
      name: "Nanjing Road",
      lat: 31.2300, lng: 121.4700,
      category_name: "shopping street",
      rating: 4.4, user_ratings_total: 35000,
      description: "Main shopping street. Pedestrian and luxury brands.",
      tags: ["shopping", "street", "luxury", "pedestrian", "electronics"],
      sourceApi: "curated",
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/c/c0/Nanjing_Road.jpg/500px-Nanjing_Road.jpg"]
    },

    // RESTAURANTS & FOOD
    {
      name: "Xintiandi",
      lat: 31.2220, lng: 121.4803,
      category_name: "entertainment district",
      rating: 4.4, user_ratings_total: 25000,
      description: "Shikumen houses transformed. Clubs and restaurants.",
      tags: ["shikumen", "clubs", "restaurants", "modern", "trendy"],
      sourceApi: "curated",
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Xintiandi.jpg/500px-Xintiandi.jpg"]
    },
    {
      name: "Dynasty",
      lat: 31.2300, lng: 121.4750,
      category_name: "restaurant",
      rating: 4.3, user_ratings_total: 12000,
      description: "Famous for dim sum. Soup dumplings.",
      tags: ["dim-sum", "soup-dumplings", "famous", "popular", "local"],
      sourceApi: "curated",
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/Dim_Sum.jpg/500px-Dim_Sum.jpg"]
    },
    {
      name: "Jing'an Temple",
      lat: 31.2289, lng: 121.4560,
      category_name: "temple",
      rating: 4.4, user_ratings_total: 20000,
      description: "Old temple in商务 district. Peaceful.",
      tags: ["temple", "old", "peaceful", "business-district", "historical"],
      sourceApi: "curated",
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Jingan_Temple.jpg/500px-Jingan_Temple.jpg"]
    },

    // RIVER & SKYLINE
    {
      name: "Huangpu River",
      lat: 31.2400, lng: 121.4900,
      category_name: "river",
      rating: 4.5, user_ratings_total: 30000,
      description: "River cruise with skyline. Night and day.",
      tags: ["river", "cruise", "skyline", "night", "romantic"],
      sourceApi: "curated",
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Huangpu_River.jpg/500px-Huangpu_River.jpg"]
    },
    {
      name: "Lujiazui",
      lat: 31.2300, lng: 121.5000,
      category_name: "business district",
      rating: 4.4, user_ratings_total: 25000,
      description: "New financial district with skyscrapers. Jin Mao.",
      tags: ["district", "skyscrapers", "jIn-mao", "modern", "skyline"],
      sourceApi: "curated",
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Lujiazui.jpg/500px-Lujiazui.jpg"]
    },
  ],

  // ═══════════════════════════════════════════════════════════════════════════
  // ATHENS
  // ═══════════════════════════════════════════════════════════════════════════
  "Athens": [
    {
      name: "Acropolis",
      lat: 37.9715, lng: 23.7267,
      category_name: "ruins",
      rating: 4.8, user_ratings_total: 60000,
      description: "Ancient citadel with Parthenon. UNESCO World Heritage.",
      tags: ["acropolis", "parthenon", "ancient", "unesco", "must-visit"],
      sourceApi: "curated",
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Acropolis.jpg/500px-Acropolis.jpg"]
    },
    {
      name: "Parthenon",
      lat: 37.9715, lng: 23.7267,
      category_name: "temple",
      rating: 4.7, user_ratings_total: 50000,
      description: "Temple to Athena on Acropolis. Classical architecture.",
      tags: ["parthenon", "temple", "athena", "ancient", "iconic"],
      sourceApi: "curated",
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Parthenon.jpg/500px-Parthenon.jpg"]
    },
    {
      name: "Plaka Neighborhood",
      lat: 37.9681, lng: 23.7289,
      category_name: "neighborhood",
      rating: 4.5, user_ratings_total: 30000,
      description: "Old neighborhood below Acropolis. cafes and shops.",
      tags: ["neighborhood", "plaka", "cafes", "historic", "walkable"],
      sourceApi: "curated",
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/Plaka.jpg/500px-Plaka.jpg"]
    },
    {
      name: "Ancient Agora",
      lat: 37.9742, lng: 23.7217,
      category_name: "ruins",
      rating: 4.5, user_ratings_total: 25000,
      description: "Ancient marketplace with Stoa of Attalos. Socrates site.",
      tags: ["agora", "ruins", "socrates", "ancient", "history"],
      sourceApi: "curated",
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Ancient_Agora.jpg/500px-Ancient_Agora.jpg"]
    },
    {
      name: "Mount Lycabettus",
      lat: 37.9842, lng: 23.7456,
      category_name: "mountain",
      rating: 4.4, user_ratings_total: 20000,
      description: "Hill with funicular. Panoramic city views.",
      tags: ["mountain", "views", "funicular", "panoramic", "sunset"],
      sourceApi: "curated",
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Lycabettus.jpg/500px-Lycabettus.jpg"]
    },

    // RESTAURANTS & FOOD
    {
      name: "Monastiraki Square",
      lat: 37.9762, lng: 23.7303,
      category_name: "square",
      rating: 4.4, user_ratings_total: 25000,
      description: "Popular square with tavernas. Street performers.",
      tags: ["square", "tavernas", "street-food", "nightlife", "local"],
      sourceApi: "curated",
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Monastiraki.jpg/500px-Monastiraki.jpg"]
    },
    {
      name: "Souvlaki",
      lat: 37.9840, lng: 23.7350,
      category_name: "street food",
      rating: 4.4, user_ratings_total: 15000,
      description: "Greek fast food with pita. Pork and chicken.",
      tags: ["souvlaki", "street-food", "pita", "greek", "budget-friendly"],
      sourceApi: "curated",
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Souvlaki.jpg/500px-Souvlaki.jpg"]
    },
    {
      name: "Moustache",
      lat: 37.9758, lng: 23.7278,
      category_name: "cafe",
      rating: 4.3, user_ratings_total: 10000,
      description: "Popular cafe in Plaka. Coffee and brunch.",
      tags: ["cafe", "brunch", "coffee", "trendy", "local"],
      sourceApi: "curated",
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Greek_Cafe.jpg/500px-Greek_Cafe.jpg"]
    },

    // RUINS & BEACHES
    {
      name: "Temple of Poseidon",
      lat: 37.8015, lng: 24.0317,
      category_name: "temple",
      rating: 4.6, user_ratings_total: 25000,
      description: "Sunset temple at Cape Sounion. Day trip from Athens.",
      tags: ["temple", "poseidon", "sunset", "day-trip", "coastal"],
      sourceApi: "curated",
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Poseidon_Temple.jpg/500px-Poseidon_Temple.jpg"]
    },
    {
      name: "Glyfada Beach",
      lat: 37.8900, lng: 23.7800,
      category_name: "beach",
      rating: 4.3, user_ratings_total: 15000,
      description: "Beach suburb with clubs. Summer nightlife.",
      tags: ["beach", "clubs", "summer", "nightlife", "suburb"],
      sourceApi: "curated",
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Glyfada.jpg/500px-Glyfada.jpg"]
    },
  ],

  // ═══════════════════════════════════════════════════════════════════════════
  // SANTORINI
  // ═══════════════════════════════════════════════════════════════════════════
  "Santorini": [
    {
      name: "Oia Sunset",
      lat: 36.4618, lng: 25.3753,
      category_name: "scenic lookout",
      rating: 4.9, user_ratings_total: 50000,
      description: "Iconic blue domes and sunsets. Most photographed.",
      tags: ["oia", "blue-domes", "sunset", "iconic", "must-visit"],
      sourceApi: "curated",
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Oia.jpg/500px-Oia.jpg"]
    },
    {
      name: "Fira Town",
      lat: 36.4167, lng: 25.4316,
      category_name: "town",
      rating: 4.6, user_ratings_total: 40000,
      description: "Capital with white buildings. Caldera views.",
      tags: ["town", "white-buildings", "caldera", "views", "must-visit"],
      sourceApi: "curated",
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/Fira.jpg/500px-Fira.jpg"]
    },
    {
      name: "Red Beach",
      lat: 36.4618, lng: 25.3733,
      category_name: "beach",
      rating: 4.4, user_ratings_total: 25000,
      description: "Red volcanic cliffs. Unique landscape.",
      tags: ["beach", "red-cliffs", "volcanic", "unique", "photography"],
      sourceApi: "curated",
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Red_Beach.jpg/500px-Red_Beach.jpg"]
    },
    {
      name: "Ancient Akrotiri",
      lat: 36.3500, lng: 25.4000,
      category_name: "ruins",
      rating: 4.5, user_ratings_total: 20000,
      description: "Minoan Bronze Age town. Well preserved.",
      tags: ["ruins", "minoan", "ancient", "preserved", "archaeological"],
      sourceApi: "curated",
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Akrotiri.jpg/500px-Akrotiri.jpg"]
    },
    {
      name: "Caldera Boat Tour",
      lat: 36.4000, lng: 25.4300,
      category_name: "tour",
      rating: 4.6, user_ratings_total: 20000,
      description: "Boat tour of volcanic caldera. Hot springs.",
      tags: ["caldera", "boat", "hot-springs", "tour", "volcanic"],
      sourceApi: "curated",
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Caldera.jpg/500px-Caldera.jpg"]
    },

    // RESTAURANTS & FOOD
    {
      name: "Santo Wines",
      lat: 36.3833, lng: 25.4350,
      category_name: "winery",
      rating: 4.5, user_ratings_total: 15000,
      description: "Winery with caldera views. Volcanic wine.",
      tags: ["winery", "wine", "views", "volcanic", "tasting"],
      sourceApi: "curated",
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Santo_Wines.jpg/500px-Santo_Wines.jpg"]
    },
    {
      name: "Seafood Restaurants",
      lat: 36.4167, lng: 25.4316,
      category_name: "restaurant",
      rating: 4.4, user_ratings_total: 12000,
      description: "Fresh seafood with caldera views. Grilled fish.",
      tags: ["seafood", "fish", "caldera", "dining", "fresh"],
      sourceApi: "curated",
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/Santorini_Food.jpg/500px-Santorini_Food.jpg"]
    },
    {
      name: "Fira Food Scene",
      lat: 36.4167, lng: 25.4316,
      category_name: "restaurant",
      rating: 4.3, user_ratings_total: 10000,
      description: "Greek cuisine with caldera views. Fine dining.",
      tags: ["greek", "fine-dining", "views", "local", "romantic"],
      sourceApi: "curated",
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Greek_Dining.jpg/500px-Greek_Dining.jpg"]
    },

    // BEACHES
    {
      name: "Perissa Beach",
      lat: 36.3500, lng: 25.4667,
      category_name: "beach",
      rating: 4.3, user_ratings_total: 15000,
      description: "Black sand beach. Beach bars and tavernas.",
      tags: ["beach", "black-sand", "bars", "tavernas", "summer"],
      sourceApi: "curated",
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/Perissa.jpg/500px-Perissa.jpg"]
    },
    {
      name: "Vlychada Beach",
      lat: 36.3333, lng: 25.4333,
      category_name: "beach",
      rating: 4.4, user_ratings_total: 12000,
      description: "Moon-like landscape beach. Less crowded.",
      tags: ["beach", "lunar", "quiet", "unique", "photography"],
      sourceApi: "curated",
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/Vlychada.jpg/500px-Vlychada.jpg"]
    },
  ],

  // ═══════════════════════════════════════════════════════════════════════════
  // MYKONOS
  // ═══════════════════════════════════════════════════════════════════════════
  "Mykonos": [
    {
      name: "Mykonos Town",
      lat: 37.4467, lng: 25.3283,
      category_name: "town",
      rating: 4.5, user_ratings_total: 35000,
      description: "White-washed town with windmills. Party central.",
      tags: ["town", "windmills", "white", "party", "nightlife"],
      sourceApi: "curated",
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Mykonos_Town.jpg/500px-Mykonos_Town.jpg"]
    },
    {
      name: "Paradise Beach",
      lat: 37.4167, lng: 25.3500,
      category_name: "beach",
      rating: 4.4, user_ratings_total: 30000,
      description: "Famous party beach. Beach clubs and DJs.",
      tags: ["beach", "party", "clubs", "DJs", "famous"],
      sourceApi: "curated",
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Paradise_Beach.jpg/500px-Paradise_Beach.jpg"]
    },
    {
      name: "Little Venice",
      lat: 37.4464, lng: 25.3258,
      category_name: "neighborhood",
      rating: 4.6, user_ratings_total: 25000,
      description: "Colorful houses by sea. Sunset views.",
      tags: ["neighborhood", "colorful", "sunset", "sea", "romantic"],
      sourceApi: "curated",
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Little_Venice.jpg/500px-Little_Venice.jpg"]
    },
    {
      name: "Windmills",
      lat: 37.4473, lng: 25.3280,
      category_name: "monument",
      rating: 4.5, user_ratings_total: 30000,
      description: "Iconic windmills over town. Photo hotspot.",
      tags: ["windmills", "iconic", "photos", "sunset", "landmark"],
      sourceApi: "curated",
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Mykonos_Windmills.jpg/500px-Mykonos_Windmills.jpg"]
    },
    {
      name: "Delos Island",
      lat: 37.4000, lng: 25.2667,
      category_name: "island",
      rating: 4.6, user_ratings_total: 20000,
      description: "Birthplace of Apollo. Ancient ruins.",
      tags: ["island", "ruins", "apollo", "ancient", "history"],
      sourceApi: "curated",
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Delos.jpg/500px-Delos.jpg"]
    },

    // RESTAURANTS & FOOD
    {
      name: "Matoyianni Street",
      lat: 37.4458, lng: 25.3268,
      category_name: "street",
      rating: 4.4, user_ratings_total: 15000,
      description: "Main dining street. Boutiques and tavernas.",
      tags: ["street", "dining", "tavernas", "boutiques", "local"],
      sourceApi: "curated",
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Matoyianni.jpg/500px-Matoyianni.jpg"]
    },
    {
      name: "Seafood Tavernas",
      lat: 37.4467, lng: 25.3283,
      category_name: "restaurant",
      rating: 4.4, user_ratings_total: 12000,
      description: "Fresh seafood by the sea. Lobster and fish.",
      tags: ["seafood", "lobster", "fish", "tavernas", "local"],
      sourceApi: "curated",
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Mykonos_Food.jpg/500px-Mykonos_Food.jpg"]
    },
    {
      name: "Cavo Paradiso",
      lat: 37.4167, lng: 25.3500,
      category_name: "club",
      rating: 4.5, user_ratings_total: 15000,
      description: "Famous cliff club. World DJs.",
      tags: ["club", "DJs", "party", "cliff", "nightlife"],
      sourceApi: "curated",
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Cavo_Paradiso.jpg/500px-Cavo_Paradiso.jpg"]
    },

    // BEACHES
    {
      name: "Super Paradise",
      lat: 37.4083, lng: 25.3583,
      category_name: "beach",
      rating: 4.4, user_ratings_total: 20000,
      description: "LGBT-friendly party beach. Clubs on sand.",
      tags: ["beach", "party", "LGBT", "clubs", "famous"],
      sourceApi: "curated",
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Super_Paradise.jpg/500px-Super_Paradise.jpg"]
    },
    {
      name: "Ornos Beach",
      lat: 37.4333, lng: 25.3333,
      category_name: "beach",
      rating: 4.3, user_ratings_total: 12000,
      description: "Family beach near town. Restaurants.",
      tags: ["beach", "family", "restaurants", "calm", "accessible"],
      sourceApi: "curated",
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/Ornos.jpg/500px-Ornos.jpg"]
    },
  ],

  // ═══════════════════════════════════════════════════════════════════════════
  // CAIRO
  // ═══════════════════════════════════════════════════════════════════════════
  "Cairo": [
    {
      name: "Pyramids of Giza",
      lat: 29.9792, lng: 31.1342,
      category_name: "monument",
      rating: 4.8, user_ratings_total: 70000,
      description: "Ancient pyramids and Sphinx. Last Wonder.",
      tags: ["pyramids", "sphinx", "ancient", "wonder", "must-visit"],
      sourceApi: "curated",
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Giza_Pyramids.jpg/500px-Giza_Pyramids.jpg"]
    },
    {
      name: "Egyptian Museum",
      lat: 30.0478, lng: 31.2336,
      category_name: "museum",
      rating: 4.6, user_ratings_total: 35000,
      description: "Museum with Tutankhamun treasures. Mummies.",
      tags: ["museum", "tutankhamun", "mummies", "treasures", "history"],
      sourceApi: "curated",
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Egyptian_Museum.jpg/500px-Egyptian_Museum.jpg"]
    },
    {
      name: "Khan el-Khalili",
      lat: 30.0501, lng: 31.2625,
      category_name: "market",
      rating: 4.5, user_ratings_total: 40000,
      description: "Famous medieval bazaar. Spices and souvenirs.",
      tags: ["market", "bazaar", "spices", "souvenirs", "historic"],
      sourceApi: "curated",
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/Khan_el_Khalili.jpg/500px-Khan_el_Khalili.jpg"]
    },
    {
      name: "Islamic Cairo",
      lat: 30.0444, lng: 31.2357,
      category_name: "neighborhood",
      rating: 4.4, user_ratings_total: 20000,
      description: "Historic Islamic quarter. Mosques and gates.",
      tags: ["islamic", "mosques", "historic", "architecture", "heritage"],
      sourceApi: "curated",
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Islamic_Cairo.jpg/500px-Islamic_Cairo.jpg"]
    },
    {
      name: "Cairo Tower",
      lat: 30.0279, lng: 31.2244,
      category_name: "scenic lookout",
      rating: 4.4, user_ratings_total: 20000,
      description: "Television tower with views. Panoramic city.",
      tags: ["tower", "views", "panoramic", "observation", "landmark"],
      sourceApi: "curated",
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Cairo_Tower.jpg/500px-Cairo_Tower.jpg"]
    },

    // RESTAURANTS & FOOD
    {
      name: "Koshary",
      lat: 30.0500, lng: 31.2600,
      category_name: "street food",
      rating: 4.3, user_ratings_total: 15000,
      description: "Egyptian street dish with pasta and lentils.",
      tags: ["koshary", "street-food", "vegetarian", "budget-friendly", "local"],
      sourceApi: "curated",
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Koshary.jpg/500px-Koshary.jpg"]
    },
    {
      name: "Falafel",
      lat: 30.0500, lng: 31.2500,
      category_name: "street food",
      rating: 4.4, user_ratings_total: 12000,
      description: "Egyptian fast food. Falafel and taameya.",
      tags: ["falafel", "street-food", "fast-food", "vegetarian", "must-try"],
      sourceApi: "curated",
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Falafel.jpg/500px-Falafel.jpg"]
    },
    {
      name: "Naguib Mahfouz",
      lat: 30.0501, lng: 31.2625,
      category_name: "restaurant",
      rating: 4.3, user_ratings_total: 10000,
      description: "Restaurant in Khan el-Khalili. Traditional food.",
      tags: ["restaurant", "traditional", "historic", "khan-el-khalili", "local"],
      sourceApi: "curated",
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Egyptian_Food.jpg/500px-Egyptian_Food.jpg"]
    },

    // PYRAMIDS & NILE
    {
      name: "Nile Cruise",
      lat: 30.0444, lng: 31.2357,
      category_name: "cruise",
      rating: 4.5, user_ratings_total: 25000,
      description: "Dinner cruise on the Nile. Belly dancing.",
      tags: ["nile", "cruise", "dinner", "belly-dancing", "romantic"],
      sourceApi: "curated",
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Nile_Cruise.jpg/500px-Nile_Cruise.jpg"]
    },
    {
      name: "Saqqara",
      lat: 29.8712, lng: 31.2164,
      category_name: "ruins",
      rating: 4.5, user_ratings_total: 15000,
      description: "Step Pyramid of Djoser. Memphis ruins.",
      tags: ["pyramid", "saqqara", "djoser", "ancient", "day-trip"],
      sourceApi: "curated",
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Saqqara.jpg/500px-Saqqara.jpg"]
    },
  ],

  // ═══════════════════════════════════════════════════════════════════════════
  // MARRAKECH
  // ═══════════════════════════════════════════════════════════════════════════
  "Marrakech": [
    {
      name: "Jemaa el-Fnaa",
      lat: 31.6295, lng: -7.9811,
      category_name: "square",
      rating: 4.6, user_ratings_total: 45000,
      description: "Famous square with storytellers. Snake charmers.",
      tags: ["square", "storytellers", "snake-charmers", "must-visit", "atmosphere"],
      sourceApi: "curated",
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Jemaa_el_Fnaa.jpg/500px-Jemaa_el_Fnaa.jpg"]
    },
    {
      name: "Bahia Palace",
      lat: 31.6235, lng: -7.9857,
      category_name: "palace",
      rating: 4.5, user_ratings_total: 25000,
      description: "19th-century palace with gardens. Moroccan design.",
      tags: ["palace", "gardens", "moroccan", "architecture", "historic"],
      sourceApi: "curated",
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Bahia_Palace.jpg/500px-Bahia_Palace.jpg"]
    },
    {
      name: "Majorelle Garden",
      lat: 31.6474, lng: -8.0030,
      category_name: "garden",
      rating: 4.6, user_ratings_total: 35000,
      description: "Blue garden by Yves Saint Laurent. Cacti.",
      tags: ["garden", "majorelle", "blue", "yves-saint-laurent", "must-visit"],
      sourceApi: "curated",
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/Majorelle_Garden.jpg/500px-Majorelle_Garden.jpg"]
    },
    {
      name: "Medina Souks",
      lat: 31.6295, lng: -7.9811,
      category_name: "market",
      rating: 4.5, user_ratings_total: 30000,
      description: "Traditional market maze. Spices and crafts.",
      tags: ["souks", "market", "spices", "crafts", "shopping"],
      sourceApi: "curated",
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Marrakech_Souks.jpg/500px-Marrakech_Souks.jpg"]
    },
    {
      name: "Saadian Tombs",
      lat: 31.6224, lng: -7.9833,
      category_name: "tombs",
      rating: 4.5, user_ratings_total: 15000,
      description: "16th-century royal tombs. Intricate mosaic.",
      tags: ["tombs", "royal", "mosaic", "historic", "architecture"],
      sourceApi: "curated",
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Saadian_Tombs.jpg/500px-Saadian_Tombs.jpg"]
    },

    // RESTAURANTS & FOOD
    {
      name: "Roof Restaurants",
      lat: 31.6295, lng: -7.9811,
      category_name: "restaurant",
      rating: 4.4, user_ratings_total: 20000,
      description: "Rooftop dining with square views. Moroccan food.",
      tags: ["rooftop", "views", "moroccan", "dining", "atmosphere"],
      sourceApi: "curated",
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Marrakech_Food.jpg/500px-Marrakech_Food.jpg"]
    },
    {
      name: "Tagine",
      lat: 31.6300, lng: -7.9800,
      category_name: "restaurant",
      rating: 4.3, user_ratings_total: 12000,
      description: "Slow-cooked stew. Lamb and chicken.",
      tags: ["tagine", "stew", "lamb", "traditional", "must-try"],
      sourceApi: "curated",
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Tagine.jpg/500px-Tagine.jpg"]
    },
    {
      name: "Mint Tea",
      lat: 31.6295, lng: -7.9811,
      category_name: "cafe",
      rating: 4.4, user_ratings_total: 15000,
      description: "Traditional Moroccan tea. With nuts.",
      tags: ["mint-tea", "tea", "traditional", "relaxing", "local"],
      sourceApi: "curated",
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Mint_Tea.jpg/500px-Mint_Tea.jpg"]
    },

    // PALACES & GARDENS
    {
      name: "Menara Gardens",
      lat: 31.6450, lng: -8.0200,
      category_name: "garden",
      rating: 4.4, user_ratings_total: 15000,
      description: "Gardens with pavilion. Olive groves.",
      tags: ["gardens", "pavilion", "olive", "views", "peaceful"],
      sourceApi: "curated",
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Menara_Gardens.jpg/500px-Menara_Gardens.jpg"]
    },
    {
      name: "Agafay Desert",
      lat: 31.6000, lng: -8.1000,
      category_name: "desert",
      rating: 4.5, user_ratings_total: 12000,
      description: "Stone desert near city. Camel rides.",
      tags: ["desert", "camel", "sunset", "day-trip", "adventure"],
      sourceApi: "curated",
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/c/c0/Agafay.jpg/500px-Agafay.jpg"]
    },
  ],


  // ═══════════════════════════════════════════════════════════════════════════
  // ZURICH
  // ═══════════════════════════════════════════════════════════════════════════
  "Zurich": [
    {
      name: "Lake Zurich",
      lat: 47.3500, lng: 8.5700,
      category_name: "lake",
      rating: 4.7, user_ratings_total: 35000,
      description: "Beautiful lake with mountain views. Boat rides and swimming.",
      tags: ["lake", "swimming", "boats", "views", "nature"],
      sourceApi: "curated",
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Zurich_lake.jpg/500px-Zurich_lake.jpg"]
    },
    {
      name: "Old Town (Altstadt)",
      lat: 47.3692, lng: 8.5400,
      category_name: "neighborhood",
      rating: 4.6, user_ratings_total: 28000,
      description: "Medieval old town with narrow streets. Shops and cafes.",
      tags: ["historic", "medieval", "walks", "shopping", "architecture"],
      sourceApi: "curated",
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/Zurich_Altstadt.jpg/500px-Zurich_Altstadt.jpg"]
    },
    {
      name: "Bahnhofstrasse",
      lat: 47.3712, lng: 8.5386,
      category_name: "street",
      rating: 4.7, user_ratings_total: 40000,
      description: "Famous shopping street. Luxury boutiques and banks.",
      tags: ["shopping", "luxury", "banks", "upscale", "must-visit"],
      sourceApi: "curated",
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Bahnhofstrasse.jpg/500px-Bahnhofstrasse.jpg"]
    },
    {
      name: "Frauenmünster Church",
      lat: 47.3663, lng: 8.5393,
      category_name: "church",
      rating: 4.5, user_ratings_total: 18000,
      description: "Romanesque church with Gothic choir. Chagall windows.",
      tags: ["church", "chagall", "windows", "historic", "architecture"],
      sourceApi: "curated",
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/Frauenmuenster.jpg/500px-Frauenmuenster.jpg"]
    },
    {
      name: "Uetliberg",
      lat: 47.3858, lng: 8.4917,
      category_name: "mountain",
      rating: 4.6, user_ratings_total: 22000,
      description: "Mountain with panoramic views. Hiking trails.",
      tags: ["mountain", "hiking", "views", "nature", "panorama"],
      sourceApi: "curated",
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Uetliberg.jpg/500px-Uetliberg.jpg"]
    },

    // RESTAURANTS & FOOD
    {
      name: "Zeithof",
      lat: 47.3700, lng: 8.5400,
      category_name: "restaurant",
      rating: 4.4, user_ratings_total: 12000,
      description: "Traditional Swiss restaurant. Fondue and raclette.",
      tags: ["swiss", "fondue", "raclette", "traditional", "local"],
      sourceApi: "curated",
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Fondue.jpg/500px-Fondue.jpg"]
    },
    {
      name: "Café Sprüngli",
      lat: 47.3702, lng: 8.5354,
      category_name: "cafe",
      rating: 4.5, user_ratings_total: 15000,
      description: "Famous konditorei. Luxemburgerli and pastries.",
      tags: ["cafe", "pastries", "luxemburgerli", "coffee", "must-try"],
      sourceApi: "curated",
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Spruengli.jpg/500px-Spruengli.jpg"]
    },
    {
      name: "Bauschänzli",
      lat: 47.3667, lng: 8.5267,
      category_name: "restaurant",
      rating: 4.3, user_ratings_total: 10000,
      description: "Beer garden with local brew. Swiss cuisine.",
      tags: ["beer", "garden", "local", "brewery", "relaxed"],
      sourceApi: "curated",
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Bauschaenzli.jpg/500px-Bauschaenzli.jpg"]
    },

    // PARKS & NATURE
    {
      name: "Botanical Garden",
      lat: 47.3700, lng: 8.5550,
      category_name: "garden",
      rating: 4.4, user_ratings_total: 12000,
      description: "Exotic plants and greenhouses. Peaceful retreat.",
      tags: ["garden", "botanical", "plants", "greenhouses", "nature"],
      sourceApi: "curated",
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Zurich_Botanical_Garden.jpg/500px-Zurich_Botanical_Garden.jpg"]
    },
    {
      name: "Lindenhof",
      lat: 47.3683, lng: 8.5433,
      category_name: "plaza",
      rating: 4.3, user_ratings_total: 8000,
      description: "Historic plaza with linden trees. Views of river.",
      tags: ["plaza", "historic", "trees", "views", "relaxing"],
      sourceApi: "curated",
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Lindenhof.jpg/500px-Lindenhof.jpg"]
    },
  ],

  // ═══════════════════════════════════════════════════════════════════════════
  // GENEVA
  // ═══════════════════════════════════════════════════════════════════════════
  "Geneva": [
    {
      name: "Jet d'Eau",
      lat: 46.2044, lng: 6.1432,
      category_name: "fountain",
      rating: 4.6, user_ratings_total: 45000,
      description: "Iconic water fountain. 140 meters high.",
      tags: ["fountain", "iconic", "water", "must-visit", "views"],
      sourceApi: "curated",
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Jet_d%27Eau_Geneva.jpg/500px-Jet_d%27Eau_Geneva.jpg"]
    },
    {
      name: "Old Town (Vieille Ville)",
      lat: 46.2000, lng: 6.1450,
      category_name: "neighborhood",
      rating: 4.5, user_ratings_total: 28000,
      description: "Medieval old town. Cobblestone streets and cathedral.",
      tags: ["historic", "medieval", "cathedral", "walks", "architecture"],
      sourceApi: "curated",
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Geneva_Vieille_Ville.jpg/500px-Geneva_Vieille_Ville.jpg"]
    },
    {
      name: "Lake Geneva",
      lat: 46.1900, lng: 6.1400,
      category_name: "lake",
      rating: 4.7, user_ratings_total: 40000,
      description: "Lake with Alpine views. Promenade and boats.",
      tags: ["lake", "alps", "promenade", "boats", "nature"],
      sourceApi: "curated",
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Lake_Geneva.jpg/500px-Lake_Geneva.jpg"]
    },
    {
      name: "Palais des Nations",
      lat: 46.2333, lng: 6.1167,
      category_name: "building",
      rating: 4.5, user_ratings_total: 25000,
      description: "UN headquarters in Europe. Guided tours available.",
      tags: ["un", "architecture", "diplomatic", "history", "tours"],
      sourceApi: "curated",
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Palais_des_Nations.jpg/500px-Palais_des_Nations.jpg"]
    },
    {
      name: "St. Pierre Cathedral",
      lat: 46.2012, lng: 6.1459,
      category_name: "cathedral",
      rating: 4.5, user_ratings_total: 20000,
      description: "Romanesque cathedral with John Calvin history.",
      tags: ["cathedral", "religion", "calvin", "historic", "architecture"],
      sourceApi: "curated",
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/St_Pierre_Geneva.jpg/500px-St_Pierre_Geneva.jpg"]
    },

    // RESTAURANTS & FOOD
    {
      name: "Café de Paris",
      lat: 46.2035, lng: 6.1418,
      category_name: "restaurant",
      rating: 4.4, user_ratings_total: 12000,
      description: "Classic brasserie. Swiss and French cuisine.",
      tags: ["brasserie", "swiss", "french", "classic", "local"],
      sourceApi: "curated",
      isFamous: true,
      photos: ["https://upload.wikimedia.org/w.wikipedia/commons/thumb/5/55/Geneva_Cafe.jpg/500px-Geneva_Cafe.jpg"]
    },
    {
      name: "Micro chocolate",
      lat: 46.2044, lng: 6.1440,
      category_name: "cafe",
      rating: 4.6, user_ratings_total: 18000,
      description: "Artisan chocolate shop. Handcrafted pralines.",
      tags: ["chocolate", "pralines", "artisan", "cafe", "must-try"],
      sourceApi: "curated",
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/Chocolate.jpg/500px-Chocolate.jpg"]
    },
    {
      name: "Les Armures",
      lat: 46.2015, lng: 6.1460,
      category_name: "restaurant",
      rating: 4.3, user_ratings_total: 9000,
      description: "Traditional Genevoise cuisine. Cheese and fondue.",
      tags: ["traditional", "fondue", "cheese", "local", "historic"],
      sourceApi: "curated",
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Les_Armures.jpg/500px-Les_Armures.jpg"]
    },

    // PARKS & NATURE
    {
      name: "Jardin Botanique",
      lat: 46.2200, lng: 6.1400,
      category_name: "garden",
      rating: 4.4, user_ratings_total: 12000,
      description: "Botanical garden with greenhouses. Exotic plants.",
      tags: ["garden", "botanical", "plants", "nature", "peaceful"],
      sourceApi: "curated",
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Jardin_Botanique_Geneva.jpg/500px-Jardin_Botanique_Geneva.jpg"]
    },
    {
      name: "English Garden",
      lat: 46.2100, lng: 6.1350,
      category_name: "garden",
      rating: 4.3, user_ratings_total: 8000,
      description: "English-style garden. Relaxing escape.",
      tags: ["garden", "english", "relaxing", "nature", "peaceful"],
      sourceApi: "curated",
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/English_Garden_Geneva.jpg/500px-English_Garden_Geneva.jpg"]
    },
  ],

  // ═══════════════════════════════════════════════════════════════════════════
  // BRUSSELS
  // ═══════════════════════════════════════════════════════════════════════════
  "Brussels": [
    {
      name: "Grand Place",
      lat: 50.8503, lng: 4.3517,
      category_name: "square",
      rating: 4.7, user_ratings_total: 50000,
      description: "Historic central square. Gothic town hall and guildhalls.",
      tags: ["square", "historic", "gothic", "architecture", "must-visit"],
      sourceApi: "curated",
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/7/7f/Grand_Place_Brussels.jpg/500px-Grand_Place_Brussels.jpg"]
    },
    {
      name: "Manneken Pis",
      lat: 50.8429, lng: 4.3495,
      category_name: "fountain",
      rating: 4.3, user_ratings_total: 35000,
      description: "Famous peeing boy statue. Symbol of Brussels.",
      tags: ["statue", "iconic", "quirky", "must-visit", "humor"],
      sourceApi: "curated",
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Manneken_Pis.jpg/500px-Manneken_Pis.jpg"]
    },
    {
      name: "Atomium",
      lat: 50.8949, lng: 4.3417,
      category_name: "monument",
      rating: 4.5, user_ratings_total: 40000,
      description: "Iron crystal structure. 9 spheres and panoramic views.",
      tags: ["monument", "architecture", "views", "iconic", "must-visit"],
      sourceApi: "curated",
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Atomium.jpg/500px-Atomium.jpg"]
    },
    {
      name: "Royal Palace",
      lat: 50.8469, lng: 4.3556,
      category_name: "palace",
      rating: 4.5, user_ratings_total: 28000,
      description: "Summer royal residence. Neo-classical architecture.",
      tags: ["palace", "royal", "architecture", "history", "gardens"],
      sourceApi: "curated",
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Royal_Palace_Brussels.jpg/500px-Royal_Palace_Brussels.jpg"]
    },
    {
      name: "Mini-Europe",
      lat: 50.8949, lng: 4.3417,
      category_name: "park",
      rating: 4.4, user_ratings_total: 25000,
      description: "Miniature European landmarks. Interactive exhibits.",
      tags: ["park", "miniature", "europe", "family", "interactive"],
      sourceApi: "curated",
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Mini_Europe.jpg/500px-Mini_Europe.jpg"]
    },

    // RESTAURANTS & FOOD
    {
      name: "Maison Antoine",
      lat: 50.8510, lng: 4.3500,
      category_name: "restaurant",
      rating: 4.5, user_ratings_total: 15000,
      description: "Legendary frites. Best in Brussels.",
      tags: ["frites", "iconic", "must-try", "street-food", "local"],
      sourceApi: "curated",
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Belgian_Frites.jpg/500px-Belgian_Frites.jpg"]
    },
    {
      name: "Le Zinneke",
      lat: 50.8460, lng: 4.3480,
      category_name: "restaurant",
      rating: 4.3, user_ratings_total: 10000,
      description: "Brussels cuisine. Traditional dishes.",
      tags: ["brussels", "traditional", "local", "classic", "cozy"],
      sourceApi: "curated",
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Brussels_Food.jpg/500px-Brussels_Food.jpg"]
    },
    {
      name: "Wittamer",
      lat: 50.8450, lng: 4.3490,
      category_name: "cafe",
      rating: 4.5, user_ratings_total: 12000,
      description: "Famous patisserie. Pastries and chocolates.",
      tags: ["pastries", "chocolates", "cafe", "luxury", "must-try"],
      sourceApi: "curated",
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Wittamer.jpg/500px-Wittamer.jpg"]
    },

    // PARKS & NATURE
    {
      name: "Parc de Bruxelles",
      lat: 50.8500, lng: 4.3650,
      category_name: "park",
      rating: 4.4, user_ratings_total: 18000,
      description: "Central park near royal palace. Green retreat.",
      tags: ["park", "royal", "nature", "relaxing", "walks"],
      sourceApi: "curated",
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Parc_de_Bruxelles.jpg/500px-Parc_de_Bruxelles.jpg"]
    },
    {
      name: "Botanical Garden",
      lat: 50.8650, lng: 4.3500,
      category_name: "garden",
      rating: 4.3, user_ratings_total: 10000,
      description: "19th-century greenhouses. Exotic plants.",
      tags: ["garden", "botanical", "greenhouses", "nature", "peaceful"],
      sourceApi: "curated",
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Botanical_Garden_Brussels.jpg/500px-Botanical_Garden_Brussels.jpg"]
    },
  ],

  // ═══════════════════════════════════════════════════════════════════════════
  // EDINBURGH
  // ═══════════════════════════════════════════════════════════════════════════
  "Edinburgh": [
    {
      name: "Edinburgh Castle",
      lat: 55.9486, lng: -3.1883,
      category_name: "castle",
      rating: 4.7, user_ratings_total: 55000,
      description: "Royal castle on volcanic rock. Scottish crown jewels.",
      tags: ["castle", "historic", "royal", "views", "must-visit"],
      sourceApi: "curated",
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Edinburgh_Castle.jpg/500px-Edinburgh_Castle.jpg"]
    },
    {
      name: "Royal Mile",
      lat: 55.9500, lng: -3.1830,
      category_name: "street",
      rating: 4.6, user_ratings_total: 40000,
      description: "Historic street from castle to palace. Shops and landmarks.",
      tags: ["street", "historic", "shopping", "architecture", "walks"],
      sourceApi: "curated",
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Royal_Mile.jpg/500px-Royal_Mile.jpg"]
    },
    {
      name: "Arthur's Seat",
      lat: 55.9436, lng: -3.1619,
      category_name: "mountain",
      rating: 4.7, user_ratings_total: 35000,
      description: "Ancient volcano with panoramic views. Hiking trails.",
      tags: ["mountain", "hiking", "views", "nature", "panorama"],
      sourceApi: "curated",
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Arthur%27s_Seat.jpg/500px-Arthur%27s_Seat.jpg"]
    },
    {
      name: "Holyrood Palace",
      lat: 55.9526, lng: -3.1733,
      category_name: "palace",
      rating: 4.5, user_ratings_total: 28000,
      description: "Royal palace. Mary Queen of Scots history.",
      tags: ["palace", "royal", "history", "architecture", "gardens"],
      sourceApi: "curated",
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/Holyrood_Palace.jpg/500px-Holyrood_Palace.jpg"]
    },
    {
      name: "Calton Hill",
      lat: 55.9544, lng: -3.1822,
      category_name: "hill",
      rating: 4.5, user_ratings_total: 25000,
      description: "Hill with monuments and views. Unfinished National Monument.",
      tags: ["hill", "views", "monuments", "sunset", "panorama"],
      sourceApi: "curated",
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/Calton_Hill.jpg/500px-Calton_Hill.jpg"]
    },

    // RESTAURANTS & FOOD
    {
      name: "The Witchery",
      lat: 55.9491, lng: -3.1903,
      category_name: "restaurant",
      rating: 4.5, user_ratings_total: 15000,
      description: "Historic restaurant near castle. Scottish cuisine.",
      tags: ["restaurant", "historic", "scottish", "atmospheric", "local"],
      sourceApi: "curated",
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/Witchery.jpg/500px-Witchery.jpg"]
    },
    {
      name: "Mary's Milk Bar",
      lat: 55.9469, lng: -3.1906,
      category_name: "cafe",
      rating: 4.6, user_ratings_total: 18000,
      description: "Artisan gelato. Handcrafted scoops.",
      tags: ["gelato", "cafe", "ice-cream", "artisan", "must-try"],
      sourceApi: "curated",
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Gelato.jpg/500px-Gelato.jpg"]
    },
    {
      name: "Oink",
      lat: 55.9473, lng: -3.1926,
      category_name: "restaurant",
      rating: 4.4, user_ratings_total: 12000,
      description: "Hog roast sandwich shop. Scottish pork.",
      tags: ["pork", "sandwich", "street-food", "local", "budget-friendly"],
      sourceApi: "curated",
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Oink.jpg/500px-Oink.jpg"]
    },

    // PARKS & NATURE
    {
      name: "Princes Street Gardens",
      lat: 55.9500, lng: -3.2000,
      category_name: "park",
      rating: 4.5, user_ratings_total: 25000,
      description: "Garden below castle. Memorials and floral displays.",
      tags: ["park", "gardens", "memorials", "nature", "relaxing"],
      sourceApi: "curated",
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/Princes_Street_Gardens.jpg/500px-Princes_Street_Gardens.jpg"]
    },
    {
      name: "Royal Botanic Garden",
      lat: 55.9650, lng: -3.2100,
      category_name: "garden",
      rating: 4.5, user_ratings_total: 20000,
      description: "Historic garden with glasshouses. Diverse plant collection.",
      tags: ["garden", "botanical", "glasshouses", "nature", "peaceful"],
      sourceApi: "curated",
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Edinburgh_Botanical_Garden.jpg/500px-Edinburgh_Botanical_Garden.jpg"]
    },
  ],

  // ═══════════════════════════════════════════════════════════════════════════
  // MUNICH
  // ═══════════════════════════════════════════════════════════════════════════
  "Munich": [
    {
      name: "Marienplatz",
      lat: 48.1374, lng: 11.5800,
      category_name: "square",
      rating: 4.5, user_ratings_total: 40000,
      description: "Central square with new town hall. Glockenspiel show.",
      tags: ["square", "historic", "architecture", "must-visit", "glockenspiel"],
      sourceApi: "curated",
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Marienplatz.jpg/500px-Marienplatz.jpg"]
    },
    {
      name: "Neuschwanstein Castle",
      lat: 47.5576, lng: 10.7498,
      category_name: "castle",
      rating: 4.7, user_ratings_total: 60000,
      description: "Fairytale castle in Schwangau. Disney inspiration.",
      tags: ["castle", "fairytale", "architecture", "iconic", "must-visit"],
      sourceApi: "curated",
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/Neuschwanstein_Castle.jpg/500px-Neuschwanstein_Castle.jpg"]
    },
    {
      name: "English Garden",
      lat: 48.1672, lng: 11.5823,
      category_name: "park",
      rating: 4.6, user_ratings_total: 35000,
      description: "Large urban park. Surfing and beer gardens.",
      tags: ["park", "beer-garden", "surfing", "nature", "relaxing"],
      sourceApi: "curated",
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/English_Garden_Munich.jpg/500px-English_Garden_Munich.jpg"]
    },
    {
      name: "Frauenkirche",
      lat: 48.1386, lng: 11.5735,
      category_name: "church",
      rating: 4.5, user_ratings_total: 25000,
      description: "Cathedral with twin towers. Munich landmark.",
      tags: ["church", "gothic", "architecture", "historic", "must-visit"],
      sourceApi: "curated",
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Frauenkirche_Munich.jpg/500px-Frauenkirche_Munich.jpg"]
    },
    {
      name: "BMW Museum",
      lat: 48.1777, lng: 11.5584,
      category_name: "museum",
      rating: 4.5, user_ratings_total: 30000,
      description: "BMW history and vehicles. Interactive exhibits.",
      tags: ["museum", "cars", "bmw", "history", "interactive"],
      sourceApi: "curated",
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/BMW_Museum.jpg/500px-BMW_Museum.jpg"]
    },

    // RESTAURANTS & FOOD
    {
      name: "Hofbräuhaus",
      lat: 48.1426, lng: 11.5793,
      category_name: "restaurant",
      rating: 4.4, user_ratings_total: 30000,
      description: "Famous beer hall. Traditional food and music.",
      tags: ["beer-hall", "traditional", "music", "must-visit", "atmosphere"],
      sourceApi: "curated",
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hofbrauhaus.jpg/500px-Hofbrauhaus.jpg"]
    },
    {
      name: "Viktualienmarkt",
      lat: 48.1359, lng: 11.5775,
      category_name: "market",
      rating: 4.5, user_ratings_total: 20000,
      description: "Fresh food market. Munich's kitchen.",
      tags: ["market", "food", "fresh", "local", "shopping"],
      sourceApi: "curated",
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/Viktualienmarkt.jpg/500px-Viktualienmarkt.jpg"]
    },
    {
      name: "Augustiner Bräustuben",
      lat: 48.1393, lng: 11.5830,
      category_name: "restaurant",
      rating: 4.5, user_ratings_total: 18000,
      description: "Brewery restaurant. Draught beer and pretzels.",
      tags: ["brewery", "beer", "pretzels", "traditional", "local"],
      sourceApi: "curated",
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Augustiner.jpg/500px-Augustiner.jpg"]
    },

    // PARKS & NATURE
    {
      name: "Englischer Garten",
      lat: 48.1672, lng: 11.5823,
      category_name: "park",
      rating: 4.6, user_ratings_total: 35000,
      description: "Large park with Japanese teahouse. Surfing wave.",
      tags: ["park", "nature", "teahouse", "surfing", "peaceful"],
      sourceApi: "curated",
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/English_Garden_Munich_2.jpg/500px-English_Garden_Munich_2.jpg"]
    },
    {
      name: "Olympiapark",
      lat: 48.1739, lng: 11.5423,
      category_name: "park",
      rating: 4.5, user_ratings_total: 25000,
      description: "1972 Olympic park. Tower and lake views.",
      tags: ["park", "olympic", "tower", "views", "recreation"],
      sourceApi: "curated",
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Olympiapark.jpg/500px-Olympiapark.jpg"]
    },
  ],

  // ═══════════════════════════════════════════════════════════════════════════
  // MILAN
  // ═══════════════════════════════════════════════════════════════════════════
  "Milan": [
    {
      name: "Duomo di Milano",
      lat: 45.4642, lng: 9.1900,
      category_name: "cathedral",
      rating: 4.7, user_ratings_total: 65000,
      description: "Massive Gothic cathedral. 135 spires and rooftop views.",
      tags: ["cathedral", "gothic", "iconic", "architecture", "must-visit"],
      sourceApi: "curated",
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/Milan_Duomo.jpg/500px-Milan_Duomo.jpg"]
    },
    {
      name: "Galleria Vittorio Emanuele II",
      lat: 45.4657, lng: 9.1901,
      category_name: "shopping_mall",
      rating: 4.6, user_ratings_total: 45000,
      description: "Historic shopping arcade. Glass dome and luxury shops.",
      tags: ["shopping", "architecture", "glass-dome", "luxury", "iconic"],
      sourceApi: "curated",
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Galleria_Vittorio_Emanuele_II.jpg/500px-Galleria_Vittorio_E Emanuele_II.jpg"]
    },
    {
      name: "Sforza Castle",
      lat: 45.4707, lng: 9.1795,
      category_name: "castle",
      rating: 4.5, user_ratings_total: 30000,
      description: "Renaissance fortress. Museums and parks.",
      tags: ["castle", "renaissance", "museums", "architecture", "history"],
      sourceApi: "curated",
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/Sforza_Castle.jpg/500px-Sforza_Castle.jpg"]
    },
    {
      name: "The Last Supper",
      lat: 45.4659, lng: 9.1786,
      category_name: "painting",
      rating: 4.7, user_ratings_total: 40000,
      description: "Da Vinci masterpiece in Santa Maria delle Grazie.",
      tags: ["painting", "da-vinci", "art", "museum", "must-visit"],
      sourceApi: "curated",
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Last_Supper.jpg/500px-Last_Supper.jpg"]
    },
    {
      name: "Brera District",
      lat: 45.4440, lng: 9.1800,
      category_name: "neighborhood",
      rating: 4.5, user_ratings_total: 25000,
      description: "Bohemian district. Art galleries and cafes.",
      tags: ["neighborhood", "art", "galleries", "bohemian", "nightlife"],
      sourceApi: "curated",
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Brera.jpg/500px-Brera.jpg"]
    },

    // RESTAURANTS & FOOD
    {
      name: "Luini",
      lat: 45.4642, lng: 9.1885,
      category_name: "restaurant",
      rating: 4.5, user_ratings_total: 18000,
      description: "Famous Panzerotti. Fried dough pockets.",
      tags: ["panzerotti", "street-food", "iconic", "must-try", "budget-friendly"],
      sourceApi: "curated",
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Panzerotti.jpg/500px-Panzerotti.jpg"]
    },
    {
      name: "Pizzeria Spontini",
      lat: 45.4670, lng: 9.1960,
      category_name: "restaurant",
      rating: 4.4, user_ratings_total: 15000,
      description: "Thick crust pizza. Milanese classic.",
      tags: ["pizza", "thick-crust", "local", "classic", "must-try"],
      sourceApi: "curated",
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Pizzeria_Spontini.jpg/500px-Pizzeria_Spontini.jpg"]
    },
    {
      name: "Caffè Martini",
      lat: 45.4658, lng: 9.1910,
      category_name: "cafe",
      rating: 4.3, user_ratings_total: 12000,
      description: "Historic cafe in Galleria. Espresso and pastries.",
      tags: ["cafe", "coffee", "historic", "pastries", "traditional"],
      sourceApi: "curated",
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Caffe_Martini.jpg/500px-Caffe_Martini.jpg"]
    },

    // PARKS & NATURE
    {
      name: "Parco Sempione",
      lat: 45.4730, lng: 9.1750,
      category_name: "park",
      rating: 4.4, user_ratings_total: 20000,
      description: "Park behind Sforza Castle. Relaxing green space.",
      tags: ["park", "nature", "relaxing", "walking", "peaceful"],
      sourceApi: "curated",
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Parco_Sempione.jpg/500px-Parco_Sempione.jpg"]
    },
    {
      name: "Porta Nuova Gardens",
      lat: 45.4850, lng: 9.1900,
      category_name: "park",
      rating: 4.3, user_ratings_total: 12000,
      description: "Modern gardens in business district. Skyscraper views.",
      tags: ["park", "modern", "gardens", "views", "urban"],
      sourceApi: "curated",
      isFamous: true,
      photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Porta_Nuova.jpg/500px-Porta_Nuova.jpg"]
    },
  ],
  };

  export default FAMOUS_PLACES;
