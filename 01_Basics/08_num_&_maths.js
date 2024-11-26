const num =500

const balance = new Number(500121)
console.log(balance)

console.log("Length : " +balance.toString().length)

//toFixed()
console.log(balance.toFixed(2))

//toPrecision
const newbal = 3.67
console.log(newbal.toPrecision(1))

//toLocaleString
const hundreds =1000900
console.log(hundreds.toLocaleString('en-IN'))

//absolute value
console.log("Absolute value of -882.1 : " +Math.abs(-882.1))
console.log();

//round off
console.log("Round of 2.4 : "+Math.round(2.4))
console.log("Round of 2.9 : "+Math.round(2.9))
console.log();

//ceil
console.log("Ceil of 5.5 : " +Math.ceil(5.5))
console.log("Floor of 5.5 : " + Math.floor(5.5))
console.log();

//min
console.log(Math.min(4,21212,2,3))

//max
console.log(Math.max(4,21212,2,1))

//min
console.log(Math.min(4,21212,2,3))

//random(0,1)
console.log(Math.random())

console.log(Math.random()*10)

//to avoid 0 before decimal
console.log(Math.random()*10+1)

console.log( (Math.random()*10) +1)

const min =10
const max =20

/*** IMP Formula ***/
/* 
    Number will be above 0
    Number will be between min & max
    Added min value to make it compulsory to return above min
*/
console.log(Math.floor(Math.random() * (max - min + 1)) + min )