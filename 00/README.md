# Laboratorio Módulo 12 - Banca Online

En éste módulo trabajaremos con una aplicación más completa. Vamos a simular un portal de banca online,
donde mostraremos un listado de movimientos de cuenta, así como un formulario de transferencia bancaria.

## Aplicación

Esta aplicación por tanto, consta de varias página que vamos a ir implementando poco a poco.

### Login

Aquí tendremos la página principal de acceso a nuestra aplicación o página de login.

![imagen de la página de login](https://user-images.githubusercontent.com/65629207/135728463-d0d0cf96-8dc0-4392-b958-68107e3046b4.png)

En esta página implementaremos:
- Recoger los valores del formulario.
- Añadir validaciones a los campos.
- Mandar la información al servidor mediante un método de la API.
- Según si el login es válido mostraremos un mensaje de error (si ha fallado) o navegaremos a la siguiente página (listado de cuentas).


### Listado de Cuentas

Página con las cuentas disponibles del usuario logado.

![imagen de la página "Mis Cuentas"](https://user-images.githubusercontent.com/65629207/135728513-c6edee5e-f197-4939-a215-3689964b5192.png)

![Imagen con los dos tipos de operación](https://user-images.githubusercontent.com/65629207/135728547-1478d685-952f-4aa9-9b72-08450a0cf086.png)

![Imagen con botón para agregrar nueva cuenta](https://user-images.githubusercontent.com/65629207/135728587-65cb3876-970a-45ff-90c9-f3fdbeb8fa9f.png)

En esta página implementaremos:
- Recuperar las cuentas disponibles de servidor.
- Navegar a la página de trasferencias o movimientos de una cuenta seleccionada
- Navegar a creación de nueva cuenta



