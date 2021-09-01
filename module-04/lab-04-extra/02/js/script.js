'use strict';

console.log('Are you ready for a good time? :))');

const selectRoomType = document.querySelector('#js-room-type');
const selectRoomSize = document.querySelector('#js-room-size');
const inputSpa = document.querySelector('#js-checkbox-spa');
const inputNights = document.querySelector('#js-input-nights');
const inputParking = document.querySelector('#js-input-parking');
console.log(inputParking, 'hello');
const btnCalculate = document.querySelector('#js-btn');
const spanFinalPrice = document.querySelector('#js-final-price');


// const nightPrice = {
//     stardard: 100,
//     junior: 120,
//     suite: 150
// }
    
const spaPrice = 20;
const parkingPrice = 10;

// const fee = {
//     single: 0.75,
//     double: 1,
//     triple: 1.25,
// }


/*----- 1. CALCULATE ROOM PRICE -----*/
function getRoomPrice() {
    const roomType = selectRoomType.value;
    let price = 0;

    if (roomType === 'standard') {
        price = 100;
        console.log(roomType, price, 'mari');
    } else if (roomType === 'junior') {
        price = 120;
    } else {
        price = 150;
    }

    // Me está cogiendo el precio de la habitación tipo suite, esto es porque demomento estoy poniendo que el activador del evento sea el input?
    price = (inputSpa.checked) ? Number(price + 20) : Number(price);
    console.log(price, 'con spa');
    return Number(price); 
}

getRoomPrice();


/*----- 2. RE-CALCULATE PRICE DEPENDING ON OCCUPATION KIND -----*/
function getOccupationPrice(price) {
    const roomSize = selectRoomSize.value;

    if (roomSize === 'single') {
     
        
    } else if (roomSize === 'triple') {
        console.log(Number(price) * Number(1.25));
        return Number(price) * Number(1.25);
        
    } else {
        return price; 
    }
}

getOccupationPrice();

// function addParkingPrice() {
//     const parkingNights = inputParking.value;
//     console.log(parkingNights, 'hola');
//      return 10 * parkingNights; 

// }

// addParkingPrice(); 

// Listeners
selectRoomType.addEventListener('change', getRoomPrice);
selectRoomSize.addEventListener('change', getOccupationPrice);
// inputParking.addEventListener('change', addParkingPrice);