'use strict';

console.log('Are you ready for a good time');

/**
 * C O M P U L S O R Y 
 */

/*----- 1. VALIDAR IBAN: -----*/

// Caso 1
// Validar que se informa con dos letras, y los números correspondientes
const ibanPattern1 = /^([A-Z]{2}\d{22})$/;
const iban1 = ['ES6600190020961234567890'];

const ibanValidation = ibanPattern1.test(iban1);
    console.log('<---------- CAS0 1----------->');
    console.log(`Regexp matches with ${iban1} // ${ibanValidation}`);
    console.log('<---------------------------->');

// Caso 2
// Permitir que se incluyan espacios en ciertas áreas, daremos por valida estás dos cadenas
const ibanPattern2 = /^(([ES]{2})\d{22})|(([A-Z]{2})\d{2}(\s\d{4}){5}$)/;
const iban2 = ['ES6600190020961234567890', 'ES66 0019 0020 9612 3456 7890'];

iban2.forEach(value => {
    console.log('<---------- CAS0 2 ----------->');
    console.log(`Regexp matches with iban2 ${value} // ${ibanPattern2.test(value)}`);
    console.log('<----------------------------->');
});


// Caso 3
// Extraer el código de páis y el dígito de control
const ibanPattern3 = /^([A-Z]{2})(\d{2})(\s?\d{4}){5}$/;
const iban3 = "ES6600190020961234567890";
let separated = ibanPattern3.exec(iban3);

console.log('<---------- CAS0 3 ----------->');
console.log(separated);
console.log("Country CODE: " + separated[1]);
console.log("Check DIGIT " + separated[2]);
console.log('<----------------------------->');


/*----- 2. VALIDAR MATRÍCULA COCHE: -----*/

// Caso 1
// Validar una matrícula de coche moderna. Compuesta por 4 digitos y tres letras
const platePattern = /^\d{4}(-|\s)?[A-Z]{3}$/;
const plates = ['2021 GMD', '2345-GMD', '4532BDB', '0320-AAA'];
let separated2; 


plates.forEach(value => {
    console.log('<---------- CAS0 1 ----------->');
    console.log(`Regexp matches with plates ${value} //  ${platePattern.test(value)}`);
    console.log('<----------------------------->');
})

// Caso 2
// Extraer la parte númerica
// Extraer las letras
for (let index = 0; index < plates.length; index++) {
    let separated2 = platePattern.exec(plates);
    console.log("LETTERS: " + separated[1]);
    console.log("NUMBERS: " + separated[2]);
    console.log('<----------------------------->');
}

/**
 * O P T I O N A L 
 */
/*----- 3. EXTRAER IMAÁGENES DE UN FICHERO HTML: -----*/
// Extraer imágenes de un fichero HTML