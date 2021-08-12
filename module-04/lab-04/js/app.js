'use strict';

console.log('Are you ready for a good time? :)');

const inputElement1 = document.querySelector('.js-number1');

const inputElement2 = document.querySelector('.js-number2');

const resultElement = document.querySelector('.js-number2');

const add = function () {
    let number1Value = inputElement1.value;
    number1Value = parseInt(inputElement1); 

    let number2Value = inputElement2.value;
    number2Value = parseInt(inputElement2);

    const resultValue = number1Value + number2Value
    console.log(resultValue);
}

inputElement1.addEventListener('change', add);

inputElement2.addEventListener('change', add);
