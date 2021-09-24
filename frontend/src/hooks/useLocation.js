import React, {
    useState, 
    useEffect } from 'react';
import { fetchLocation } from '../util/locationAPIUtil'

const useLocation  = ( options = {} ) => { 
    const [error, setError] = useState();
    const [location, setLocation] = useState();

    useEffect(()=> {
        if(!navigator.geolocation) { 
            setError('Geolocation is not supported on your browser.');
            return;
        }
        navigator.geolocation.getCurrentPosition(handleSuccess, handleError, options);

    }, [options]);

    const handleSuccess = position => {
        const { latitude, longitude } = position.coords;

        fetchLocation(latitude, longitude)
            .then(resp => {
                const { data } = resp
                setLocation(resp.data[0].name)
            })
    };

    const handleError = error => {
        setError(error.message);
    };


    return { location, error };
}

export default useLocation;