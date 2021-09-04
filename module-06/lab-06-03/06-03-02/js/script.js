'use strict';

console.log('Lets go');

// Selectors
const inputTotalAmount = document.querySelector('#js-total-amount'); 
const inputTotalGiven = document.querySelector('#js-total-given');
const btnCalculate = document.querySelector('#js-btn-calculate'); 

const moneyTypes = [200, 100, 50, 20, 10, 5, 2, 1, 0.5, 0.2, 0.1, 0.05, 0.02, 0.01];

const calculateChange = function (price, cash) {
    const returnValue = cash - price;
    const change = [];
    let amount = 0; 

    for (let index = 0; index < moneyTypes.length; index++) {
        amount = Math.floor(returnValue / moneyTypes[index]);
        
        if (amount > 0) {
            change[moneyTypes[index]] = amount;
            returnValue = amount % moneyTypes[index]; 
        }
    }
    return change;
}

console.log(calculateChange(200, 233));
console.log(calculateChange(272, 300));