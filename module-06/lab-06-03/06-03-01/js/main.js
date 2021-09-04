'use strict';

console.log('Are you ready for a good time? :))');


// Constantes
const WORK_HOURS = [
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
const myTeam = [
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


/****************************************************
 *      GENERATE PEOPLE AVAILABILITY RANDOMLY       *
 ****************************************************/

/*----- 1. GENERATE RANDOM NUMBER: -----*/
const getRandomNumber = () => Math.random() < 0.5; 

/*----- 2. GENERATE PEOPLE AVAILABILITY RANDOMLY: -----*/
function getRandomSchedule() {
    for (const worker of myTeam) {
      
        for (let index = 0; index < worker.availability.length; index++) {
            worker.availability[index] = getRandomNumber(); 
        }
    }
    console.log(myTeam);
}

/*----- 3. RENDER PEOPLE AVAILABILITY RANDOMLY: -----*/
function renderSchedule() {
    for (const worker of myTeam) {
        console.log('-------------------------');
        console.log(`* * Disponibilidad de ${worker.name.toUpperCase()} * *`);
        for (let index = 0; index < worker.availability.length; index++) {
           console.log(`- - - ${WORK_HOURS[index]} : ${worker.availability[index] ? 'SÍ' : 'NO'} - - -`);
        }
    }
}

/****************************
 *      GET A FREE SPOT     *
 ****************************/

console.log(getRandomSchedule());
renderSchedule(); 