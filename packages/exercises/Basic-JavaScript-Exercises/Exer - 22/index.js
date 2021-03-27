/**
 * 23. Write a JavaScript program to create a new string from a given string 
 *     changing the position of first and last characters. The string length 
 *     must be greater than or equal to 1. 
 * 
 * 
 */


function myFunction(str, i) {
  return str.substring(0, i) + str.substring(i + 1, str.length);
}

console.log(myFunction('school', 0));
