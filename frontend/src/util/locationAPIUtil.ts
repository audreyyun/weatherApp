import axios from 'axios';

// const OPENWEATHER_API_KEY = process.env.REACT_APP_WEATHER_API_KEY;

export const fetchLocation = ( lat: number, lon: number ) => {
    return axios.get(`/api/location/?lat=${lat}&lon=${lon}`);
};