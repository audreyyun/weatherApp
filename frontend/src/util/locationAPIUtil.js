import axios from 'axios';

const OPENWEATHER_API_KEY = process.env.REACT_APP_WEATHER_API_KEY;

export const fetchLocation = ( lat, lon ) => {
    return axios.get(`http://api.openweathermap.org/geo/1.0/reverse?lat=${lat}&lon=${lon}&limit=1&appid=${OPENWEATHER_API_KEY}`);
};