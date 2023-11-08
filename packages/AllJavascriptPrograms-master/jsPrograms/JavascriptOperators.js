let days = 30; //assignment operartor
console.log(days);
days += 5; //Additional assignment
console.log(days);
days -= 5; //subtraction assignment
console.log(days);
days *= 5; //multiplication assignment
console.log(days);
days /= 5; //division assignment
console.log(days);
days %= 7; //modulus assignment
console.log(days);
days **= 5; //exponential assignment
console.log(days);

let holidays = 7;
console.log(days + holidays); //addition
console.log(days - holidays); //subtraction
console.log(days * holidays); //multiplication
console.log(days / holidays); //division
console.log(days % holidays); //modulus
console.log(days++); //incremental
console.log(days--); //decremental
console.log(days ** holidays); //exponential

console.log(5 == "5"); //equal to
console.log(5 === "5"); //equal value and type
console.log(5 != "5"); //not equal to
console.log(5 !== "5"); //not equal value or type
console.log(10 > 7); //greater than
console.log(6 >= 6); //greater than or equal to
console.log(7 < 6); //less than
console.log(9 <= 9); //less than or equal to

let a = 10;
let b = 20;
if (a >= b && b % 2 == 0) {
  //logical and
  console.log("Valid");
}

if (a >= b || b % 2 == 0) {
  //logical or
  console.log("Valid");
}

if (b != 20) {
  //logical not
  console.log("wrong");
}

console.log(a & b); //Bitwise and
console.log(a | b); //Bitwise or
console.log(a ^ b); //Bitwise Xor
console.log(~a); //bitwise not
console.log(a << 2); //left shift
console.log(b >> 3); //right shift
console.log(a >>> 1); //zero fill right shift

let height = "170";
let limit = height >= 165 ? "You are eligible" : "You are not eligible"; //ternary operator

console.log(typeof height); //typeof operator
