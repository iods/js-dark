/**
 * 16. Write a JavaScript program to compute the sum of the two given integers.
 *     If the two values are same, then returns triple their sum.
 * 
 */


function myFunction(a, b) {
  return a === b ? (a + b) * 3 : a + b;
}

console.log(myFunction(7, 5));