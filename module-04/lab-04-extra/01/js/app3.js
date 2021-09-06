'use strict';
console.log('Are you ready for a good time? :)');

// SELECTORS
const resultEl = document.querySelector("#js-result");
const buttonAdd = document.querySelector("#js-add");
const buttonSubst = document.querySelector("#js-substract");
const buttonMult = document.querySelector("#js-multiply");
const buttonDiv = document.querySelector("#js-divide");
const buttonEquals = document.querySelector("#js-equals");
const buttonClear = document.querySelector("#js-clear");
console.log(buttonClear);

/*----- 1. GET INPUT VALUE -----*/
const getInputValue = () =>
    parseInt(document.querySelector("#js-inputNumber").value);
    let result = 0;
    console.log(result, 'maricarmen');

const setResultByDefault = () =>
    (document.querySelector("#js-result").innerHTML = result);
    console.log(setResultByDefault(), 'Marlango');

/*----- 2. MATH OPERATIONS -----*/
const add = () => {
  const lastResult = parseInt(document.querySelector("#js-result").innerHTML);
  result = lastResult + getInputValue();
    document.querySelector("#js-result").innerHTML = result;
    console.log(result, 'pepino');
  clear();
  return result;
};

const substract = () => {
  const lastResult = parseInt(document.querySelector("#js-result").innerHTML);
  result = lastResult - getInputValue();
    document.querySelector("#js-result").innerHTML = result;
    console.log(result, 'pepino');
  clear();
  return result;
};


/*----- 3. DISPLAY RESULTS -----*/
const renderAdd = (typeOperation) => (resultEl.innerHTML = add(typeOperation));
const renderSubst = (typeOperation) => resultEl.innerHTML = substract(typeOperation);
const renderClear = () => (resultEl.innerHTML = clear());

/*----- 4. CLEAR -----*/
const clear = () => {
    document.querySelector("#js-inputNumber").value = "";
    // document.querySelector("#js-result").value = "";
};

// LISTENERS
buttonClear.addEventListener("click", clear);
buttonAdd.addEventListener("click", add);
buttonSubst.addEventListener("click", substract);
buttonEquals.addEventListener("click", renderAdd);
buttonEquals.addEventListener("click", renderSubst);
setResultByDefault();

// buttonSubst.addEventListener('click', substract);
// buttonEquals.addEventListener('click', renderSubst);