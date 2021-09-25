import axios from 'axios';

export const fetchLocation = ( lat, lon ) => {
    // console.log('i am in api util', lat)
    return axios.get(`http://api.openweathermap.org/geo/1.0/reverse?lat=${lat}&lon=${lon}&limit=1&appid=0f2d288cb9bb3772fb2649a8e9613bd0`);
};