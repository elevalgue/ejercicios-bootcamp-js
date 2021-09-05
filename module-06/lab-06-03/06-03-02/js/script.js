'use strict';

console.log('Lets go');

// Selectors
const inputTotalAmount = document.querySelector('#js-total-amount'); 
const inputTotalGiven = document.querySelector('#js-total-given');
const btnCalculate = document.querySelector('#js-btn-calculate'); 

const moneyValue = [200, 100, 50, 20, 10, 5, 2, 1, 0.5, 0.2, 0.1, 0.05, 0.02, 0.01];
const moneyType = ['dos cientos', 'cien', 'ciencuenta', 'veinte', 'diez', 'cinco', 'dos euros', 'un euro', 'cincuenta centimos', 'veinte centimos', 'diez centimos', 'cinco centimos', 'dos centimos', 'un centimo'];

/*----- 1. GET INPUT VALUES -----*/
const getReturnValue = () => parseInt(inputTotalGiven.value); - parseInt(inputTotalAmount.value) 

/*----- 2. CALCULATE OPTIMAL CHANGE -----*/
const calculateChange = function () {
    let returnValue = getReturnValue();

    console.log(returnValue, 'maricarmen');
    const change = [];
    let amount = 0; 

    for (let index = 0; index < moneyValue.length; index++) {
        amount = Math.floor(returnValue / moneyValue[index]);
        
        if (amount > 0) {
            change[moneyType[index]] = amount;
            returnValue = returnValue % moneyValue[index]; 
        }
    }
console.log(change, 'hola');
    // return change;
}

btnCalculate.addEventListener('click', calculateChange); 

