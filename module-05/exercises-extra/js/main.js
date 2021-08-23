'use strict';

console.log('Are you ready for a good time? :)');

const arr1 = [25, 2.05, 1000, 63, 4.01, -9];

// Ejercicio 1

/**
 * FOR 
 */

let index = 0; 

for (let index = 0; index < arr1.length; index++) {
console.log(index , arr1[index]);    
}

console.log('---------------');



/**
 * WHILE 
 */

function displayArrayWhile(array) {
    while (index < arr1.length) {
        console.log(index, arr1[index]);
        index++
    }
}

displayArrayWhile(arr1);


console.log('---------------');

console.log('loli');


/**
 * DO WHILE 
 */

function displayArrayDoWhile(array) {
    let i = 0;
   do {
       console.log(i, arr1[i]);
       i++
       
    } while (i < arr1.length);
}

displayArrayDoWhile(arr1);

console.log('/---------------------------------------------------------------------------------------/');


// Ejercicio 2

const arr2 = [14, 2, 2.02, 63, 0, -9];

const biggerThan0 = arr2.filter(item => item >= 0);
console.log(biggerThan0);
console.log(arr2);

console.log('/---------------------------------------------------------------------------------------/');

// Ejercicio 3

const lowerThan0 = arr2.filter(item => item <= 0);
console.log(lowerThan0);

console.log('/---------------------------------------------------------------------------------------/');


// Ejercicio 4

// const arr2 = [14, 2, 2.02, 63, 0, -9];
const lowerThanZero = arr2.splice(5, 1);
console.log(lowerThanZero);


console.log('/---------------------------------------------------------------------------------------/');


// Ejercicio 5

const arr3 = [
    {
        id: 1,
        name: "Jhon",
    },
    {
        id: 2,
        name: "Doe",
    },
    {
        id: 3,
        name: "Clara",
    },
    {
        id: 4,
        name: "Elisa",
    },
    {
        id: 4,
        name: "Pedro",
    },
]


let idx = 4; 

for (let idx = arr3.arr3; idx >= 0; idx--) {
    idx++
}

console.log(arr3[idx], 'hola');

const arr3Reversed = arr3.reverse();
console.log('array3', arr3);
console.log('reversed', arr3Reversed);


console.log('/---------------------------------------------------------------------------------------/');


// Ejercicio 6

const people = [
    {
        id: 1,
        name: "Jhon",
        age: 25,
    },
    {
        id: 2,
        name: "Doe",
        age: 8,
    },
    {
        id: 3,
        name: "Clara",
        age: 15,
    },
    {
        id: 4,
        name: "Elisa",
        age: 30,
    },
    {
        id: 4,
        name: "Pedro",
        age: 18,
    },
]

for (const person of people) {
    if (person.age >= 18) {
        displayAdults(person)
    }
}

function displayAdults(person) {
    console.log('---------------');
    for (const attr in person) {
        console.log(attr + ': ' + person[attr]);
    }
}


console.log('/---------------------------------------------------------------------------------------/');


// Ejercicio 7

const adults = people.filter((person) => {
    if (person.age >= 18) {
        return person;
    }
});

console.log(adults, ' estos son las peronas mayores de 18');

const under18 = people.filter((person) => {
    if (person.age < 8) {
        return person
    }
})

console.log(adults, 'menores de 18');

console.log('/---------------------------------------------------------------------------------------/');


// Ejercicio 8

const hotelList = [
    {
        hoteId: 1,
        hotelName: "Jhon",
        availableRooms: 25,
        price: 10.20,
    },
    {
        hoteId: 2,
        hotelName: "Doe",
        availableRooms: 8,
        price: 4.25,
    },
    {
        hoteId: 3,
        hotelName: "Clara",
        availableRooms: 15,
        price: 14.30,
    },
    {
        hoteId: 4,
        hotelName: "Elisa",
        availableRooms: 30,
        price: 10,
    },
    {
        hoteId: 4,
        hotelName: "Pedro",
        availableRooms: 10,
        price: 8.10,
    },
]
    
let i = 0;
let extra = 10

for (let i = 0; i < hotelList.length; i++) {
    // displayHotels(hotelList[i]);
    if (hotelList.availableRooms < 10) {
        hotelList.price = hotelList.price + extra
    }
    displayHotels(hotelList[i]);
}
    
function displayHotels(hotel) {
    console.log('---------------');
    console.log('Hotel id: ' + hotel.hoteId);
    console.log('Hotel name: ' + hotel.hotelName);
    console.log('Available rooms: ' + hotel.availableRooms);
    console.log('Price: ' + hotel.price);
    
}



console.log('/---------------------------------------------------------------------------------------/');


// Ejercicio 9

// const adults = people.filter((person) => {
//     if (person.age >= 18) {
//         return person;
//     }
// });

const hotelArray = [
    {
    hoteId: 1,
    hotelName: "Hotel 1",
    availableRooms: 25,
    price: 10.20,
    },
    {
    hoteId: 2,
    hotelName: "Hotel 2",
    availableRooms: 8,
    price: 4.25,
    },
    {
    hoteId: 3,
    hotelName: "Hotel 3",
    availableRooms: 15,
    price: 14.30,
    },
    {
    hoteId: 4,
    hotelName: "Hotel 4",
    availableRooms: 30,
    price: 10,
    },
    {
    hoteId: 5,
    hotelName: "Hotel 5",
    availableRooms: 10,
    price: 8.10,
    },
]

// for (let i = 0; i < arrayHotel.length; i++) {
//     if (arrayHotel.availableRooms < 10) {
//         arrayHotel.price = arrayHotel.price + extra
//     }
//     console.log(arrayHotel.availableRooms, 'pinto las habitaciones disponibles');
// }

// console.log(arrayHotel, '¿He incrementado el precio en 10 euros?');

for (const hotel of hotelArray) {
    if (hotel.availableRooms < 10) {
        hotel.price = hotel.price + 10
        
    }
    
    console.log(hotel.availableRooms, 'pinto las habitaciones disponibles');
    displayHotelArray(hotelArray[i]);
}

function displayHotelArray(hotel) {
    console.log('---------------');
    for (attr in hotel) {
       
        console.log('Hotel id: ' + hotel.hoteId);
        console.log('Hotel name: ' + hotel.hotelName);
        console.log('Available rooms: ' + hotel.availableRooms);
    }
    console.log('Price: ' + hotel.price);
    
}

// let total = 0;
// let descuento = 0.9
// for (reserva of bookings) {
//     reserva.price = reserva.price * descuento
//     imprimir(reserva);
// }


// reserva = hotel
// bookiings = arrayHotel


// function imprimir(booking) {
//     console.log('---------------');
//     for ( attr in booking) {
//         console.log(attr.toUpperCase() + ': ' + booking[attr])
//     }
// }

// booking = hotel