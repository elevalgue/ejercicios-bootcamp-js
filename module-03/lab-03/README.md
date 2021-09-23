# Laboratorio Módulo 03 - Operadores y Flujos de Control

## Ejercicio 1: Calculo IVA

Para el laboratorio de este módulo, vamos a calcular el total de la compra de un producto (su precio multiplicado por la cantidad) y aplicar el IVA del 21% excepto para los siguientes tipos de producto:

- "alimentacion": 10%
- "libro": 4%

Vamos a trabajar con la siguiente estructura de datos para representar la compra de un producto, que tiene cantidad, precio unitario, y tipo de producto:

        const product = { count: 3, price: 12.55, type: "ropa" };

No se admitirán cantidades negativas (en cuyo caso se tomará como 0).

## Ejercicio 2: Calcular precio total

Vamos a crear una función getTotal que acepta por parámetro el producto, y devuelva el precio total:

Si el campo count es cero, getTotal debe devolver cero. Si el campo count es mayor que cero, tienes que devolver la multiplicación de count por precio Podemos estar tentados de directamente multiplicar count por price pero podríamos tener stock negativo y no nos daría cero.

**Calcular el IVA**

Vamos a crear una función getVat que recibe el producto y calcula el IVA (por unidad) aplicable dependiendo del tipo de producto:

Es decir:

- Un producto sin IVA tiene un precio.
- El precio total se saca multiplicando precio \_ iva (el iva puede ser: 0.1, 0.04, 0.21).

Dependiendo del campo "type" calculamos el precio total:

- Si es "alimentacion": precio \_ 0.1
- Si es "libro": precio \_ 0.04
- Si es de cualquier otro tipo: precio \_ 0.21

        Pista: Si lo hacemos usando if nos va a quedar algo complicado de leer, ¿podríamos usar switch? Sería buen ejercicio probar las dos aproximacines.
