/**
 * 43. Write a JavaScript program to check from three given numbers 
 *     (non negative integers) that two or all of them have the same rightmost
 *     digit.
 * 
 */


function myFunction(a, b, c) {
  return +a.toString().slice(-1) === +b.toString().slice(-1) &&
         +a.toString().slice(-1) === +c.toString().slice(-1);
}

console.log(myFunction(20, 30, 40));     // Expected

console.log(myFunction(12, 14, 11));     // Expected

console.log(myFunction(20, 22, 12));     // Expected

console.log(myFunction(11, 21, 31));     // Expected
