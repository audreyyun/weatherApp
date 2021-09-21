const express = require('express');
const router = express.Router();
const axios = require('axios');

const WEATHER_API_KEY = process.env.OPENWEATHERMAP_API_KEY;

router.get('/testing', (req, res) => {
    res.json({msg: 'Weather routes'})
});


router.get('/', async (req, res) => { 
    const url = `https://api.openweathermap.org/data/2.5/weather?zip=${req.query.zip},${req.query.country}&appid=${WEATHER_API_KEY}`;
    const response = await axios.get(url);

    res.send(response.data)
})


/*
Parameters
zip	    required	Zip code
appid	required	Your unique API key (you can always find it on your account page under the "API key" tab)
mode	optional	Response format. Possible values are xml and html. If you don't use the mode parameter format is JSON by default. Learn more
units	optional	Units of measurement. standard, metric and imperial units are available. If you do not use the units parameter, standard units will be applied by default. Learn more
lang	optional	You can use this parameter to get the output in your language. Learn more
*/

module.exports = router;