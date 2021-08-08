const employee = {
    raw: 14500,
    children: 2,
    wage: 14,
  };
  
  const rangues = {
    first: 12000,
    second: 24000,
    third: 34000,
  };
  
  const reduction = 2;
  
  function calculateNetSalary(employee) {
    let retention;
  
    // Less than 12.000€
    if (employee.raw < rangues.first) {
      retention = 0;
    } else if (employee.raw < rangues.second) {
      retention = 8;
    } else if (employee.raw < rangues.third) {
      retention = 16;
    } else {
      retention = 30;
    }
  
    if (employee.children > 0 && retention - reduction > 0) {
      retention = retention - reduction;
    }
  
    console.log(retention);
  
    return employee.raw - (employee.raw * retention) / 100;
  }
  
  console.log("Salario Neto", calculateNetSalary(employee));