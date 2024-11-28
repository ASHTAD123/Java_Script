const accountId = 144553
let accountEmail = "ash@gmail.com"
var accountPassword = "123343"
accountcity = "Mumbai"

accountEmail="new@gmail.com"
// accountId=1212 //not allowed

/*
    prefer not to use var
    due to issue with block & functional scope 
*/
console.table([accountEmail,accountId,accountPassword,accountcity])

let a;
console.log(a); //undefined