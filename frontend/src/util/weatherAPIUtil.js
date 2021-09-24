import axios from 'axios';
require('dotenv').config();


export const fetchWeather = ( city ) => {
    console.log('i am in api util', city)
    // return axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=0f2d288cb9bb3772fb2649a8e9613bd0`);
    return axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=baeef0ae13dcfa68bd3f89b31dcd9eb5`);
};