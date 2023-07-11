/* eslint-disable prettier/prettier */
const express = require('express');
const app = express();
const axios = require('axios');
const bodyParser = require('body-parser');

require('dotenv').config({ path: require('find-config')('.env') });

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


app.post('/daily', async (req, res) => {

    let index = req.body.index;
    let weatherData = {
        high: '',
        low: '',
        icon: '',
        date: '',
    };

    await axios.get(`http://dataservice.accuweather.com/forecasts/v1/daily/5day/${process.env.locationKey}?apikey=${process.env.APIKEY}&metric=true`)
        .then((json) => {
            weatherData.high = Math.round(json.data.DailyForecasts[index + 1].Temperature.Maximum.Value);
            weatherData.low = Math.round(json.data.DailyForecasts[index + 1].Temperature.Minimum.Value);
            weatherData.icon = json.data.DailyForecasts[index + 1].Day.Icon;
            weatherData.date = json.data.DailyForecasts[index + 1].Date.slice(5, 10);
        });

    res.json(weatherData);
});

app.post('/hourly', async (req, res) => {

    let index = req.body.index;

    let weatherData = {
        hour: '',
        icon: '',
        temp: '',
    };

    await axios.get(`http://dataservice.accuweather.com/forecasts/v1/hourly/12hour/${process.env.locationKey}?apikey=${process.env.APIKEY}&metric=true`)
        .then((json) => {
            weatherData.hour = json.data[index].DateTime.slice(11, 16);
            weatherData.icon = json.data[index].WeatherIcon;
            weatherData.temp = Math.round(json.data[req.body.index].Temperature.Value);
        });


    res.json(weatherData);
});

app.post('/current', async (req, res) => {
    let weatherData = {
        high: '',
        low: '',
        condition: '',
        temp: '',
        city: '',
    };

    await axios.get(`http://dataservice.accuweather.com/forecasts/v1/daily/1day/${process.env.locationKey}?apikey=${process.env.APIKEY}&metric=true`)
        .then((json) => {
            weatherData.high = Math.round(json.data.DailyForecasts[0].Temperature.Maximum.Value);
            weatherData.low = Math.round(json.data.DailyForecasts[0].Temperature.Minimum.Value);

        });

    await axios.get(`http://dataservice.accuweather.com/locations/v1/cities/geoposition/search?apikey=${process.env.APIKEY}&q=${process.env.lat}%2C-${process.env.lon}`)
        .then((json) => {
            weatherData.city = json.data.ParentCity.EnglishName;
        });

    await axios.get(`http://dataservice.accuweather.com/currentconditions/v1/${process.env.locationKey}?apikey=${process.env.APIKEY}`)
        .then((json) => {
            weatherData.condition = json.data[0].WeatherText;
            weatherData.temp = Math.round(json.data[0].Temperature.Metric.Value);
        });






    res.json(weatherData);
});
app.listen(8080, () => {
  console.log('SERVER HAS STARTED');
});


