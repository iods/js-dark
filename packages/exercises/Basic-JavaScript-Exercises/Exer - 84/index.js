/**
 * 84. Write a JavaScript to replace each character of a given string by the 
 *     next one in the English alphabet.
 * 
 */


function myFunction(str) {
  return str.split('').map(n => String.fromCharCode(n.charCodeAt() + 1)).join('');
}

console.log(myFunction('javascrip'));

console.log(myFunction('typescript'));

console.log(myFunction('mongodb'));
