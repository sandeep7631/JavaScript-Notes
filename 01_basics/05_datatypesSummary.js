/* Primitive data types

7 types : String, Number, Boolean, null, Undefined, Symbol, BigInt

*/

/* JS is dynamically typed lamnguage 
   because we do not need to define
   data type of the variable while 
   declaring them
*/
 const Id = 12345
 let Money = 12345678
 let emailId = "sandeepdavsr09@gmail.com"

 const id = Symbol('123')
 const anotherId = Symbol('123')

 console.log(id)
 console.log(anotherId)
 console.log(id===anotherId)

 const bigNumber = 23456778546845683n  // BigInt
 
/* Reference Type (Non Primitive)

   Array, Object, Functions

*/

const heroes = ["shaktiman", "naagraj", "doga"]

let myObj = {
    name : "Sandeep",
    age : 22,
} 

const myFunction = function(){
    console.log("Hello Sandeep")
}

console.log(typeof heroes)
console.log(typeof myObj)
console.log(typeof myFunction)

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

