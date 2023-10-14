'use strict';
/*
 * @TODO write description about how.
 *
 */

let days = 30; // assignment operator

console.log(days += 5); // additional assignment
console.log(days -= 5); // subtraction assignment
console.log(days *= 5); // multiplication assignment
console.log(days /= 5); // division assignment
console.log(days %= 5); // modulus assignment
console.log(days **= 5); // exponential assignment


let holidays = 7;

console.log(days + holidays); // addition
console.log(days - holidays); // subtraction
console.log(days * holidays); // multiplication
console.log(days / holidays); // division
console.log(days % holidays); // modulus
console.log(days++); // incremental
console.log(days--); // decremental
console.log(days ** holidays); // exponential


console.log(5 == "5"); // equal to
console.log(5 === "5"); // equal type and value
console.log(5 != "5"); // not equal to
console.log(5 !== "5"); // not equal type and value
console.log(10 > 5); // greater than
console.log(10 >= 5); // greater than or equal to
console.log(5 < 10); // less than
console.log(5 <= 10); // less than or equal to


let a = 10;
let b = 20;

if (a >= b && b % 2 == 0) {
  // logical and
  console.log("Valid");
}

if (a >= b || b % 2 == 0) {
  // logical or
  console.log("Valid");
}

if (b != 20) {
  // logical not
  console.log("Not Valid");
}


console.log(a & b); // bitwise and
console.log(a | b); // bitwise or
console.log(a ^ b); // bitwise Xor
console.log(~a); // bitwise not
console.log(a << 2) // left shift
console.log(b >> 3) // right shift
console.log(a >>> 1); // zero fill right shift


let height = 311;
let limit = height >= 165 ? "You Are Eligible." : "You Are Not Eligible."; // ternary operator

console.log(limit);
console.log(typeof height); // typeof operator
