/**
 * 62. Write a JavaScript program to move last three character to the start of
 *     a given string. The string length must be greater or equal to three.
 * 
 */


function myFunction(str) {
  if (str.length < 3) return str;

  return str.slice(-3) + str.slice(0, str.length -3);
}

console.log(myFunction('JavaScript'));     // Expected

console.log(myFunction('Python'));     // Expected

console.log(myFunction('TypeScript'));     // Expected
