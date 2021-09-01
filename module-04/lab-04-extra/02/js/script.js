'use strict';

console.log('Are you ready for a good time? :))');

const selectRoomType = document.querySelector('#js-room-type');
const selectRoomSize = document.querySelector('#js-room-size');
const inputSpa = document.querySelector('#js-checkbox-spa');
const inputNights = document.querySelector('#js-input-nights');
const inputParking = document.querySelector('#js-input-parking');
const btnCalculate = document.querySelector('#js-btn');
const spanFinalPrice = document.querySelector('#js-final-price');


// const nightPrice = {
//     stardard: 100,
//     junior: 120,
//     suite: 150
// }
    
const spaPrice = 20;
const parkingPrice = 10;

const fee = {
    single: 0.75,
    double: 1,
    single: 1.25,
}

//1. Calcular el coste total de la estancia
//  - Cosas a tener en cuenta:
//      a. el SPA aumenta la tarifa en 20€
//      b. la ocupación INDIVIDUAL reduce la tarifa el 25% ---- 0.75
//      c. el DOBLE la deja igual ---- 1
//      d. la TRIPLE incrementa un 25% ---- 1,25
//      e. la noche de parking suma 10€

// 2. Como no tengo ningún objeto que recorrer, el precio final tendré que calcularlo acorde a lo que introduzca el usuario en el input

/*----- 1. CALCULATE ROOM PRICE -----*/

function calculateRoomPrice() {
    const roomType = selectRoomType.value;
    let price = 0;

    if (roomType === 'standard') {
        price = 100;
    } else if (roomType === 'junior') {
        price = 120;
    } else {
        price = 150;
    }

    price = (inputSpa.checked) ? price + 20 : price;
    return price; 
}

calculateRoomPrice();

// Listeners
selectRoomType.addEventListener('change', calculateRoomPrice)