import axios from 'axios';

// const OPENWEATHER_API_KEY = process.env.REACT_APP_WEATHER_API_KEY;

export const fetchLocation = ( {lat, lon} ) => {
    // return axios.get(`http://api.openweathermap.org/geo/1.0/reverse?lat=${lat}&lon=${lon}&limit=1&appid=0f2d288cb9bb3772fb2649a8e9613bd0`);
    return axios.get(`/api/weather/?lat=${lat}&lon=${lon}`);
    // return axios.get(`http://api.openweathermap.org/geo/1.0/reverse?lat=${lat}&lon=${lon}&limit=1&appid=${OPENWEATHER_API_KEY}`);
};