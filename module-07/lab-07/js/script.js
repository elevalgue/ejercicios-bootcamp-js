'use strict';

console.log('Are you ready for a good time');

/*----- 1. VALIDAR IBAN: -----*/

// Caso 1
// Validar que se informa con dos letras, y los números correspondientes
const ibanPattern1 = /^([A-Z]{2}\d{22})$/;
const iban1 = ['ES6600190020961234567890'];

const ibanValidation = ibanPattern1.test(iban1);
    console.log('<---------- CAS0 1----------->');
    console.log(`Regexp matches with ${iban1} -------> ${ibanValidation}`);
    console.log('<---------------------------->');

// Caso 2
// Permitir que se incluyan espacios en ciertas áreas, daremos por valida estás dos cadenas
const ibanPattern2 = /(([ES]{2})\d{22})|(([A-Z]{2})\d{2}(\s\d{4}){5})/;
const iban2 = ['ES6600190020961234567890', 'ES66 0019 0020 9612 3456 7890'];

iban2.forEach(value => {
    console.log('<---------- CAS0 2 ----------->');
    console.log(`Regexp matches with  ${value} ------>  , ${ibanPattern2.test(value)}`);
    console.log('<----------------------------->');
});

// Caso 3
//
// C O R R E G I R  
//
// Extraer el código de páis y el dígito de control
const ibanPattern3 = /^(ES)\d{2}/;
const iban3 = ['ES6600190020961234567890', 'ES66 0019 0020 9612 3456 7890'];

iban3.forEach(value => {
    console.log('<---------- CAS0 3 ----------->');
    // console.log(`Regexp matches with ${value}? ------>   ${ibanPattern3.exec(value)}`);  
    console.log(`${ibanPattern3.exec(value)} el canguro camina palante`);  
    console.log('<----------------------------->');
});

/*----- 2. VALIDAR MATRÍCULA COCHE: -----*/

// Caso 1
// Validar una matrícula de coche moderna. Compuesta por 4 digitos y tres letras
const platePattern = /^\d{4}(\s|-|_)?[A-Za-z]{3}$/;
const plates = ['2021 GMD', '2345-GMD', '4532BDB', '0320-AAA'];

plates.forEach(value => {
    console.log('<---------- CAS0 1 ----------->');
    console.log(`Regexp matches with ${value} ------>  ${platePattern.test(value)}`);
    console.log('<----------------------------->');
})

// Caso 2
// Extraer la parte númerica
// Extraer las letras
const numberPattern = /^(\d{4})/;
const charactPattern = /[A-Z]{3}$/;

plates.forEach(value => {
    console.log('<---------- CAS0 2 ----------->');
    console.log(`${value} ------>  Números  ${numberPattern.exec(value)} ------>  Letras  ${charactPattern.exec(value)}`);
    console.log('<----------------------------->');
});

/*----- 2. VALIDAR MATRÍCULA COCHE: -----*/
// Extraer imágenes de un fichero HTML