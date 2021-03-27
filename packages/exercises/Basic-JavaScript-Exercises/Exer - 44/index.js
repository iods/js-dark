/**
 * 44. Write a JavaScript program to check from three given integers that 
 *     whether a number is greater than or equal to 20 and less than one of
 *     the others. 
 * 
 */


function myFunction(a, b, c) {
  if (a >= 20) {
    if (a < b && a < c) {
      return true;
    }
  }

  if (b >= 20) {
    if (b < a || b < c) {
      return true;
    }
  }

  if (c >= 20) {
    if (c < b || c < a) {
      return true;
    }
  }

  return false;
}

console.log(myFunction(12, 13, 14));     // Expected

console.log(myFunction(21, 23, 43));     // Expected

console.log(myFunction(25, 26, 56));     // Expected
