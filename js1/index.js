let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el");
let count = 0;

function increment(){
    count += 1;
    countEl.innerHTML = count;
}

function dec(){
    count -= 1;
    countEl.innerHTML = count;
}
function save(){
    let savedCount = count + " - ";
    saveEl.textContent += savedCount;
}