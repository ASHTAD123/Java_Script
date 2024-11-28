const myArr = [0, 1 ,3 ,4 ,5 ,6]
const myHeros =["shaktiman","SPD","HERO"]

//pushes whole array as an element
myHeros.push(myArr)

//arrays take any kind of data ,even it takes array as a Data Type
console.log(myHeros)

//concat()  - concats properly
const newArr = myHeros.concat(myArr)
console.log(newArr)


//spread() -concats and makes separates the elements
const a1 = ["a","v","b"]
const a2 = ["3","2","1"]
const newArr1 = [...a1,...a2]
console.log(newArr1)

const rareCase = [1,2,[3,4],124,42,8,[9,23],12,42]

//flat() - gives all elements in 1 single array
const modifiedRareCase = rareCase.flat(Infinity);

console.log(modifiedRareCase)

//convert to array
console.log(Array.from("ASHTAD"))

//intresting
console.log(Array.from({name:"as"}))

//Arrays.of()
let a=1;
let b=2;
let c=3;
console.log(Array.of(a,b,c))