'use strict'; 

console.log('Are you ready for a good time? :))');

/**
 * C O M P U L S O R Y 
 */

/*----- 1. hasId -----*/
console.log('/*----- 1. hasId -----*/');

const object = {
    id: 1,
    name: 'Pepa',
    familyName: 'Tomate',
    age: 37,
}

console.log(object);

const hasId = ({id}) => id ? true : false;
console.log(hasId(object));


/*----- 2. head -----*/
console.log('/*----- 2. head -----*/');

const items = ['item1', 'item2', 'item3']
console.log(items);

const head = ([firstItem]) => firstItem;
console.log(head(items));


/*----- 3. tail -----*/
console.log('/*----- 3. tail -----*/');

const elements = ['elem1', 'elem2', 'elem3'];
console.log(elements);

const tail = ([ , ...restElem]) => restElem;
console.log(tail(elements));


/*----- 4. swapFirstToLast -----*/
console.log('/*----- 4. swapFirstToLast -----*/');

const elements2 = ['elem1', 'elem2', 'elem3'];
console.log(elements2);

const swapFirstToLast = (arr) => {
    const [firstEl, ...restElem] = elements2;
    console.log(elements2);
    const swappedElements = [...restElem, firstEl];
    
    return swappedElements
}

console.log(swapFirstToLast());


/*----- 5. excludeId -----*/
console.log('/*----- 5. excludeId -----*/');

const user = {
    id: 1,
    name: "Javi",
    surname: "Calzado",
    age: 36,
};

console.log(user);

const excludeId = (obj) => {
    const { id, ...rest } = user
    const newUserObj = { ...rest };
    return newUserObj; 
}
console.log(excludeId(user));

const excludeId2 = ({ id, ...rest }) => rest;
console.log(excludeId2(user));


/*----- 6. wordsStartingWithA -----*/
console.log('/*----- 6. wordsStartingWithA -----*/');

const words = ['ratón', 'alcancía', 'teclado', 'monitor', 'ordenador', 'acequia', 'almohada'];
console.log(words);
const pattern = /^(a|A)/;

const wordsStartingWithA = words => words.filter( word => pattern.test(word) === true );
console.log(wordsStartingWithA(words));


/*----- 7. concat -----*/
console.log('/*----- 7. concat -----*/');

function concat(...str) {
    words.join('|');
    return words.join('|');
}

console.log(concat(words));

const concat2 = (...str) => words.join('|');
console.log(concat2(words));


/*----- 8. multArray -----*/
console.log('/*----- 8. multArray -----*/');

const numberArray = [14, 22, 57, 3, 19];
console.log(numberArray);

const multArray = (arr, x) => numberArray.map(number => number * x);
console.log(multArray(numberArray, 2));
console.log(multArray(numberArray, 10));


/*----- 9. calcMult -----*/
console.log('/*----- 9. calcMult -----*/');

const calcMult = (...numbers) => numbers.reduce((acc, number) => acc * number, 1);
console.log(calcMult(2, 10, 3, 4));
console.log(calcMult(5, 2, 1, 3));