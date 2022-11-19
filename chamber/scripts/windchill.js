function wChill(temp, wSpeed){
    if (temp <= 50 && wSpeed > 3){
       let chill;
       chill = 35.74 + 0.6215 * temp - 35.75 * Math.pow(wSpeed, 0.16) + 0.4275 * temp * Math.pow(wSpeed, 0.16);
       return `${chill.toFixed(0)} °F`;        
    }else{return "N/A";}
  
    
  }

//SELECT ELEMENTS

const temp = document.querySelector("#temperature");
const currentWeather = document.querySelector("#weather-forecast");
const weatherIcon = document.querySelector('#weather_icon');
const wSpeed = document.querySelector('.wind_speed');
const windChill = document.querySelector('.wind_chill');

// App data
const weather = {};

// API KEY
const key = "8dc35cc72784031c27cc5b029ed372e1";


// GET WEATHER FROM API PROVIDER

let api = `https://api.openweathermap.org/data/2.5/weather?q=Tsu&units=imperial&appid=${key}`;
    
fetch(api)
    .then(function(response){
        let data = response.json();
        return data;
        
    })
    .then(function(data){
        weather.temperature = data.main.temp.toFixed(0);
        weather.description = data.weather[0].description;
        weather.icon = data.weather[0].icon
        weather.windSpeed = data.wind.speed.toFixed(0);
        
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
    wSpeed.innerHTML = `${weather.windSpeed} mph`;
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', weather.description);
    windChill.innerHTML = wChill(weather.temperature, weather.windSpeed)

}

