import React from 'react';
import Input from '../input/Input'
import WeatherInfo from '../WeatherInfo/WeatherInfo'

// const Weather = ({ weather, zip, country, fetchWeather }) => { 
const Weather = ({ weather, zip, country, fetchWeather }) => { 
    // const [zip, setZip] = useState('');
    // const [country, setCountry] = useState('');
    // const currentWeather = weather.weather[0]
    // console.log("i am in weather", weather.weather[0])
    return (
        <div>
            {/* <Input setZip={setZip} setCountry={setCountry} fetchWeather={fetchWeather}/> */}
            <Input fetchWeather={fetchWeather}/>
            {/* <WeatherInfo zip={zip} country={country}/> */}
            <WeatherInfo weather={weather} />
            {/* <WeatherInfo weather={currentWeather} /> */}
            {/* <WeatherInfo weather={weather?.weather[0]} /> */}
        </div>
    );

}

export default Weather;