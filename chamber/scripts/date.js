//GETS TOGGLE MENU| Header
const menuBtn = document.querySelector('.hamBtn');
const mnav = document.querySelector('.navi');

menuBtn.addEventListener('click', () =>
{mnav.classList.toggle('open')}, false);

menuBtn.addEventListener('click', () =>
{menuBtn.classList.toggle('open')}, false);


window.onresize = () => {if (window.innerWidth > 760) mnav.classList.remove('open')};


// set banner for monday/tuesday
let dow = date.getDay();
if (dow == 1 | dow ==2) {
    let banner = document.getElementById("banner");
    banner.style.display = "block";
    banner.innerText = "🤝🏼 Come join us for the chamber meet and greet Wednesday at 7:00 p.m.";
}


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
document.querySelector('.currentDate').innerHTML = `${dayName}, ${d.getDate()} ${monthName} ${year}`;
document.querySelector('#currentDate').innerHTML = `${dayName}, ${d.getDate()} ${monthName} ${year}`;

