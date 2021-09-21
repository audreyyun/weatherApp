import React, { useState } from 'react';
import { useLocation as UseLocation } from '../../hooks/useLocation';

const geolocationOptions = {
    // Using this option you can define when should the location request timeout and
    // call the error callback with timeout message.
    timeout: 1000 * 60 * 1 // 1 min (1000 ms * 60 sec * 1 minute = 60 000ms)
};

const Input = ({fetchWeather}) => {
    console.log("I am in input",fetchWeather)
    const [zip, setZip] = useState('');
    const [country, setCountry] = useState('');
    const {location, error } = UseLocation(geolocationOptions)


    const handleZipChange = e => {
        console.log(e)
        setZip(e.target.value)
    }

    const handleCountryChange = e => {
        setCountry(e.target.value)
    }

    const handleSubmit = () => { 
        fetchWeather(zip, country)
    }

    console.log(zip);
    console.log(country);
    console.log(location?.latitude);
    console.log(location?.longitude);

    return (
        <div>


                <div classname="location-input">
                    <input className='zipcode-search-input input' onChange={handleZipChange} placeholder='Enter Zip Code'/>
                    {/* <input className='zipcode-search-input' onChange={handleCountryChange} placeholder='Enter Country Code'/> */}
                    <select className="input" onChange={handleCountryChange}>
                        <option value="us">United States</option>
                        <option value="au">Austria</option>
                        <option value="aw">Australia</option>
                        <option value="br">Brazil</option>
                        <option value="ca">Canada</option>
                        <option value="uk">United Kingdom</option>
                        <option value="jp">Japan</option>
                    </select>
                    <button className="input" onClick={handleSubmit}>See Weather</button>
                </div>
            <div className="location-form" id="location-form">
                {/* <h1>HTML Geolocation API with React Hooks example</h1>;
                {location ? (
                    <code>
                        Latitude: {location?.latitude}, Longitude: {location?.longitude}
                    </code>
                ) : (
        <p>Loading...</p>)} */}
            </div>
        </div>
    )
}
export default Input;