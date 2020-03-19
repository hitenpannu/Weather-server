const geocodingService = require('../feature-geocoding/geocodingService.js');
const forcastByCoordinates = require('./forcastByCoordinates');


module.exports = (region)=> geocodingService(region)
                                .then(
                                    (coordinates) => 
                                            forcastByCoordinates(
                                                coordinates.latitude, 
                                                coordinates.longitude)
                                    )
                                