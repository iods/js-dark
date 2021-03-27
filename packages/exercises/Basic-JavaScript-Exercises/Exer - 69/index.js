/**
 * 69. Compute the sum of three elements of a given array of integers of 
 *     length 3.
 * 
 */


function myFunction(numbers) {
  let sum = 0;
  
  numbers.forEach(n => sum += n);

  return sum; 
}

console.log(myFunction([7, 8, 2]));

console.log(myFunction([8, 9, 2]));

console.log(myFunction([8, 7, 12]));
