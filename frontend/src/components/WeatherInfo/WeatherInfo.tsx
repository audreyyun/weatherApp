import React from 'react'; 
import styles from './WeatherInfo.module.scss';

type Props = { 
    weather: {
        // main: any;
        data: { 
            base: string;
            clouds: {
                all: number
            };
            cod: number;
            coord: {
                lon: number;
                lat: number;
            };
            dt: number;
            id: number;
            main: {
                temp: number;
                feels_like: number;
                temp_min: number;
                temp_max: number;
                pressure: number
            };
            name: string;
            sys: {
                type: number;
                id: number;
                country: string;
                sunrise: number;
                sunset: number;
            };
            timezone: number;
            visibility: number;
            weather: CurrentWeather[]; //notes it will be an array of type WeatherType objects
            wind: {
                deg: number;
                speed: number
            }
        }
    }
}

type CurrentWeather = { 
    icon: string | null;
    description: string | null;
    main: string | null;
}

const WeatherInfo = ({ weather } : Props) => { 
    console.log("this is weatherinfo", weather)
    const { data } = weather
    // const temperatures = weather ? weather.data?.main: '';
    // const weatherData = weather?.data ? weather.data.weather[0] : '';
    const temperatures = data?.main;
    const weatherData = data?.weather[0];
    const convertTemperature = (k: number) => {
        const fahrenheit = (1.8 * (k - 273) + 32).toFixed(2);
        const celsius = (k - 273).toFixed(2);

        return {
            fahrenheit,
            celsius
        };
    };
    const testingWeatherObject = { 
        icon: weatherData?.icon,
        description: weatherData?.description,
        main: weatherData?.main,
        city: data?.name,
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