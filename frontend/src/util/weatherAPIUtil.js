import axios from 'axios';

const OPENWEATHER_API_KEY = process.env.REACT_APP_WEATHER_API_KEY;

export const fetchWeather = city => {
    return axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${OPENWEATHER_API_KEY}`);
};