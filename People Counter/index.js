//document.getElementById("count-el").innerText = 5

//let count = 0

//count = count + 1


//console.log(count)
let countEl = document.getElementById("count-el")
console.log(countEl)
let count = 0
let saveEl = document.getElementById("save-el")
console.log(saveEl)
function increment() {

    count += 1
    countEl.textContent = count
    console.log(count)
}
function save() {
    let countString = count + " - "
    saveEl.textContent += countString
    countEl.textContent = 0
    count = 0
    console.log(count)
}
console.log("let's count people on the subway")
