//Object.getOwnPropertyNames()
const obj1={
    1:'a',
    2:'c',
    3:'d'
}

//The own properties of an object are those that are defined directly on that object,
//and are not inherited from the object's prototype.
console.log(Object.getOwnPropertyNames(obj1))

//The Object.groupBy() static method groups the elements of a given iterable 
//according to the string values returned by a provided callback function
const inventory = [
    { name: "ash", type: "myself"},
    { name: "friend1", type: "friends" },
    { name: "friend2", type: "friends" },
    { name: "bestfriend", type: "bestie" },
    { name: "father", type: "family"},
    { name: "mother", type: "family"},
    { name: "fish", type: "food"},
  ];
console.log(Object.groupBy(inventory ,({type}) => type))

//object destructure
const obj = {
      a:'2',
      b:'3',
      afullLongName:'4'
}

const{afullLongName:short} = obj;

// console.log(afullLongName)
console.log(short)