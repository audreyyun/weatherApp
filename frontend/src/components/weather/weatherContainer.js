
import { connect } from 'react-redux';
import { fetchWeather } from '../../actions/weatherActions';
import Weather from './Weather';

const mSTP = state => {
    return {
        weather: state.weather,
        weatherAPIerror: state.weatherAPIerror,
        zip: state.zip,
        country: state.country, 
    };
};

const mDTP = dispatch => {
    return {
        fetchWeather: (city) => dispatch(fetchWeather(city)),
    }
}

export default connect(mSTP, mDTP)(Weather);