/**
 * 52. Write a JavaScript program to convert the letters of a given string in 
 *     alphabetical order. 
 * 
 */


function myFunction(str) {
  return str.split('').sort().join('');
}

console.log(myFunction('consectetur'));     // Expected

console.log(myFunction('phasellus'));     // Expected

console.log(myFunction('libero'));     // Expected
