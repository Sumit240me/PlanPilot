const hashStringToInt = (value = "") => {
  return value.split("").reduce((acc, ch) => acc + ch.charCodeAt(0), 0);
};

const getRandomCityImageUrl = (cityName = "travel", seedValue = "") => {
  // Return null to trigger the localized blank placeholder card in UI components
  return null;
};

export { hashStringToInt, getRandomCityImageUrl };