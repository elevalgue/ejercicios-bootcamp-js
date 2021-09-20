console.log('Are you ready for a good time? :))');

// Carrito de la compra

cesta = [
    {
        nombre: "Cerveza",
        cantidad: 1,
        precio: 2,
        tipoIVA: "general"
    },
    {
        nombre: "Galletas",
        cantidad: 3,
        precio: 1,
        tipoIVA: "reducido"
    },
    {
        nombre: "pan",
        cantidad: 4,
        precio: 0.5,
        tipoIVA: "superreducido"
    }
];

/**
 * Queremos calcular: 
 * - El subtotal de la compra (suma de producto son contar con el IVA).
 * - El total de compra (subtotal + IVA).
 */

// 1. Vamos a meter esta lógica dentro de una clase: 

class CarritoDeLaCompra {
    constructor() {
        this._cesta = [];
        this._subtotal = 0;
    }

    calculaSubtotal() {
        this._subtotal = this._cesta.reduce(
            (acumulado, {cantidad, precio}) => acumulado + (cantidad * precio), 0);
    }

    get subtotal() {
        return this._subtotal;
    }

    set cesta(cestaExterna) {
        this._cesta = cestaExterna;
        this.calculaSubtotal(); 
    }
}

const carrito = new CarritoDeLaCompra();

carrito.cesta = cesta; 

carrito.subtotal
console.log('subtotal', carrito.subtotal);