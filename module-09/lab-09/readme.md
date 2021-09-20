# **Laboratorio Módulo 09 - Llamadas Asíncronas**

Acabamos de recibir un encargo de Netflix. Quieren promocionar una de sus conocidas series, Breaking Bad,
y necesitan una pequeña aplicación creada con Javascript para mostrar información sobre sus personajes.

La aplicación debe mostrar un listado con la foto y nombre de los personajes (characters) de la serie. Al
hacer click sobre uno de ellos se mostrará más información acerca del mismo: foto, nombre, fecha de
nacimiento y apodo.

Según nos comentan, podemos recuperar los datos de su API. Nos envían esta documentación: [The Breaking Bad API](https://breakingbadapi.com/documentation)

En esta documentación hemos podido ver que la ruta base de la api es
"https://www.breakingbadapi.com/api/", y tenemos disponibles los siguientes endpoints:

- Recuperar todos los personajes: /api/characters
- Recuperar un personaje: /api/characters/{char_id}

## **Obligatorio:**

- De forma obligatoria para que puedan evaluar nuestro trabajo, tendremos que entregar la aplicación
  con el listado de personajes.

## **Extras:**

- [x] Como extra, tendremos que hacer funcionar el click en cada personaje para mostrar el detalle del
      mismo.

- [ ] Nos proponen un reto: -- Utilizar otro de los endpoints de su API para recuperar y
      mostrar más datos, como un listado de episodios o frases célebres de cada personaje para mostrar en
      su detalle.
