
'use strict';

console.log('Are you ready for a good time? :))');

// 1. Crear funciones con operaciones matemáticas y mostrar resultados en consola
let inputNumber1 = document.querySelector('js-number1'); 
let inputNumber2 = document.querySelector('js-number2');

const buttonAdd = document.querySelector('js-button-add'); 
const buttonSubstract = document.querySelector('js-button-substract'); 
const buttonmultiply = document.querySelector('js-button-multiply'); 
const buttonDivide = document.querySelector('js-button-division');

inputNumber1= 2;
inputNumber2 = 3; 

const handleAddition = (number1, number2) => {
    let resultAdd = inputNumber1 + inputNumber2
    console.log(resultAdd, 'maricarmen', inputNumber1, inputNumber2);
}

const handleSubstraction = (number1 , number2) => {
    let resultAdd = inputNumber1 - inputNumber2
    console.log(resultAdd, 'maricarmen', inputNumber1, inputNumber2);
}

const handleMultiplication = (number1, number2) => {
  let resultAdd = inputNumber1 * inputNumber2
    console.log(resultAdd, 'maricarmen', inputNumber1, inputNumber2);
}

const handleDivision = (number1, number2) => {
    let resultAdd = inputNumber1 / inputNumber2
    console.log(resultAdd, 'maricarmen', inputNumber1, inputNumber2);
}

handleAddition(inputNumber1, inputNumber2); 
handleSubstraction(inputNumber1, inputNumber2); 
handleMultiplication(inputNumber1, inputNumber2); 
handleDivision(inputNumber1, inputNumber2); 

// 2. Añadir inputs corresponientes a los operandos, o sea 2

// 3. Añadir 4 botones: uno por operación 

// 4. Recoger los inpuits value y pasarlos por funciones 



// 5. Pintar resultado en pantalla: generRLOS dinameicamente en js: xElement.innerHTML = numnber; en un div, span, p lo que vea