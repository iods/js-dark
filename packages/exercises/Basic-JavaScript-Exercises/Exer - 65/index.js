/**
 * 65. Write a JavaScript program to test whether a string end with "Script". 
 *     The string length must be greater or equal to 6.
 * 
 */


function myFunction(str) {
  return str.slice(-6) === 'Script' ? true : false;
}

console.log(myFunction('JavaScript'));

console.log(myFunction('TypeScript'));

console.log(myFunction('Java'));
