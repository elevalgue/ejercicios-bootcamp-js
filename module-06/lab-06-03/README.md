# Laboratorios Módulo 06 - Algoritmos III

## 01 AGENDA

Vamos a implementar una agenda para un equipo de personas, de modo que nos indique que horas tienen libres y que horas están ocupados. Además, vamos a generar un algoritmo que haga una búsqueda en un equipo y determine cual es la primera hora en que todos los miembros del equipo están libres, para asi poder establecer una reunión. Es decir, que busque el primer hueco disponible en sus agendas.

**Interfaz**

Para este ejemplo usaremos la consola así que no necesitaremos interfaz gráfica

**Datos**

Te proponemos que partas de las siguientes estructuras de datos:

        // Constantes
        var WORK_HOURS = [
        "08:00 - 09:00",
        "09:00 - 10:00",
        "10:00 - 11:00",
        "11:00 - 12:00",
        "12:00 - 13:00",
        "13:00 - 14:00",
        "15:00 - 16:00",
        "16:00 - 17:00"
        ];

        // Datos
        var myTeam = [
        {
            name: "María",
            availability: new Array(8).fill(true)
        },
        {
            name: "Pedro",
            availability: new Array(8).fill(true)
        },
        {
            name: "Esther",
            availability: new Array(8).fill(true)
        },
        {
            name: "Marcos",
            availability: new Array(8).fill(true)
        },
        ];

**WORK_HOURS**

Como ves, WORK_HOURS es un array que representa las posibles franjas horarias de cada miembro del equipo. En total son 8 (8 horas laborables) y si te fijas se ha excluido la franja de 14h a 15h ya que se reserva para el almuerzo. Este array de horas laborables podría servirte para mostrar por consola cada una de las franjas de cada miembro del equipo y si está libre o no.

**myTeam**
El equipo lo vamos a representar con un array de miembros llamado myTeam. Dicho array contiene objetos que representan a cada miembro, y que tienen 2 propiedades:

- El nombre del miembro (propiedad name)
- La disponibilidad de esa persona (propiedad availability).

La disponibilidad de cada miembro (availability) se ha modelado como un array de 8 posiciones (8 franjas horarias en total) que por defecto se ha inicializado a true para todas las franjas horarias. Es decir, inicialmente, todos los miembros están disponibles todas las horas.

**Algoritmo**

Vamos a dividirlo en 2 apartados:

1. Generación aleatoria de la disponibilidad

Como primer apartado, vamos a generar aleatoriamente la disponibilidad para todos los miembros del equipo. Se trata de recorrer todos los miembros del equipo, y a su vez, para cada miembro, todas las franjas horarias de su disponibilidad, e ir asignando aleatoriamente si está disponible o no en dicha franja.

De esta forma generamos un equipo con una agenda completamente aleatoria.

**Sugerencia**

Una vez hayas generado tu agenda aleatoria, muestrala por consola.

2. Buscar hueco libre

Para buscar el primer hueco libre habrá que comprobar la primera franja horaria en la que todos los miembros del equipo están disponibles.

**Sugerencia**

        // Ejemplo de hueco disponible
        Hueco encontrado en el horario 15:00 - 16:00

        // Ejemplo de hueco no existente
        Lo siento. No hay hueco disponible en el equipo.

Muestra por consola la franja horaria encontrada donde hay hueco, si es que lo hay, y en caso de que no exista hueco, infórmalo también. Por ejemplo:

## 02 Calculadora de cambio óptimo de billetes y monedas
