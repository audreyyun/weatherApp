import { fetchWeather as fetchWeatherAPI } from '../util/weatherAPIUtil';

export const RECEIVE_WEATHER = "RECEIVE_WEATHER";
export const RECEIVE_WEATHER_ERROR = "RECEIVE_WEATHER_ERROR";

export const receiveWeather = (weather: any) => ({
    type: RECEIVE_WEATHER,
    weather,
});

export const receiveWeatherError = (error: any) => ({
    type: RECEIVE_WEATHER_ERROR,
    error,
});

export const fetchWeather = (city: any) => (dispatch: (arg0: { type: string; weather?: any; error?: any; }) => void) => {

    return (
    fetchWeatherAPI(city)
        .then(weather => {
            dispatch(receiveWeather(weather.data));
        })
        .catch(err => dispatch(receiveWeatherError(err)))
)};
