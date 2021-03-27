/**
 * 73. Write a JavaScript program to reverse the elements of a given array of 
 *     integers length 3.
 * 
 */


function myFunction(array) {
  return array.reverse();
}

console.log(myFunction([42, 2, 7, 1, 42]));

console.log(myFunction([8, 2, 2]));

console.log(myFunction([5, 2, 7, 1, 1]));

console.log(myFunction([]));
