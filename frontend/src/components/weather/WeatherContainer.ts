import { connect } from 'react-redux';
import { fetchWeather } from '../../actions/weatherActions';
import Weather from './Weather';

const mSTP = (state: { weather: any; weatherAPIerror: any; zip: number; country: string; }) => {
    return {
        weather: state.weather,
        weatherAPIerror: state.weatherAPIerror,
        zip: state.zip,
        country: state.country, 
    };
};

const mDTP = (dispatch: any) => {
    return {
        fetchWeather: (city: any) => dispatch(fetchWeather(city)),
    }
}

export default connect(mSTP, mDTP)(Weather);