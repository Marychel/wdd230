// add cards and read json for directory page


const requestURL = 'data.json';
const cards = document.querySelector('.spothlights');


fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    const members = jsonObject['local-company'];
    members.forEach(displayMembers);
});

function displayMembers(member) {
// Create elements to add to the document
let card = document.createElement('section');
let comName = document.createElement('h3');
let comLogo = document.createElement('img');
let comAddress = document.createElement('p');
let contactNum = document.createElement('a');
// let memberURL = document.createElement('a');
// let memberEmail = document.createElement('a');


// Change the textContent property of the h2 element to contain the prophet's full name
comName.textContent = member.name;

// Build the image attributes by using the setAttribute method for the src, alt, and loading attribute values. (Fill in the blank with the appropriate variable).
comLogo.setAttribute('src', `images/${member.logo}`);
comLogo.setAttribute('alt', `logo for ${comName}`);
comLogo.width = 100;
comLogo.height = 100;
if (member.index > 3) {
memberLogo.setAttribute('loading', 'lazy');
}

comAddress.innerHTML = member.address;
comAddress.classList.add('member-address')

contactNum.innerHTML = `${member.contact_number}`;
contactNum.href = `tel:${member.contact_number}`

// memberURL.textContent = 'Visit website';
// memberURL.href = member.url;

// memberEmail.href = `mailto:${member.email}`;
// memberEmail.textContent = member.email;
// memberEmail.classList.add('member-email')

// Add/append the section(card) with the h2 element
if (member.status == "gold"){
  card.appendChild(comName);
  card.appendChild(comLogo);
  card.appendChild(comAddress);
  card.appendChild(contactNum);
  // card.appendChild(memberURL);
  // card.appendChild(memberEmail);
  
  // Add/append the existing HTML div with the cards class with the section(card)
  card.classList.add('member-detail-grid')
  cards.appendChild(card);
}

}