const mockWeather = { 
    data: {

        "coord": {
            "lon": -118.2437,
            "lat": 34.0522
        },
        "weather": [
            {
                "id": 800,
                "main": "Clear",
                "description": "clear sky",
                "icon": "01d"
            }
        ],
        "base": "stations",
        "main": {
            "temp": 294.01,
            "feels_like": 292.88,
            "temp_min": 290.85,
            "temp_max": 297.6,
            "pressure": 1012,
            "humidity": 28
        },
        "visibility": 10000,
        "wind": {
            "speed": 2.68,
            "deg": 215,
            "gust": 0.45
        },
        "clouds": {
            "all": 1
        },
        "dt": 1634077448,
        "sys": {
            "type": 1,
            "id": 3694,
            "country": "US",
            "sunrise": 1634046948,
            "sunset": 1634088154
        },
        "timezone": -25200,
        "id": 5368361,
        "name": "Los Angeles",
        "cod": 200
    }
}

export default mockWeather;