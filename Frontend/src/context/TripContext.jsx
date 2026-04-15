import { createContext, useContext, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { getRandomCityImageUrl } from "../utils/imageFallback.js";

export const TripContext = createContext();

const BASE_URL = "https://plan-pilot-66o6.vercel.app";

const getFirstPlaceImageFromTrip = (trip) => {
    if (!Array.isArray(trip?.days)) return null;

    for (const day of trip.days) {
        if (!Array.isArray(day?.activities)) continue;
        for (const activity of day.activities) {
            if (Array.isArray(activity?.photos) && activity.photos.length > 0) {
                return activity.photos[0];
            }
        }
    }

    return null;
};

const TripContextProvider = (props) => {
    const [allCities, setAllCities] = useState([]);
    const [userTrips, setUserTrips] = useState([]);
    const [allTrips, setAllTrips] = useState([]);
    const [user, setUser] = useState({});

    const getAuthToken = () => localStorage.getItem("planpilot_token");

    const register = async (name, email, password) => {
        try {
            const response = await axios.post(`${BASE_URL}/api/user/register`, { name, email, password })
            if (response.data.token) {
                localStorage.setItem("planpilot_token", response.data.token)
            }
        } catch (error) {
            console.log(error);
        }
    }

    const login = async (email, password) => {
        try {
            const response = await axios.post(`${BASE_URL}/api/user/login`, { email, password })
            if (response.data.token) {
                localStorage.setItem("planpilot_token", response.data.token)
            }
            return response;
        } catch (error) {
            console.log(error);
            return error;
        }
    }

    const getAllCities = async () => {
        try {
            const response = await axios.get(`${BASE_URL}/api/cities/all`);
            setAllCities(response.data.cities);
        } catch (error) {
            console.log(error);
        }
    }

    const generateTrip = async (data) => {
        try {
            const token = getAuthToken();
            if (!token) {
                return null;
            }

            const { destination, mood, budget, companions, startDate, endDate, extraNotes, categories } = data;

            const response = await axios.post(`${BASE_URL}/api/trips/generate`, {
                destination,
                mood,
                budget,
                companions,
                startDate,
                endDate,
                extraNotes,
                categories
            }, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            })
            console.log("response: ",response);
            return response.data;
        } catch (err) {
            console.log(err);
            return null;
        }
    }

    const getTripById = async(id) => {
        try {
            const response = await axios.get(`${BASE_URL}/api/trips/${id}`);
            return response.data;
        } catch (err) {
            console.log(err);
            return null;
        }
    }

     const getCityById = async (id, name) => {
        try {
            const cityIdPath = id ? `/${id}` : "";
            const response = await axios.get(`${BASE_URL}/api/cities/getCityById${cityIdPath}`, {
                params: { name },
            });
            return response.data;
        } catch (error) {
            if (error?.response?.status !== 404) {
                console.log(error);
            }
            return null;
        }
    }

    const getMyTrips = async () => {
        try {
            const token = getAuthToken();
            if(!token){
                setUserTrips([]);
                return null;
            }
            const response = await axios.get(`${BASE_URL}/api/user/me/trips`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });

            const trips = Array.isArray(response.data) ? response.data : [];
            const enrichedTrips = await Promise.all(
                trips.map(async (trip) => {
                    const cityName = trip?.cities?.[0]?.city || trip?.destination || "";
                    const city = cityName ? await getCityById(null, cityName) : null;
                    const firstPlaceImage = getFirstPlaceImageFromTrip(trip);
                    const image = trip?.image || firstPlaceImage || getRandomCityImageUrl(cityName, trip?._id);

                    return {
                        ...trip,
                        city,
                        image,
                    };
                })
            );
           //console.log(enrichedTrips);
            setUserTrips(enrichedTrips);
            
        } catch (err) {
            console.error("Error fetching trips:", err);
        }
    }

    const getAllTrips = async () => {
       try {

        const response = await axios.get(`${BASE_URL}/api/trips/getAllTrip`)
        console.log(response);
        const trips = Array.isArray(response.data) ? response.data : [];
        const enrichedTrips = await Promise.all(
            trips.map(async (trip) => {
                const cityName = trip?.cities?.[0]?.city || trip?.destination || "";
                const city = cityName ? await getCityById(null, cityName) : null;
                const firstPlaceImage = getFirstPlaceImageFromTrip(trip);
                const image = trip?.coverImage || trip?.image || firstPlaceImage || (city?.imageUrl) || getRandomCityImageUrl(cityName, trip?._id);

                return {
                    ...trip,
                    city,
                    image,
                };
            })
        );
        setAllTrips(enrichedTrips);
        
       } catch (error) {
        console.log(error)
       }
    }

    const getUser = async () => {
        try {
            const token = getAuthToken();
            if(!token){
                return null;
            }
            const response = await axios.get(`${BASE_URL}/api/user/me`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            setUser(response.data);
        } catch (err) {
            console.log(err);
            return null;
        }
    }

    const updateUser = async (data) => {
        try {
            const token = getAuthToken();
            if(!token){
                return null;
            }
            const response = await axios.put(`${BASE_URL}/api/user/me`, data, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            setUser(response.data);
        } catch (err) {
            console.log(err);
            return null;
        }
    }

    const deleteUser = async () => {
        try {
            const token = getAuthToken();
            if(!token){
                return null;
            }
            const response = await axios.delete(`${BASE_URL}/api/user/me`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            setUser({});
        } catch (err) {
            console.log(err);
            return null;
        }
    }

    useEffect(() => {
        getAllCities();
        getAllTrips();
        getMyTrips();
        getUser();
   
    }, []);

    const value = {
        register,
        login,
        getAllCities,
        allCities,
        generateTrip,
        getTripById,
        getMyTrips,
        userTrips,
        getCityById,
        getAllTrips,
        allTrips,
        user,
        getUser,
        updateUser,
        deleteUser
    }

    return (
        <TripContext.Provider value={value}>
            {props.children}
        </TripContext.Provider>
    )
}

export default TripContextProvider;