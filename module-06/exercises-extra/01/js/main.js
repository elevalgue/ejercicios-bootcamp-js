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
