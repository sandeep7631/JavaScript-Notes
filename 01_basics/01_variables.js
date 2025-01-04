const accountId = 123456
let accountEmail = "sandeep@gmail.com"
var accountPassword = "123456"
accountCity = "Daltonganj"   // Error: data type do not require because of scope problem of var

accountEmail = "sc@sc.com"
accountPassword = "12345678"
accountCity = "Ranchi"

// do not use var because of issue in block scope and functional scope 

console.table([accountId,accountEmail,accountPassword,accountCity]) 