import { RECEIVE_WEATHER, RECEIVE_WEATHER_ERROR } from '../actions/weatherActions';

const WeatherReducer = (state = {}, action) => {
    Object.freeze(state);
    let newState = Object.assign({}, state);
    switch (action.type) {
        case RECEIVE_WEATHER:
            newState = action.weather;
            return newState;
        case RECEIVE_WEATHER_ERROR:
            newState.weatherAPIerror = action.error;
            return newState
        default:
            return state;
    }
};

export default WeatherReducer;
