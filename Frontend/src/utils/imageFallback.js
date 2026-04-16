const hashStringToInt = (value = "") => {
  return value.split("").reduce((acc, ch) => acc + ch.charCodeAt(0), 0);
};

const getRandomCityImageUrl = (cityName = "travel", seedValue = "") => {
  // Return null to trigger the localized blank placeholder card in UI components
  return null;
};

const getAllImagesFromTrip = (trip) => {
    if (!trip || !Array.isArray(trip.days)) return [];
    
    const allImages = [];
    for (const day of trip.days) {
        if (!Array.isArray(day?.activities)) continue;
        for (const activity of day.activities) {
            if (Array.isArray(activity?.photos)) {
                activity.photos.forEach(photo => {
                    if (photo && !allImages.includes(photo)) {
                        allImages.push(photo);
                    }
                });
            }
        }
    }
    return allImages;
};

export { hashStringToInt, getRandomCityImageUrl, getAllImagesFromTrip };