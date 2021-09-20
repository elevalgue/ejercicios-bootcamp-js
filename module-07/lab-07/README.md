# **Laboratorio Módulo 07 - Expresiones Regulares**

## **Validar un IBAN**

Un IBAN es un código internacional de cuenta bancaria, reemplaza a los número antiguos de cuenta (ccc).

En este ejercicio vamos a validar la sintáxis de un IBAN, es decir si se han informado con las letras y digitos
que corresponden (no vamos a hacer un validación del digito de control, eso lo realizaremos en el módulo de
algoritmos).

<br />

### **Caso 01:**

Dado este IBAN:

ES6600190020961234567890

- Validar que se informa con dos letras, y los números correspondientes.

 <br />

### **Caso 02:**

- Vamos a permitir que se incluyan espacios en ciertas áreas, daremos por valida estás dos cadenas:

ES6600190020961234567890
ES66 0019 0020 9612 3456 7890

<br />

### **Caso 03:**

- Vamos a extraer el código de páis y el dígito de control.

<br />

## **Validar matrícula coche**

<br />

### **Caso 01:**

- Vamos a validar una matrícula de coche moderna, esta compuesta por 4 digitos y tres letras, patrones a validar:

2021 GMD
2345-GMD
4532BDB
0320-AAA

<br />

### **Caso 02:**

- Vamos a extraer por un lado la parte numérica y por otro las letras.

<br />

## **Validar matrícula coche**

Extraer imágenes de un fichero HTML
Una utilidad divertida es implementar una aspiradora de imagenes, es decir de un HTML extraer de todos los
tags img el contenido de src en ese contenido tenemos las URL a las imágenes.

<br />

### **Caso 01:**

De una sola linea extraer el contenido de src:

        <img
        src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
        />

<br />

### **Caso 02:**

De un HTML extraer todos los src de todos los objetos img:

        <html>
            <body>
                <img
                src="https://image.freepik.com/iconos-gratis/github-circular_318-10610.jpg"
                />
                <h1>ejemplo</h1>
                <img
                src="https://github.githubassets.com/images/modules/logos_page/GitHub-
                Mark.png"
                />
            </body>
        </html>
