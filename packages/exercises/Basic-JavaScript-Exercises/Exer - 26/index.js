/**
 * 26. Write a JavaScript program to create a new string from a given string 
 *     taking the last 3 characters and added at both the front and back. 
 *     The string length must be 3 or more.
 * 
 * 
 */


function myFunction(str) {
  if (str.length >= 3) {
    return str.substring(str.length - 3, str.length) 
    + str 
    + str.substring(str.length - 3, str.length);
  }
  return str;
}

console.log(myFunction('JavaScript'));
