'use strict';

console.log('Are you ready for a good time? :))');

// Selectors

const inputNumber = document.querySelector('#js-inputNumber');
const buttonAdd = document.querySelector("#js-add");
const buttonSubst = document.querySelector("#js-substract");
const buttonEquals = document.querySelector("#js-equals");
const resultEl = document.querySelector("#js-result");

let result = 0;

// Handler
function handleClick() {
    resetInput();
    renderResult();
}

/*----- 1. GET INPUT VALUE -----*/
const getInputValue = () => {
    const inputValue = parseInt(inputNumber.value);
    console.log(inputValue, 'input value');
    return inputValue;
}

/*----- . RESET VALUE -----*/
const resetInput = () => {
    inputNumber.value = '';
}


/*----- 4. MATH OPERATIONS -----*/
let operation = '';
console.log(operation, 'maricarmennnnn');

function add() {
    operation = 'add';
    console.log(operation, 'debe´ria salir add');
    handleClick();
}

function substract() {
    operation = 'substract';
    console.log(operation, 'debería salir substract');
    handleClick();
}


/*----- 4. RUN OPERATIONS -----*/
function getOperationType() {
    switch (operation) {
        case 'add':
            result += getInputValue();
            console.log(operation, 'aquí qué pinta?');
            console.log(result, 'cambia result?');
            break;
    
        case 'substract':
            result -= getInputValue();
            console.log(operation, 'operation en substract');
            console.log(result, 'result en substract');
            break;
    
        case 'mutliply':
            result *= getInputValue();
            console.log(operation, 'operation en substract');
            console.log(result, 'result en substract');
            break;
    
        case 'divide':
            result /= getInputValue();
            console.log(operation, 'operation en substract');
            console.log(result, 'result en substract');
            break;
    }
}

/*----- 4. RENDER RESULT -----*/
function renderResult() {
    resultEl.innerHTML = result;
}

function getTotal() {
    renderResult();
    resetInput();
    result = 0;
    operation = '';
}

// Listeners
inputNumber.addEventListener('change', getInputValue);
inputNumber.addEventListener('change', getOperationType);
buttonAdd.addEventListener('click', add);
buttonAdd.addEventListener('click', substract);
buttonEquals.addEventListener('click', renderResult);
buttonEquals.addEventListener('click', getTotal);