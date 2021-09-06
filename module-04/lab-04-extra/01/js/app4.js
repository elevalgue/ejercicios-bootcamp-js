'use strict';

console.log('Are you ready for a good time? :))');

// Selectors

const inputNumber = document.querySelector('#js-inputNumber');


/*----- 1. GET INPUT VALUE -----*/
let result = 0;

function getInputValue() {
    const inputValue = parseInt(inputNumber.value);
    console.log(inputValue, 'input value');
}

inputNumber.addEventListener('change', getInputValue); 