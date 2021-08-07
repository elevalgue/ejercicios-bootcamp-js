'use strict';

console.log('Are you ready for a good time? :))');

let hotel = {
    name: '',
    location: '',
}; 

hotel.name = prompt('Introduzca el nombre del hotel, please');
document.getElementById('hotel-name').innerHTML = `Hotel ${hotel.name}`;

hotel.location = prompt('Introduzca la ubicación del hotel');
document.getElementById('hotel-location').innerHTML = `${hotel.location}`;