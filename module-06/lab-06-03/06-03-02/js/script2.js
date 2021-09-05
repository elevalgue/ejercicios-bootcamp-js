'use strict';

console.log('Are you ready for a good time? :))');

const inputTotalAmount = document.querySelector('#js-total-amount'); 
const inputTotalGiven = document.querySelector('#js-total-given');
const btnCalculate = document.querySelector('#js-btn-calculate');

const moneyValue = [200, 100, 50, 20, 10, 5, 2, 1, 0.5, 0.2, 0.1, 0.05, 0.02, 0.01];


/*----- 1. GET INPUT VALUES -----*/


function getReturnValue() {
    const totalAmount = parseInt(inputTotalAmount.value);
    // console.log(totalAmount);

    const totalGiven = parseInt(inputTotalGiven.value);
    // console.log(totalGiven);

    let returnValue = totalGiven - totalAmount;
    console.log(returnValue);
}

// Listener
btnCalculate.addEventListener('click', getReturnValue); 
