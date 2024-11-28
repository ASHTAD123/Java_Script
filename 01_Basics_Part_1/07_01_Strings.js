const name="ashtad"
const repoCount = 100

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const otherName = new String('ashtad irani')

console.log(otherName[0])
console.log(otherName[1])
console.log(otherName[2])


//length
console.log("length :"+otherName.length)

console.log()


//upper case
console.log("-------------------------------")
console.log("to uppercase...")
console.log("-------------------------------")
console.log(otherName.toUpperCase())

console.log()

//charAt()
console.log("-------------------------------")
console.log("char at...")
console.log("-------------------------------")
let s1 =otherName.charAt(2)
console.log(s1)


//other method
//When using bracket notation for character access, attempting to delete or assign a value to these properties will not succeed. 
//The properties involved are neither writable nor configurable. 
console.log("ashu"[1]) 

console.log()

//index of
console.log("index of...")
console.log("-------------------------------")
console.log(otherName.indexOf('h'))
console.log("-------------------------------")

console.log()

//substring
console.log("Substring...")
console.log("-------------------------------")
const newStr = otherName.substring(3,5) //start inclusive, end exclsusive
console.log(newStr)
console.log("-------------------------------")

console.log()

//slice
console.log("Slice...")
console.log("-------------------------------")
console.log("slice() : ")
console.log("-------------------------------")
const otherName1 = new String('ashtad irani')
const a = otherName1.slice(2,9) //start inclusive, end exclsusive
console.log(a)

console.log()

//trim
console.log("Trim...")
console.log("-------------------------------")
console.log("trim () : ")
console.log("-------------------------------")
console.log();

const abc = "     contains space    "
console.log(abc)
console.log("Now trimmed : ")
console.log(abc.trim())


//---------- String Comparison ---------------
// --- Note that all comparison operators,
// --- including === and ==, compare strings case-sensitively.
// --- A common way to compare strings case-insensitively is to convert both
// --- to the same case (upper or lower) before comparing them.


const a1 ="a";
const b1 ="b";

if (a1 < b1) {
    console.log(`${a1} is less than ${b1}`);
  } else if (a1 > b1) {
    console.log(`${a1} is greater than ${b1}`);
  } else {
    console.log(`${a1} and ${b1} are equal.`);
  }

  // at()
  console.log("-------------------------------")
  console.log("at() : ")
  console.log("-------------------------------")
  
  
  let s11 ="Deedu"
  console.log("Char at pos 1 : " +s11.at(1))
  console.log("Char at pos -1 : " +s11.at(-1))
  console.log("Char at pos 0 : " +s11.at(1-1))
  console.log("Char at pos 9 : " +s11.at(9))


  console.log();

  //charAt()
  console.log("-------------------------------")
  console.log("charAt() : ")
  console.log("-------------------------------")
  console.log("Char at pos 1 : " +s11.charAt(1))
  console.log("Char at pos -1 : " +s11.charAt(-1))
  console.log("Char at pos 0 : " +s11.charAt(1-1))
  console.log("Char at pos 9 : " +s11.charAt(9))

  console.log();

  console.log("-------------------------------")
  console.log(" Bracket notation : ")
  console.log("-------------------------------")
  console.log("Char at pos 1 : " +s11[1])
  console.log("Char at pos -1 : " +s11[-1])
  console.log("Char at pos 0 : " +s11[1-1])
  console.log("Char at pos 9 : " +s11[9])