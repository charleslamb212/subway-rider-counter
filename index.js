 // initialize count as 0

 // listen for clicks on the increment button
 // increment count variable when button is clicked
    // update the count-el in the HTML to reflect the new count
let count = 0
let countEl = document.getElementById("count-el")

let saveEl = document.getElementById("save-el")

 
function increment() {
  count += 1
  countEl.innerText = count
}   

// create a function that saves the count

function save() {
  let countStr = count + " - "
  saveEl.textContent += countStr
  countEl.textContent = 0
  count = 0
}

save() 


// let name = "Charlie"
// let greeting = "Hi, my name is "
// let myGreeting = greeting + name


// console.log(myGreeting)












// 
// let lap1 = 34
// let lap2 = 33
// let lap3 = 36

// creat a function that logs out the sum of all the lap times

// function totalLaps() {
//   console.log(lap1 + lap2 + lap3)
// }

// totalLaps()

// let lapsCompleted = 8

// // create a function that increments the lapsCompleted variable with 1
// // run it three times

// function incrementLaps() {
//   lapsCompleted = lapsCompleted + 1
// }

// incrementLaps()
// incrementLaps()
// incrementLaps()

// console.log(lapsCompleted)

