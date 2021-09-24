import React, { useState } from 'react';
import { useLocation as UseLocation } from '../../hooks/useLocation';

const geolocationOptions = {
    timeout: 1000 * 60 * 1
};

const LocationForm = ({fetchWeather}) => {
    console.log("I am in input",fetchWeather)
    const [city, setCity] = useState('');
    // const {location, error } = UseLocation(geolocationOptions)


    const handleCityChange = e => {
        console.log(e)
        setCity(e.target.value)
    }


    const handleSubmit = () => { 
        fetchWeather(city)
    }

    console.log(city);
    // console.log(location?.latitude);
    // console.log(location?.longitude);

    return (
        <div>

            <div className="location-form">

                <div classname="location-input">
                    <input className='zipcode-search-input input' onChange={handleCityChange} placeholder=' Enter City Name'/>
                    {/* <select className="country-search-input input" onChange={handleCountryChange}>
                        <option value="us">United States</option>
                        <option value="au">Austria</option>
                        <option value="aw">Australia</option>
                        <option value="br">Brazil</option>
                        <option value="ca">Canada</option>
                        <option value="uk">United Kingdom</option>
                        <option value="jp">Japan</option>
                        <option value="kr">Korea</option>
                    </select> */}
                    <button className="input location-input-btn" onClick={handleSubmit}>See Weather</button>
                </div>
                {/*{location ? (
                    <code>
                        Latitude: {location?.latitude}, Longitude: {location?.longitude}
                    </code>
                ) : (
                    <p>Loading...</p>
                )} */}
            </div>
        </div>
    )
}
export default LocationForm;