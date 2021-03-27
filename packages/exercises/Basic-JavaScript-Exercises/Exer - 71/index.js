/**
 * 71. Write a JavaScript program to check whether 1 appears in first or last 
 *     position of a given array of integers. The array length must be greater 
 *     or equal to 1.
 * 
 */


function myFunction(numbers) {
  if (numbers.length === 0) return false;

  return numbers[0] === 1 || numbers[numbers.length - 1] === 1 ? true : false;

}

console.log(myFunction([1, 2, 7, 1, 2]));

console.log(myFunction([8, 2, 7, 1, 2]));

console.log(myFunction([5, 2, 7, 1, 1]));

console.log(myFunction([]));
