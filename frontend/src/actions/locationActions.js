// import {useLocation as UseLocation} from '../hooks/useLocation'
// import { fetchLocation as fetchLocationAPI } from '../util/locationAPIUtil';


// export const RECEIVE_LOCATION = "RECEIVE_LOCATION";
// export const RECEIVE_LOCATION_ERROR = "RECEIVE_LOCATION_ERROR";

// export const receiveLocation = location => ({
//     type: RECEIVE_LOCATION,
//     location,
// });

// export const receiveLocationError = error => ({
//     type: RECEIVE_LOCATION_ERROR,
//     error,
// })

// export const fetchLocation = (latitude, longitude) => dispatch => {
//     console.log("im here in actions");
//     console.log("im here in actions, lat", latitude);
//     console.log("im here in actions,long", longitude);
//     return (
//         fetchLocationAPI(latitude, longitude)
//             .then(location => {
//                 console.log("this is Location", location)
//                 dispatch(receiveLocation(location));
//             })
//             .catch(err => dispatch(receiveLocationError(err)))
//     )
// };

// export const fetchLocation = (latitude, longitude) => dispatch => {
//     console.log("im here in actions");
//     console.log("im here in actions, lat", latitude);
//     console.log("im here in actions,long", longitude);
//     return (
//         useLocation(latitude, longitude)
//             .then(location => {
//                 console.log("this is Location", location)
//                 dispatch(receiveLocation(location.data));
//             })
//             .catch(err => dispatch(receiveLocationError(err)))
//     )
// };