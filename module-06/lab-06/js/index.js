'use strict';

console.log('Are you ready for a good time :))');

// Constantes.
const REGULAR_TYPE = 21;
const LOWER_TYPE = 4;
const EXEMPT_TYPE = 0;

// Entrada.
const products = [
    {
        description: "Goma de borrar",
        price: 0.25,
        tax: LOWER_TYPE,
        stock: 2,
        units: 0,
    },
    {
        description: "Lápiz H2",
        price: 0.4,
        tax: LOWER_TYPE,
        stock: 5,
        units: 0,
    },
    {
        description: "Cinta rotular",
        price: 9.3,
        tax: REGULAR_TYPE,
        stock: 2,
        units: 0,
    },
    {
        description: "Papelera plástico",
        price: 2.75,
        tax: REGULAR_TYPE,
        stock: 5,
        units: 0,
    },
    {
        description: "Escuadra",
        price: 8.4,
        tax: REGULAR_TYPE,
        stock: 3,
        units: 0,
    },
    {
        description: "Pizarra blanca",
        price: 5.95,
        tax: REGULAR_TYPE,
        stock: 2,
        units: 0,
    },
    {
        description: "Afilador",
        price: 1.2,
        tax: LOWER_TYPE,
        stock: 10,
        units: 0,
    },
    {
        description: "Libro ABC",
        price: 19,
        tax: EXEMPT_TYPE,
        stock: 2,
        units: 0,
    },
];

const cartContainer = document.querySelector('#js-cart-container'); 
const spanSubtotal = document.querySelector('.js-subtotal');
const spanTaxes = document.querySelector('.js-taxes'); 
const spanTotal = document.querySelector('.js-total'); 
const btnEl = document.querySelector('.js-btn-calculate');

// const total = price * units;

/*----- 1. RENDER DINAMIC HTML IN DOM -----*/
// let's print the product with its property first

const printProduct = product => {

}


const printCart = () => {
    // reset
    cartContainer.innerHTML = '';
    // recorro el objeto
    for (let index = 0; index < products.length; index++) {
        // const element = array[index];
        console.log(products[index].description);
        
        
        // 1. creo el elemento con createElement y lo almaceno en una constante
        // 2. si tiene elemento tiene contenido, lo creo con createTextNode
        // 3. Añado el contenido al elemento que he registrado arriba appendChild(content);
        // 4. Añado ese elemento al elemento padre
        // 5. Añado clases o atributos
        const newOlElem = document.createElement('ol');
        cartContainer.appendChild(newOlElem);
        
        const newLiElement = document.createElement('li');
        const liContent = document.createTextNode(products[index].description);
        newLiElement.appendChild(liContent);
        newLiElement.setAttribute('id', products.description);
        newOlElem.appendChild(newLiElement); 
        
        const spanElement = document.createElement('span');
        const spanContent = document.createTextNode('   - soy el span! :)')
        spanElement.appendChild(spanContent);
        newLiElement.appendChild(spanContent); 
    }
}
printCart();

/*----- 2. CALCULATE BILL -----*/

// - Multiplicar precio unitario por número de unidades
// - Calcular IVA: precio total producto * IVA / 100