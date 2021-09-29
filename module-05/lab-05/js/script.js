'use strict'; 

const cart = [
    {
        id: 198752,
        name: "Tinta DJ27 Color",
        price: 52.95,
        count: 3,
        premium: false,
    },
    {
        id: 75621,
        name: "Impresora ticketera PRO-201",
        price: 32.75,
        count: 2,
        premium: true,
    },
    {
        id: 54657,
        name: "Caja de rollos de papel para ticketera",
        price: 5.95,
        count: 3,
        premium: true,
    },
    {
        id: 3143,
        name: "Caja de folios DIN-A4 80gr",
        price: 9.95,
        count: 2,
        premium: true,
    }
]

/**
 * C O M P U L S O R Y
 */

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

// 4. Calcular el total del carrito de la compra (el coste de una línea es precio * cantidad)

/**
 * He vuelto a declarar el array con otro nombre para que no se vea alterado por el splice de la tarea anterior
 */

const shoppingCart = [
    {
        id: 198752,
        name: "Tinta DJ27 Color",
        price: 52.95,
        count: 3,
        premium: false,
    },
    {
        id: 75621,
        name: "Impresora ticketera PRO-201",
        price: 32.75,
        count: 2,
        premium: true,
    },
    {
        id: 54657,
        name: "Caja de rollos de papel para ticketera",
        price: 5.95,
        count: 3,
        premium: true,
    },
    {
        id: 3143,
        name: "Caja de folios DIN-A4 80gr",
        price: 9.95,
        count: 2,
        premium: true,
    }
]

let finalPrice = 0; 

for (const product of shoppingCart) {
    const productPrice = product.price * product.count;
    finalPrice += productPrice; 
}

console.log('El precio total del carrito de la compra asciende a ' + finalPrice + ' euris');

// 5. Filtrar por los productos que sean prime
console.log('T A S K  05');

for (const product of shoppingCart) {
    if (product.premium) {
        console.log('---------------------');
        console.log('Estos son los productos premium: ' + product.name);
    } 
}

/**
 * O P T I O N A L 
 */

// 6. Si todos los productos son prime mostrar un mensaje "Pedido sin gastos de envío", si no "Este pedido tiene gastos de envío".
function displayPremiumOrNot(shoppingCart) {
    let premium = true;
    for (const product of shoppingCart) {
        if (product.premium === false) {
            return 'Este pedido tiene gastos de envío. 💰';
        } 
    }  
    return 'Pedido sin gastos de envío 🚀';
}

console.log(displayPremiumOrNot(shoppingCart));

// 7. Mostrar el carrito en un listado de html básico
function displayCartList(shoppingCart) {
   
    let bodyEl = document.querySelector('body');
    let codeHTML = ''; 
    
    for ( const product of shoppingCart) {
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
}

displayCartList(shoppingCart); 

// 8. Aplicar un descuento del 5% si la compra es mayor de 100 €.
function applyDiscount() {

    let subTotal = 0;
    
    for (const product of shoppingCart) {
        subTotal += product.count * product.price;
        console.log('ID: ' + product.id + ' - ' + 'PRECIO: '+ product.price + ' - ' + 'CANTIDAD:' + product.count + ' - ' + 'TOTAL: ' + subTotal);
    }
    console.log(subTotal, 'hellow');
    let discount = subTotal * 0.05;
    if (subTotal > 100) {
       let total = subTotal - discount; 
       return total; 
    }
}

console.log(applyDiscount());
