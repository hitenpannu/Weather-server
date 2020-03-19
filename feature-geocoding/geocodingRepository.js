const remoteApi = require('./geocodingRemoteApi');

const parseCoordinates = (geoCodingResponse) => {
    const centerCoordinates = geoCodingResponse.features[0].center;
    return {
        longitude: centerCoordinates[0],
        latitude: centerCoordinates[1]
    }
}


module.exports = (location) => remoteApi(location).then((response)=> parseCoordinates(response))