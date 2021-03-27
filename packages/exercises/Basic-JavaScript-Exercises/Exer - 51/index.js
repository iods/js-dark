/**
 * 51. Write a JavaScript program to convert a given number to hours and 
 *     minutes. 
 * 
 */


function myFunction(number) {
  return `${Math.floor(number / 60)}:${number % 60}`;
}

console.log(myFunction(2345));     // Expected

console.log(myFunction(0523));     // Expected

console.log(myFunction(123));     // Expected

