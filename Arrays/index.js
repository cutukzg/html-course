// let featuredPosts = [
//     "Check out my Netflix clone",
//     "Here's the code for my project",
//     "I've relaunched my portfolio"
// ]

// featuredPosts.length

// let marinko = [
//     "Marinko Čobanov", 34, true
// ]
// let cards = [7, 4, 9]
// for (let i = 0; i < cards.length; i++) {
//     console.log(cards[i])


// }

// cards.push(6)

// let messages = [
//     "hay",
//     "hoj",
//     "huj",
//     "dui"
// ]

// for (let i = 0; i < p; i += 1) {

//     console.log(messages[i])
// }

// let newMessage = "dui"

// messages.push(newMessage)
// console.log(messages)
// console.log(messages.pop())
// console.log(messages)
// for (let i = 10; i <= 100; i += 10) {

//     console.log(i)
// }

// let player1Time = 102
// let player2Time = 107
// function getFastestRaceTime() {
//     if (player1Time < player2Time) {
//         return player1Time
//     } else if (player2Time < player1Time) {
//         return player2Time
//     } else {
//         return player1Time
//     }
// }
// // let fastestRace = getFastestRaceTime()
// // console.log(fastestRace)

// function totalRaceTime() {
//     sum = player1Time + player2Time
//     return sum

// } let totalTime = totalRaceTime()
// console.log(totalTime)




function rollDice() {
    let randomNumber = Math.floor(Math.random() * 6) + 1
    return randomNumber
}
console.log(rollDice())