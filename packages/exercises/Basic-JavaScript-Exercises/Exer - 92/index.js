/**
 * 92. Write a JavaScript program to find the maximal difference between any 
 *     two adjacent elements of a given array of integers.
 * 
 */

function myFunction(array) {
  let numbers = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i + 1]) {
      numbers.push(array[i] + array[i + 1]);
    }
  }
  return numbers.reduce((prev, cur, i, array) => {
    return prev > cur ? prev : cur;
  })
}

console.log(myFunction([1, 2, 3, 8, 9, 14]));

// console.log(myFunction([2, 3, 5, 1, 6]));

// console.log(myFunction([9, 3, 5, 1, 7]));
