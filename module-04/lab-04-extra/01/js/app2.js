'use strict';

console.log('Are you ready for a good time? :)');

// SELECTORS
const resultEl = document.querySelector('#js-result');
const buttonAdd = document.querySelector('#js-add');
const buttonSubst = document.querySelector('#js-substract');
const buttonMult = document.querySelector('#js-multiply');
const buttonDiv = document.querySelector('#js-divide');
const buttonEquals = document.querySelector('#js-equals');
const buttonClear = document.querySelector('#js-clear');

/*----- 1. GET INPUT VALUE -----*/
const getInputValue = () => parseInt(document.querySelector('#js-inputNumber').value);
let result = 0; 

/*----- 2. MATH OPERATIONS -----*/
const add = () => {
    if (result !== null || result !== undefined) {
        result = result + getInputValue();
        clear();
        return result; 
    } else {
        console.log('hello');
        result = getInputValue();
        clear();
        result = 0; 
    }
}

// const add = () => {
//     if (!result) {
//         result = parseInt(getInputValue());
//         clear();
//     } else {
//         result = parseInt(result + getInputValue());
//         return parseInt(result); 
//     }   
// }



/*----- 3. DISPLAY RESULTS -----*/
const renderAdd = () => resultEl.innerHTML = add();
// const renderSubst = () => resultEl.innerHTML = substract();
const renderClear = () => resultEl.innerHTML = clear();

/*----- 4. CLEAR -----*/
const clear = () => {
    console.log('texto random');
    document.querySelector('#js-inputNumber').value = '';
    document.querySelector('#js-result').innerHTML = '';
}

const clearResult = () => {
    result = null;
    document.querySelector('#js-inputNumber').value = '';
    document.querySelector('#js-result').innerHTML = '';
}

// LISTENERS
buttonClear.addEventListener('click', clearResult);
buttonAdd.addEventListener('click', add);
buttonEquals.addEventListener('click', renderAdd);

// buttonSubst.addEventListener('click', substract);
// buttonEquals.addEventListener('click', renderSubst);