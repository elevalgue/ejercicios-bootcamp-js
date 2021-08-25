'use strict'; 

console.log('A picar como locas!');

// SELECTORS
const resultEl = document.querySelector('#js-result');
const buttonAdd = document.querySelector('#js-add');
const buttonSubst = document.querySelector('#js-substract');
const buttonMult = document.querySelector('#js-multiply');
const buttonDiv = document.querySelector('#js-divide');
const buttonClear = document.querySelector('#js-clear');

// 1. Get input value
const getInputValueA = () => document.querySelector('#js-inputNumberA').value;
const getInputValueB = () => document.querySelector('#js-inputNumberB').value;

// 2. Math operations
const add = () => {
    console.log(document.querySelector('#js-inputNumberA').value);
    if (getInputValueA() !== '' && getInputValueB() !== '') {
        return parseInt(getInputValueA()) + parseInt(getInputValueB()) ;  
    } else {
        return "Error"; 
    }
}

const substract = () => getInputValueA() - getInputValueB();
const multiply = () => getInputValueA() * getInputValueB();
const divide = () => getInputValueA() / getInputValueB();

// 3. Display results
const renderAdd = () => resultEl.innerHTML = add();
const renderSubst = () => resultEl.innerHTML = substract();
const renderMult = () => resultEl.innerHTML = multiply();
const renderDiv = () => resultEl.innerHTML = divide();
const renderClear = () => resultEl.innerHTML = clear();

// 5. Clear
const clear = () => {
    document.querySelector('#js-inputNumberA').value = ''; 
    document.querySelector('#js-inputNumberB').value = '';
    document.querySelector('#js-result').innerHTML= '';
}

// LISTENERS
buttonAdd.addEventListener('click', renderAdd);
buttonSubst.addEventListener('click', renderSubst);
buttonMult.addEventListener('click', renderMult);
buttonDiv.addEventListener('click', renderDiv);

buttonClear.addEventListener('click', clear);

