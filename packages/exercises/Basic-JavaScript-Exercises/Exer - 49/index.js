/**
 * 49. Write a JavaScript program to replace every character in a given string 
 *     with the character following it in the alphabet. 
 * 
 */


function myFunction(str) {
  return str.split('').map(char => String.fromCharCode(char.charCodeAt() + 1)).join('');
}

console.log(myFunction('abc'));     // Expected

console.log(myFunction('javascript'));     // Expected
