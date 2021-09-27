const request = require("postman-request");
const dateFormate = require("./dateFormate.js");

const url = "https://www.7timer.info/bin/civillight.php?lon=20.5&lat=44.8&ac=0&unit=metric&output=json&tzshift=0";

request(url, (err, res, body) => {

    const data = JSON.parse(body);
    
    const date = dateFormate(data.dataseries[0].date);
    const dailyHigh = data.dataseries[0].temp2m.max;
    const dailyMin = data.dataseries[0].temp2m.min;
    const weather = data.dataseries[0].weather;

    console.log("This is weather forecast for " + date + "\n");
    console.log("Weather: " + weather);
    console.log("Highest temp. today: " + dailyHigh + "C");
    console.log("Lowest temp. today: " + dailyMin + "C");


});