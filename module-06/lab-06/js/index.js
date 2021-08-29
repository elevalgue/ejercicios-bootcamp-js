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

let subtotal = 0;
let taxType = 0;
let finalPrice = 0; 

const cartContainer = document.querySelector('#js-product-list-container'); 

const btnEl = document.querySelector('.js-btn-calculate');


/*----- 1. RENDER DINAMIC HTML IN DOM -----*/

const createProduct = product => {
    // add description
    const description = document.createElement('h5');
    const descriptionContent = document.createTextNode(product.description);
    description.appendChild(descriptionContent);
    cartContainer.appendChild(description);
    description.setAttribute('class', 'product-list')
    // add price
    const price = document.createElement('span');
    const priceContent = document.createTextNode(`${product.price} €/ud`);
    price.appendChild(priceContent);
    // se appendChild a description?
    description.appendChild(price);
    // add input
    const input = document.createElement('input');
    input.setAttribute('type', 'number');
    input.setAttribute('id', 'input');
    input.setAttribute('required', 'required');
    input.setAttribute('value', 'product.units');
    input.setAttribute('min', 0);
    input.setAttribute('max', 'product.stock');
    // se appendChild a description?
    description.appendChild(input);
    input.addEventListener('change', event => {
        product.units = Number(event.target.value);
        console.log(product.units, 'hello');
    }); 
}

    const printCart = productList => {
        cartContainer.innerHTML = '';
        for (const product of productList) {
            createProduct(product);
        }
    }

printCart(products);

/*----- 2. CALCULATE BILL -----*/
const calculateTotalPrice = product => {
    const productPrice = product.price * product.units;
    return productPrice; 
}

const calculateTaxes = product => {
    taxType += calculateTotalPrice(product) * (product.tax) / 100;
    return taxType
}

const calculateSubtotal = product => {
    subtotal = + calculateTotalPrice(product);
    return subtotal; 
}

const calculateFinalPrice = product => {
    finalPrice = subtotal + taxType; 
    return finalPrice; 
}

const calculateBill = productList => {
    for (const product of productList) {
        calculateSubtotal(product);
        calculateTaxes(product);
        calculateFinalPrice(product); 
    }

    const spanSubtotal = document.querySelector('.js-subtotal');
    spanSubtotal.innerHTML = subtotal.toFixed(2) + ' euris';

    const spanTaxes = document.querySelector('.js-taxes');
    spanTaxes.innerHTML = taxType.toFixed(2) + ' euris';
    
    const spanTotal = document.querySelector('.js-total');
    spanTotal.innerHTML = finalPrice.toFixed(2) + ' euris'
}


btnEl.addEventListener('click', () => console.log(products));
btnEl.addEventListener('click', calculateBill(products)); 