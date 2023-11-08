// Numbers 
const myNumber1 = 10
let decimal = 10.232
// console.log(myNumber1); // Output => 10
/* Methods */
// console.log(myNumber1.toFixed(2)) //Output => 10.00
// console.log(myNumber1.toExponential(2));// Output => 1.00e+1
// console.log( myNumber1.toLocaleString());// Output => 10 Here myNumber1 converted to String
// console.log(decimal.toPrecision(3));// Output => 10.2

let million = 1000000
console.log(million.toLocaleString('en-In'));//Output => 10,00,000

const myNumber2 = new Number(100)

// console.log(myNumber2);//Output => [Number: 100]

/*Properties*/
// console.log(myNumber2.EPSILON);
// console.log(Number.MAX_SAFE_INTEGER); // Output => 9007199254740991
// console.log(Number.MIN_SAFE_INTEGER); // Output => -9007199254740991
// console.log(Number.MAX_VALUE);// Output => 1.7976931348623157e+308
// console.log(Number.MIN_VALUE);// Output => 5e-324
// console.log(Number.NaN);//Output =>NaN
// console.log(Number.POSITIVE_INFINITY); // Output =>Infinity
// console.log(Number.NEGATIVE_INFINITY); // Output => -Infinity

/* Methods */
// console.log(Number.isFinite(1 / 0));//false
// console.log(Number.isInteger(2.5));//false
// console.log(Number.isInteger(2));//true

// Math