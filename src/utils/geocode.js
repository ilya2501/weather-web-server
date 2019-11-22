const request = require('request')

const geocode = (address, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + address + '.json?access_token=pk.eyJ1IjoiaWx5YTI1IiwiYSI6ImNrMzVweWRlbjAwNDAzZGxpZHk0bXMycTcifQ.jg-Dkr6h9_Dv_WY4mY8pxw&limit=1'

    request({ url, json: true }, (error, { body }) => {
        debugger
        if (error) {
            callback('Unable to connect to location services!')
        } else if (!body.features || !body.features.length) {
            callback('Unable to find location. Try another search.')
        } else {
            callback(undefined, {
                latitude: body.features[0].center[1],
                longitude: body.features[0].center[0],
                location: body.features[0].place_name
            })
        }
    })
}

module.exports = geocode