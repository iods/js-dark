/**
 * 56. Write a JavaScript program to divide two positive numbers and return a 
 *     string with properly formatted commas. 
 * 
 */


function myFunction(a, b) {
  return (a / b).toFixed(2);
}

console.log(myFunction(12, 23));     // Expected

console.log(myFunction(45, 11));     // Expected

console.log(myFunction(72, 11));     // Expected

console.log(myFunction(10, 8));     // Expected
