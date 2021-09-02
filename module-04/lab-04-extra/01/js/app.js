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
const add = () => {
    if (!result) {
        result = parseInt(getInputValue());
        console.log(result, 'resultado2');
        console.log('paso por el if');
        clear();
    } else {
        console.log(getInputValue(), 'prueba');
        result = parseInt(result + getInputValue());
        console.log(result, 'hola');
        console.log('paso por el else');
        return parseInt(result); 
    }
    console.log('Estoy fuera del condicional');
}

console.log('Estoy fuera de la función', result);


// 3. Display results
const renderAdd = () => resultEl.innerHTML = add();

// 4. Clear
const clear = () => {
    document.querySelector('#js-inputNumber').value = '';
    document.querySelector('#js-result').innerHTML= '';
}

// LISTENERS
buttonClear.addEventListener('click', clear);
buttonAdd.addEventListener('click', add);
buttonEquals.addEventListener('click', renderAdd);