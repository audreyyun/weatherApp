const express = require('express');
const router = express.Router();
const axios = require('axios');

// const WEATHER_API_KEY = process.env.REACT_APP_OPENWEATHERMAP_API_KEY;


router.get('/', async (req, res) => {
    // console.log("this is req query",req.query)
    try {
        // console.log("THISISLAT",req.query.lat);
        const url =`http://api.openweathermap.org/geo/1.0/reverse?lat=${req.query.lat}&lon=${req.query.lon}&limit=1&appid=0f2d288cb9bb3772fb2649a8e9613bd0`;
        // const url = `https://api.openweathermap.org/data/2.5/weather?q=${req.query.city}&appid=0f2d288cb9bb3772fb2649a8e9613bd0`;
        const response = await axios.get(url);

        res.send(response.data)
    } catch (error) {
        // console.log(error);
    }

});

// router.get('/:id', async (req, res) => { 
//     const url = `https://api.openweathermap.org/data/2.5/weather?q=${req.query.city}&appid=0f2d288cb9bb3772fb2649a8e9613bd0`;
//     const response = await axios.get(url);

//     res.send(response.data)
// });


// router.get('/test', (req, res) => {
//     res.json({msg: 'Weather routes'})
// });

/*
Parameters
zip	    required	Zip code
appid	required	Your unique API key (you can always find it on your account page under the "API key" tab)
mode	optional	Response format. Possible values are xml and html. If you don't use the mode parameter format is JSON by default. Learn more
units	optional	Units of measurement. standard, metric and imperial units are available. If you do not use the units parameter, standard units will be applied by default. Learn more
lang	optional	You can use this parameter to get the output in your language. Learn more
*/

module.exports = router;