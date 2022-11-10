const requestURL = 'https://byui-cit230.github.io/canvas-referenced/latter-day-prophets.json';

fetch(requestURL)
    .then(function (response){
        return response.json();
    })
    .then(function (jsonObject) {
        const prophets = jsonObject['prophets'];

        prophets.forEach(prophets => {
            
            let card = document.createElement('section');
            let h2 = document.createElement('h2');
            let place = document.createElement('p');
            let date = document.createElement('p');
            let image = document.createElement('img');

            h2.innerHTML = `${prophets.name} ${prophets.lastname}`; 
            date.innerHTML = `Date of Birth: ${prophets.birthdate}`;
            place.innerHTML = `Place of Birth: ${prophets.birthplace}`;
            image.src =  prophets.imageurl;
            image.loading = 'lazy'
          
            let ordinal;
            if (prophets.order == 1){
               ordinal = "st";} 
               else if(prophets.order == 2) {ordinal = "nd";}
            else if (prophets.order == 3) {ordinal = "rd";} 
            else {ordinal= "th"};

            image.alt =  `Portrait of ${prophets.name} ${prophets.lastname} - ${prophets.order}${ordinal} Latter-Day President`;
           
            

            
            card.appendChild(h2);
            card.appendChild(date);
            card.appendChild(place);
            card.appendChild(image);
            
            document.querySelector('div.cards').appendChild(card);


        });
      

    });