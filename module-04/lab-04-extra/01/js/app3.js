"use strict";
​
// SELECTORS
const resultEl = document.querySelector("#js-result");
const buttonAdd = document.querySelector("#js-add");
const buttonSubst = document.querySelector("#js-substract");
const buttonMult = document.querySelector("#js-multiply");
const buttonDiv = document.querySelector("#js-divide");
const buttonEquals = document.querySelector("#js-equals");
const buttonClear = document.querySelector("#js-clear");
​
/*----- 1. GET INPUT VALUE -----*/
const getInputValue = () =>
  parseInt(document.querySelector("#js-inputNumber").value);
let result = 0;
​
const setResultByDefault = () =>
  (document.querySelector("#js-result").innerHTML = result);
​
/*----- 2. MATH OPERATIONS -----*/
const add = () => {
  const lastResult = parseInt(document.querySelector("#js-result").innerHTML);
  result = lastResult + getInputValue();
  document.querySelector("#js-result").innerHTML = result;
  clear();
  return result;
};
​
// const add = () => {
//     if (!result) {
//         result = parseInt(getInputValue());
//         clear();
//     } else {
//         result = parseInt(result + getInputValue());
//         return parseInt(result);
//     }
// }
​

​
/*----- 3. DISPLAY RESULTS -----*/
const renderAdd = (typeOperation) => (resultEl.innerHTML = add(typeOperation));
// const renderSubst = () => resultEl.innerHTML = substract();
const renderClear = () => (resultEl.innerHTML = clear());
​
/*----- 4. CLEAR -----*/
const clear = () => {
  document.querySelector("#js-inputNumber").value = "";
};
​
// LISTENERS
buttonClear.addEventListener("click", clear);
buttonAdd.addEventListener("click", add);
buttonEquals.addEventListener("click", renderAdd);
setResultByDefault();
​
// buttonSubst.addEventListener('click', substract);
// buttonEquals.addEventListener('click', renderSubst);