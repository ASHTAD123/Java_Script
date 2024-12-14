function map(f,a1){

    const res  = new Array(a1.length);

    for(let i=0; i< a1.length; i++){
        res[i] = f(a1[i]);
    }

    return res;
}

const cube = function(x){
    return x*x*x;
}

const numberArr = [0,1,2,4,5];
console.log(map(cube,numberArr))

//can be defined based on condition
let bool =false;

if(bool){
      let  myFun = function(name){
                console.log(`Hello ${name}`)
        }
 }

//  //function hoisting only works for functions , not function expressions
//  console.log(abc())
//  const abc = function c(){
//     console.log('c');
//  }

 console.log(abc1())
 function abc1(){
    console.log('c');
 }