'use strict';

console.log('Are you ready for a good time? :))');

const inputTotalAmount = document.querySelector('#js-total-amount'); 
const inputTotalGiven = document.querySelector('#js-total-given');
const btnCalculate = document.querySelector('#js-btn-calculate');

// const moneyValue = [200, 100, 50, 20, 10, 5, 2, 1, 0.5, 0.2, 0.1, 0.05, 0.02, 0.01];
// const moneyType = ['dos cientos', 'cien', 'ciencuenta', 'veinte', 'diez', 'cinco', 'dos euros', 'un euro', 'cincuenta centimos', 'veinte centimos', 'diez centimos', 'cinco centimos', 'dos centimos', 'un centimo'];

const money = [
    {
        name: 'dos cientos',
        value: 200,
    },
    {
        name: 'cien',
        value: 100,
    },
    {
        name: 'ciencuenta',
        value: 50,
    },
    {
        name: 'veinte',
        value: 20,
    },
    {
        name: 'diez',
        value: 10,
    },
    {
        name: 'cinco',
        value: 5,
    },
    {
        name: 'dos euros',
        value: 2,
    },
    {
        name: 'un euro',
        value: 1,
    },
    {
        name: 'cincuenta centimos',
        value: 0.5,
    },
    {
        name: 'veinte centimos',
        value: 0.2,
    },
    {
        name: 'diez centimos',
        value: 0.1,
    },
    {
        name: 'cinco centimos',
        value: 0.05,
    },
    {
        name: 'dos centimos',
        value: 0.02,
    },
    {
        name: 'un centimos',
        value: 0.01,
    },
]

/*----- 1. GET INPUT VALUES -----*/
const getReturnValue = () => parseInt(inputTotalGiven.value) - parseInt(inputTotalAmount.value);

function getChange() {
    let returnValue = getReturnValue();
    console.log(returnValue);
    // return returnValue; 

    const change = [];
    console.log(change, 'maricarmen');

    let amount = 0;
    console.log(amount, 'hey');

    for (const item of money) {
        amount = Math.floor(returnValue / item.value);
    
        if (amount > 0) {
            change[item.name] = amount;
            returnValue = returnValue % item.value; 
        } 
    }
    // for (let index = 0; index < money.value.length; index++) {
    //     amount = Math.floor(returnValue / money.value[index]);
    
    //     if (amount > 0) {
    //         change[money.name[index]] = amount;
    //         returnValue = returnValue % money.value[index]; 
    //     }
    // }

    console.log(change, 'hola');
    // return change;
}


// Listener
btnCalculate.addEventListener('click', getReturnValue);
btnCalculate.addEventListener('click', getChange);
