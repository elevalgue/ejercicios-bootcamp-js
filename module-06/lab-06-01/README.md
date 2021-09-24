# Laboratorio Módulo 06 - Algoritmos I

## Carrito de la Compra

**Introducción:**

Vamos a implementar un carrito de la compra donde el usuario pueda elegir las unidades que desea de cada producto, a partir de una lista de productos dada.

Tendremos por tanto, una sección describiendo la lista de productos y selectores para elegir las unidades deseadas, un botón para calcular la factura, y una zona con la factura desglosada mostrando el subtotal, impuestos y el importe total.

Un ejemplo de interfaz para que puedas orientarte podría ser el siguiente:

![https://github.com/elevalgue/ejercicios-bootcamp-js/blob/master/module-06/lab-06-01/interface-lab-06-01.png]

![image](https://github.com/elevalgue/ejercicios-bootcamp-js/blob/master/module-06/lab-06-01/interface-lab-06-01.png)

**Datos de entrada**

Vamos a proporcionarte un ejemplo de lista de productos. Utilízala en tu ejercicio como punto de partida:

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
