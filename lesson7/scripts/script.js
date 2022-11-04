//progressive loading of images
const img = document.querySelectorAll("[data-src]");

function preloadImage(img){
  const src = img.getAttribute("data-src");
  if(!src){
    return;
  }
  img.setAttribute('src', img.getAttribute('data-src'));
  img.onload = () => {
    img.removeAttribute('data-src');
  };
}

const imgOptions = {
  threshold: 1,
  rootMargin: "0px 0px -10px 0px"
};

const imgObserver = new IntersectionObserver((entries, imgObserver) => {
  entries.forEach(entry =>{
    if (!entry.isIntersecting){
      return;
    }else {
      preloadImage(entry.target);
      imgObserver.unobserve(entry.target);
    }
  })
}, imgOptions);

 img.forEach(img => {
  imgObserver.observe(img);
})

/*Local storage*/
//get the current date
//store in the localeStorage the date user visit the site
//determine how many days it has been user visited
//display message to the user or welcome message

const currentDateInMilli =Date.now();
const lastDate = localStorage.getItem("last-visit");

let numVisits = Number(window.localStorage.getItem("visits-ls"));


// increment the number of visits.
numVisits++;
// store the new number of visits value
localStorage.setItem("visits-ls", numVisits);

if (lastDate === undefined){
    localStorage.setItem("last-visit", currentDateInMilli);
}else{
 
const ld = parseFloat(lastDate);

const days_ago = (currentDateInMilli - ld) / 86400000;
const result = days_ago.toFixed(0);

let day;
  if (result > 1){
    day = "days"
  }else{
    day = "day"
  }
let message=`You have visited this page for ${numVisits} times. It's been ${result} ${day} since your last visit.`;

localStorage.setItem("last-visit", currentDateInMilli);
document.querySelector('.localstorage').innerHTML = message;

}