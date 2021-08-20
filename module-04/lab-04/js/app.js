'use strict'; 

console.log('A picar como locas!');

// SELECTORS
const resultEl = document.querySelector('span');
const buttonAdd = document.querySelector('#js-add');
const buttonSubst = document.querySelector('#js-substract');
const buttonMult = document.querySelector('#js-multiply');
const buttonDiv = document.querySelector('#js-divide');

// 1. Get input value
const getInputValueA = () => parseInt(document.querySelector('#js-inputNumberA').value);
const getInputValueB = () => parseInt(document.querySelector('#js-inputNumberB').value)

// 2. Math operations
const add = () => getInputValueA() + getInputValueB();
const substract = () => getInputValueA() - getInputValueB();
const multiply = () => getInputValueA() * getInputValueB();
const divide = () => getInputValueA() / getInputValueB();

// 3. Display results
const renderAdd = () => resultEl.innerHTML = add();
const renderSubst = () => resultEl.innerHTML = substract();
const renderMult = () => resultEl.innerHTML = multiply();
const renderDiv = () => resultEl.innerHTML = divide();

// 4. Display Errors
const renderError = () => {
    if ( isNaN(getInputValueB()) || isNaN(getInputValueB())) {
        console.log('maricarmen');
        resultEl.innerHTML = 'Introduzca un número válido en cada campo';
    } else {
        renderAdd();
        renderSubst();
        renderMult();
        renderDiv();
    }
}

// LISTENERS
buttonAdd.addEventListener('click', renderAdd);
buttonSubst.addEventListener('click', renderSubst);
buttonMult.addEventListener('click', renderMult);
buttonDiv.addEventListener('click', renderDiv);

buttonAdd.addEventListener('click', renderError);
buttonSubst.addEventListener('click', renderError);
buttonMult.addEventListener('click', renderError);
buttonDiv.addEventListener('click', renderError);
