// config/tier1Cities.js
// 30 most popular travel destinations in India.
// Pre-populated before launch using seed script.
// coordinates format: [longitude, latitude] — GeoJSON standard
// Used by: seed/seedCities.js and cities.controller.js

const tier1Cities = [
  { name: "Berlin",        state: "Berlin",              country: "Germany",        coordinates: [13.4050, 52.5200],  tier: 1 },
  { name: "Reykjavik",     state: "Capital Region",      country: "Iceland",        coordinates: [-21.8174, 64.1265], tier: 1 },
  { name: "Venice",        state: "Veneto",              country: "Italy",          coordinates: [12.3155, 45.4408],  tier: 1 },
  { name: "Cape Town",     state: "Western Cape",        country: "South Africa",   coordinates: [18.4241, -33.9249], tier: 1 },
  { name: "Cairo",         state: "Cairo",               country: "Egypt",          coordinates: [31.2357, 30.0444],  tier: 1 },
  { name: "Reykjanesbaer", state: "Southern Peninsula",  country: "Iceland",        coordinates: [-22.5610, 63.9998], tier: 1 },
  { name: "San Francisco", state: "California",          country: "USA",            coordinates: [-122.4194, 37.7749],tier: 1 },
  { name: "Vancouver",     state: "British Columbia",    country: "Canada",         coordinates: [-123.1207, 49.2827],tier: 1 },
  { name: "Athens",        state: "Attica",              country: "Greece",         coordinates: [23.7275, 37.9838],  tier: 1 },
  { name: "Prague",        state: "Prague",              country: "Czech Republic", coordinates: [14.4378, 50.0755],  tier: 1 },

  { name: "Ooty",          state: "Tamil Nadu",        country: "India", coordinates: [76.6950, 11.4102],  tier: 1 },
  { name: "Kodaikanal",    state: "Tamil Nadu",        country: "India", coordinates: [77.4892, 10.2381],  tier: 1 },

  { name: "Coorg",         state: "Karnataka",         country: "India", coordinates: [75.8069, 12.3375],  tier: 1 },
  { name: "Gokarna",       state: "Karnataka",         country: "India", coordinates: [74.3188, 14.5500],  tier: 1 },

  { name: "Pondicherry",   state: "Puducherry",        country: "India", coordinates: [79.8083, 11.9416],  tier: 1 },

  { name: "Kovalam",       state: "Kerala",            country: "India", coordinates: [76.9780, 8.4000],   tier: 1 },
  { name: "Varkala",       state: "Kerala",            country: "India", coordinates: [76.7163, 8.7379],   tier: 1 },
  { name: "Wayanad",       state: "Kerala",            country: "India", coordinates: [76.1320, 11.6854],  tier: 1 },

  { name: "Auli",          state: "Uttarakhand",       country: "India", coordinates: [79.5703, 30.5285],  tier: 1 },
  { name: "Mussoorie",     state: "Uttarakhand",       country: "India", coordinates: [78.0664, 30.4598],  tier: 1 },

  { name: "Gulmarg",       state: "Jammu & Kashmir",   country: "India", coordinates: [74.3805, 34.0484],  tier: 1 },
  { name: "Pahalgam",      state: "Jammu & Kashmir",   country: "India", coordinates: [75.3180, 34.0150],  tier: 1 },

  { name: "Khajuraho",     state: "Madhya Pradesh",    country: "India", coordinates: [79.9199, 24.8318],  tier: 1 },
  { name: "Orchha",        state: "Madhya Pradesh",    country: "India", coordinates: [78.6400, 25.3500],  tier: 1 },

  { name: "Rann of Kutch", state: "Gujarat",           country: "India", coordinates: [70.2170, 23.7337],  tier: 1 },
  { name: "Dwarka",        state: "Gujarat",           country: "India", coordinates: [68.9678, 22.2394],  tier: 1 },

  { name: "Somnath",       state: "Gujarat",           country: "India", coordinates: [70.4013, 20.8880],  tier: 1 },

  { name: "Ajmer",         state: "Rajasthan",         country: "India", coordinates: [74.6399, 26.4499],  tier: 1 },
  { name: "Pushkar",       state: "Rajasthan",         country: "India", coordinates: [74.5500, 26.4899],  tier: 1 },

  { name: "Mount Abu",     state: "Rajasthan",         country: "India", coordinates: [72.7156, 24.5926],  tier: 1 },

  { name: "Shillong",      state: "Meghalaya",         country: "India", coordinates: [91.8933, 25.5788],  tier: 1 },
  { name: "Cherrapunji",   state: "Meghalaya",         country: "India", coordinates: [91.7333, 25.3000],  tier: 1 },

  { name: "Gangtok",       state: "Sikkim",            country: "India", coordinates: [88.6065, 27.3389],  tier: 1 },

  { name: "Tawang",        state: "Arunachal Pradesh", country: "India", coordinates: [91.8630, 27.5860],  tier: 1 },

  { name: "Ziro",          state: "Arunachal Pradesh", country: "India", coordinates: [93.8285, 27.5940],  tier: 1 },

  { name: "Imphal",        state: "Manipur",           country: "India", coordinates: [93.9368, 24.8170],  tier: 1 },

  { name: "Aizawl",        state: "Mizoram",           country: "India", coordinates: [92.7176, 23.7271],  tier: 1 },

  { name: "Kohima",        state: "Nagaland",          country: "India", coordinates: [94.1086, 25.6751],  tier: 1 },

  { name: "Diu",           state: "Daman & Diu",       country: "India", coordinates: [70.9876, 20.7144],  tier: 1 },
  { name: "Delhi",        state: "Delhi",              country: "India", coordinates: [77.1025, 28.7041],  tier: 1 },
  { name: "Mumbai",       state: "Maharashtra",        country: "India", coordinates: [72.8777, 19.0760],  tier: 1 },
  { name: "Jaipur",       state: "Rajasthan",          country: "India", coordinates: [75.7873, 26.9124],  tier: 1 },
  { name: "Agra",         state: "Uttar Pradesh",      country: "India", coordinates: [78.0081, 27.1767],  tier: 1 },
  { name: "Varanasi",     state: "Uttar Pradesh",      country: "India", coordinates: [83.0062, 25.3176],  tier: 1 },

  { name: "Goa",          state: "Goa",                country: "India", coordinates: [74.1240, 15.2993],  tier: 1 },
  { name: "Udaipur",      state: "Rajasthan",          country: "India", coordinates: [73.7125, 24.5854],  tier: 1 },
  { name: "Jodhpur",      state: "Rajasthan",          country: "India", coordinates: [73.0243, 26.2389],  tier: 1 },
  { name: "Jaisalmer",    state: "Rajasthan",          country: "India", coordinates: [70.9083, 26.9157],  tier: 1 },
  { name: "Amritsar",     state: "Punjab",             country: "India", coordinates: [74.8723, 31.6340],  tier: 1 },

  { name: "Chennai",      state: "Tamil Nadu",         country: "India", coordinates: [80.2707, 13.0827],  tier: 1 },
  { name: "Bengaluru",    state: "Karnataka",          country: "India", coordinates: [77.5946, 12.9716],  tier: 1 },
  { name: "Hyderabad",    state: "Telangana",          country: "India", coordinates: [78.4867, 17.3850],  tier: 1 },
  { name: "Kolkata",      state: "West Bengal",        country: "India", coordinates: [88.3639, 22.5726],  tier: 1 },

  { name: "Kochi",        state: "Kerala",             country: "India", coordinates: [76.2673, 9.9312],   tier: 1 },
  { name: "Munnar",       state: "Kerala",             country: "India", coordinates: [77.0595, 10.0889],  tier: 1 },
  { name: "Alappuzha",    state: "Kerala",             country: "India", coordinates: [76.3388, 9.4981],   tier: 1 },

  { name: "Manali",       state: "Himachal Pradesh",   country: "India", coordinates: [77.1892, 32.2396],  tier: 1 },
  { name: "Shimla",       state: "Himachal Pradesh",   country: "India", coordinates: [77.1734, 31.1048],  tier: 1 },
  { name: "Dharamshala",  state: "Himachal Pradesh",   country: "India", coordinates: [76.3234, 32.2190],  tier: 1 },

  { name: "Leh",          state: "Ladakh",             country: "India", coordinates: [77.5770, 34.1526],  tier: 1 },
  { name: "Srinagar",     state: "Jammu & Kashmir",    country: "India", coordinates: [74.7973, 34.0837],  tier: 1 },

  { name: "Rishikesh",    state: "Uttarakhand",        country: "India", coordinates: [78.2676, 30.0869],  tier: 1 },
  { name: "Haridwar",     state: "Uttarakhand",        country: "India", coordinates: [78.1642, 29.9457],  tier: 1 },
  { name: "Nainital",     state: "Uttarakhand",        country: "India", coordinates: [79.4598, 29.3803],  tier: 1 },

  { name: "Mysore",       state: "Karnataka",          country: "India", coordinates: [76.6394, 12.2958],  tier: 1 },
  { name: "Hampi",        state: "Karnataka",          country: "India", coordinates: [76.4747, 15.3350],  tier: 1 },

  { name: "Puri",         state: "Odisha",             country: "India", coordinates: [85.8245, 19.8135],  tier: 1 },
  { name: "Darjeeling",   state: "West Bengal",        country: "India", coordinates: [88.2627, 27.0410],  tier: 1 },

  { name: "Andaman",      state: "Andaman & Nicobar",  country: "India", coordinates: [92.7902, 11.7401],  tier: 1 },

  { name: "Bangkok", state: "Bangkok", country: "Thailand", coordinates: [100.5018, 13.7563], tier: 1 },
  { name: "Hong Kong", state: "Hong Kong", country: "China (SAR)", coordinates: [114.1694, 22.3193], tier: 1 },
  { name: "London", state: "England", country: "United Kingdom", coordinates: [-0.1276, 51.5074], tier: 1 },
  { name: "Macau", state: "Macau", country: "China (SAR)", coordinates: [113.5439, 22.1987], tier: 1 },
  { name: "Istanbul", state: "Istanbul", country: "Turkey", coordinates: [28.9784, 41.0082], tier: 1 },
  { name: "Dubai", state: "Dubai", country: "UAE", coordinates: [55.2708, 25.2048], tier: 1 },
  { name: "Mecca", state: "Mecca", country: "Saudi Arabia", coordinates: [39.8579, 21.3891], tier: 1 },
  { name: "Antalya", state: "Antalya", country: "Turkey", coordinates: [30.7133, 36.8969], tier: 1 },
  { name: "Paris", state: "Île-de-France", country: "France", coordinates: [2.3522, 48.8566], tier: 1 },
  { name: "Kuala Lumpur", state: "Kuala Lumpur", country: "Malaysia", coordinates: [101.6869, 3.1390], tier: 1 },

  { name: "New York", state: "New York", country: "USA", coordinates: [-74.0060, 40.7128], tier: 1 },
  { name: "Singapore", state: "Singapore", country: "Singapore", coordinates: [103.8198, 1.3521], tier: 1 },
  { name: "Tokyo", state: "Tokyo", country: "Japan", coordinates: [139.6917, 35.6895], tier: 1 },
  { name: "Seoul", state: "Seoul", country: "South Korea", coordinates: [126.9780, 37.5665], tier: 1 },
  { name: "Barcelona", state: "Catalonia", country: "Spain", coordinates: [2.1734, 41.3851], tier: 1 },
  { name: "Amsterdam", state: "North Holland", country: "Netherlands", coordinates: [4.9041, 52.3676], tier: 1 },
  { name: "Rome", state: "Lazio", country: "Italy", coordinates: [12.4964, 41.9028], tier: 1 },
  { name: "Madrid", state: "Madrid", country: "Spain", coordinates: [-3.7038, 40.4168], tier: 1 },
  { name: "Milan", state: "Lombardy", country: "Italy", coordinates: [9.1900, 45.4642], tier: 1 },
  { name: "Cancun", state: "Quintana Roo", country: "Mexico", coordinates: [-86.8515, 21.1619], tier: 1 },

  { name: "Phuket", state: "Phuket", country: "Thailand", coordinates: [98.3381, 7.8804], tier: 1 },
  { name: "Pattaya", state: "Chonburi", country: "Thailand", coordinates: [100.8825, 12.9236], tier: 1 },
  { name: "Chiang Mai", state: "Chiang Mai", country: "Thailand", coordinates: [98.9817, 18.7061], tier: 1 },

  { name: "Ho Chi Minh City", state: "Ho Chi Minh", country: "Vietnam", coordinates: [106.6297, 10.8231], tier: 1 },
  { name: "Hanoi", state: "Hanoi", country: "Vietnam", coordinates: [105.8342, 21.0278], tier: 1 },

  { name: "Jakarta", state: "Jakarta", country: "Indonesia", coordinates: [106.8456, -6.2088], tier: 1 },
  { name: "Yogyakarta", state: "Yogyakarta", country: "Indonesia", coordinates: [110.3695, -7.7956], tier: 1 },

  { name: "Manila", state: "Metro Manila", country: "Philippines", coordinates: [120.9842, 14.5995], tier: 1 },
  { name: "Cebu City", state: "Cebu", country: "Philippines", coordinates: [123.8854, 10.3157], tier: 1 },

  { name: "Taipei", state: "Taipei", country: "Taiwan", coordinates: [121.5654, 25.0330], tier: 1 },
  { name: "Kaohsiung", state: "Kaohsiung", country: "Taiwan", coordinates: [120.3014, 22.6273], tier: 1 },

  { name: "Beijing", state: "Beijing", country: "China", coordinates: [116.4074, 39.9042], tier: 1 },
  { name: "Shanghai", state: "Shanghai", country: "China", coordinates: [121.4737, 31.2304], tier: 1 },
  { name: "Guangzhou", state: "Guangdong", country: "China", coordinates: [113.2644, 23.1291], tier: 1 },

  { name: "Osaka", state: "Osaka", country: "Japan", coordinates: [135.5023, 34.6937], tier: 1 },
  { name: "Kyoto", state: "Kyoto", country: "Japan", coordinates: [135.7681, 35.0116], tier: 1 },
  { name: "Sapporo", state: "Hokkaido", country: "Japan", coordinates: [141.3545, 43.0618], tier: 1 },

  { name: "Busan", state: "Busan", country: "South Korea", coordinates: [129.0756, 35.1796], tier: 1 },

  { name: "Doha", state: "Doha", country: "Qatar", coordinates: [51.5310, 25.2854], tier: 1 },
  { name: "Kuwait City", state: "Kuwait City", country: "Kuwait", coordinates: [47.9783, 29.3759], tier: 1 },

  { name: "Tehran", state: "Tehran", country: "Iran", coordinates: [51.3890, 35.6892], tier: 1 },

  { name: "Zagreb", state: "Zagreb", country: "Croatia", coordinates: [15.9819, 45.8150], tier: 1 },
  { name: "Split", state: "Split-Dalmatia", country: "Croatia", coordinates: [16.4402, 43.5081], tier: 1 },

  { name: "Ljubljana", state: "Ljubljana", country: "Slovenia", coordinates: [14.5058, 46.0569], tier: 1 },

  { name: "Tallinn", state: "Harju", country: "Estonia", coordinates: [24.7536, 59.4370], tier: 1 },
  { name: "Riga", state: "Riga", country: "Latvia", coordinates: [24.1052, 56.9496], tier: 1 },
  { name: "Vilnius", state: "Vilnius", country: "Lithuania", coordinates: [25.2797, 54.6872], tier: 1 },

  { name: "Sofia", state: "Sofia", country: "Bulgaria", coordinates: [23.3219, 42.6977], tier: 1 },
  { name: "Bucharest", state: "Bucharest", country: "Romania", coordinates: [26.1025, 44.4268], tier: 1 },

  { name: "Havana", state: "Havana", country: "Cuba", coordinates: [-82.3666, 23.1136], tier: 1 },
  { name: "Kingston", state: "Kingston", country: "Jamaica", coordinates: [-76.7920, 17.9712], tier: 1 },

  { name: "Honolulu", state: "Hawaii", country: "USA", coordinates: [-157.8583, 21.3069], tier: 1 },

  { name: "Mexico City", state: "Mexico City", country: "Mexico", coordinates: [-99.1332, 19.4326], tier: 1 },

  { name: "Bogotá", state: "Bogotá", country: "Colombia", coordinates: [-74.0721, 4.7110], tier: 1 },
  { name: "Cartagena", state: "Bolivar", country: "Colombia", coordinates: [-75.4794, 10.3910], tier: 1 },

  { name: "Quito", state: "Pichincha", country: "Ecuador", coordinates: [-78.4678, -0.1807], tier: 1 },

  { name: "La Paz", state: "La Paz", country: "Bolivia", coordinates: [-68.1193, -16.4897], tier: 1 },

  { name: "Montevideo", state: "Montevideo", country: "Uruguay", coordinates: [-56.1645, -34.9011], tier: 1 },

  { name: "Valencia", state: "Valencia", country: "Spain", coordinates: [-0.3763, 39.4699], tier: 1 },
  { name: "Seville", state: "Andalusia", country: "Spain", coordinates: [-5.9845, 37.3891], tier: 1 },
  { name: "Granada", state: "Andalusia", country: "Spain", coordinates: [-3.5986, 37.1773], tier: 1 },

  { name: "Nice", state: "Provence-Alpes", country: "France", coordinates: [7.2620, 43.7102], tier: 1 },
  { name: "Lyon", state: "Auvergne-Rhône-Alpes", country: "France", coordinates: [4.8357, 45.7640], tier: 1 },

  { name: "Hamburg", state: "Hamburg", country: "Germany", coordinates: [9.9937, 53.5511], tier: 1 },
  { name: "Frankfurt", state: "Hesse", country: "Germany", coordinates: [8.6821, 50.1109], tier: 1 },

  { name: "Krakow", state: "Lesser Poland", country: "Poland", coordinates: [19.9445, 50.0647], tier: 1 },

  { name: "Porto", state: "Porto", country: "Portugal", coordinates: [-8.6291, 41.1579], tier: 1 },

  { name: "Valletta", state: "Valletta", country: "Malta", coordinates: [14.5146, 35.8989], tier: 1 },

  { name: "Dubrovnik", state: "Dubrovnik-Neretva", country: "Croatia", coordinates: [18.0944, 42.6507], tier: 1 },

  { name: "Kotor", state: "Kotor", country: "Montenegro", coordinates: [18.7712, 42.4247], tier: 1 },

  { name: "Tbilisi", state: "Tbilisi", country: "Georgia", coordinates: [44.8271, 41.7151], tier: 1 },

  { name: "Yerevan", state: "Yerevan", country: "Armenia", coordinates: [44.5152, 40.1872], tier: 1 },

  { name: "Almaty", state: "Almaty", country: "Kazakhstan", coordinates: [76.8860, 43.2220], tier: 1 },

  { name: "Ulaanbaatar", state: "Ulaanbaatar", country: "Mongolia", coordinates: [106.9057, 47.8864], tier: 1 },

  { name: "Kathmandu", state: "Bagmati", country: "Nepal", coordinates: [85.3240, 27.7172], tier: 1 },

  { name: "Colombo", state: "Western Province", country: "Sri Lanka", coordinates: [79.8612, 6.9271], tier: 1 },

  { name: "Male", state: "Kaafu", country: "Maldives", coordinates: [73.5093, 4.1755], tier: 1 },

  { name: "Thimphu", state: "Thimphu", country: "Bhutan", coordinates: [89.6390, 27.4728], tier: 1 },

  { name: "Perth", state: "Western Australia", country: "Australia", coordinates: [115.8575, -31.9505], tier: 1 },

  { name: "Adelaide", state: "South Australia", country: "Australia", coordinates: [138.6007, -34.9285], tier: 1 },

  { name: "Queenstown", state: "Otago", country: "New Zealand", coordinates: [168.6626, -45.0312], tier: 1 },

  { name: "Christchurch", state: "Canterbury", country: "New Zealand", coordinates: [172.6362, -43.5321], tier: 1 },

  { name: "Anchorage", state: "Alaska", country: "USA", coordinates: [-149.9003, 61.2181], tier: 1 },

  { name: "Seattle", state: "Washington", country: "USA", coordinates: [-122.3321, 47.6062], tier: 1 },

  { name: "Boston", state: "Massachusetts", country: "USA", coordinates: [-71.0589, 42.3601], tier: 1 },

  { name: "Washington DC", state: "District of Columbia", country: "USA", coordinates: [-77.0369, 38.9072], tier: 1 },

  { name: "San Diego", state: "California", country: "USA", coordinates: [-117.1611, 32.7157], tier: 1 },

  { name: "New Orleans", state: "Louisiana", country: "USA", coordinates: [-90.0715, 29.9511], tier: 1 },

  { name: "Havana", state: "Havana", country: "Cuba", coordinates: [-82.3666, 23.1136], tier: 1 },

  { name: "Panama City", state: "Panama", country: "Panama", coordinates: [-79.5199, 8.9824], tier: 1 },

  { name: "San Jose", state: "San Jose", country: "Costa Rica", coordinates: [-84.0907, 9.9281], tier: 1 },

  { name: "Guatemala City", state: "Guatemala", country: "Guatemala", coordinates: [-90.5069, 14.6349], tier: 1 },

  { name: "Cusco", state: "Cusco", country: "Peru", coordinates: [-71.9675, -13.5319], tier: 1 },

  { name: "Medellin", state: "Antioquia", country: "Colombia", coordinates: [-75.5636, 6.2518], tier: 1 },

  { name: "Salvador", state: "Bahia", country: "Brazil", coordinates: [-38.5016, -12.9777], tier: 1 },

  { name: "Recife", state: "Pernambuco", country: "Brazil", coordinates: [-34.8770, -8.0476], tier: 1 },
  { name: "Samarkand", state: "Samarkand", country: "Uzbekistan", coordinates: [66.9597, 39.6542], tier: 1 },
  { name: "Bukhara", state: "Bukhara", country: "Uzbekistan", coordinates: [64.4207, 39.7681], tier: 1 },

  { name: "Ashgabat", state: "Ashgabat", country: "Turkmenistan", coordinates: [58.3833, 37.9601], tier: 1 },

  { name: "Kigali", state: "Kigali", country: "Rwanda", coordinates: [30.0619, -1.9441], tier: 1 },

  { name: "Maputo", state: "Maputo", country: "Mozambique", coordinates: [32.5732, -25.9692], tier: 1 },

  { name: "Lusaka", state: "Lusaka", country: "Zambia", coordinates: [28.3228, -15.3875], tier: 1 },

  { name: "Windhoek", state: "Khomas", country: "Namibia", coordinates: [17.0832, -22.5609], tier: 1 },

  { name: "Antananarivo", state: "Analamanga", country: "Madagascar", coordinates: [47.5079, -18.8792], tier: 1 },

  { name: "Arequipa", state: "Arequipa", country: "Peru", coordinates: [-71.5375, -16.4090], tier: 1 },

  { name: "Valparaiso", state: "Valparaiso", country: "Chile", coordinates: [-71.6127, -33.0472], tier: 1 },

  { name: "Punta Arenas", state: "Magallanes", country: "Chile", coordinates: [-70.9171, -53.1638], tier: 1 },

  { name: "Ushuaia", state: "Tierra del Fuego", country: "Argentina", coordinates: [-68.3030, -54.8019], tier: 1 },

  { name: "La Serena", state: "Coquimbo", country: "Chile", coordinates: [-71.2542, -29.9027], tier: 1 },

  { name: "Fes", state: "Fes-Meknes", country: "Morocco", coordinates: [-5.0033, 34.0181], tier: 1 },

  { name: "Essaouira", state: "Marrakech-Safi", country: "Morocco", coordinates: [-9.7595, 31.5085], tier: 1 },

  { name: "Chefchaouen", state: "Tanger-Tetouan", country: "Morocco", coordinates: [-5.2697, 35.1688], tier: 1 },

  { name: "Muscat", state: "Muscat", country: "Oman", coordinates: [58.4059, 23.5880], tier: 1 },

  { name: "Salalah", state: "Dhofar", country: "Oman", coordinates: [54.0924, 17.0194], tier: 1 },

  { name: "Bishkek", state: "Bishkek", country: "Kyrgyzstan", coordinates: [74.5698, 42.8746], tier: 1 },

  { name: "Al Ula", state: "Medina", country: "Saudi Arabia", coordinates: [37.9172, 26.6084], tier: 1 },

  { name: "Luang Prabang", state: "Luang Prabang", country: "Laos", coordinates: [102.1347, 19.8833], tier: 1 },

  { name: "Vientiane", state: "Vientiane", country: "Laos", coordinates: [102.6331, 17.9757], tier: 1 },

  { name: "Penang", state: "Penang", country: "Malaysia", coordinates: [100.3327, 5.4164], tier: 1 },

  { name: "Malacca", state: "Malacca", country: "Malaysia", coordinates: [102.2501, 2.1896], tier: 1 },

  { name: "Davao", state: "Davao", country: "Philippines", coordinates: [125.4553, 7.1907], tier: 1 },

  { name: "Jeju", state: "Jeju", country: "South Korea", coordinates: [126.5312, 33.4996], tier: 1 },

  { name: "Harbin", state: "Heilongjiang", country: "China", coordinates: [126.6424, 45.7560], tier: 1 },

  { name: "Lhasa", state: "Tibet", country: "China", coordinates: [91.1322, 29.6595], tier: 1 },

  { name: "Innsbruck", state: "Tyrol", country: "Austria", coordinates: [11.4041, 47.2692], tier: 1 },

  { name: "Salzburg", state: "Salzburg", country: "Austria", coordinates: [13.0550, 47.8095], tier: 1 }


];

export default tier1Cities;