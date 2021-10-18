import React, {
    useState, 
    useEffect,
    useCallback } from 'react';
import { fetchLocation } from '../util/locationAPIUtil'

const useLocation  = ( options = {} ) => { 
    const [error, setError] = useState<string>();
    const [location, setLocation] = useState();

    useEffect(()=> {
        if(!navigator.geolocation) { 
            setError('Geolocation is not supported on your browser.');
            return;
        }
        navigator.geolocation.getCurrentPosition(handleSuccess, handleError, options);
    }, [options]);


    const handleSuccess = useCallback( async(position) => { 
        const { latitude, longitude } = position.coords;

        fetchLocation(latitude, longitude)
            .then(response => {
                const { data } = response
                setLocation(data[0].name)
            });
    },[])

    const handleError = (error: any) => {
        setError(error.message);
    };


    return { location, error };
}

export default useLocation;