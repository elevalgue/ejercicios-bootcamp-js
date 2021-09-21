// Data
const bookingList = [
    {
        typeRoom: "standard",
        pax: 1,
        nights: 3,
        breakfast: true,
        spa: false
    },
    {
        typeRoom: "standard",
        pax: 1,
        nights: 4,
        breakfast: true,
        spa: false
    },
    {
        typeRoom: "suite",
        pax: 2,
        nights: 1,
        breakfast: false,
        spa: true
    }
];

class Booking {
    constructor() {
        this._booking = [];
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
            (acc, { typeRoom, pax, nights }) =>
                acc + (nights * this.getRoomType(typeRoom)) + this.calculateExtraCharge(pax, nights), 0)
    }

    calculateTotal() {
        const vat = 1.21;
        this._total = (this._subtotal * vat).toFixed(2);
    }

    calculateDiscount() {
        const discount = 0.85;
        this._total = this._total * discount; 
    }
    
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


// class TourOperator extends Booking {
//     constructor()
// }

const booking = new Booking();
booking.booking = bookingList;

console.log('--- RESERVA: CASO 1 ---');
console.log(`Subtotal: ${booking.subtotal} €`);
console.log(`Total: ${booking.total} €`);
console.log('-----------------------');


console.log('--- RESERVA: CASO 2 ---');
// console.log(`Subtotal: ${booking.subtotal} €`);
// console.log(`Total: ${booking.total} €`);