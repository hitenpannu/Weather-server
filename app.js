// Remote Content
const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

// Local Developer content
const forecastByCoordinates = require('./useCases/forcastByCoordinates.js');
const forecastByRegion = require('./useCases/forcastByRegion.js');

app.get('/api/weather',async (request, response)=>{
    try{
        const region = request.query.region;
        const result = await getWeatherForcast(region)
        response.statusCode =  200;
        response.send(result)
    }catch(error){
        response.statusCode =  200;
        response.send(error)
    }
})


// Setup server
app.listen(port,()=>{
    console.log("Server is up and running")
})

function getWeatherForcast(region){
    return forecastByRegion(escape(region))
    .then((data)=> data.daily.data)
    .then((dailyDataList)=> dailyDataList
    .map((info)=> {
        return {
            time: info.time,
            summary: info.summary
        }
    }))
}