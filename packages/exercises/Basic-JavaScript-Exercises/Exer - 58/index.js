/**
 * 58. Write a JavaScript program to create a new string of 4 copies of the 
 *     last 3 characters of a given original string. The length of the given
 *     string must be 3 and above. 
 * 
 */


function myFunction(str) {
  if (str > 3) return str;

  return str.repeat(4);
}

console.log(myFunction('abc'));     // Expected

console.log(myFunction('dfg'));     // Expected

console.log(myFunction('gh'));     // Expected
