/**
 * 59. Write a JavaScript program to extract the first half of a string of even 
 *     length. 
 * 
 */


function myFunction(str) {
  return str.slice(0, Math.floor(str.length / 2));
}

console.log(myFunction('abc'));     // Expected

console.log(myFunction('notation'));     // Expected
