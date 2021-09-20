console.log('Are you ready for a good time? :))');

const reservas = [
    {
        tipoHabitacion: "standard",
        pax: 1,
        noches: 3
    },
    {
        tipoHabitacion: "standard",
        pax: 1,
        noches: 4
    },
    {
        tipoHabitacion: "suite",
        pax: 2,
        noches: 1
    }
];


/**
 * Queremos calcular: 
 * - El subtotal de compra (precio sin IVA).
 * - El total de reservas que ha hecho un cliente. 
 */

class HotelBooking {
    constructor() {
        this._booking = [];
        this._standard = 100;
        this._suite = 150;
        this._vat = 0.21;
        this._extraCharge = 40;
        this._subtotal = 0; 
    }
    
    // Aún no he añadido el 21% de IVA ni los gastos adicionales por persona extra
    calculateSubtotal(){
        this._subtotal = this._booking.reduce((acc, { nights, roomType }) =>
        acc + (nights * roomType), 0);
    };
};

