/**
 * 90. Write a JavaScript program to find the kth greatest element of a given 
 *     array of integers 
 * 
 */


function myFunction(array, k) {
  return array.sort().reverse()[k - 1];
}

console.log(myFunction([1,2,6,4,5], 3));

console.log(myFunction([-10,-25,-47,-36,0], 1));
