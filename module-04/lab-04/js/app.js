'use strict'; 

console.log('A picar como locas!');

// SELECTORS
const resultEl = document.querySelector('p');
const buttonAdd = document.querySelector('#js-add');
const buttonSubst = document.querySelector('#js-substract');
const buttonMult = document.querySelector('#js-multiply');
const buttonDiv = document.querySelector('#js-divide');

// const inputValueA = document.querySelector('#js-inputNumberA').value; 
// const inputValueB = document.querySelector('#js-inputNumberB').value; 

// 1. Get input value
const getInputValueA = () => {
    parseInt(document.querySelector('#js-inputNumberA').value)
};

// const getInputValueA = () => {
//     parseInt(inputValueA); 
// }; 


const getInputValueB = () => {
    parseInt(document.querySelector('#js-inputNumberB').value)
};

// const getInputValueB = () => {
//     parseInt(inputValueB )
// }; 

// 2. Math operations
const add = () => { 
    getInputValueA() + getInputValueB()
}

// Substract
// Multiply
// Divide

// 3. Display results
const RenderAdd = () => {
    console.log(resultEl.innerHTML = add());
    resultEl.innerHTML = add();
}

// Substract
// Multiply
// Divide


// 4. Display Errors

const renderError = () => {
    if ( isNaN(getInputValueB()) || isNaN(getInputValueB())) {
        console.log('maricarmen');
        resultEl.innerHTML = 'Los campos no pueden quedar vacíos';
    } else {
        RenderAdd();
        console.log('pepino');
    }
}

// LISTENERS
buttonAdd.addEventListener('click', RenderAdd);
buttonAdd.addEventListener('click', renderError);
