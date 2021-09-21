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

class TourOperator extends Booking {
    getRoomType(type) {
        return type = 100; 
    }

    calculateExtraCharge(pax, nights, breakfast, spa) {
        const breakfastPrice = 15;
        const spaPrice = 20;
        let extraCharge = 0;
        extraCharge += spa ? spaPrice * pax : 0;
        extraCharge += breakfast ? (breakfastPrice * pax * nights) : 0;
        
        return extraCharge;
    }

    calculateSubtotal() {
        this._subtotal = this._booking.reduce(
            (acc, { typeRoom, pax, nights, breakfast, spa }) =>
                acc + (nights * this.getRoomType(typeRoom)) + this.calculateExtraCharge(pax, nights, breakfast, spa), 0)
    }

    calculateTotal() {
        const vat = 1.21;
        const discount = 0.85;
        this._total = (this._subtotal * vat * discount).toFixed(2);
    }

}

const booking = new Booking();
booking.booking = bookingList;

const tourOperatorBooking = new TourOperator();
tourOperatorBooking.booking = bookingList

console.log('--- RESERVA: CASO 1 ---');
console.log(`-   Subtotal: ${booking.subtotal} €   -`);
console.log(`-   Total: ${booking.total} €  -`);
console.log('-----------------------');


console.log('--- RESERVA: CASO 2 ---');
console.log(`-   Subtotal: ${tourOperatorBooking.subtotal} €   -`);
console.log(`-   Total: ${tourOperatorBooking.total} €   -`);
console.log('-----------------------');
