'use strict';

console.log('Are you ready for a good time? :))');

const btnEl = document.querySelector('#js-btn');
const selectRoomType = document.querySelector('#js-room-type');
const selectRoomSize = document.querySelector('#js-room-size');
const inputNights = document.querySelector('#js-input-nights');
const inputParking = document.querySelector('#js-input-parking');


const stardard = 100,
    junior = 120,
    suite = 150;
    
const spa = 20;
const parking = 10;

//1. Calcular el coste total de la estancia
//  - Cosas a tener en cuenta:
//      a. el SPA aumenta la tarifa en 20€
//      b. la ocupación INDIVIDUAL reduce la tarifa el 25%
//      c. el DOBLE la deja igual
//      d. la TRIPLE incrementa un 25%
//      e. la noche de parking suma 10€

// 2. Como no tengo ningún objeto que recorrer, el precio final tendré que calcularlo acorde a lo que introduzca el usuario en el input