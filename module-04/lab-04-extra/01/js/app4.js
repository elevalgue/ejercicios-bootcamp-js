'use strict';

console.log('Are you ready for a good time? :))');

// Selectors

const inputNumber = document.querySelector('#js-inputNumber');
const buttonAdd = document.querySelector("#js-add");
const buttonEquals = document.querySelector("#js-equals");




/*----- 1. GET INPUT VALUE -----*/
let result = 0;

const getInputValue = () => {
    const inputValue = parseInt(inputNumber.value);
    console.log(inputValue, 'input value');
    // return inputValue; 
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
}

function calculate() {
    
}

/*----- 4. RUN OPERATIONS -----*/
function getOperationType() {
    switch (operation) {
        case 'add':
            result += getInputValue();
            console.log(operation, 'aquí qué pinta?');
            console.log(result, 'cambia result?');

            break;
    
        default:
            break;
    }
}

// Listeners
inputNumber.addEventListener('change', getInputValue);
inputNumber.addEventListener('change', getOperationType);
buttonAdd.addEventListener('click', add);