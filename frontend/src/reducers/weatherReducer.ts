import { RECEIVE_WEATHER, RECEIVE_WEATHER_ERROR } from '../actions/weatherActions';

type Props = { 
    weatherAPIerror: string;
    base: string;
    clouds: { 
        all: number
    };
    cod: number;
    coord: {
        lon: number;
        lat: number;
    };
    dt: number;
    id: number;
    main: { 
        temp: number;
        feels_like: number;
        temp_min: number;
        temp_max: number;
        pressure: number
    };
    name: string;
    sys: {
        type: number;
        id: number;
        country: string;
        sunrise: number;
        sunset: number;
    };
    timezone: number;
    visibility: number;
    weather: WeatherType[]; //notes it will be an array of type WeatherType objects
    wind: { 
        deg: number;
        speed: number
    }
}

type WeatherType = { 
    description: string;
    icon: string;
    id: number;
    main: string;
}
const initialState = {
    weatherAPIerror: '',
    base: '',
    clouds: {
        all: 0
    },
    cod: 0,
    coord: {
        lon: 0,
        lat: 0,
    },
    dt: 0,
    id: 0,
    main: {
        temp: 0,
        feels_like: 0,
        temp_min: 0,
        temp_max: 0,
        pressure: 0
    },
    name: '',
    sys: {
        type: 0,
        id: 0,
        country: '',
        sunrise: 0,
        sunset: 0,
    },
    timezone: 0,
    visibility: 0,
    weather: [], //notes it will be an array of type WeatherType objects
    wind: {
        deg: 0,
        speed: 0
    }
}

const WeatherReducer = (state: Props = initialState , action: any) => {
// const WeatherReducer = (state: Props = {}, action: any) => {
    Object.freeze(state);
    let newState = Object.assign({}, state);
    console.log(newState)
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
