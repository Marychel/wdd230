const currentTemp = parseInt(document.getElementById('temperature').innerText);

const currentWindSpeed = parseInt(document.querySelector('.wind_speed').innerText);

let currentWindChill = "";
if (currentTemp <= 50 & currentWindSpeed > 3) {
    currentWindChill = Math.round(35.74 + (0.6215 * currentTemp ) - 
                    (35.75 * (currentWindSpeed ** 0.16)) + 
                    (0.4275 * currentTemp * (currentWindSpeed ** 0.16) )).toString() + "°F";

}

else {
    currentWindChill = "N/A"
}

document.querySelector('.wind_chill').innerText = String(currentWindChill)

//current weather for Tsu
// select HTML elements in the document
const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');
//const wind_speed = document.querySelector(`windchillid`);
//wind_speed.innerHTML=`test`;

const apikey="8dc35cc72784031c27cc5b029ed372e1"
const url = 'https://api.openweathermap.org/data/2.5/weather?q=Tsu&units=imperial&appid='+apikey;


async function apiFetch() {
     try {
       const response = await fetch(url);
       if (response.ok) {
         const data = await response.json();
         console.log(data); //this is for testing the call
          displayResults(data);
       } else {
           throw Error(await response.text());
       }
     } catch (error) {
         console.log(error);
     }
   }
   
   apiFetch();

   function  displayResults(weatherData) {
     currentTemp.innerHTML = `<strong>${weatherData.main.temp.toFixed(0)}</strong>`;
   
     const iconsrc = `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;
     const desc = weatherData.weather[0].description;
   
     weatherIcon.setAttribute('src', iconsrc);
     weatherIcon.setAttribute('alt', desc);
     captionDesc.textContent = desc;
   }