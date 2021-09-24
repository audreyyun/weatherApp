
import { fetchWeather as fetchWeatherAPI } from '../util/weatherAPIUtil';


export const RECEIVE_WEATHER = "RECEIVE_WEATHER";
export const RECEIVE_WEATHER_ERROR = "RECEIVE_WEATHER_ERROR";

export const receiveWeather = weather => ({
    type: RECEIVE_WEATHER,
    weather,
});

export const receiveWeatherError = error => ({
    type: RECEIVE_WEATHER_ERROR,
    error,
})

export const fetchWeather = (city) => dispatch => {
    console.log("im here in actions");
    console.log("im here in actions, city",city);
    // console.log("im here in actions,country", country);
    return (
    fetchWeatherAPI(city)
        .then(weather => {
            console.log("this is weather", weather)
            dispatch(receiveWeather(weather.data));
            // dispatch(receiveWeather(weather));
        })
        .catch(err => dispatch(receiveWeatherError(err)))
)};


// export const fetchWeather = (zip, country) => dispatch => {
//     console.log("im here in actions");
//     console.log("im here in actions, zip",zip);
//     console.log("im here in actions,country", country);
//     return (
//     fetchWeatherAPI(String(zip), String(country))
//         .then(weather => {
//             console.log("this is weather", weather)
//             dispatch(receiveWeather(weather.data));
//             // dispatch(receiveWeather(weather));
//         })
//         .catch(err => dispatch(receiveWeatherError(err)))
// )};