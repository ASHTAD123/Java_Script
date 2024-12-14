// function add(number1,number2){
//     console.log(number1+number2)
// }

function add(number1,number2){
    let r = number1+number2
    return r;
}

const res = add(5,5)

console.log(res)
// add(5,"5")


function loggedIn(username="Default user"){
    
    if(username===undefined){
        console.log("Please enter a username...")
        return
    }
    return `${username} just logged in`
}

console.log(loggedIn("ASHTAD"))
console.log(loggedIn())


//it adds multiple values in array
function calCartPrice(...number1){
    return number1
}
console.log(calCartPrice(100,20,500))


//it adds multiple values in first 2 values in variables & rest in array
function calCartPrice(value1,value2,value3,...number1){
    return number1
}
console.log(calCartPrice(12,3,30,90,500))


//passing objects into function
const user = {
    username:"ASH",
    age:23
}


function handleObject(user){
    console.log(`Username is ${user.username} and age is ${user.age}`)
}

handleObject(user)

//passing object directly in function
handleObject({
    username:"nishh",
    age:80
})


const arr = [232,3,4,5,2,5];

function getValFromValue(arr){
    return arr[0];
}

console.log(getValFromValue(arr))