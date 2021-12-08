const myPublicIP = require('my-public-ip');

const ip = new myPublicIP();

module.exports = ip.find()
    .then((res) => {
        let data = res;
        return data;
    })
    .catch((err) => {
        console.log("There seems to be a problem contacting the geolocation service.")
        //console.log(err.message)
    });