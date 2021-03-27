/**
 * 28. Write a JavaScript program to check whether two given integer values are
 *     in the range 50..99 (inclusive). Return true if either of them are in
 *     the said range.
 * 
 * 
 */


function myFunction(a, b) {
  return a >= 50 && a <= 99 || b >= 50 && b <= 99 ;
}

console.log(myFunction(7, 70));
