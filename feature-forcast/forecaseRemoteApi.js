const networkClient = require('../providers/networkClient.js');

const prepareRequestOptions = (function prepareUrl(){
    const apiSecretKey = "d5f7b0a8edbcd295715728557935bcc1";
    const apiHostName = "api.darksky.net"
    const forcastPath = `/forecast/${apiSecretKey}`

    return (latitude, longitude) => {
        return {
        protocol:'https:',
        hostname: apiHostName,
        path: forcastPath+`/${latitude},${longitude}`,
        method: 'GET'
        }
    };
})()


function getForcast(latitude, longitude){
    return new Promise((resolve, reject)=>{
        networkClient.makeRequest(
            prepareRequestOptions(latitude, longitude),
            data => resolve(data),
            error => reject(error)
        )
    });
}

module.exports = {getForcast};
