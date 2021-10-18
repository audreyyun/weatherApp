import React from 'react'; 
import styles from './WeatherInfo.module.scss';

type Props = { 
    weather: {
        main: any;
        weather: any;
        name: String;
    }
}

const WeatherInfo = ({ weather } : Props) => { 
    const temperatures = weather ? weather.main: '';
    const weatherData = weather?.weather ? weather.weather[0] : '';

    const convertTemperature = (k: number) => {
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
        city: weather?.name,
        currentTemp: convertTemperature(temperatures?.temp).fahrenheit,
        feels_like: convertTemperature(temperatures?.feels_like).fahrenheit,
        minTemp: convertTemperature(temperatures?.temp_min).fahrenheit,
        maxTemp: convertTemperature(temperatures?.temp_max).fahrenheit
    };

    const iconSrc = `http://openweathermap.org/img/wn/${testingWeatherObject.icon}@4x.png`;

    if (!weatherData) { 
        return (
            <>
                <div className="no-weather-info">Please enter a city to see today's weather!</div>
            </>
        )
    } else { 
        return (
            <div className={styles.weatherInfoContainer}>
                <div className={styles.weatherInfo}>
                    <h1 className={styles.weatherInfoCity}>{testingWeatherObject.city}</h1>
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