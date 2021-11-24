const request = require("postman-request");
const dateFormate = require("./utils/dateFormate.js");
const ip = require("./utils/myPublicIP.js");

console.time("Executed in"); // Start the timer

let argv = process.argv.slice(2);
let appVersion = "1.0.0";

// console.log(argv);

// Check arguments
if(argv[0] === "h" || argv[0] === "help"){

    console.clear();
    console.log("This is CLImeteo application help.");
    console.log("\nYou can run an application without any options");
    console.log("to get today's weather, based on your public");
    console.log("IP address, or use the following options:\n");
    console.log("h or help ...... To view the application help.");
    console.log("v or version ... To view the application version.");
    console.log("f or forecast .. To view 5 days weather forecast.");
    console.log("\nUse the options by typing\n");
    console.log("   climeteo <space> <option>");
    console.log("\ninto the command line.")
    return;

} else if(argv[0] === "v" || argv[0] === "version"){

    console.clear();
    console.log("CLImeteo v." + appVersion);
    return;

}

// Check the weather ;)   
ip.then((data)=>{

    const country = data.countryName;
    const city = data.city;
    const lat = data.lat.toString();
    const lon = data.lon.toString();

    console.log("Connecting to a service. Please wait...");

    const url = `https://www.7timer.info/bin/civillight.php?lon=${lon}&${lat}&ac=0&unit=metric&output=json&tzshift=0`;

    request(url, (err, res, body) => {

        if(err){
            console.clear();
            console.log("There seems to be a problem with the weather service. Here are the details:\n");
            console.log(err.message);

        } else {
            
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
        
            if(argv.length === 0){

                console.clear();
                console.log(`Today's weather for ${city}, ${country}`);
                console.log(`Date: ${date} \n`);
                console.log("Weather: " + weather);
                console.log("Highest temp. today: " + dailyHigh + "\u00B0C");
                console.log("Lowest temp. today: " + dailyMin + "\u00B0C");
                console.log('\u0007');
                console.timeEnd("Executed in"); // End timer and display result

            } else if(argv[0] === "f" || argv[0] === "forecast"){
            
                console.clear();
                console.log(`Five day weather forecast for ${city}, ${country}`);

                for(let i=0; i<=4; i++){

                    console.log("\n" + dateFormate(data.dataseries[i].date));
                    console.log("Weather: " + weather);
                    console.log("Max: " + data.dataseries[i].temp2m.max + "\u00B0C");
                    console.log("Min: " + data.dataseries[0].temp2m.min + "\u00B0C");
                }

                console.log('\u0007');
                console.timeEnd("Executed in"); // End timer and display result

            } else {

                console.clear();
                console.log("Option \"" + argv[0] + "\" is not recognized. Please consider help.");
                console.log("\nYou can get help by writing...\n");
                console.log("   climeteo <space> h");
                console.log("           or");
                console.log("   climeteo <space> help");
                console.log("\n...in the command line.");
                return;
            
            }
        }
    });
});