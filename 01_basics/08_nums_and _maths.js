// ++++++++++++++++++++++Numbers+++++++++++++++++++++++++++

// const score = 400
// console.log(score)

// const balance = new Number (100)
// console.log(balance)

// console.log(balance.toString())
// console.log(balance.toString().length)
// console.log(balance.toString.length)
// console.log(balance.toFixed(2))

// const number = 123.8966
// console.log(number.toPrecision(3))

// const hundreds = 1000000
// console.log(hundreds.toLocaleString('en-IN'))

//++++++++++++++++++++++++Maths++++++++++++++++++++++++++++++++++++++++


console.log(Math)
console.log(Math.abs(-5))      //absolute value
console.log(Math.round(4.6))   //rounds to nearest integer
console.log(Math.ceil(4.2))    //converts to upper value
console.log(Math.floor(4.9))  //converts to lower value
console.log(Math.sqrt(25))    //square root
console.log(Math.min(4,3,6,8)) //returns smallest value
console.log(Math.max(4,3,6,8)) //returns largest value


console.log(Math.random())    //returns a random number between 0 and 1
console.log(Math.random()*10) //returns a random number between 0 and 10
console.log(Math.random()*10+1) //returns a random number between 1 and 10
console.log(Math.floor(Math.random()*10)+1) //returns a random number between 1 and 10

const min=10
const max=20

console.log(Math.floor(Math.random()*(max-min+1))+min) //returns a random number between min and max
