'use strict';

console.log('Are you ready for a good time? :))');

const selectRoomType = document.querySelector('#js-room-type');
const selectRoomSize = document.querySelector('#js-room-size');
const inputSpa = document.querySelector('#js-checkbox-spa');
const inputNights = document.querySelector('#js-input-nights');
const inputParking = document.querySelector('#js-input-parking');
const btnCalculate = document.querySelector('#js-btn');
const spanFinalPrice = document.querySelector('#js-final-price');

const spaPrice = 20;
const parkingPrice = 10;

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
    price = (inputSpa.checked) ? parseInt(price + 20) : parseInt(price);
    console.log(price);
    return parseInt(price); 
}

getRoomPrice();


/*----- 2. RE-CALCULATE PRICE DEPENDING ON OCCUPATION KIND -----*/
function getOccupationPrice(price) {
    const roomSize = selectRoomSize.value;

// He probado Boolean, pero sigue dando NaN
    if (Boolean(roomSize === 'single')) {
        console.log(parseInt(price) * parseInt(0.75));
        console.log(typeof price);
        return parseInt(price) * parseInt(0.75);
    
    } else if (roomSize === 'triple') {
        console.log(parseInt(price) * parseInt(1.25));
        return parseInt(price) * parseInt(1.25);
        
    } else {
        return price; 
    }
}

getOccupationPrice();

/*----- 3. GET NIGHTS NUMBER -----*/
function getNights() {
    const totalNights = inputNights.value;
    return totalNights * parkingPrice; 
}

getNights(); 

/*----- 4. ADD PARKING FEE -----*/
function getParkingPrice(nights, price) {
    const parkingNights = inputParking.value;

    console.log(parkingNights * 10, 'hola');
     return 10 * parkingNights; 
}

getParkingPrice(5, 10); 

/*----- 5. VALIDATE INPUTS -----*/

// function validateInputs() {
//     if (roomType[selectRoomType] === undefined || roomSize[selectRoomSize] === undefined) {
    
//         return "Error";
        
//     // } else if ( === 0) {
        
//     // } else {
        
//     }
// }

// let finalPrice = 0
/*----- 5. CALCULATE TOTAL PRICE -----*/
// function calculateTotal() {
//     const priceRoomType = getRoomPrice();
//     const priceoccupationType = getOccupationPrice();
//     const priceParking = getParkingPrice();
//     const totalNights = getNights(); 
// }

// Listeners
selectRoomType.addEventListener('change', getRoomPrice);
inputNights.addEventListener('keyup', getNights);
selectRoomSize.addEventListener('change', getOccupationPrice);
// inputParking.addEventListener('change', getParkingPrice);
// btnCalculate.addEventListener('change', calculateTotal);