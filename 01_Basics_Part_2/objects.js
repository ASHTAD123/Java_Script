//object literals

const sym = Symbol("key1")
const jsUser ={
    name :"ASHTAD",
    age:24,
    [sym]: "key1",
    location:"mumbai",
    email:"ashtad@gmail.com",
    isLoggedIn:false,

}
console.log(jsUser)
console.log(jsUser.email)
console.log(jsUser.mySym)
console.log("Type of string : " +typeof(jsUser.mySym))
console.log(jsUser[sym])

jsUser.email = "ash@gmail.com"
console.log(jsUser.email)

//freeze - cannot change value
//Object.freeze(jsUser)

jsUser.email = "ashu@gmail.com"
console.log(jsUser.email)

jsUser.greeting = function(){
    console.log("js function")
}
console.log(jsUser.greeting());
console.log(jsUser.greeting);

jsUser.greeting1 = function(){
    console.log(`js function 1,${this.name}`);
}


console.log(jsUser.greeting1());
