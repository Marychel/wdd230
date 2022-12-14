//GETS TOGGLE MENU| Header
const menuBtn = document.querySelector('.hamBtn');
const mnav = document.querySelector('.navi');

menuBtn.addEventListener('click', () =>
{mnav.classList.toggle('open')}, false);

menuBtn.addEventListener('click', () =>
{menuBtn.classList.toggle('open')}, false);


window.onresize = () => {if (window.innerWidth > 760) mnav.classList.remove('open')};

//Full year
document.querySelector("#year").textContent = new Date().getFullYear();


//current date
let day = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday'
];
let month = [
  'January',
  'Febuary',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December'
];
let d = new Date();
let dayName = day[d.getDay()];
let monthName = month[d.getMonth()];
let year = d.getFullYear();
// document.querySelector('.currentDate').innerHTML = `${dayName}, ${d.getDate()} ${monthName} ${year}`;
document.getElementById("lastModif").innerHTML = `Last Updated:  ${document.lastModified}`;

//elements

const icon = document.querySelector('.icon');
const desc = document.querySelector('.desc');
const currentemp = document.querySelector('.currentemp');
const hum = document.querySelector('.hum');



    const weatherApi = 'https://api.openweathermap.org/data/2.5/onecall?lat=34.5&lon=136.5&exclude=hourly,minutely&units=imperial&appid=a44cb97f9caa00ac7b9a9561a8379fe8';
    fetch(weatherApi)
        .then(function(response){
            let data = response.json();
            
            return data;
            
        })
        .then(function(data){

            
            const icon = document.querySelector('.icon');
            const desc = document.querySelector('.desc');
            const currentemp = document.querySelector('.currentemp');
            const hum = document.querySelector('.hum');
            let tempA = data.current.temp.toFixed(0);
            let image = `images/weather-icons/${data.current.weather[0].icon}.png`;
            desc.innerHTML = data.current.weather[0].description;
            descript = data.current.weather[0].description;
            currentemp.innerHTML = `${tempA}°F`;
            hum.innerHTML = `<i class="fas fa-tint"> ${data.current.humidity}%`;
            icon.setAttribute('src', image);
            icon.setAttribute('alt', descript);
            const three_day = data.daily.slice(0,3);
           
            

            let day = 0;
            three_day.forEach(forecast =>{
               let imagesrc = `images/weather-icons/${forecast.weather[0].icon}.png`; 
               let description = forecast.weather[0].description;
               let time = forecast.dt;
               const options = {month: 'short', day: 'numeric' };
               let date = new Date(time * 1000).toLocaleDateString(undefined, options);
               
                
                document.querySelector(`.date${day + 1}`).textContent = date;
                document.querySelector(`.temp${day + 1}`).textContent = `${forecast.temp.day.toFixed(0)} °F`;
                document.querySelector(`.icon${day + 1}`).setAttribute('src', imagesrc);
                document.querySelector(`.icon${day + 1}`).setAttribute('alt', description);
                day++;
              
        });
    })

    //index juce counter
    // initialize display elements
    const numDrinksDisplay = document.getElementById("drink-counter");

    // get the stored value in localStorage
    let numDrinks = localStorage.numDrinks

    // determine if this is the first visit or display the number of visits.
    if (numDrinks != undefined) {
        numDrinksDisplay.innerText = numDrinks;

    } else {
        numDrinksDisplay.innerText = 0;
        localStorage.numDrinks = 0;
    }