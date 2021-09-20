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
 * - El total de compra (subtotal + IVA).
 */

class CarritoDeLaCompra {
    constructor() {
        this._cesta = [];
        this._subtotal = 0;
        this._total = 0;
    }

    calculaFactorIVA(tipoIVA) {
        switch (tipoIVA) {
            case 'general':
                return 1.21;
            
            case 'reducido':
                return 1.1;
            
            case 'superreducido':
                return 1.04;
        }

        return 1; 
    }

    calculaSubtotal() {
        this._subtotal = this._cesta.reduce((acumulado, { cantidad, precio }) =>
            acumulado + (cantidad * precio),
        0);
    }

    calculaTotal() {
        this._total = this._cesta.reduce((acumulado, { cantidad, precio, tipoIVA }) =>
            acumulado + (cantidad * precio * this.calculaFactorIVA(tipoIVA)), 0)
    }
    
    get subtotal() {
        return this._subtotal;
    }

    get total() {
        return this._total;
    }

    set cesta(cestaExterna) {
        this._cesta = cestaExterna;
        this.calculaSubtotal();
        this.calculaTotal(); 
    }

}

const carrito = new CarritoDeLaCompra();

carrito.cesta = cesta; 

carrito.subtotal
console.log('subtotal', carrito.subtotal);
console.log('total', carrito.total);