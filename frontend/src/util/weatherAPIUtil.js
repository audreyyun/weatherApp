import axios from 'axios';

export const fetchWeather = (city) => {
    return axios.get(`/api/weather/?city=${city}`);
};