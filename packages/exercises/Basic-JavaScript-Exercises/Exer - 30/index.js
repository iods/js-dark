/**
 * 30. Write a JavaScript program to check whether a string "Script" presents 
 *    at 5th (index 4) position in a given string, if "Script" presents in 
 *    the string return the string without "Script" otherwise return the 
 *    original one.
 * 
 * 
 */


function myFunction(str) {
  return str.slice(4, 10) === 'Script' ? str.slice(0, 4) : str;
}

console.log(myFunction('JavaScript'));
