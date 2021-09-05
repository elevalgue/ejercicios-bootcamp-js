'use strict';

console.log('Are you ready for a good time? :))');

const inputTotalAmount = document.querySelector('#js-total-amount'); 
const inputTotalGiven = document.querySelector('#js-total-given');
const btnCalculate = document.querySelector('#js-btn-calculate');
const spanChange = document.querySelector('#js-change');

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

const change = [];
/*----- 2. GET CHANGE -----*/
function getChange() {
    let returnValue = getReturnValue();
    console.log(returnValue);
    // return returnValue; 

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

    console.log(change, 'hola');
    return change;
}
spanChange.innerHTML = `${change.name}`;

/*----- 3. RENDER CHANGE -----*/


// Listeners
btnCalculate.addEventListener('click', getReturnValue);
btnCalculate.addEventListener('click', getChange);
