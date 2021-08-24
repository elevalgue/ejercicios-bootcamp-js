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
let finalPrice = 0; 

for (const product of cart) {
    const productPrice = product.price * product.count;
    finalPrice += productPrice; 
}

console.log('El precio total del carrito de la compra asciende a ' + finalPrice + ' euris');

// 5. Filtrar por los productos que sean prime
for (const product of cart) {
    if (product.premium) {
        console.log('---------------------');
        console.log(' Estos son los productos premium: ' + product.name);
    } 
}

/**
 * O P T I O N A L 
 */

// 6. Si todos los productos son prime mostrar un mensaje "Pedido sin gastos de envío", si no "Este pedidoiene gastos de envío".
function displayPremiumOrNot() {
    let premium = true;
    for (const product of cart) {
        premium = premium && product.premium;
    }
    return !premium;
}

    if (displayPremiumOrNot()) {
        console.log('Pedido sin gastos de envío');
    } else {
        console.log('Este pedidoiene gastos de envío');
    }


// 7. Mostrar el carrito en un listado de html básico
// let bodyEl = document.querySelector('body');

// const displayCartList = () => {
    let codeHTML = ''; 
    for ( const product of cart) {

        codeHTML += `<div>`;
        codeHTML += `<ul>`;
        codeHTML += `<li>Nombre: ${product.name}</li>`;
        codeHTML += `<p>Id: ${product.id}</p>`;
        codeHTML += `<span>----------------</span>`;
        codeHTML += `<p>Precio: ${product.price}</p>`;
        codeHTML += `<span>----------------</span>`;
        codeHTML += `<p>Cantidad: ${product.count}</p>`;
        codeHTML += `<span>----------------</span>`;
        codeHTML += `<p>Premium: ${product.premium}</p>`;
        codeHTML += `<span>.........................................</span>`;
        codeHTML += `</ul>`;
        codeHTML += `</div>`;
    }

    let bodyEl = document.querySelector('body');
    bodyEl.innerHTML = codeHTML;
// }

// const paintProducts = () => {
//     let codeHTML = '';
//     for (let index = 0; index < products.length; index += 1) {
//       codeHTML += `<article class="card">`;
//       codeHTML += `<img src="${products[index].imageUrl}" class="card__img" alt="Camiseta de ${products[index].name}" />`;
//       codeHTML += `<h3 class="card__title">${products[index].name}</h3>`;
//       codeHTML += `<p class="card__description">${products[index].price} €</p>`;
//       codeHTML += `<button class="card__btn js-product-inc"
//         id="${products[index].id}"
//         data-index="${index}"
//         data-id="${products[index].id}"
//       >Añadir a la cesta</button>`;
//       codeHTML += `</article>`;
//     }
//     const cardsElement = document.querySelector('.js-cards');
//     cardsElement.innerHTML = codeHTML;
//     listenProductsClicks();
//   };
  
//   // cart
  
//   const paintCart = () => {
//     let codeHTML = '';
//     console.log(cart);
//     for (let index = 0; index < cart.length; index += 1) {
//       codeHTML += `<tr>`;
//       codeHTML += `<td>${cart[index].name}</td>`;
//       codeHTML += `<td>${cart[index].price}</td>`;
//       codeHTML += `<td>`;
//       codeHTML += `<button class="card__btn js-cart-decrement" id="${cart[index].id}">-</button>`;
//       codeHTML += ` ${cart[index].quantity} `;
//       codeHTML += `<button class="card__btn js-cart-increment" id="${cart[index].id}">+</button>`;
//       codeHTML += `</td>`;
//       codeHTML += `<td class="text-align-right">${cart[index].price * cart[index].quantity}€</td>`;
//       codeHTML += `</tr>`;
//     }
//     codeHTML += getCartTotalHtmlCode();
//     const cartsElement = document.querySelector('.js-cart');
//     cartsElement.innerHTML = codeHTML;
//     listenCartClicks();
//   };