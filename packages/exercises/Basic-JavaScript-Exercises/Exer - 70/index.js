/**
 * 70. Write a JavaScript program to rotate the elements left of a given array 
 *     of integers of length 3.
 * 
 */


function myFunction(numbers) {
  
  numbers.reverse();

  return numbers; 
}

console.log(myFunction([7, 8, 2]));

console.log(myFunction([8, 9, 2]));

console.log(myFunction([8, 7, 12]));
