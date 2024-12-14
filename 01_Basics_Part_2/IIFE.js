//named IIFE
(function exm(){
    console.log("EXM")
}) (); //semi color is mandatory to let down function run

//unanmed iife
( (name)=>{
    console.log(name)
}) ('name')