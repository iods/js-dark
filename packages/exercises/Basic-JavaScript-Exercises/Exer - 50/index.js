/**
 * 50. Write a JavaScript program to capitalize the first letter of each word 
 *     of a given string.
 * 
 */


function myFunction(str) {
  return str.split(' ').map(word => {
    return word.slice(0, 1).toUpperCase() + word.slice(1, word.length) + ' ';
  }).join('');

}

console.log(myFunction('Lorem ipsum dolor sit amet, consectetur adipiscing elit.'));     // Expected
