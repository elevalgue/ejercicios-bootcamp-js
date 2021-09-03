'use strict';

console.log('Alright!');

/*************************
 *       CUADRARDO       *
 *************************/

let i = 0;
let j = 0;
let acc = '';

const square = (n, char) => {
    
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            acc += char; 
            console.log( acc);
            acc = ''; 
        }
    }
}

console.log(square(1, '*'));
console.log(square(2, '$'));
console.log(square(3, '@'));