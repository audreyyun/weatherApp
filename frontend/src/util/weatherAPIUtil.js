import axios from 'axios';
require('dotenv').config();

// const WEATHER_API_KEY = process.env.OPEN_WEATHER_MAP_API_KEY;

export const fetchWeather = ( city ) => {
    console.log('i am in api util', city)
    return axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=0f2d288cb9bb3772fb2649a8e9613bd0`);
};