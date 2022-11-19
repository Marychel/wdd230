//SELECT ELEMENTS

const temp = document.querySelector("#temperature");
const currentWeather = document.querySelector("#weather-forecast");
const weatherIcon = document.querySelector('#weather_icon');
const wSpeed = document.querySelector('.wind_speed');

// App data
const weather = {};

// API KEY
const key = "8dc35cc72784031c27cc5b029ed372e1";


// GET WEATHER FROM API PROVIDER

let api = `https://api.openweathermap.org/data/2.5/weather?q=Tsu&units=imperial&appid=${key}`;
    
fetch(api)
    .then(function(response){
        let data = response.json();
        console.log(data)
        return data;
        
    })
    .then(function(data){
        weather.temperature = data.main.temp.toFixed(0);
        weather.description = data.weather[0].description;
        weather.icon = data.weather[0].icon
        weather.windSpeed = data.wind.speed.toFixed(0);
        //weather.humidity = data.main.humidity;
    })
    .then(function(){
        displayWeather();
        windChill();
    });

// DISPLAY WEATHER
function displayWeather(){
    const iconsrc = `https://openweathermap.org/img/w/${weather.icon}.png`;
    temp.innerHTML = weather.temperature;
    currentWeather.innerHTML = weather.description;
    //locationEle.innerHTML = `${weather.city}, ${weather.country}`;
    //humidity.innerHTML =`${weather.humidity}%`;
    wSpeed.innerHTML = `${weather.windSpeed} mph`;
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', weather.description);
}

function windChill(temp, wSpeed){
 
    if (temp <= 50 && wSpeed > 3){
       let chill = 35.74 + 0.6215 * temp - 35.75 * 
                Math.pow(wSpeed, 0.16) + 0.4275 * temp * Math.pow(wSpeed, 0.16);
        chill = chill.toFixed(0) + "&deg;F";        
                return chill;
    }else{return "N/A";}
  
    
  }