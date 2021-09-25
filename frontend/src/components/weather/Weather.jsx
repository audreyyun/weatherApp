import React from 'react';
import LocationForm from '../locationForm/LocationForm'
import WeatherInfo from '../WeatherInfo/WeatherInfo'

const Weather = ({ weather, fetchWeather }) => { 
    return (
        <div className="weather-page-container">
            <h1 className="app-title">Audrey's Weather App</h1>
            
            <LocationForm fetchWeather={fetchWeather}/>
            <WeatherInfo weather={weather} />
        </div>
    );
};

export default Weather;