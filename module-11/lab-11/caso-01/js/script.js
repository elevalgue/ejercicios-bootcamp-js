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
        this._vat = 1.21;
        this._subtotal = 0;
        this._total = 0;
    }
    

    getRoomType(type) {
        switch (type) {
            case 'standard':
                return 100;
            
            case 'suite':
                return 150;
        }
    }

    calculateExtraCharge() {
        return (pax > 1) ? (pax * 40 * nights) : 0; 
    }

    // Aún no he añadido el 21% de IVA ni los gastos adicionales por persona extra
    calculateSubtotal() {
        this._subtotal = this._booking.reduce((acc, { nights, roomType }) =>
        acc + (nights * roomType), 0);
    };

    calculateTotal() { }
    
    get subtotal() {
        return this._subtotal; 
    }
    
    get total() {
        return this._total; 
    }


    set booking(booking) {
        this._booking = booking;
        this.calculateSubtotal();
        this.calculateTotal(); 
    }
};

