'use strict';

console.log('Hey you');

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
    if (Boolean(!result)) {
        result = getInputValue();
        clear();
    } else {
        result = result + getInputValue();
        return result; 
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
    document.querySelector('#js-inputNumber').value = '';
    document.querySelector('#js-result').innerHTML = '';
}

// LISTENERS
buttonClear.addEventListener('click', clear);
buttonAdd.addEventListener('click', add);
buttonEquals.addEventListener('click', renderAdd);

// buttonSubst.addEventListener('click', substract);
// buttonEquals.addEventListener('click', renderSubst);