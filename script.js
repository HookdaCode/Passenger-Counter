// Write JavaScript here
let count = 0

let countEl = document.getElementById("count-el")
let saveEl = document.getElementById("save-el")

function increment() {
    count += 1
    countEl.innerText = count;
    console.log(count);
}


function save() {
    let countDash = " " + count + " - "
    saveEl.innerText += countDash;
    count = 0
    countEl.innerText = 0;
}

