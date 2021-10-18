import express from 'express';
const router = express.Router();
import axios from 'axios';

// const WEATHER_API_KEY = process.env.OPENWEATHER_API_KEY;

router.get('/', async (req: { query: { city: string; }; }, res: { send: (arg0: any) => void; }) => { 
    try { 
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${req.query.city}&appid=${process.env.OPENWEATHER_API_KEY}`;
        const response = await axios.get(url);
        
        res.send(response.data)
    } catch (error) { 
        // console.log(error)
    }
    
});

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

export default router;