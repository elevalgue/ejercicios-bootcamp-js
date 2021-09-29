'use strict';

// SELECTED HOTEL
let hotels = {
    Terramar: {
        name: 'Terramar',
        location: 'Sitges',
        img: './img/hotel.svg',
    },
    Rosso: {
        name: 'Rosso',
        location: 'Almuñecar',
        img: './img/hotel.svg',
    },
    Fireflies: {
        name: 'Fireflies',
        location: 'Potes',
        img: './img/hotel.svg',
    },
};

let selectedHotel = prompt('Indica el hotel sobre el que quiere hacer la reseña: Terramar, Rosso o Fireflies');

document.getElementById('name-hotel').innerHTML =
'Hotel ' + hotels[selectedHotel].name;

document.getElementById('location-hotel').innerHTML = 'Ubicado en ' + hotels[selectedHotel].location;

document.getElementById('img-hotel').src = hotels[selectedHotel].img

// RATING
let rating = prompt('Cúantas estrellas le das a este hotel: una, dos, tres, cuatro o cinco');

const stars = {
    una:
    "<span>&#9733;</span><span>&#9734;</span><span>&#9734;</span><span>&#9734;</span><span>&#9734;</span>",
    dos:
    "<span>&#9733;</span><span>&#9733;</span><span>&#9734;</span><span>&#9734;</span><span>&#9734;</span>",
    tres:
    "<span>&#9733;</span><span>&#9733;</span><span>&#9733;</span><span>&#9734;</span><span>&#9734;</span>",
    cuatro:
    "<span>&#9733;</span><span>&#9733;</span><span>&#9733;</span><span>&#9733;</span><span>&#9734;</span>",
    cinco:
    "<span>&#9733;</span><span>&#9733;</span><span>&#9733;</span><span>&#9733;</span><span>&#9733;</span>",
};

document.getElementById('rating').innerHTML = stars[rating];

// REVIEW
let anonymousUser = confirm('¿Quieres que la reseña sea anónima')
document.getElementById('anonymous').checked = anonymousUser; 

