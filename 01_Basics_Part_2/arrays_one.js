const myArr = [0, 1 ,3 ,4 ,5 ,6]
const myHeros =["shaktiman","SPD"]

const myArr1 = new Array(1,2,3,4)
console.log(myArr1[0])
console.log(myArr1[1])

//Array Methods
myArr.push(90) //inserts element at end
myArr.push(72)
console.log("After push")
console.log(myArr)

//pop() -removes last element
myArr.pop();
console.log("After pop")
console.log(myArr)

//unshift() - inserts element at first & shifts all other elements
myArr.unshift(2)
console.log("After unshift")
console.log(myArr)

//shift() -removes element at first & shifts all other elements
myArr.shift(2)
console.log("After shift")
console.log(myArr)

//includes()
console.log(myArr.includes(2))

//indexOf()
console.log(myArr.indexOf(0))

const newArr = myArr.join()
console.log(myArr)
console.log(newArr)

console.log("Type of new Array : "+ typeof newArr)
console.log("Here join() converts array to string and returns it")

//slice()
console.log(" Original Arr " ,myArr)
const mySlicedArr = myArr.slice()//start inclusive , end exclusive

console.log(" Sliced array(1,3) :" ,myArr.slice(1,3))
console.log(" Original array after slice : " +mySlicedArr)

console.log()

//splice()
console.log(" Original Arr " ,myArr)
myArr.splice()//start & end inclusive 

console.log(" Spliced array(1,3) :" ,myArr.splice(1,3))
console.log(" Original array after splice : " +myArr)


// Imp diff , splice() manipulates original array , while slice() does not
