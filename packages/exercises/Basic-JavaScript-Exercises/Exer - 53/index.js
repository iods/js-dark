/**
 * 53. Write a JavaScript program to check whether the characters a and b are 
 *     separated by exactly 3 places anywhere (at least once) in a given string.
 * 
 */


function myFunction(str) {
  return (/a...b/).test(str) || (/b...a/).test(str);
}

console.log(myFunction('Chainsbreak'));     // Expected

console.log(myFunction('pane borrowed'));     // Expected

console.log(myFunction('abCheck'));     // Expected
