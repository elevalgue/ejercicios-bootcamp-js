'use strict';

console.log('Lets go');

// Selectors
const inputTotalAmount = document.querySelector('#js-total-amount'); 
const inputTotalGiven = document.querySelector('#js-total-given');
const btnCalculate = document.querySelector('#js-btn-calculate'); 

const moneyValue = [200, 100, 50, 20, 10, 5, 2, 1, 0.5, 0.2, 0.1, 0.05, 0.02, 0.01];
const moneyType = ['dos cientos', 'cien', 'ciencuenta', 'veinte', 'diez', 'cinco', 'dos euros', 'un euro', 'cincuenta centimos', 'veinte centimos', 'diez centimos', 'cinco centimos', 'dos centimos', 'un centimo'];


const getCashValue = function () {
    console.log(inputTotalAmount);
    const cashValue = parseInt(inputTotalAmount.value);
    console.log(cashValue);
}

const getGivenMoney = function () {
    console.log(inputTotalAmount);
    const totalGivenValue = parseInt(inputTotalGiven.value);
    console.log(totalGivenValue);
}

const calculateChange = function (price, cash) {
    let returnValue = cash - price;
    const change = [];
    let amount = 0; 

    for (let index = 0; index < moneyValue.length; index++) {
        amount = Math.floor(returnValue / moneyValue[index]);
        
        if (amount > 0) {
            change[moneyType[index]] = amount;
            returnValue = returnValue % moneyValue[index]; 
        }
    }

    return change;
}

inputTotalAmount.addEventListener('change', getCashValue);
inputTotalGiven.addEventListener('change', getGivenMoney);

// console.log(calculateChange(250, 300));
// console.log(calculateChange(270, 300));
// console.log(calculateChange(319.7, 320));