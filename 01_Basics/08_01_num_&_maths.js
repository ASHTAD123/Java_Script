console.log(255===255.0)
console.log(255===0xff)
console.log(255===0b11111111);
console.log(255===0.255e3)

//A number literal like 37 in JavaScript code is a floating-point value, not an integer.
// When used as a function, Number(value) converts a string or other value to the Number type.
// If the value can't be converted, it returns NaN.

let n = Number("123")
console.log(typeof n)

console.log(Number("123")===123);

console.log(Number("unicorn"))
console.log(Number(undefined))
//The JavaScript Number type is a double-precision 64-bit binary format IEEE 754 value,
// like double in Java or C#. This means it can represent fractional values

//The Number.MAX_VALUE static data property represents the maximum numeric value representable in JavaScript.
console.log("Max Value in js " + Number.MAX_VALUE)

console.log("Min Value in js " + Number.MIN_VALUE)

console.log("Negative infinity " + Number.NEGATIVE_INFINITY)

//The Number.isFinite() static method determines whether the passed value is a finite number — that is, it checks that a given value is a number, 
// is neither positive Infinity
// negative Infinity, nor NaN.
console.log(1/0)

console.log(10 / 5)

console.log(0 / 0)