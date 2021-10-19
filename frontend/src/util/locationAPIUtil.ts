import axios from 'axios';

// const OPENWEATHER_API_KEY = process.env.REACT_APP_WEATHER_API_KEY;

export const fetchLocation = ( lat: number, lon: number ) => {
    console.log("i am in fetchLocation")
    return axios.get(`/api/location/?lat=${lat}&lon=${lon}`);
};