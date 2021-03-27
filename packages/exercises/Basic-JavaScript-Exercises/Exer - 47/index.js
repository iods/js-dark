/**
 * 47. Write a JavaScript program to check whether a given number is presents in 
 *     the range 40..10000.
 * 
 */


function myFunction(number) {
  return number >= 40 || number <= 1000;
}

console.log(myFunction(12));     // Expected

console.log(myFunction(42));     // Expected

console.log(myFunction(38));     // Expected

console.log(myFunction(100));     // Expected
