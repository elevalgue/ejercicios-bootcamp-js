'use strict';

console.log('Are you ready for a good time? :))');


/*************************
 *       UTILIDADES       *
 *************************/

// /*----- 1. Crear un array vacío de longitud n: -----*/
// const emptyArray = new Array(3);
// console.log(emptyArray, 'array vacío de 3 elementos');

// const emptyArray2 = new Array(7);
// console.log(emptyArray2, 'array vacío de 7 elementos');

// /*----- 2. Rellenar todas las posiciones de un array con el mismo valor: -----*/
// const myArray = new Array(3);
// myArray.fill('Hello world')
// console.log(myArray, 'todos los elementos del array son "Hello world"');

// // En una sola línea
// const myArray2 = new Array(3).fill("Hello world");
// console.log(myArray2);


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


let workerName = [];
let schedule = []; 


/*----- 1. GENERATE RANDOM AVAILABILITY: -----*/
const getRandomNumber = () => Math.random() < 0.5; 

/*----- 2. GET PEOPLE AVAILABILITY: -----*/

function getRandomSchedule() {
    for (const worker of myTeam) {
        // console.log('--------------------');
        // console.log(`Horarios de ${worker.name}`);

        for (let index = 0; index < worker.availability.length; index++) {
            worker.availability[index] = getRandomNumber(); 
            
        }
    }
    console.log(myTeam);
}

console.log(getRandomSchedule());