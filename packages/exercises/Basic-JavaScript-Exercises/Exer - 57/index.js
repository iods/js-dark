/**
 * 57. Write a JavaScript program to create a new string of specified copies 
 *     (positive number) of a given string.
 * 
 */


function myFunction(str) {
  return str.repeat(str.length);
}

console.log(myFunction('ab'));     // Expected

console.log(myFunction('ba'));     // Expected

console.log(myFunction('ba'));     // Expected

