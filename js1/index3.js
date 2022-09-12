let resultEl = document.getElementById("result-el");

let num1 = 8;
let num2 = 2;

let addRes = num1 + num2;
let subRes = num1 - num2;
let dvdRes = num1 / num2;
let timesRes = num1 * num2;

function add(){
    resultEl.textContent = addRes;
}
function divide(){
    resultEl.textContent = dvdRes;
}
function subtract(){
    resultEl.textContent = subRes;
}
function times(){
    resultEl.textContent = timesRes;
}