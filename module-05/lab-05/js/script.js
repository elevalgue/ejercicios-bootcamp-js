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

/**
 * C O M P U L S O R Y
 */

// 1. Mostrar el carrito de la ocompra
console.log('T A S K  01');
console.log(cart);

// 2. Listar productos
console.log('T A S K  02');

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
console.log('T A S K  03');

/**
 * Esta tarea está comentada para que en la siguiente aparezcan todos los productos originales del carrito de la compra
 */

// let index = 0; 

// for (let index = 0; index < cart.length; index++) {
//     let cartId = cart[index].id;
//     if (cartId === 54657) {
//         cart.splice(index, 1);
//     }
// }

// console.log(cart, 'tras splice');

// 4. Calcular el total del carrito de la compra (el coste de una línea es precio * cantidad)
console.log('T A S K  04');

let finalPrice = 0; 

for (const product of cart) {
    const productPrice = product.price * product.count;
    finalPrice += productPrice; 
}

console.log('El precio total del carrito de la compra asciende a ' + finalPrice + ' euris');

// 5. Filtrar por los productos que sean prime
console.log('T A S K  05');

for (const product of cart) {
    if (product.premium) {
        console.log('---------------------');
        console.log('Estos son los productos premium: ' + product.name);
    } 
}

/**
 * O P T I O N A L 
 */

// 6. Si todos los productos son prime mostrar un mensaje "Pedido sin gastos de envío", si no "Este pedido tiene gastos de envío".
console.log('T A S K  06');

function displayPremiumOrNot() {
    let premium = true;
    for (const product of cart) {
        if (premium = premium && product.premium) {
            console.log('Pedido sin gastos de envío');
            return !premium;
        } else {
        console.log('Este pedido tiene gastos de envío');
        }
    }  
}


    // if (displayPremiumOrNot()) {
    //     console.log('Pedido sin gastos de envío');
    // } else {
    //     console.log('Este pedidoiene gastos de envío');
    // }

 displayPremiumOrNot() ?  console.log('Pedido sin gastos de envío') : console.log('Este pedidoiene gastos de envío');

// 7. Mostrar el carrito en un listado de html básico
console.log('T A S K  07');

// const displayCartList = () => {
    let bodyEl = document.querySelector('body');
    let codeHTML = ''; 
    
    for ( const product of cart) {
        
        codeHTML += `<div>`;
        codeHTML += `<ul>`;
        codeHTML += `<li>Nombre: ${product.name}</li>`;
        codeHTML += `<p>Id: ${product.id}</p>`;
        codeHTML += `<span>--------------------</span>`;
        codeHTML += `<p>Precio: ${product.price}</p>`;
        codeHTML += `<span>--------------------</span>`;
        codeHTML += `<p>Cantidad: ${product.count}</p>`;
        codeHTML += `<span>--------------------</span>`;
        codeHTML += `<p>Premium: ${product.premium}</p>`;
        codeHTML += `<span>==============================</span>`;
        codeHTML += `</ul>`;
        codeHTML += `</div>`;
    }
    
    bodyEl.innerHTML = codeHTML;
// }

// 8. Aplicar un descuento del 5% si la compra es mayor de 100 €.
console.log('T A S K  08');

let total = 0;
for (const product of cart) {
    if (product.count * product.price > 100) {
        applyDiscount(cart)
    }

}
function applyDiscount(cart) {
        total += total.count * total.price
        if (total > 100) {
            let discount = total * 0.05;
            total = total - discount;
        }
}
    
    console.log('El total a pagar asciende a ' + total + ' euris');
