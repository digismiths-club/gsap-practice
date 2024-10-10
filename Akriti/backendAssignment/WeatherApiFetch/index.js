const express = require("express");
const app = express();
const port = 8080;

let apiUrl = "https://api.openweathermap.org/data/2.5/weather?q="
let key = "5152715f7205ceea89b58ee4b9cc9e0a"

app.use(express.json());

let getData = async (city) => {
    try {
        let response = await fetch(`${apiUrl}${city}&appid=${key}&units=metric`);
        if (!response.ok) {
            throw new Error("Problem in fetching data");
        }
        let jsonResponse = await response.json();

        let info = {
            name: jsonResponse.name,
            feelsLike: jsonResponse.main.feels_like,
            humidity: jsonResponse.main.humidity,
            temp: jsonResponse.main.temp,
            description: jsonResponse.weather[0].main,
            windSpeed: jsonResponse.wind.speed,
            country: jsonResponse.sys.country
        }
        return info;
    } catch (err) {
        console.error("Problem in get Data");
    }
}

app.post("/weather",async(req,res)=>{
    let {city} = req.body;
    if(!city){
        res.json({error:"City name is required"});
    }
    let weather=await getData(city);

    if(!weather){
        res.json({error:"Enter a valid city name"});
    }
    else if( weather=="Problem in get Data"){
        res.json({error:"Problem in getting data"});
    }

    res.json(weather);
});

app.use("/",(req,res)=>{
    res.send("Root page");
})

app.use("*",(req,res)=>{
    res.send("page not found");
});

app.listen(port,()=>{
    console.log(`Listening to port ${port}`);
});