/**
 * 67. Write a JavaScript program to create a new string from a given string,
 *     removing the first and last characters of the string if the first or last 
 *     character are 'P'. Return the original string if the condition is not 
 *     satisfied.
 * 
 */


function myFunction(n, str) {
  if (str.length < n) return str;

  return str.slice(0, n) + str.slice(-n); 
}

console.log(myFunction(4, 'JavaScript'));

console.log(myFunction(4, 'TypeScript'));

console.log(myFunction(5, 'Java'));
