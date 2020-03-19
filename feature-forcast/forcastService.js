const forcaseRepo = require('./forecastRepository');

function getWeatherForcast(latitude, longitude){
    return forcaseRepo.getForcastData(latitude, longitude);
}

module.exports = {getWeatherForcast};