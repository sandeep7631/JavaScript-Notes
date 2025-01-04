let score = "33"

console.log(typeof score)
console.log(typeof (score))

//above both are same

//conversion of string to number
let valueInNumber = Number(score)
console.log(typeof valueInNumber)
console.log(valueInNumber)

// "33" => 33
// "33abc" => NaN
// true => 1 ,false => 0
// null => 0
// undefined => NaN

let bool= true
let conv = Number(bool)
console.log(conv)

let boolean = 1
let convert = Boolean(boolean)
console.log(convert)
