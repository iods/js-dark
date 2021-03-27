/**
 * 20. Write a JavaScript program to check from two given integers, whether 
 *     one is positive and another one is negative.
 * 
 * 
 */


function myFunction(a, b) {
  return a < 0 && b > 0 || a > 0 && b < 0;

}

console.log(myFunction(-1, 2));
