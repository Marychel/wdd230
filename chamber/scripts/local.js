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
const currentDateInMilli =Date.now();
const lastDate = localStorage.getItem("last-visit");
let numVisits = Number(window.localStorage.getItem("visits-ls"));
  // increment the number of visits.
numVisits++;
localStorage.setItem("visits-ls", numVisits);
if (lastDate === undefined){
    localStorage.setItem("last-visit", currentDateInMilli);
}else{ 
const ld = parseFloat(lastDate);
const days_ago = (currentDateInMilli - ld) / 86400000;
const result = days_ago.toFixed(0);
let dayS;
if (result <= 1){
  dayS = "day";
} else{
  dayS = "days"
}
let message;
if (numVisits == 1 ){
  message = "This is your first time in this page."; 
}else{message = `You have visited this page for ${numVisits} times. It's been ${result} ${dayS} since your last visit.`;}
localStorage.setItem("last-visit", currentDateInMilli);
document.querySelector('.localstorage').innerHTML = message;
}