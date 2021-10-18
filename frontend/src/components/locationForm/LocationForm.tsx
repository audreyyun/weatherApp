import React, { useCallback, useEffect, useState } from 'react';
import classNames from 'classnames';
import useLocation from '../../hooks/useLocation';
import styles from './LocationForm.module.scss'

const geolocationOptions = {
    timeout: 1000 * 60 * 1
};

type Props = {
    fetchWeather: Function
}

const LocationForm = ({ fetchWeather } : Props) => {
    const [city, setCity] = useState<String | undefined>('');
    //decide where/when to render error for geolocation 
    const { location, error } = useLocation(geolocationOptions);


    const handleCityChange = (e: any) => {
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
            <div className={styles.locationForm}>
                <div className={styles.locationInput}>
                    <input className={classNames(styles.zipcodeSearchInput, styles.input)} onChange={handleCityChange} placeholder=' Enter City Name'/>
                    <button className={classNames(styles.locationInputBtn, styles.input)} onClick={handleSubmit}>See Weather</button>
                </div>
            </div>
        </div>
    )
};

export default LocationForm;