'use strict';

console.log('hello');

const selectType = document.querySelector('#js-room-type');
const selectOccup = document.querySelector('#js-room-occupation');
const checkboxSpa = document.querySelector('#js-checkbox-spa');
const inputTotalNights = document.querySelector('#js-input-nights');
const inputParkingNights = document.querySelector('#js-input-parking');
const btnTotalPayment = document.querySelector('#js-btn');
const showTotal = document.querySelector('#js-final-price');

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


function getSpaPrice() {
    let spaPrice = 0;
    if (checkboxSpa.checked) {
        spaPrice = spaPrice + 20;
        console.log(checkboxSpa.value, 'maricarmen');
        console.log(spaPrice, 'taylor');
    }

    // return spaPrice; 
}

function getRoomOccupPrice() {
    const roomOccupValue = selectOccup.value;
    let roomOccupPrice = 0

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
    
        // return roomOccupPrice;
}
    
 

function getNumberNights() {
    const nightsValue = inputTotalNights.value;
    console.log(nightsValue, 'noches');

    // return nightsValue;
}

function getParkingNights() {
    const parkingNightsValue = inputParkingNights.value;
    let parkingPrice = 10;
    parkingPrice = parseInt(parkingPrice) * parseInt(parkingNightsValue); 
    console.log(parkingNightsValue, 'noches de parking');
    console.log(parkingPrice, 'total precio parking');

    // return parkingPrice;
}

function getTotalPayment(event) {
    event.preventDefault()
    let totalPayment = 0;
    // Si parseo tengo NaN y si no lo hago, undefined
    totalPayment = parseInt(getRoomTypePrice())
    // console.log(totalPayment, 'maricarmen');
        * getNumberNights()
        + getParkingNights()
        + getSpaPrice();

    console.log(totalPayment, 'que no salga NaN');
    showTotal.innerHTML = `Factura total: ${totalPayment} euros`
    
    // return totalPayment; 
}

// Listeners
selectType.addEventListener('change', getRoomTypePrice);
selectOccup.addEventListener('change', getRoomOccupPrice);
checkboxSpa.addEventListener('click', getSpaPrice);
inputTotalNights.addEventListener('change', getNumberNights);
inputParkingNights.addEventListener('change', getParkingNights);
btnTotalPayment.addEventListener('click', getTotalPayment);
