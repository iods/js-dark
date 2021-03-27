/**
 * 32. Write a JavaScript program to find a value which is nearest to 100 from
 *     two different given integer values.
 * 
 */


function myFunction(a, b) {
  let aDifference = Math.abs(a - 100);
  let bDifference = Math.abs(b - 100);

  return aDifference < bDifference ? a : b;
}

console.log(myFunction(101, 98));
