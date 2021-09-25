import React from 'react';

const WeatherInfo = ({ weather }) => { 
    const currentWeather = weather;
    const temperatures = weather ? weather.main: '';
    const weatherData = weather.weather ? weather.weather[0] : '';

    const convertTemperature = k => {
        const fahrenheit = (1.8 * (k - 273) + 32).toFixed(2);
        const celsius = (k - 273).toFixed(2);

        return {
            fahrenheit,
            celsius
        };
    };

    const testingWeatherObject = { 
        icon: weatherData.icon,
        description: weatherData.description,
        main: weatherData.main,
        city: weather.name,
        currentTemp: convertTemperature(temperatures?.temp).fahrenheit,
        feels_like: convertTemperature(temperatures?.feels_like).fahrenheit,
        minTemp: convertTemperature(temperatures?.temp_min).fahrenheit,
        maxTemp: convertTemperature(temperatures?.temp_max).fahrenheit
    };

    const iconSrc = `http://openweathermap.org/img/wn/${testingWeatherObject.icon}@4x.png`;

    if (!weatherData) { 
        return (
            <>
                <div className="no-weather-info">Please enter a zip code and choose a country to see today's weather!</div>
            </>
        )
    } else { 
        return (
            <div className="weather-info-container">
                <div className="weather-info">
                    <h1 className="weather-info-city">{testingWeatherObject.city}</h1>
                    <h3>{testingWeatherObject.description}</h3>
                    <img src={iconSrc} alt="weather icon" />
                    <p>Current Temperature: {testingWeatherObject.currentTemp} °F</p>
                    <br />
                    <p>Feels Like: {testingWeatherObject.feels_like} °F</p>
                    <p>Min Temperature: {testingWeatherObject.minTemp} °F</p>
                    <p>Max Temperature: {testingWeatherObject.maxTemp} °F</p>
                </div>
            </div>
        )
    };
};

export default WeatherInfo;