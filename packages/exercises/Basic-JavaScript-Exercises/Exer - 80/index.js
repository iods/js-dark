/**
 * 80. Write a JavaScript program to swap the first and last elements of a
 *     given array of integers. The array length should be at least 1.
 * 
 */


function myFunction(array) {
  return array.splice(array.length -1, array.length).
         concat(array.splice(1, array.length -1)).concat(array[0]);
}

console.log(myFunction([1, 2, 3, 4, 8]));

console.log(myFunction([22, 23, 24, 25, 26]));

console.log(myFunction([31, 35, 25, 2, 68]));
