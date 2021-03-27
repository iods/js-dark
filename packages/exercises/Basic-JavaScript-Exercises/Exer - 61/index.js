/**
 * 61. Write a JavaScript program to concatenate two strings except their 
 *     first character. 
 * 
 */


function myFunction(a, b) {
  return a.slice(1) + b.slice(1);
}

console.log(myFunction('Luppin', 'Curres'));     // Expected

console.log(myFunction('Light', 'Dark'));     // Expected
