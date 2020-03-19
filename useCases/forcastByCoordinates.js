const forcastService = require('../feature-forcast/forcastService');
const defaultLatitude = "37.8267";
const defaultLongitude = "-122.4233";

module.exports = (
    latitude = defaultLatitude, 
    longitude = defaultLongitude ) => forcastService.getWeatherForcast(latitude, longitude);