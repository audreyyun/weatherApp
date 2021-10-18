import * as express from 'express';
const router = express.Router();
import axios from 'axios';

// const WEATHER_API_KEY = process.env.OPENWEATHER_API_KEY;

router.get('/', async (req: { query: { lat: number; lon: number; }; }, res: { send: (arg0: any) => void; }) => {
    try {
        const geoUrl =`http://api.openweathermap.org/geo/1.0/reverse?lat=${req.query.lat}&lon=${req.query.lon}&limit=${process.env.OPENWEATHER_API_KEY}`;
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

export default router;