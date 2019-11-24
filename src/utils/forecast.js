const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = `https://api.darksky.net/forecast/d1fbc43d85158c2b6f725b7492ae7472/${latitude},${longitude}?units=si`
    console.log(url)

    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (body.error) {
            callback('Unable to find location', undefined)
        } else {
            callback(undefined, `${body.daily.data[0].summary} It is currently ${body.currently.temperature} degrees out. Humidity is ${body.daily.data[0].humidity * 100}%. There is a ${body.currently.precipProbability * 100}% chance of rain.`)
        }
    })
}

module.exports = forecast