"use strict" //treats all code as newer JS

//alert(3+3) // we are using nodejs , not browser 

//Primitives

// String
// Number
// Boolean
//big int - for large numbers ,ex in stock market or big apps like reddit
// null - standalone value
//undefined - when you don't define any value to variable
//symbol - mostly used for uniqueness

// Reference Type(Non-Primitive)

// Array 
// Object
// Functions

let name="Ashtad" //String
let age =23       //number
let isLoggedIn = false // boolean
const temp = null
const id = Symbol('123')
const anotherId = Symbol('123')

console.log( typeof age)
console.log( typeof "as")
console.log( typeof null) //object
console.log( typeof undefined) //undefined
console.log("Data type of Temp variables:",typeof(temp));
console.log("2 Symbols are different so ,",id===anotherId);

const bigNumber =2232323245455676767656656565656565
console.log(bigNumber);

let userEmail; //undefined

//Array
const names=['Friend 1','Friend 2','Friend 3'];

let myObject ={
    name:"Ash",
    age:24
}

//Function
function myFun() {
    
}

let a = function myFun() {
 console.log("Typing........");   
}

console.log(a);
const sym1 = Symbol();
console.log("typeof operator check : ");
console.log("Type of null : ",typeof(null));
console.log("Type of undefined : ",typeof (undefined));
console.log("Type of Boolean : ",typeof (Boolean));
console.log("Type of Number : ",typeof (1));
console.log("Type of BigInt : ",typeof (3434343434343434334334n));
console.log("Type of String : ",typeof ("String"));
console.log("Type of Symbol : ",typeof (sym1));


