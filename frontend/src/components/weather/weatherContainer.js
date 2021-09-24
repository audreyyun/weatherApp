
import { connect } from 'react-redux';
import { fetchWeather } from '../../actions/weatherActions';
import Weather from './Weather';

const mSTP = state => {
    return {
        weather: state.weather,
        weatherAPIerror: state.weatherAPIerror,
        zip: state.zip,
        country: state.country, 
        // lat: state.lat, 
        // lon: state.lon
    };
};

const mDTP = dispatch => {
    return {
        fetchWeather: (city) => dispatch(fetchWeather(city)),
        // fetchLocation: (lat, lon) => dispatch(fetchWeather(lat, lon)),
    }
}

export default connect(mSTP, mDTP)(Weather);