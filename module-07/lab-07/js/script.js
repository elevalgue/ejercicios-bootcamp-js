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
    console.log('<---------- CAS0 1 ----------->');
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

plates.forEach(value => {
    console.log('<---------- CAS0 1 ----------->');
    console.log(`Regexp matches with plates ${value} //  ${platePattern.test(value)}`);
    console.log('<----------------------------->');
})

// Caso 2
// Extraer la parte númerica
// Extraer las letras
const platePattern2 = /^(\d{4})(\s|-|_)?([A-Z]{3})$/;
const plates2 = ["2021 GMD", "2345-GMD", "4532BDB", "0320-AAA"];
let separated2;
let index = 0;

for (index = 0; index < plates2.length; index++){
    console.log('<---------- CAS0 2 ----------->');
    separated2 = platePattern2.exec(plates2[index]);
    console.log('MATRÍCULA: ' + plates2[index] + 'NÚMEROS: ' +  separated2[1]);
    console.log('NÚMEROS: ' +  separated2[1]);
    console.log('LETRAS: ' + separated2[3]);
    console.log('<----------------------------->');
}

/*
 * O P T I O N A L 
 */

/*----- 3. EXTRAER IMAÁGENES DE UN FICHERO HTML: -----*/

// Caso 1
// Extraer imágenes de un fichero HTML
const imgLink = '<img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"/>'
const imgLinkPattern = /src=["|'](.*?)["|']/;

const execImg = imgLinkPattern.test(imgLink);
    console.log('<---------- CAS0 1 ----------->');
    console.log(`Regexp to exec ${imgLink}`);
    console.log('<---------------------------->');

// Caso 2
// De un HTML extraer todos los src de todos los objetos img:
const htmlPattern = /src=["|'](.*?)["|']/;
const htmlCode = `
<html>
        <body>
            <img src="https://image.freepik.com/iconos-gratis/github-circular_318-10610.jpg"/>
            <h1>ejemplo</h1>
            <img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"/>
        </body>
    </html>`

const exeHtml = htmlPattern.exec(htmlCode);
    console.log('<---------- CAS0 2 ----------->');
    console.log(`Regexp to exec ${htmlCode}`);
    console.log('<---------------------------->');
