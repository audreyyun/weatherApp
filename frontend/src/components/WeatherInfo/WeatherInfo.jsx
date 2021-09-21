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
    const fahrenheit = (1.8 * (k - 273) + 32).toFixed(2);
    const celsius = (k - 273).toFixed(2);

    return {
        fahrenheit,
        celsius
    }
};

const WeatherInfo = ({ weather }) => { 

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
        currentTemp: convertTemperature(temperatures?.temp).fahrenheit,
        // feels_like: temperatures.feels_like,
        minTemp: convertTemperature(temperatures?.temp_min).fahrenheit,
        maxTemp: convertTemperature(temperatures?.temp_max).fahrenheit
    };

    const iconSrc = `http://openweathermap.org/img/wn/${testingWeatherObject.icon}@4x.png`;

    if (!weatherData) { 
        return (
            <>
                <div>Please enter a zip code and choose a country to receive information on today's weather!</div>
            </>
        )
    } else { 
        return (
            <div className="weather-info-container">
                <div className="weather-info">
                    <h1 className="weather-info-city">{testingWeatherObject.city}</h1>
                    <h3>{testingWeatherObject.description}</h3>
                    <img src={iconSrc} alt="weather icon" />
                    <p>Current Temperature: {testingWeatherObject.currentTemp}</p>
                    <p>Min Temperature: {testingWeatherObject.minTemp}</p>
                    <p>Max Temperature: {testingWeatherObject.maxTemp}</p>
                </div>
            </div>
        )
    };
};

export default WeatherInfo;