'use strict';

console.log('Are you ready for a good time? :))');

// 1. CALCULATE TOTAL PRICE

const hotel = {
    count: 1,
    price: 22.55,
    type: "freeTime"
};

function getTotal(product) {
   if (product.count <= 0) {
       return 0;
   } else {
       return (product.count * product.price); 
   }
}
console.log(getTotal(hotel), 'first task');


// 2. CALCULATE IVA
// All the items have the same quantity and price to make sure that the different VATs are being applied properly

let tShirt = {
    count: 1,
    price: 1,
    type: 'clothes',
};

let apples = {
    count: 1,
    price: 1,
    type: 'food',
};

let textBook = {
    count: 1,
    price: 1,
    type: "book",
};


function getVat(product) {
    let vat = 0.21;
    
    switch (product.type) {
        case 'book':
            vat = 0.04;
        break;
        case 'food':
            vat = 0.1;
        break;
    }

    return ((product.price * product.count) * vat)
}

console.log(`${getVat(tShirt)} euris`, 'second task');
console.log(`${getVat(apples)} euris`);
console.log(`${getVat(textBook)} euris`);


// 3. CALCULATE TOTAL VAT

function getTotalVat(product) {
    return product.count > 0 ? product.count * getVat(textBook) : 0;
  }

  console.log(`El IVA total es de ${getTotalVat(textBook)} euris`);

function printProductPrice(product) {
    const subtotal = getTotal(product);
    const vat = getTotalVat(product);
    const total = subtotal + vat;
  
    console.log("Subtotal:", subtotal + "€");
    console.log("IVA:", vat + "€");
    console.log("Total:", total + "€");
}

printProductPrice(textBook);

// 4. CALCULATE NET ANNUAL SALARY ON PAYROLL

const employee = {
    grossSalary: 14500,
    children: 2,
    wages: 14,
};

const salaryRange = {
    firstRange: 12000,
    secondRange: 24000,
    thirdRange: 34000,
};

const childrenDeduction = 2;

function getNetYear(employee) {
    let withholding = null; 
    
    if (employee.grossSalary < salaryRange.firstRange) {
          withholding = 0;

      } else if (employee.grossSalary < salaryRange.secondRange) {
        withholding = 8;
          
      } else if (employee.grossSalary < salaryRange.thirdRange) {
        withholding = 16;
          
      } else {
        withholding = 30; 
  
      } 
      if (employee.children > 0 && withholding - childrenDeduction > 0) {
        withholding = withholding - childrenDeduction
      }
    
    console.log('retención ' + withholding + ' third task');
    return employee.grossSalary - (employee.grossSalary * withholding) / 100;
}

console.log(`Después de impuestos el sueldo se te queda en ${getNetYear(employee)} euris anuales`);