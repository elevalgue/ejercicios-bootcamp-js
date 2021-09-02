'use strict';

console.log('Are you ready for a good time? :))');


/*************************
 *       UTILIDADES       *
 *************************/

/*----- 1. Crear un array vacío de longitud n: -----*/
const emptyArray = new Array(3);
console.log(emptyArray, 'array vacío de 3 elementos');

const emptyArray2 = new Array(7);
console.log(emptyArray2, 'array vacío de 7 elementos');

/*----- 2. Rellenar todas las posiciones de un array con el mismo valor: -----*/
const myArray = new Array(3);
myArray.fill('Hello world')
console.log(myArray, 'todos los elementos del array son "Hello world"');

// En una sola línea
const myArray2 = new Array(3).fill("Hello world");
console.log(myArray2);


/*************************
 *        AGENDA         *
 *************************/


// Constantes
const WORK_HOURS = [
"08:00 - 09:00",
"09:00 - 10:00",
"10:00 - 11:00",
"11:00 - 12:00",
"12:00 - 13:00",
"13:00 - 14:00",
"15:00 - 16:00",
"16:00 - 17:00"
];

// Datos
const myTeam = [
    {
        name: "María",
        availability: new Array(8).fill(true)
    },
    {
        name: "Pedro",
        availability: new Array(8).fill(true)
    },
    {
        name: "Esther",
        availability: new Array(8).fill(true)
    },
    {
        name: "Marcos",
        availability: new Array(8).fill(true)
    },
];

// Algoritmo

/*----- 1. Generación aleatoria de la disponibilidad: -----*/

let workerName = [];
let schedule = []; 

// const range = max - min + 1;
// Math.floor(Math.random() * range) + min; // Números aleatorios enteros en el rango [min, max]

let i = 0;
let j = 0;

function assignSchedule() {
    for (let i = 0; i < myTeam.length; i++) {
        workerName = myTeam[i].name;
        console.log(workerName);

        for (let j = 0; j < WORK_HOURS.length; j++) {
            schedule = WORK_HOURS[j];
            console.log(schedule);  
        }
    }
}

assignSchedule();

const range = 8 - 0 + 1;


function assignRandomSchedule(max, min) {
    Math.floor(Math.random() * range); // Números aleatorios enteros en el rango [0, 50]
    
}

console.log(assignRandomSchedule(8, 1));
