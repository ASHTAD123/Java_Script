function test(t){

    if(t===undefined){
        return "Undefined value !";
    }
    return t;
}

let x;
console.log(test(x));


//------------ Strict equality and undefined-----------------
//You can use undefined and the strict equality and inequality operators to determine whether a variable has a value. 
// In the following code, the variable x is not initialized, and the if statement evaluates to true.

console.log("----------------- Strict equality and undefined-----------------");

let y;

if(y===undefined){
    console.log("UNDEFINED");
    
}else{
    console.log("IT HAS A VALUE");  
}

//One reason to use typeof is that it does not throw an error if the variable has not been declared

// ------------- typeof operator and undefined -------------------
console.log("-----------------typeof operator and undefined-----------------");

let a;
if (typeof a === "undefined") {
  console.log("UNDEFINED");
}

// v has not been declared before
// evaluates to true without errors
if (typeof v === "undefined") {
    console.log("UNDEFINED");
  }
  
  // Throws a ReferenceError
//   if (v === undefined) {
//   }
  
// ----------------- void operator and undefined -------------------------

console.log(" -----------------void operator and undefined----------------- ");

let b;

if(b=== void 0){
    console.log(" UNDEFINED ");
    
}

// n has not been declared before
if (n === void 0) {
    console.log(n);
    
  }