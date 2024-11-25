//charCode()
console.log("-------------------------------")
console.log("charCodeAt()")
console.log("-------------------------------")

let c='ashq'
console.log(c.charCodeAt(1))
console.log(c.charCodeAt(c.length-1))
console.log(c.charCodeAt(c.length-10))//out of range,so gives NAN as O/P

//Other method
console.log("ASH".charCodeAt(0))


//concat()
console.log("-------------------------------")
console.log("concat()")
console.log("-------------------------------")
let str1 = "tommy"
let str2 = "sheru"
let str3 = "jacky"

let names = str1.concat(',',str2)
console.log(names)

let names1 = str1.concat(',',str3,',',str2,',','toffy',1)
console.log(names1)