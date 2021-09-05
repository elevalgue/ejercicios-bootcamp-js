'use strict';

console.log('Are you ready for a good time? :))');

const inputTotalAmount = document.querySelector('#js-total-amount'); 
const inputTotalGiven = document.querySelector('#js-total-given');
const btnCalculate = document.querySelector('#js-btn-calculate');

const moneyValue = [200, 100, 50, 20, 10, 5, 2, 1, 0.5, 0.2, 0.1, 0.05, 0.02, 0.01];
const moneyType = ['dos cientos', 'cien', 'ciencuenta', 'veinte', 'diez', 'cinco', 'dos euros', 'un euro', 'cincuenta centimos', 'veinte centimos', 'diez centimos', 'cinco centimos', 'dos centimos', 'un centimo'];


/*----- 1. GET INPUT VALUES -----*/
const getReturnValue = () => parseInt(inputTotalGiven.value) - parseInt(inputTotalAmount.value);

function getChange() {
    // const totalAmount = parseInt(inputTotalAmount.value);
    // console.log(totalAmount);

    // const totalGiven = parseInt(inputTotalGiven.value);
    // console.log(totalGiven);

    // let returnValue = totalGiven - totalAmount;
    let returnValue = getReturnValue();

    console.log(returnValue);
    // return returnValue; 

    const change = [];
    console.log(change, 'maricarmen');

    let amount = 0;
    console.log(amount, 'hey');

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

// function calculateChange() {
//     console.log(returnValue, 'hola');
    
// }

// Listener
btnCalculate.addEventListener('click', getReturnValue);
btnCalculate.addEventListener('click', getChange);
