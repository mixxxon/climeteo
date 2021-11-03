const myPublicIP = require('my-public-ip');

const ip = new myPublicIP();

module.exports = ip.find()
    .then((res) => {
        let data = res;
        return data;
    })
    .catch((err) => {
        console.log("There seems to be a problem with the geolocation service. Here's the details: ")
        console.log(err)
    });