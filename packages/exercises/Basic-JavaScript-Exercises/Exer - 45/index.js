/**
 * 45. Write a JavaScript program to check two given integer values and return
 *     true if one of the number is 15 or if their sum or difference is 15.
 * 
 */


function myFunction(a, b) {
  return a === 15 || b === 15 || a + b === 15 || Math.abs(a + b) === 15;
}

console.log(myFunction(15, 9));     // Expected

console.log(myFunction(25, 8));     // Expected

console.log(myFunction(5, 9));     // Expected

console.log(myFunction(3, 32));     // Expected
