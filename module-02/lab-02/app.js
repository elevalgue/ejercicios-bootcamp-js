'use strict';

console.log('Are you ready for a good time? :)');

// 1ST OBJETIVE

let hotel = {
    name: 'Terramar',
    location: 'Sitges',
    img:'./img/hotel.svg', 
}

document.getElementById('name-hotel').innerHTML = 'Hotel ' + hotel.name;
document.getElementById('location-hotel').innerHTML = 'Ubicado en ' + hotel.location;
document.getElementById('img-hotel').src = hotel.img; 

// 2ND OBJETIVE

let rating = prompt('Puntua este hotel del 1 al 5, please');
document.getElementById('rating').innerHTML = rating + ' estrellas';

// 3RD OBJETIVE

let anonymousUser = confirm('¿Quieres que la reseña sea anónima')
document.getElementById('anonymous').checked = anonymousUser; 
