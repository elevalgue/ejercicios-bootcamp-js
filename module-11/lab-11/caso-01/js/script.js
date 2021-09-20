console.log('Are you ready for a good time? :))');

const bookingList = [
    {
        typeRoom: "standard",
        pax: 1,
        nights: 3
    },
    {
        typeRoom: "standard",
        pax: 1,
        nights: 4
    },
    {
        typeRoom: "suite",
        pax: 2,
        nights: 1
    }
];


/**
 * Queremos calcular: 
 * - El subtotal de compra (precio sin IVA).
 * - El total de reservas que ha hecho un cliente. 
 */


class ClientBooking {
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

    calculateExtraCharge(pax, nights) {
        return (pax > 1) ? (pax * 40 * nights) : 0; 
    }

    calculateSubtotal() {
        this._subtotal = this._booking.reduce(
            (acc, { roomType, nights, pax }) =>
             acc + nights * (this.getRoomType(roomType) + this.calculateExtraCharge(pax,  nights)), 0);
    };

    calculateTotal() { }
    
    get subtotal() {
        return this._subtotal; 
    }
    
    get total() {
        return this._total; 
    }


    set booking(bookingList) {
        this._booking = bookingList;
        this.calculateSubtotal();
        this.calculateTotal(); 
    }
};

const clientBooking = new ClientBooking();
clientBooking.booking = bookingList;

console.log(`Subtotal: ${clientBooking.subtotal} €`);
console.log(`Total: ${clientBooking.total} €`);