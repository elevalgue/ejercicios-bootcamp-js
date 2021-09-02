'use strict'; 

// SELECTORS
const resultEl = document.querySelector('#js-result');
const buttonAdd = document.querySelector('#js-add');
const buttonSubst = document.querySelector('#js-substract');
const buttonMult = document.querySelector('#js-multiply');
const buttonDiv = document.querySelector('#js-divide');
const buttonEquals = document.querySelector('#js-equals');
const buttonClear = document.querySelector('#js-clear');

// 1. Get input value
const getInputValue = () => parseInt(document.querySelector('#js-inputNumber').value);
let result = 0; 

// 2. Math operations
const

// 3. Clear

const clear = () => {
    document.querySelector('#js-inputNumber').value = '';
    document.querySelector('#js-result').innerHTML= '';
}

// LISTENERS
buttonClear.addEventListener('click', clear);