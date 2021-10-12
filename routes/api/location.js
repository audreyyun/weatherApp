const express = require('express');
const router = express.Router();
const axios = require('axios');

// const WEATHER_API_KEY = process.env.REACT_APP_OPENWEATHERMAP_API_KEY;

router.get('/', async (req, res) => {
    try {
        console.log("this is req query",req.query)
        const geoUrl =`http://api.openweathermap.org/geo/1.0/reverse?lat=${req.query.lat}&lon=${req.query.lon}&limit=1&appid=0f2d288cb9bb3772fb2649a8e9613bd0`;
        const response = await axios.get(geoUrl);

        res.send(response.data)
    } catch (error) {
        // console.log(error);
    }

});

/*
Parameters
zip	    required	Zip code
appid	required	Your unique API key (you can always find it on your account page under the "API key" tab)
mode	optional	Response format. Possible values are xml and html. If you don't use the mode parameter format is JSON by default. Learn more
units	optional	Units of measurement. standard, metric and imperial units are available. If you do not use the units parameter, standard units will be applied by default. Learn more
lang	optional	You can use this parameter to get the output in your language. Learn more
*/

module.exports = router;