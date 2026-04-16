// config/tier1Cities.js
// 30 most popular travel destinations in India.
// Pre-populated before launch using seed script.
// coordinates format: [longitude, latitude] — GeoJSON standard
// Used by: seed/seedCities.js and cities.controller.js

const tier1Cities = [
  { name: "Lisbon", state: "Lisbon", country: "Portugal", coordinates: [-9.1393, 38.7223], tier: 1 },
  { name: "Porto", state: "Porto", country: "Portugal", coordinates: [-8.6291, 41.1579], tier: 1 },
  { name: "Dublin", state: "Leinster", country: "Ireland", coordinates: [-6.2603, 53.3498], tier: 1 },
  { name: "Copenhagen", state: "Capital Region", country: "Denmark", coordinates: [12.5683, 55.6761], tier: 1 },
  { name: "Stockholm", state: "Stockholm", country: "Sweden", coordinates: [18.0686, 59.3293], tier: 1 },
  { name: "Oslo", state: "Oslo", country: "Norway", coordinates: [10.7522, 59.9139], tier: 1 },
  { name: "Helsinki", state: "Uusimaa", country: "Finland", coordinates: [24.9384, 60.1699], tier: 1 },
  { name: "Reykjavik", state: "Capital Region", country: "Iceland", coordinates: [-21.8174, 64.1265], tier: 1 },
  // ho gaya
  // { name: "Zurich", state: "Zurich", country: "Switzerland", coordinates: [8.5417, 47.3769], tier: 1 },
  //{ name: "Geneva", state: "Geneva", country: "Switzerland", coordinates: [6.1432, 46.2044], tier: 1 },
  //{ name: "Brussels", state: "Brussels", country: "Belgium", coordinates: [4.3517, 50.8503], tier: 1 },
  // { name: "Edinburgh", state: "Scotland", country: "United Kingdom", coordinates: [-3.1883, 55.9533], tier: 1 },
   // yaha se
  //{ name: "Athens", state: "Attica", country: "Greece", coordinates: [23.7275, 37.9838], tier: 1 },
  //{ name: "Santorini", state: "South Aegean", country: "Greece", coordinates: [25.4615, 36.3932], tier: 1 },
  //{ name: "Mykonos", state: "South Aegean", country: "Greece", coordinates: [25.3289, 37.4467], tier: 1 },

  //{ name: "Cairo", state: "Cairo", country: "Egypt", coordinates: [31.2357, 30.0444], tier: 1 },
  //{ name: "Marrakech", state: "Marrakech-Safi", country: "Morocco", coordinates: [-7.9811, 31.6295], tier: 1 },
  { name: "Cancun", state: "Quintana Roo", country: "Mexico", coordinates: [-86.8515, 21.1619], tier: 1 },
  { name: "Mexico City", state: "CDMX", country: "Mexico", coordinates: [-99.1332, 19.4326], tier: 1 },

  { name: "Orlando", state: "Florida", country: "USA", coordinates: [-81.3792, 28.5383], tier: 1 },
  { name: "Miami", state: "Florida", country: "USA", coordinates: [-80.1918, 25.7617], tier: 1 },
  { name: "Chicago", state: "Illinois", country: "USA", coordinates: [-87.6298, 41.8781], tier: 1 },

  // { name: "Beijing", state: "Beijing", country: "China", coordinates: [116.4074, 39.9042], tier: 1 },
  // { name: "Shanghai", state: "Shanghai", country: "China", coordinates: [121.4737, 31.2304], tier: 1 },

   { name: "Bali", state: "Bali", country: "Indonesia", coordinates: [115.1889, -8.4095], tier: 1 },
   { name: "Jakarta", state: "Jakarta", country: "Indonesia", coordinates: [106.8456, -6.2088], tier: 1 },

   { name: "Manila", state: "Metro Manila", country: "Philippines", coordinates: [120.9842, 14.5995], tier: 1 },
   { name: "Ho Chi Minh City", state: "Ho Chi Minh", country: "Vietnam", coordinates: [106.6297, 10.8231], tier: 1 },
   { name: "Hanoi", state: "Hanoi", country: "Vietnam", coordinates: [105.8342, 21.0278], tier: 1 },
  { name: "Macau", state: "Macau", country: "China", coordinates: [113.5439, 22.1987], tier: 1 },
   { name: "Mecca", state: "Makkah", country: "Saudi Arabia", coordinates: [39.8579, 21.3891], tier: 1 },
   { name: "Antalya", state: "Antalya", country: "Turkey", coordinates: [30.7133, 36.8969], tier: 1 },

  { name: "Jerusalem", state: "Jerusalem", country: "Israel", coordinates: [35.2137, 31.7683], tier: 1 },
  { name: "Doha", state: "Doha", country: "Qatar", coordinates: [51.5310, 25.2854], tier: 1 },
  { name: "Sydney", state: "New South Wales", country: "Australia", coordinates: [151.2093, -33.8688], tier: 1 },
  { name: "Los Angeles", state: "California", country: "USA", coordinates: [-118.2437, 34.0522], tier: 1 },
  { name: "San Francisco", state: "California", country: "USA", coordinates: [-122.4194, 37.7749], tier: 1 },
  { name: "Las Vegas", state: "Nevada", country: "USA", coordinates: [-115.1398, 36.1699], tier: 1 },
  { name: "Istanbul", state: "Istanbul", country: "Turkey", coordinates: [28.9784, 41.0082], tier: 1 },
  { name: "Kuala Lumpur", state: "Kuala Lumpur", country: "Malaysia", coordinates: [101.6869, 3.1390], tier: 1 },
  { name: "Hong Kong", state: "Hong Kong", country: "China", coordinates: [114.1694, 22.3193], tier: 1 },
  // yaha tak
  
  // yaha se
  { name: "Prague", state: "Prague", country: "Czech Republic", coordinates: [14.4378, 50.0755], tier: 1 },
  { name: "Vienna", state: "Vienna", country: "Austria", coordinates: [16.3738, 48.2082], tier: 1 },
  { name: "Budapest", state: "Budapest", country: "Hungary", coordinates: [19.0402, 47.4979], tier: 1 },
  { name: "Berlin", state: "Berlin", country: "Germany", coordinates: [13.4050, 52.5200], tier: 1 },
  { name: "Madrid", state: "Madrid", country: "Spain", coordinates: [-3.7038, 40.4168], tier: 1 },
  { name: "Florence", state: "Tuscany", country: "Italy", coordinates: [11.2558, 43.7696], tier: 1 },
  { name: "Venice", state: "Veneto", country: "Italy", coordinates: [12.3155, 45.4408], tier: 1 },
  //yahi tak
  { name: "Cape Town", state: "Western Cape", country: "South Africa", coordinates: [18.4241, -33.9249], tier: 1 },
  { name: "Rio de Janeiro", state: "Rio de Janeiro", country: "Brazil", coordinates: [-43.1729, -22.9068], tier: 1 },
  { name: "Toronto", state: "Ontario", country: "Canada", coordinates: [-79.3832, 43.6532], tier: 1 },

  { name: "Vancouver", state: "British Columbia", country: "Canada", coordinates: [-123.1207, 49.2827], tier: 1 },

  { name: "Seoul", state: "Seoul", country: "South Korea", coordinates: [126.9780, 37.5665], tier: 1 },
  { name: "Kyoto", state: "Kyoto", country: "Japan", coordinates: [135.7681, 35.0116], tier: 1 },
  { name: "Phuket", state: "Phuket", country: "Thailand", coordinates: [98.3381, 7.8804], tier: 1 },
  { name: "Pattaya", state: "Chonburi", country: "Thailand", coordinates: [100.8825, 12.9236], tier: 1 },
  { name: "New York", state: "New York", country: "USA", coordinates: [-74.0060, 40.7128], tier: 1 },
  { name: "London", state: "England", country: "United Kingdom", coordinates: [-0.1276, 51.5074], tier: 1 },
  { name: "Paris", state: "Île-de-France", country: "France", coordinates: [2.3522, 48.8566], tier: 1 },
  { name: "Tokyo", state: "Tokyo", country: "Japan", coordinates: [139.6917, 35.6895], tier: 1 },
  { name: "Dubai", state: "Dubai", country: "UAE", coordinates: [55.2708, 25.2048], tier: 1 },
  { name: "Singapore", state: "Singapore", country: "Singapore", coordinates: [103.8198, 1.3521], tier: 1 },
  { name: "Barcelona", state: "Catalonia", country: "Spain", coordinates: [2.1734, 41.3851], tier: 1 },
  { name: "Amsterdam", state: "North Holland", country: "Netherlands", coordinates: [4.9041, 52.3676], tier: 1 },
  { name: "Rome", state: "Lazio", country: "Italy", coordinates: [12.4964, 41.9028], tier: 1 },
  { name: "Bangkok", state: "Bangkok", country: "Thailand", coordinates: [100.5018, 13.7563], tier: 1 },
  //  { name: "Delhi", state: "Delhi", country: "India", coordinates: [77.2090, 28.6139], tier: 1 },
  //  { name: "Mumbai", state: "Maharashtra", country: "India", coordinates: [72.8777, 19.0760], tier: 1 },
  //  { name: "Bangalore", state: "Karnataka", country: "India", coordinates: [77.5946, 12.9716], tier: 1 },
  //  { name: "Hyderabad", state: "Telangana", country: "India", coordinates: [78.4867, 17.3850], tier: 1 },
  //  { name: "Chennai", state: "Tamil Nadu", country: "India", coordinates: [80.2707, 13.0827], tier: 1 },
  //  { name: "Kolkata", state: "West Bengal", country: "India", coordinates: [88.3639, 22.5726], tier: 1 },

];

export default tier1Cities;