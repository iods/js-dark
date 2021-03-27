/**
 * 76. Write a JavaScript program to create a new array taking the first and 
 *     last elements from a given array of integers and length must be greater 
 *     or equal to 1. 
 * 
 */


function myFunction(array) {
  if (array.length < 1) return array;

  return array.splice(0, 1).concat(array.splice(array.length - 1, array.length));
}

console.log(myFunction([42, 2, 7]));

console.log(myFunction([8, 2, 2]));

console.log(myFunction([5, 2, 7]));
