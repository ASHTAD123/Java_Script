const promiseOne = new Promise(function(resolve,reject){

    //Do an async task
    // DB Call ,Network call

    setTimeout(function(){
        console.log('Async task is complete');
        resolve()
    },1000)
});

//resolves
//receives a callback function which returns values
promiseOne.then(function(){
    console.log("Promise consumed");
    
})

new Promise(function(resolve,reject){

    setTimeout(function(){

        console.log("Async task 2");
        resolve();
    },1000)
}).then(function(){
    console.log("Async 2 resolved");
    
});

const promiseThree = new Promise((function(resolve,reject){


    setTimeout(() => {     
        resolve({user:"ashtad"}) 
    }, 10000);
}))

promiseThree.then(function(user){
    console.log(user);
    
})

const promiseFour = new Promise(function(resolve,reject){

    setTimeout(function(){

        let error=true;
        if(!error){
            resolve({name:"asbc",pass:"1212"})
        }else{
            reject('Something went wrong :( ')
        }
    },10000)
})

promiseFour.then((user)=>{
    console.log(user);
    return user.name
    
})
.then((name)=>{
    console.log(name);
})
.catch(function (error) {
    console.log(error);  
}).finally(()=> console.log("Promise is either resolved or rejected"))

async function consumeData() {
    
   try {
    const resp = await promiseFour
    console.log(resp);
   } catch (error) {
    
   } 
}
consumeData();


async function getAllUsers(){

  try {
  
   const response= await fetch('https://api.github.com/users')
   const data = await response.json(); 
   console.log(data);
  } catch (error) {
    console.log(error);
    
  }
   
}
getAllUsers();

fetch('https://api.github.com/users')

.then((response)=>{
    return response.json()
})
.then( (data) =>{
    console.log(data);
})
.catch( (error) => console.log(error))