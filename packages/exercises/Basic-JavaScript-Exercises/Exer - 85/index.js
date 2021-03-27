/**
 * 85. Write a JavaScript code to divide a given array of positive integers 
 *     into two parts. First element goes to first part, second element goes 
 *     to second part, and third element goes to first part and so on. Now 
 *     compute the sum of two parts and store into an array of size two.
 * 
 */


function myFunction(array) {
  if (array.length % 2 != 0) array.push(0);
  let result = [0, 0];

  array.map((number, index) => {
    index % 2 === 0 ? result[0] += number : result[1] += number;
  });

  return result;
}

console.log(myFunction([1, 2, 3, 4, 5, 7]));

console.log(myFunction([38, 23, 7, 24, 42, 3, 8]));
