
'use strict';

console.log('Are you ready for a good time? :))');

// 1. Crear funciones con operaciones matemáticas y mostrar resultados en consola

// SELECTORS

const buttonAdd = document.querySelector('js-button-add'); 
const buttonSubstract = document.querySelector('js-button-substract'); 
const buttonmultiply = document.querySelector('js-button-multiply'); 
const buttonDivide = document.querySelector('js-button-division');

const result = document.querySelector('js-result');

// GET INPUT VALUE
const inputNumber1 = () => parseInt(document.querySelector('js-number1').value);
const inputNumber2 = () => parseInt(document.querySelector('js-number2').value);

console.log('maricarmen', inputNumber1);

// const add = (number1, number2) => {
//     console.log(inputNumber1);
//     return inputNumber1 + inputNumber2; 
   
// }

// const add = (number1, number2) => {
//     const firsNumber = parseInt(inputNumber1).value; 
//     const secondNumber = parseInt(inputNumber2).value;
//     console.log(resultAdd, 'maricarmen', inputNumber1, inputNumber2, firsNumber, secondNumber );
//     console.log(resultAdd, 'maricarmen', inputNumber1, inputNumber2, firsNumber, secondNumber );
//    return parseInt(firsNumber + secondNumber)
// }



// const divide = (number1, number2) => {
//     let resultDivide = inputNumber1 / inputNumber2
//     console.log(resultDivide, 'maricarmen', inputNumber1, inputNumber2);
// }

// add(inputNumber1, inputNumber2); 
// substract(inputNumber1, inputNumber2); 
// multiply(inputNumber1, inputNumber2); 
// divide(inputNumber1, inputNumber2); 


// buttonAdd.addEventListener('click', add); 
// 2. Añadir inputs corresponientes a los operandos, o sea 2

// 3. Añadir 4 botones: uno por operación 

// 4. Recoger los inpuits value y pasarlos por funciones 



// 5. Pintar resultado en pantalla: generRLOS dinameicamente en js: xElement.innerHTML = numnber; en un div, span, p lo que vea