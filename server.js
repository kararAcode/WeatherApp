/* eslint-disable prettier/prettier */
const express = require('express');
const app = express();
const axios = require('axios');
const bodyParser = require('body-parser');
const cors =require('cors')

require('dotenv').config({ path: require('find-config')('.env') });

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());



app.post('/current', async (req, res) => {
        const cityName = await axios.get(`http://api.openweathermap.org/geo/1.0/reverse?lat=${process.env.lat}&lon=${process.env.lon}&limit=1&appid=${process.env.APIKEY}`)
        .then(json => json.data[0].name);
        
    
        await axios.get(`https://api.openweathermap.org/data/3.0/onecall?lat=${process.env.lat}&lon=${process.env.lon}&exclude=minutely,alerts&appid=${process.env.APIKEY}&units=metric`)
            .then((json) => {
                const currentData = {
                    high: Math.round(json.data.daily[0].temp.max),
                    low: Math.round(json.data.daily[0].temp.min),
                    temp: Math.round(json.data.current.temp),
                    condition: json.data.current.weather[0].description,
                    city: cityName
                }
    
                const hourlyData = json.data.hourly.map((hour) => {
                    let date = new Date(hour.dt*1000);
                    return {
                        time: date.getHours() + ":00",
                        icon: hour.weather[0].icon,
                        temp: Math.round(hour.temp)
                    }
                });
                
                let dailyData = json.data.daily.map((day) => {
                    let date = new Date(day.dt*1000);
                    return {
                        date: date.toLocaleDateString().slice(date.toLocaleDateString().length - 4),
                        icon: day.weather[0].icon,
                        high: Math.round(day.temp.max),
                        low: Math.round(day.temp.min),                
                    }
                });
                
                res.json({
                    current: currentData,
                    daily: dailyData,
                    hourly: hourlyData
                });
    
               
            });
 

    


});
app.listen(8080, () => {
  console.log('SERVER HAS STARTED');
});


