// Data
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

class CustomerBooking {
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
        this._total = this._subtotal * vat;
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

const customerBooking = new CustomerBooking();
customerBooking.booking = bookingList;

console.log('--- RESERVA ---');
console.log(`Subtotal: ${customerBooking.subtotal} €`);
console.log(`Total: ${customerBooking.total} €`);