// let firstName = "Marinko"
// let lastName = "Čobanov"
// let fullName = firstName +" "+ lastName
// console.log(fullName)

// let names = "Linda"
// let greetingse = "Hi there"

// function greetLinda() {
//     console.log(greetingse + ", " + names + "!")
// }
// greetLinda()

// let myPoints = 3
// function add3Points() {
//     myPoints += 3

// }
// function remove1Points() {
//     myPoints -= 1

// }
// add3Points()
// add3Points()
// add3Points()
// remove1Points()
// remove1Points()
// console.log(myPoints)
// let num1 = 8
// let num2 = 2
// document.getElementById("num1-el").textContent = num1
// document.getElementById("num2-el").textContent = num2
// let sumEl = document.getElementById("sum-el")

// function add() {
//     sumEl.textContent = num1 + num2
// }
// function subtract() {

//     sumEl.textContent = num1 - num2
// }
// function divide() {

//     sumEl.textContent = num1 / num2
// }
// function multiply() {

//     sumEl.textContent = num1 * num2
// }
// let hasCompletedCourse = true
// let givesCertificate = true

// if (hasCompletedCourse === true && givesCertificate === true) {
//     generateCerticicate()

// }

// function generateCerticicate() {

//     console.log("Generating certificate...")
// }
// let course = {
//     title: "Learn CSS Grid for free",
//     lessons: 16,
//     creator: "Per Harald Borgen",
//     lenght: 63,
//     level: 2,
//     isFree: true,
//     tags: ["html", "css"]
// }

// console.log(course.tags)
// let castle = {
//     title: "Sleep in Castle like a King",
//     price: 145,
//     isPaid: true,
//     tags: ["England", "Castle"]
// }
// console.log(castle.price)
// let person = {
//     name: "Marinko",
//     age: 34,
//     country: "Croatia"
// }
// function logData() {
//     console.log(person.name + " is " + person.age + " years old and lives in " + person.country)
// }

// logData()
// let age = 17

// if (age < 6) {
//     console.log("Ticket is free")
// } else if (age < 18) {
//     console.log("You have child discount for ticket ")
// }
// else if (age < 27) {
//     console.log("You have student discount for ticket ")
// }
// else if (age < 67) {
//     console.log("You need to pay full price for ticket ")
// } else {

//     console.log("You have senior citizen discount for ticket ")
// }

// let largeCountries = ["China", "India", "USA", "Indonesia", "Pakistan"]
// console.log("jrnvrvfnfcn")
// for (i = 0; i < largeCountries.length; i++)
//     console.log("- " + largeCountries[i])

// let largeCountries = ["Tuvalu", "India", "USA", "Indonesia", "Monaco"]
// largeCountries.pop()
// console.log(largeCountries)
// largeCountries.push("Pakistan")
// console.log(largeCountries)
// largeCountries.shift()
// console.log(largeCountries)
// largeCountries.unshift("China")
// console.log(largeCountries)

// let dayOfMonth = 13
// let weekday = "Friday"
// if (dayOfMonth === 13 && weekday === "Friday") {
//     console.log("Scary face")
// }

// let hands = ["rock", "paper", "scissor"]

// function randomHand() {
//     let randomHands = Math.floor(Math.random() * 3)
//     return hands[randomHands]
// }
// console.log(randomHand())

let fruit = ["🍎", "🍊", "🍎", "🍎", "🍊",]
let appleShelf = document.getElementById("apple-shelft")
let orangeShelf = document.getElementById("orange-shelft")

function setFruit() {
    for (let i = 0; i < fruit.length; i++) {
        if (fruit[i] === "🍎") {
            appleShelf.textContent += "🍎"
        } else if (fruit[i] === "🍊") {
            orangeShelf.textContent += "🍊"
        }
    }
}
setFruit()