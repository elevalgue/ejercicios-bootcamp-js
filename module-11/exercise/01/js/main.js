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
        // 2. Definimos en el constructor
        this._cesta = [];
        this._subtotal = 0;
    }

    // 3. Definimos un método para calcular el subtotal
    // recordatorio: un método es una función de la clase definida
    calculaSubtotal() {
        // 6. Cada vez que llamemoms a este método vamos a inicializar a 0  
        // el valor de _subtotal
        this._subtotal = this._cesta.reduce(
            (acumulado, lineaTicket) =>
          acumulado + (lineaTicket.cantidad * lineaTicket.precio)
            , 0);
    }

    // 5. Exponemos una propiedad para el subtotal
    get subtotal() {
        // retornamos el resultado de esa propiedad interna
        return this._subtotal;
    }

    // 4. Seteamos la cesta de la compra cada vez que esta cambia
    set cesta(cestaExterna) {
        this._cesta = cestaExterna;
        this.calculaSubtotal(); 
    }
}

const carrito = new CarritoDeLaCompra();

carrito.cesta = cesta; 
// no invoco subtotal porque no es una función.
// lo que estoy haciendo es retornar el valor de la propiedad interna del getter
carrito.subtotal
console.log('subtotal', carrito.subtotal);