'use strict';

console.log('Maricarmen :)');


let numbers = [];

const randomPick = (n, min, max) => {
    const range = max - min + 1;
    const getRandomNumber = () => Math.floor(Math.random() * range) + min;
    
    for (let index = 0; index < n; index++) {
        numbers[index] = getRandomNumber(); 
    }

    for (let index = 0; index < n; index++) {
        if (numbers[index] === numbers [index++]) {
            numbers[index] = getRandomNumber(); 
        }
    }

    return numbers
}

randomPick(10, 1, 100);
console.log(randomPick());