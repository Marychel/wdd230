let d = new Date();
let dayName = day[d.getDay()];
let monthName = month[d.getMonth()];
let year = d.getFullYear();
document.querySelector('.currentDate').innerHTML = `${dayName}, ${d.getDate()} ${monthName} ${year}`;
document.getElementById("lastModif").innerHTML = `Last Updated:  ${document.lastModified}`;