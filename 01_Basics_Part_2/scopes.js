function one(){
    const username="ashtad"

    function two(){
        const website="google"
        console.log(username)
    }
  //  console.log(website)

   // two()
}
one()

if(true){

    const username="ashu"

    if(username==="ashu"){
        const website = "google";
     //   console.log(username +website)
    }

   // console.log(website)
}

//proper
console.log(addTwo(2))
function addTwo(num){
    return num+1
}

//error
addOne(2)

//also called as expression
const addOne = function(num){
    return num+1
}
