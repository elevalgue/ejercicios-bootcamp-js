# **Práctica Module 11 - Classes & This**

Vamos a manejarnos con un carrito de la compra.

Tenemos la siguiente entrada de datos:

- Un array de productos que hemos comprado.
- Cada producto tiene:
  - El nombre del producto
  - La cantidad de productos que hemos comprado
  - El precio
  - El tipo de IVA que aplica

Ejemplo:

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

Queremos calcular:

- El subtotal de la compra (suma de producto por cantidad sin contar con el IVA).
- El total de la compra (subtotal + IVA).
