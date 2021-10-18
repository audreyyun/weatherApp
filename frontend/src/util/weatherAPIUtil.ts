import axios from 'axios';

export const fetchWeather = (city: any) => {
    return axios.get(`/api/weather/?city=${city}`);
};