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
// const add = () => {
//     if (Boolean(getInputValue()) + result) {
//         console.log(typeof getInputValue(), typeof result, 'maricarmen');
//         return getInputValue() + result;  
//     } else {
//         return "Error"; 
//     }
// }

const add = () => {
    if (result === null) {
        result = getInputValue();
        console.log(result, 'hello');
        console.log(getInputValue, 'hello there');
    } else {
        result = result + getInputValue()
    }

    return result; 
}

// const substract = () => {
//     if (Boolean(getInputValueA()) && Boolean(getInputValueB())) {
//         return getInputValueA() - getInputValueB() ;  
//     } else {
//         return "Error"; 
//     }
// }

// 3. Display results
const renderAdd = () => resultEl.innerHTML = add();
const finalResult = () => document

// const renderSubst = () => resultEl.innerHTML = substract();

// const renderClear = () => resultEl.innerHTML = clear();

// 4. Clear
// const clear = () => {
//     document.querySelector('#js-inputNumberA').value = ''; 
//     document.querySelector('#js-result').innerHTML= '';
// }

// LISTENERS
buttonAdd.addEventListener('click', renderAdd);
// buttonSubst.addEventListener('click', renderSubst);
// buttonClear.addEventListener('click', clear);

