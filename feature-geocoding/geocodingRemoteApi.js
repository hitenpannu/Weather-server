const networkClient = require('../providers/networkClient.js');

const requestOption = (function prepareUrl(){
    const accessToken = "pk.eyJ1IjoiaGl0ZW5kZXIiLCJhIjoiY2l3MHIzeXVqMDdyZzJwcGRvb2RrYWduayJ9.3x9pXKb9wHXLpUnM8FL-NQ";
    const host = "api.mapbox.com"
    const path = `/geocoding/v5/mapbox.places/`

    return (location) => {
        return {
        protocol:'https:',
        hostname: host,
        path: path+`${location}.json?access_token=${accessToken}&limit=1`,
        method: 'GET'
        }
    };
})()


module.exports = function(location){
    return new Promise((resolve, reject)=>{
        networkClient.makeRequest(
            requestOption(location),
            data=> resolve(data),
            error=> reject(error))
    })
};