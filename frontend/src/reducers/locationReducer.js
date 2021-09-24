// import { RECEIVE_LOCATION, RECEIVE_LOCATION_ERROR } from '../actions/locationActions';

// const LocationReducer = (state = {}, action) => {
//     console.log("I am in reducer", action)
//     Object.freeze(state);
//     let newState = Object.assign({}, state);
//     switch (action.type) {
//         case RECEIVE_LOCATION:
//             newState = action.weather;
//             return newState;
//         case RECEIVE_LOCATION_ERROR:
//             newState.weatherAPIerror = action.error;
//             return newState
//         default:
//             return state;
//     }
// };

// export default LocationReducer;
