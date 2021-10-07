import React, { useCallback, useEffect, useState } from 'react';
import useLocation from '../../hooks/useLocation';

const geolocationOptions = {
    timeout: 1000 * 60 * 1
};

const LocationForm = ({ fetchWeather }) => {
    // console.log("I am in input", fetchWeather);
    const [city, setCity] = useState('');
    const { location, error } = useLocation(geolocationOptions);


    const handleCityChange = e => {
        setCity(e.target.value)
    };

    const handleFetchWeather = useCallback( async (location) => { 
            fetchWeather(location) 
    },[]);

    useEffect(() => {
            setCity(location);
            handleFetchWeather(location)
    },[location]);
        
    const handleSubmit = () => { 
        fetchWeather(city)
    };

    return (
        <div>
            <div className="location-form">
                <div className="location-input">
                    <input className='zipcode-search-input input' onChange={handleCityChange} placeholder=' Enter City Name'/>
                    <button className="input location-input-btn" onClick={handleSubmit}>See Weather</button>
                </div>
            </div>
        </div>
    )
};

export default LocationForm;