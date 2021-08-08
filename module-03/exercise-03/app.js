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


// 3. CALCULATE NET SALARY ON PAYROLL


const employee = {
    grossSalary: 14500,
    children: 2,
    wages: 14,
};

const salaryRange = {
    firstRange: 12000,
    secondRange: 24000,
    thirdRage: 34000,
};

const childrenDeduction = 2;


function getNetYear(employee) {
    let withholding;
    
    if (employee.grossSalary < salaryRange.firstRange) {
          withholding = 0;

      } else if (employee.grossSalary < salaryRange.secondRange) {
        withholding = 8;
          
      } else if (employee.grossSalary < salaryRange.thirdRage) {
        withholding = 16;
          
      } else {
        withholding = 30; 
  
      } if (employee.children > 0 && withholding -  childrenDeduction > 0) {
        withholding = withholding - childrenDeduction
      }
    
      console.log(withholding, 'maricarmen');
    return employee.grossSalary - (employee.grossSalary * withholding) / 100;
}
