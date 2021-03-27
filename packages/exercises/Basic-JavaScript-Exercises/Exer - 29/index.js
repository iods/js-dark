/**
 * 29. Write a JavaScript program to check whether three given integer values 
 *     are in the range 50..99 (inclusive). Return true if one or more of them
 *     are in the said range.
 * 
 */


function myFunction(a, b, c) {
  return a >= 50 && a <= 99 || b >= 50 && b <= 99 || c >= 50 && c <= 99;
}

console.log(myFunction(12, 7, 99));

console.log(myFunction(57, 62, 80));

console.log(myFunction(1, 55, 102));
