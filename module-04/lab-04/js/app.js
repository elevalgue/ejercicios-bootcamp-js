'use strict';

console.log('Are you ready for a good time? :)');

const inputElement1 = document.querySelector('.js-number1');
const inputElement2 = document.querySelector('.js-number2');
const resultElement = document.querySelector('.js-number2');

const buttonElement = document.querySelector('.js-button');

const add = function () {
    let number1Value = inputElement1.value;
    console.log('maricarmen', number1Value);
    number1Value = parseInt(inputElement1); 

    let number2Value = inputElement2.value;
    console.log('pepino', number2Value);
    number2Value = parseInt(inputElement2);

    const resultValue = number1Value + number2Value
    console.log(resultValue, 'holi');

    if (isNaN(resultValue)) {
        resultElement.classList.add('error-text')
        resultElement.innerHTML = 'Corrige los datos'; 
    } else {
        resultElement.classList.remove('error-text')
        resultElement.innerHTML = resultValue; 
    }
}

inputElement1.addEventListener('change', add);
inputElement2.addEventListener('change', add);
