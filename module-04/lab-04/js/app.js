'use strict'; 

console.log('A picar como locas!');

// SELECTORS

const buttonEl = document.querySelector('#js-btn');
const resultEl = document.querySelector('#js-result'); 

// 1. Get input value
const getInputValueA = () => {
    parseInt(document.querySelector('#js-inputNumberA').value)
}; 

const getInputValueB = () => {
    parseInt(document.querySelector('#js-inputNumberB').value)
}; 


// 2. Math operations
const add = () => { 
    getInputValueA() + getInputValueB()
}


// 3. Display result
const RenderAdd = () => resultEl.innerHTML = add();


// LISTENERS
buttonEl.addEventListener('click', RenderAdd); 
