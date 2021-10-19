import React, { useCallback, useEffect, useState } from 'react';
import classNames from 'classnames';
import useLocation from '../../hooks/useLocation';
import { fetchWeather } from '../../util/weatherAPIUtil';
import WeatherInfo from '../WeatherInfo/WeatherInfo';
import styles from './LocationForm.module.scss'

const geolocationOptions = {
    timeout: 1000 * 60 * 1
};

// type Props = {
//     fetchWeather: Function
// }

const LocationForm = () => {
    const [city, setCity] = useState<any>('');
    //decide where/when to render error for geolocation 
    // const response = useLocation(geolocationOptions);
    const { location, error } = useLocation(geolocationOptions);
    const [weatherResponse, setWeatherResponse] = useState<any>({});

    // console.log("my location is", response)
    // console.log("my location is", location)

    const handleCityChange = (e: any) => {
        setCity(e.target.value)
    };

    const handleFetchWeather = useCallback( async (location) => { 
        fetchWeather(location)
            .then(weather => {
                setWeatherResponse(weather)
            })
            // .catch(err => dispatch(receiveWeatherError(err)))
    },[]);
    
    useEffect(() => {
            console.log(location)
            setCity(location);
            handleFetchWeather(location)
    },[location]);
        
    const handleSubmit = () => { 
        fetchWeather(city)
            .then(weather => {
                setWeatherResponse(weather)
            })
    };

    return (
        <div>
            <div className={styles.locationForm}>
                <div className={styles.locationInput}>
                    <input className={classNames(styles.zipcodeSearchInput, styles.input)} onChange={handleCityChange} placeholder=' Enter City Name'/>
                    <button className={classNames(styles.locationInputBtn, styles.input)} onClick={handleSubmit}>See Weather</button>
                </div>
            </div>
            <WeatherInfo weather={weatherResponse}/>
        </div>
    )
};

export default LocationForm;