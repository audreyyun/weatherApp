import React, { useState } from 'react';

// const Input = ({setZip, setCountry, fetchWeather}) => {
const Input = ({fetchWeather}) => {
    console.log("I am in input",fetchWeather)
    const [zip, setZip] = useState('');
    const [country, setCountry] = useState('');

    const handleZipChange = e => {
        console.log(e)
        setZip(e.target.value)
    }

    const handleCountryChange = e => {
        setCountry(e.target.value)
    }

    const handleSubmit = () => { 
        fetchWeather(zip, country)
        // setZip(zip);
        // setCountry(country);
    }

    console.log(zip);
    console.log(country);

    return (
        <>
            <div className = "location-form" id="location-form">
                <div>Hello!</div>
                <input className='zipcode-search-input' onChange={handleZipChange} placeholder='Enter Zip Code'/>
                {/* <input className='zipcode-search-input' onChange={handleCountryChange} placeholder='Enter Country Code'/> */}
                <select onChange={handleCountryChange}>
                    <option value="us">United States</option>
                    <option value="au">Austria</option>
                    <option value="aw">Australia</option>
                    <option value="br">Brazil</option>
                    <option value="ca">Canada</option>
                    <option value="uk">United Kingdom</option>
                    <option value="jp">Japan</option>
                </select>
                <button onClick={handleSubmit}>See Weather</button>
            </div>
        </>
    )
}
export default Input;