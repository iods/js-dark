/**
 * 72. Write a JavaScript program to check whether the first and last elements 
 *     are equal of a given array of integers, length 3.
 * 
 */


function myFunction(array) {
  if (array.length < 3) return false;

  return array[0] === array[array.length - 1]; 
}

console.log(myFunction([42, 2, 7, 1, 42]));

console.log(myFunction([8, 2, 2]));

console.log(myFunction([5, 2, 7, 1, 1]));

console.log(myFunction([]));
