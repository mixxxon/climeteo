const request = require("postman-request");
const dateFormate = require("./utils/dateFormate.js");
const ip = require("./utils/myPublicIP.js");

ip.then((data)=>{

    const country = data.countryName;
    const city = data.city;
    const lat = data.lat.toString();
    const lon = data.lon.toString();

    console.log("Connecting to a service. Please wait...");

    // const url = "https://www.7timer.info/bin/civillight.php?lon=20.5&lat=44.8&ac=0&unit=metric&output=json&tzshift=0";

    const url = `https://www.7timer.info/bin/civillight.php?lon=${lon}&${lat}&ac=0&unit=metric&output=json&tzshift=0`;

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
            let weather = data.dataseries[0].weather;

            switch(weather){
                case "clear":
                    weather = "Clear";
                    break;
                case "pcloudy":
                    weather = "Partly cloudy";
                    break;
                case "mcloudy":
                    weather = "Mostly cloudy";
                    break;
                case "cloudy":
                    weather = "Cloudy";
                    break;
                case "lightrain":
                    weather = "Light rain or showers";
                    break;
                case "humid":
                    weather = "Foggy";
                    break;
                case "oshower":
                    weather = "Occasional showers";
                    break;
                case "ishower":
                    weather = "Isolated showers";
                    break;
                case "lightsnow":
                    weather = "Light or occasional snow";
                    break;
                case "rain":
                    weather = "Rain";
                    break;
                case "snow":
                    weather = "Snow";
                    break;
                case "rainsnow":
                    weather = "Ice pellets or freezing rain";
                    break;
                case "ts":
                    weather = "Thunderstorm possible";
                    break;
                case "tsrain":
                    weather = "Thunderstorm";
                    break;
            }
        
            console.log(`Today's weather for ${city}, ${country}`);
            console.log(`Date: ${date} \n`);
            console.log("Weather: " + weather);
            console.log("Highest temp. today: " + dailyHigh + "\u00B0C");
            console.log("Lowest temp. today: " + dailyMin + "\u00B0C");

        }
    });
});