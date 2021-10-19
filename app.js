const request = require("postman-request");
const dateFormate = require("./dateFormate.js");

console.log("Connecting to a service. Please wait...");

const url = "https://www.7timer.info/bin/civillight.php?lon=20.5&lat=44.8&ac=0&unit=metric&output=json&tzshift=0";

request(url, (err, res, body) => {

    if(err){
        console.clear();
        console.log("There seems to be a problem with the weather service. Here's the details: ");
        console.log(err.message);

    } else {

        console.clear();

        const data = JSON.parse(body);
    
        const date = dateFormate(data.dataseries[0].date);
        const dailyHigh = data.dataseries[0].temp2m.max;
        const dailyMin = data.dataseries[0].temp2m.min;
        const weather = data.dataseries[0].weather;
    
        console.log("This is weather forecast for " + date + "\n");
        console.log("Weather: " + weather);
        console.log("Highest temp. today: " + dailyHigh + "\u00B0C");
        console.log("Lowest temp. today: " + dailyMin + "\u00B0C");

    }
});