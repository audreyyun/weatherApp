import React from 'react';
import { Route } from 'react-router-dom';
import WeatherContainer from './weather/weatherContainer';
import '../scss/style.scss'

const App = () => { 
  return(
    <div>
        <Route exact path="/" component ={WeatherContainer} />
    </div>
  )
}

export default App;