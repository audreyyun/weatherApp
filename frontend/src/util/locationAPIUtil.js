import axios from 'axios';

export const fetchLocation = ( lat, lon ) => {
    console.log('i am in api util', lat)
    // return axios.get(`http://api.openweathermap.org/geo/1.0/reverse?lat=${lat}&lon=${lon}&limit=1&appid=0f2d288cb9bb3772fb2649a8e9613bd0`);
    return axios.get(`http://api.openweathermap.org/geo/1.0/reverse?lat=${lat}&lon=${lon}&limit=1&appid=baeef0ae13dcfa68bd3f89b31dcd9eb5`)
};