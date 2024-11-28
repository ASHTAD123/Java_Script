//CASE 1 
let score="50"
console.log("Value : " + score)
console.log("Type : " + typeof score)

//Converting to number
console.log("Converting to number....")
let scoreConvertedToNumber  = Number(score)
console.log("Type : " +  typeof scoreConvertedToNumber)
console.log("Value : " +scoreConvertedToNumber)

console.log("-------------------")


// CASE 2
let score1="50A"
console.log("Value : " + score1)
console.log("Type : " + typeof score1)

//Converting to number
console.log("Converting to number.....")
let scoreConvertedToNumber1  = Number(score1)
console.log("Type : " + typeof scoreConvertedToNumber1)
console.log("Value : " + scoreConvertedToNumber1)


console.log("-------------------")
// CASE 3
let score2=null
console.log("Value : " + score2)
console.log("Type : " + typeof score2)

//Converting to number
console.log("Converting to number.....")
let scoreConvertedToNumber2  = Number(score2)
console.log("Type : " + typeof scoreConvertedToNumber2)
console.log("Value : " + scoreConvertedToNumber2)


console.log("-------------------")
// CASE 4
let score3=undefined
console.log("Value : " + score3)
console.log("Type : " + typeof score3)

//Converting to number
console.log("Converting to number.....")
let scoreConvertedToNumber3  = Number(score3)
console.log("Type : " + typeof scoreConvertedToNumber3)
console.log("Value : " + scoreConvertedToNumber3)


// CONVERSION SUMMARY

// string converts to number : "50" => 33
// string which includes number : "323d" => NAN
// boolean values : true => 1; false =>0
// null converted to number :  null => 0
// undefined converted to number : undefined => type is number but value is undefined


console.log("------------------")
console.log("")
console.log("_______Number to Boolean Convertion_______")

// Number to Boolean conversion
let num="";
console.log("Value : " +num)
console.log("Type : " + typeof num)


console.log("Converting Num to boolean...")
let boolNum = Boolean(num)
console.log("Value : " +boolNum)
console.log("Type : " + typeof num)

// 1 => true  0 => false
// "" to boolean gives us value false
// "adsjd" to boolean gives us true


console.log("_______String to Number Convertion_______")
let a = 33
let stringNum = String(a)
console.log("Type : " + typeof stringNum)
console.log("Value : " + stringNum)

