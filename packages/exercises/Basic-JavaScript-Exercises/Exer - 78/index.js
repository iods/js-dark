/**
 * 78. Write a JavaScript program to test whether an array of integers of 
 *     length 2 does not contain 1 or a 3.
 * 
 */


function myFunction(array) {
  let ok = false;
  if (array.length != 2) return array;

  array.map(n => n === 1 || n === 3 ? ok = true : '');

  return ok;
}

console.log(myFunction([42, 1]));

console.log(myFunction([8, 2]));

console.log(myFunction([5, 2]));
