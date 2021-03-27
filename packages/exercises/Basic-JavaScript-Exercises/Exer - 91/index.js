/**
 * 91. Write a JavaScript program to find the maximum possible sum of some of 
 *     its k consecutive numbers (numbers that follow each other in order.) 
 *     of a given array of positive integers.
 * 
 */


function myFunction(array, n) {
  let arrs = [];

  for(let i = 0; i < array.length; i++){
    arrs[i] = array.slice(i, i + n);
    arrs[i] = arrs[i].reduce((a, b) => a + b, 0);
  }
  
  return Math.max.apply(Math, arrs);
}

console.log(myFunction([1, 2, 3, 14, 5], 2));

console.log(myFunction([2, 3, 5, 1, 6], 3));

console.log(myFunction([9, 3, 5, 1, 7], 2));
