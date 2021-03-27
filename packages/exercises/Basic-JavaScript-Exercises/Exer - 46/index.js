/**
 * 46. Write a JavaScript program to check two given non-negative integers that
 *     whether one of the number (not both) is multiple of 7 or 11.
 * 
 */


function myFunction(a, b) {
  if ((a % 7 === 0 || a % 11 === 0) && (b % 7 === 0 || b % 11 === 0)) {
    return false;
  }
  if (a % 7 === 0 || a % 11 === 0 || b % 7 === 0 || b % 11 === 0) {
    return true;
  }
  return false;
}

console.log(myFunction(14, 21));     // Expected

console.log(myFunction(14, 20));     // Expected

console.log(myFunction(16, 20));     // Expected
