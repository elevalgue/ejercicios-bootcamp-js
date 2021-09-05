'use strict';

console.log('Are you ready for a good time');

/*----- 1. VALIDAR IBAN: -----*/

// Caso 1
// Validar que se informa con dos letras, y los números correspondientes
const ibanPattern1 = /^([A-Z]{2}\d{22})$/;
const iban1 = ['ES6600190020961234567890'];

iban1.forEach(value => {
    console.log('<---------- CAS0 1----------->');
    console.log(`Regexp matches with ${value} ------> ${ibanPattern1.test(value)}`);
    console.log('<---------------------------->');
})

// Caso 2
// Permitir que se incluyan espacios en ciertas áreas, daremos por valida estás dos cadenas
const ibanPattern2 = /^([ES]{2}\d{2})(\s?d{4}){5}$/;
const iban2 = ['ES6600190020961234567890', 'ES66 0019 0020 9612 3456 7890'];

iban2.forEach(value => {
    console.log('<---------- CAS0 2 ----------->');
    console.log(`Regexp matches with ${value} ------>  , ${ibanPattern2.test(value)}`);
    console.log('<----------------------------->');
});

// Caso 3
// Extraer el código de páis y el dígito de control
const ibanPattern3 = /^(ES)\d{2}/;
const iban3 = ['ES6600190020961234567890', 'ES66 0019 0020 9612 3456 7890'];

iban3.forEach(value => {
    console.log('<---------- CAS0 3 ----------->');
    console.log(`Regexp matches with ${value}? ------>   ${ibanPattern3.exec(value)}`);  
    console.log('<----------------------------->');
});
