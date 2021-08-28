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

const cartContainer = document.querySelector('#js-product-list-container'); 
const spanSubtotal = document.querySelector('.js-subtotal');
const spanTaxes = document.querySelector('.js-taxes'); 
const spanTotal = document.querySelector('.js-total'); 
const btnEl = document.querySelector('.js-btn-calculate');

// const total = price * units;

/*----- 1. RENDER DINAMIC HTML IN DOM -----*/
// let's print the product with its property first



// const printIndex = product => {
//     // add description
//     const index = document.createElement('h5');
//     const indexContent = document.createTextNode(product.index);
//     index.appendChild(indexContent);
//     cartContainer.appendChild(index);
//     // set css class
//     index.setAttribute('class', 'product-list')
// }

// const printDescription = product => {
//     // add description
//     const description = document.createElement('h5');
//     const descriptionContent = document.createTextNode(product.description);
//     description.appendChild(descriptionContent);
//     cartContainer.appendChild(description);
//     // set css class
//     description.setAttribute('class', 'product-list')
// }

// const printPrice = product => {
// // lo voy a pintar en un span
//     const price = document.createElement('span');
//     console.log(price ,'es span?');
//     const priceContent = document.createTextNode(product.price);
//     console.log('priceContent', priceContent );
//     price.appendChild(priceContent);
//     price.innerHTML = product.price;
//     console.log( price.innerHTML, 'price');
// }

const createProduct = product => {
    const description = document.createElement('h5');
    const descriptionContent = document.createTextNode(product.description);
    description.appendChild(descriptionContent);
    cartContainer.appendChild(description);
    // set css class
    description.setAttribute('class', 'product-list')

    const price = document.createElement('span');
    console.log(price ,'es span?');
    const priceContent = document.createTextNode(product.price);
    console.log('priceContent', priceContent );
    price.appendChild(priceContent);
    description.appendChild(price);

    // price.innerHTML = product.price;
    console.log( price.innerHTML, 'price');
}

const printCart = productList => {
    // reset
    cartContainer.innerHTML = '';

    for (const product of productList) {
        createProduct(product); 
        // printDescription(product);
        // printPrice(product); 
        
        // const spanElement = document.createElement('span');
        // const spanContent = document.createTextNode('   - soy el span! :)')
        // spanElement.appendChild(spanContent);
        // description.appendChild(spanContent); 
    }
}

printCart(products);

/*----- 2. CALCULATE BILL -----*/

// - Multiplicar precio unitario por número de unidades
// - Calcular IVA: precio total producto * IVA / 100