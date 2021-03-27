/**
 * 37. Write a JavaScript program to create new string with first 3 characters 
 *     are in lower case from a given string. If the string length is less 
 *     than 3 convert all the characters in upper case. 
 * 
 */


function myFunction(str) {
  if (str.length >= 3) return str.slice(0, 3).toLowerCase() + str.slice(3, str.length);

  return str.toUpperCase();
}

console.log(myFunction('AMAZOM'));         // Expected amaZOM

console.log(myFunction('Python'));         // Expected python

console.log(myFunction('Py'));             // Expected PY

console.log(myFunction('JAVAScript'));     // Expected javAScript
