/**
 * 24. Write a JavaScript program to create a new string from a given string 
 *     with the first character of the given string added at the front and back.
 * 
 * 
 */


function myFunction(str) {
  return str.substring(0, 1) + str + str.substring(0, 1); 
}

console.log(myFunction('str'));
