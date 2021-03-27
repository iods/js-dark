/**
 * 67. Write a JavaScript program to create a new string from a given string,
 *     removing the first and last characters of the string if the first or last 
 *     character are 'P'. Return the original string if the condition is not 
 *     satisfied.
 * 
 */


function myFunction(str) {
  if (str.slice(0, 1) === 'P' || str.slice(-1) === 'P') return str;

  return str.slice(0, 1).slice(-1);
}

console.log(myFunction('POP'));

console.log(myFunction('New York'));

console.log(myFunction('Dublin'));
