const express = require('express');
const app = express();

const weather = require('./routes/api/openweather');

if (process.env.NODE_ENV === 'production') {
    app.use(express.static('frontend/build'));
    app.get('/', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'));
    })
}


app.get('/', (req, res) => { 
    res.send('Hello World!');
});

//middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//route
app.use('/api/weather', weather);

const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})