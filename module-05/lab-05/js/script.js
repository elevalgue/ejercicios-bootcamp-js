'use strict'; 

console.log('Are you ready for a good time? :)');

const cart = [
    {
    id: 198752,
    name: "Tinta DJ27 Color",
    price: 52.95,
    count: 3,
    premium: true
    },
    {
    id: 75621,
    name: "Impresora ticketera PRO-201",
    price: 32.75,
    count: 2,
    premium: true
    },
    {
    id: 54657,
    name: "Caja de rollos de papel para ticketera",
    price: 5.95,
    count: 3,
    premium: false
    },
    {
    id: 3143,
    name: "Caja de folios DIN-A4 80gr",
    price: 9.95,
    count: 2,
    premium: false
    }
]

// 1. Mostrar el carrito de la ocompra
console.log(cart);

// 2. Listar productos
for (let index = 0; index < cart.length; index++) {
    displayCart(cart[index]);
}

function displayCart(product) {
    console.log('--------------');
    console.log('Producto: ' + product.id);
    console.log('Precio:  ' + product.price);
    console.log('Cantidad:  ' + product.count);
    console.log('Es premium:  ' + product.premium);
}

// 3. Eliminar el producto con id 54657 del carrito de la compra
let index = 0; 

for (let index = 0; index < cart.length; index++) {
    let cartId = cart[index].id;
    if (cartId === 54657) {
        cart.splice(index, 1);
    }
}

console.log(cart, 'tras splice');

// Calcular el total del carrito de la compra (el coste de una línea es precio * cantidad)

let finalPrice = 0; 

for (const product of cart) {
    // const productPrice = product.price * product.count;
    finalPrice += product.price * product.count; 
}

console.log('El precio total del carrito de la compra asciende a ' + finalPrice + ' euris');
console.log('El precio total del carrito de la compra asciende a ' + finalPrice + ' euris');
console.log(Math.round(finalPrice), 'se ha redondeado el número?');
// let total = 0;
// for (reserva of bookings) {
//     total += reserva.price * reserva.count; 
// }

// console.log('Total: ' + total + ' euris');

// function imprimir(booking) {
//     console.log('---------------');
//     for ( attr in booking) {
//         console.log(attr.toUpperCase() + ': ' + booking[attr])
//     }
// }