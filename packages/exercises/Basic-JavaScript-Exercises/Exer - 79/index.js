/**
 * 79. Write a JavaScript program to test whether a given array of integers 
 *     contains 30 or 40 twice. The array length should be 0, 1, or 2.
 * 
 */


function myFunction(array) {
  let count30 = 0;
  let count40 = 0;

  array.map(n => {
    if (n === 40) {
      count40++;
    }
    if (n === 30) {
      count30++;
    }
  });

  return count30 > 1 || count40 > 1;
}

console.log(myFunction([30, 30]));

console.log(myFunction([8, 2]));

console.log(myFunction([5, 2]));
