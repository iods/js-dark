/**
 * 36. Write a JavaScript program to check whether the last digit of the three 
 *     given positive integers is same.
 * 
 */


function myFunction(a, b, c) {
  a = +a.toString().slice(-1);
  b = +b.toString().slice(-1);
  c = +c.toString().slice(-1);

  return a === b && a === c ? true : false;
}

console.log(myFunction(123, 123, 123));     // Expected true

console.log(myFunction(123, 30, 400));      // Expected false

console.log(myFunction(20, -30, 400));      // Expected true

