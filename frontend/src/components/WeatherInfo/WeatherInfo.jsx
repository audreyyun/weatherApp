import React, { useEffect, useState } from 'react';
// import React from 'react';
// import { useWeather } from './hooks/useWeather'
import {fetchWeather} from '../../util/weatherAPIUtil';

// const WeatherInfo = ({ zip, country, scale }) => {
//     console.log("I am in WEATHERINFO")
//     const size = `${scale * 2}x`;
//     // const weatherData = useWeather(zip, country)
//     const weatherData = fetchWeather(zip, country);
//     const {
//         icon,
//         temperature,
//         title,
//         description,
//         city
//     } = weatherData;
//     console.log("this is my weatherdata",weatherData.weatherData)
//     const iconSrc = `http://openweathermap.org/img/wn/${icon}@${size}.png`;

//     return (
//         <>
//             <p>{city}</p>
//             <img src={iconSrc} alt="weather icon" />
//             <p>{title}</p>
//             <p>{temperature?.fahrenheit}</p>
//             <p>{description}</p>
//         </>
//     )
// }

export const convertTemperature = k => {
    const fahrenheit = 1.8 * (k - 273) + 32
    const celsius = k - 273
    return {
        fahrenheit,
        celsius
    }
}

// const WeatherInfo = ( weather ) => { 
const WeatherInfo = ({ weather }) => { 
    // const [weatherData, setWeatherData] = useState({});
    const currentWeather = weather;
    const temperatures = weather ? weather.main: '';
    const weatherData = weather.weather ? weather.weather[0] : '';
    console.log("i am current Weather", currentWeather)
    console.log("i am in weather info",weatherData)
    // WeatherData({
    //     // icon: weather?.icon,
    //     title: weather?.main,
    //     description: weather?.description,
    //     temperature: convertTemperature(weather?.main?.temp),
    //     // city: weather.name
    // })
    // const {
    //     icon, 
    //     description,
    //     main
    // } = weatherData
    // const name = currentWeather.name;
    // const { 
    //     temp,
    //     feels_like,
    //     temp_min,
    //     temp_max
    // } = temperatures;

    const testingWeatherObject = { 
        icon: weatherData.icon,
        description: weatherData.description,
        main: weatherData.main,
        city: weather.name,
        // currentTemp: temperatures.temp,
        // feels_like: temperatures.feels_like,
        // minTemp: temperatures.temp_min,
        // maxTemp: temperatures.temp_max
    }

    const iconSrc = `http://openweathermap.org/img/wn/${testingWeatherObject.icon}@4x.png`;
    // console.log("this is the city", name)
    // console.log("i am in weather info",main)
    return (
        <>
            <p>{testingWeatherObject.city}</p>
            <img src={iconSrc} alt="weather icon" />
            {/* <p>{temp}</p>
            <p>{temp_min}</p>
            <p>{temp_max}</p> */}
        </>
    )

}

export default WeatherInfo;