import axios from 'axios';

export const fetchWeather = (city: string) => {
    return axios.get(`/api/weather/?city=${city}`);
};