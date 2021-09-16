'use strict'; 

console.log('Are you ready for a good time? :))');

/**
 * C O M P U L S O R Y 
 */

/*----- 1. hasId -----*/
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
const items = ['item1', 'item2', 'item3']
console.log(items);

const head = ([firstItem]) => firstItem;
console.log(head(items));

/*----- 3. tail -----*/
const elements = ['elem1', 'elem2', 'elem3'];
console.log(elements);

const tail = ([ , ...restElem]) => restElem;
console.log(tail(elements));

