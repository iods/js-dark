/**
 * 21. Write a JavaScript program to create a new string adding "Py" in front 
 *     of a given string. If the given string begins with "Py" then return 
 *     the original string. 
 * 
 * 
 */


function myFunction(str) {
  return str.slice(0, 2) === 'Py' ? str : 'Py' + str;
}

console.log(myFunction('xPython'));
