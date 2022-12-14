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


//const currentDateInMilli =Date.now();

//grab the data from local storage 

//let lastDate = localStorage.getItem("last-visit"); // undefined
//let numVisits = localStorage.getItem("visits-ls"); //undefined 

//if(numVisits===undefined || Number.isNaN(numVisits)|| numVisits==="NaN" ){
  //numVisits=0;
  //lastDate=undefined;
//}

//case when is your first visit 
//let message;
//if (lastDate === undefined){
 // localStorage.setItem("last-visit", currentDateInMilli);
  //localStorage.setItem("visits-ls", '1');
  //message = "This is your first time in this page."; 
  
//}else{ 
  
  //let date = new Date();
  //let ld = new Date(parseInt(lastDate, 10));
  //let days_ago = ((date - ld)/86400000);
  //const result = days_ago.toFixed(0);
  //let dayS;
  //if (result <= 1){
   // dayS = "day";
  //} else{
  //  dayS = "days"
  //}
 // message = "You have visited this page for ${numVisits} times. It's been ${result} ${dayS} since your last visit.";
  
  //localStorage.setItem("last-visit", currentDateInMilli);
  //let newNumOfDays = parseFloat(numVisits) + 1;
  //localStorage.setItem("visits-ls", newNumOfDays.toString());
//}
//document.querySelector('.localstorage').textContent = message;
