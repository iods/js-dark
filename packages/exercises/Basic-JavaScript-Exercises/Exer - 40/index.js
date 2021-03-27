/**
 * 40. Write a JavaScript program to check from two given integers whether one
 *     of them is 8 or their sum or difference is 8. 
 * 
 */


function myFunction(a, b) {
  if (a === 8 || b === 8 || a + b === 8 || Math.abs(a - b) === 8) return true;

  return false;
}

console.log(myFunction(7, 8));     // Expected

console.log(myFunction(16, 8));     // Expected

console.log(myFunction(24, 32));     // Expected

console.log(myFunction(17, 18));     // Expected
