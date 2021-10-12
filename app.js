const express = require('express');
const app = express();
const router = express.Router();
const weather = require('./routes/api/openweather');
const geolocation = require('./routes/api/location')
const dotenv = require('dotenv');

dotenv.config();

if (process.env.NODE_ENV === 'production') {
    app.use(express.static('frontend/build'));
    app.get('/', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'));
    })
}

//middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//route
app.use('/api/weather/', weather);
app.use('/api/location/', geolocation)

// app.get('*', (req, res) => {
//     res.send('Page Not Found.')
// });

const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})