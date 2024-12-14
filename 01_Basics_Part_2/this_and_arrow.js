const user={
    username : "ashtad",
    age :24,

    welcomeMessage:function(){
        console.log(`${this.username},welcome to website`)
        console.log(this)
    }
}
user.welcomeMessage()
user.username="new name"
user.welcomeMessage()

 console.log(this)

//  ARROW FUNCTIONS
function coffee(){
    let uname="a"
    console.log(this)
    console.log(this.uname)
}
coffee()

const coff = function coffee(){
    let uname="a"
    console.log(this)
    console.log(this.uname)
}

const coff1 = () =>{
    let uname="a"
    console.log(this)
    console.log(this.uname)
}


const add = (n1,n2) =>{
    return n1+n2 //explicit return
}

console.log(add(1,2))

const addition = (n1,n2) => n1+n2 //implicit return
console.log(addition(1,2))

const addition1 = (n1,n2) => (n1+n2)
console.log(addition1)

const obj = (n1,n2) => ({a:"asas"})  //() wrapping is mandatory
console.log(obj(1,2))