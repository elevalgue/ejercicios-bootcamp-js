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
const getInputValueA = () => parseInt(document.querySelector('#js-inputNumberA').value);
const getInputValueB = () => parseInt(document.querySelector('#js-inputNumberB').value);

// 2. Math operations
const add = () => {
    if (Boolean(getInputValueA()) && Boolean(getInputValueB())) {
        return getInputValueA() + getInputValueB() ;  
    } else {
        return "Error"; 
    }
}

const substract = () => {
    if (Boolean(getInputValueA()) && Boolean(getInputValueB())) {
        return getInputValueA() - getInputValueB() ;  
    } else {
        return "Error"; 
    }
}

const multiply = () => {
    if (Boolean(getInputValueA()) && Boolean(getInputValueB())) {
        return getInputValueA() * getInputValueB() ;  
    } else {
        return "Error"; 
    }
}

const divide = () => {
    if (Boolean(getInputValueA()) && Boolean(getInputValueB())) {
        return getInputValueA() / getInputValueB() ;  
    } else {
        return "Error"; 
    }
}

// 3. Display results
const renderAdd = () => resultEl.innerHTML = add();
const renderSubst = () => resultEl.innerHTML = substract();
const renderMult = () => resultEl.innerHTML = multiply();
const renderDiv = () => resultEl.innerHTML = divide();
const renderClear = () => resultEl.innerHTML = clear();

// 4. Clear
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

