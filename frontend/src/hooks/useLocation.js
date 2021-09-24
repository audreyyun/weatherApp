// import React, {
//     useState, 
//     useEffect } from 'react';

// export const useLocation  = ( options = {} ) => { 
//     const [error, setError] = useState();
//     const [location, setLocation] = useState();
//     // const [zip, setZip] = useState('')

//     useEffect(()=> {
//         if(!navigator.geolocation) { 
//             setError('Geolocation is not supported on your browser.');
//             return;
//         }
//         navigator.geolocation.getCurrentPosition(handleSuccess, handleError, options);

//     }, [options]);

//     const handleSuccess = position => {
//         const { latitude, longitude } = position.coords;

//         setLocation({
//             latitude,
//             longitude
//         });
//     };

//     const handleError = error => {
//         setError(error.message);
//     };


//     return {location, error};
// }