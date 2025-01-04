// Stack (Primitive), Heap (Non-Primitive)

let myYoutubeName = "sandeepdavsr09"
let anotherName = myYoutubeName

anotherName = "codewithsandeep"

console.log(myYoutubeName) // sandeepdavsr09
console.log(anotherName) // codewithsandeep

let userOne = {
    email: "userone@google.com",
    upi: "userone@ybl"
}

let userTwo = userOne

userTwo.email = "usertwo@google.com"

console.log(userOne.email)
console.log(userTwo.email)

