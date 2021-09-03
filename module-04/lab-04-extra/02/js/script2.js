'use strict';

console.log('hello');

const selectType = document.querySelector('#js-room-type');
const selectOccup = document.querySelector('#js-room-occupation');
console.log(selectOccup);
const checkboxSpa = document.querySelector('#js-checkbox-spa');
const inputTotalNights = document.querySelector('#js-input-nights');
const inputParkingNights = document.querySelector('#js-input-parking');
const btnTotalPayment = document.querySelector('#js-btn');

function getRoomTypePrice() {
    const roomTypeValue = selectType.value;
    let roomTypePrice = 0

    switch (roomTypeValue) {
        case 'standard':
            roomTypePrice = 100;
            break;
        case 'junior':
            roomTypePrice = 120;
            break;
        case 'suite':
            roomTypePrice = 150;
            break;
    }

    // return roomTypePrice;
}


// function getSpaPrice() {
//     let spaPrice = 0;
//     if (checkboxSpa.checked) {
//         spaPrice = spaPrice + 20;
//         console.log(checkboxSpa.value, 'maricarmen');
//         console.log(spaPrice, 'taylor');
//     }

//     return spaPrice; 
// }

function getRoomOccupPrice() {
    const roomOccupValue = selectOccup.value;
    let roomOccupPrice = 0
    // console.log(roomOccupPrice);

    switch (roomOccupValue) {
        case 'single':
            roomOccupPrice = 1 * 0.75;
            console.log(roomOccupValue, roomOccupPrice, 'debería ver individual y 0,75');
            break;
        case 'triple':
            roomOccupPrice = 1 * 1.25;
            console.log(roomOccupValue, roomOccupPrice, 'debería ver triple y 1,25');

            break;
        case 'double':
            roomOccupPrice = 1;
            console.log(roomOccupValue, roomOccupPrice, 'debería ver doble y 1');
            break;
        }
        // console.log(roomOccupPrice);
}
    // return roomOccupPrice;
    
    // if (roomOccupValue === 'single') {
    //     roomOccupPrice = 2 * 0.75;
    //     console.log(roomOccupValue, roomOccupPrice, 'debería ver individual y 0,75');

    // } else if (roomOccupValue === 'triple') {
    //     roomOccupPrice = 1 * 1.25;
    //     console.log(roomOccupValue, roomOccupPrice, 'debería ver triple y 1,25');

    // } else if (roomOccupValue === 'double'){
    //     roomOccupPrice = 1;
    //     console.log(roomOccupValue, roomOccupPrice, 'debería ver doble y 1');
    // }

    // return roomOccupPrice; 
    // // console.log(roomOccupPrice, 'euros');


// function getNumberNights() {
//     const nightsValue = inputTotalNights.value;
//     console.log(nightsValue, 'noches');

//     return nightsValue;
// }

// function getParkingNights() {
//     const parkingNightsValue = inputParkingNights.value;
//     let parkingPrice = 10;
//     parkingPrice = parkingPrice * parkingNightsValue; 
//     console.log(parkingNightsValue, 'noches de parking');
//     console.log(parkingPrice, 'total precio parkeing');

//     return parkingPrice;
// }

function getTotalPayment(event) {
    event.preventDefault()
    let totalPayment = 0;
    console.log(totalPayment, 'maricarmen');
    totalPayment =
        (parseInt(getRoomTypePrice())* parseInt(getRoomOccupPrice()));
        // * getNumberNights()
        // + getParkingNights()
        // + getSpaPrice();

        console.log( totalPayment, 'miedo me da');
}

// Listeners
selectType.addEventListener('change', getRoomTypePrice);
selectOccup.addEventListener('change', getRoomOccupPrice);
// checkboxSpa.addEventListener('click', getSpaPrice);
// inputTotalNights.addEventListener('change', getNumberNights);
// inputParkingNights.addEventListener('change', getParkingNights);
btnTotalPayment.addEventListener('click', getTotalPayment);
