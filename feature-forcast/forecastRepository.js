const forcastRemoteApi = require('./forecaseRemoteApi');


function getForcastData(latitude, longitude){
    return forcastRemoteApi.getForcast(latitude, longitude)
}

module.exports = {getForcastData};