/**
 * 60. Write a JavaScript program to create a new string without the first and 
 * last character of a given string. 
 * 
 */


function myFunction(str) {
  return str.slice(1, str.length).slice(0, str.length - 1);
}

console.log(myFunction('JavaScrip'));     // Expected

console.log(myFunction('Java'));     // Expected

console.log(myFunction('Python'));     // Expected
