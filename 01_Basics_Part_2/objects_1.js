//singleton boject
const tinderU = new Object()
console.log(tinderU)

tinderU.id="123ab"
tinderU.name="asnf"
tinderU.isLoggedIn = false

console.log(tinderU)

const regularUser ={

    email : "ash@gmail.com",
    fullName:{
        userFullname:{
            firstName:"ashu",
            lastName:"irani"
        }
    }
}

console.log(regularUser.fullName.userFullname)

const obj1 = {1:"a", 2:"b"}
const obj2 = {3:"a", 4:"b"}
const obj4 = {3:"a", 4:"b"}

//comibining objects
const obj3 = {obj1,obj2}
console.log(obj3)
console.log()

const combined = Object.assign(obj1,obj2,obj4);
console.log(combined)
console.log()

//spread
const spreaded = {...obj1,...obj2}
console.log()
console.log("=========== Combining using spread operator =========== ")
console.log(spreaded)
console.log()


//array of objects
console.log("======== Array of objects =========")
const users =[

    {
        id:1,
        email:"ash@gmail.com"
    },
    {
        id:2,
        email:"ashtad@gmail.com"
    },
    {
        id:3,
        email:"abcs@gmail.com"
    },
]

console.log(users[1].email)
console.log()

console.log("Array of keys : ");
console.log(Object.keys(tinderU));

console.log("Array of values : ");
console.log(Object.values(tinderU));

console.log("Entries : ");
console.log(tinderU.hasOwnProperty('isLoggedIn'));
console.log()

console.log("Object.create()")
const ab ={
    name:'ABCD',
    age:'24'
}

const createObject =Object.create(ab)
console.log("Created object : ")
console.log(createObject.name)

//we can modify object property
createObject.name="DCBA";
console.log("Modified his property : ")
console.log(createObject.name)
console.log()

// //Object.defineProperty() - defines a new property directly on object or modifies an existing
// // and returns the object
// const object1={}
// Object.defineProperty(object1,'newProp',{
//         one:43,
//         two:true,
// });
// //  object1.newProp="prop"
//  console.log(object1.newProp)