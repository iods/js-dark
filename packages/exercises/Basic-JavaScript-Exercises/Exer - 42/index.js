/**
 * 42. Write a JavaScript program to check whether three given numbers are 
 *     increasing in strict mode or in soft mode.
 * 
 */


function myFunction(a, b, c) {
  return a < b && b < c ? 'strict mode' : 'soft mode';
}

console.log(myFunction(1, 2, 3));     // Expected

console.log(myFunction(3, 2, 1));     // Expected

