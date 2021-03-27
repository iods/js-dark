/**
 * 27. Write a JavaScript program to check whether a string starts with 'Java' 
 *     and false otherwise.
 * 
 * 
 */


function myFunction(str) {
  return str.slice(0, 4) === 'Java';
}

console.log(myFunction('TypeScript'));
