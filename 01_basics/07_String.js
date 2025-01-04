const name = "sandeep"
const repoCount = 12


//outdated style
//console.log(name+repoCount)

//modern style using ` ` (template literals or backticks)

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`)

//Methods in strings
const fullName = "Sandeep Ranjan"
console.log(fullName.length) // 14
console.log(fullName.toUpperCase()) // SANDEEP RANJAN
console.log(fullName.slice(0,7)) // Sandeep
console.log(fullName.substring(8,15))  // Ranjan
console.log(name.indexOf("e")) // 4
console.log(fullName.includes("Ranjan")) // true
console.log(fullName.includes("Chaudhary")) // false

const newString = "   sandeep   "
console.log(newString)
console.log(newString.trim()) // sandeep

console.log(fullName.replace("Ranjan","Chaudhary")) // Sandeep Chaudhary
console.log(fullName.split(" ")) // ["Sandeep", "Ranjan"]

console.log(fullName)  // Sandeep Ranjan - This shows that the string is immutable



