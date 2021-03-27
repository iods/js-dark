/**
 * 41. Write a JavaScript program to check three given numbers, if the three 
 *     numbers are same return 30 otherwise return 20 and if two numbers are 
 *     same return 40. 
 * 
 */


function myFunction(a, b, c) {
  if (a === b && a === c) return 30;

  if (a === b || a === c || b === c) return 40;

  return 20;
}

console.log(myFunction(1, 7, 4));     // Expected

console.log(myFunction(8, 8, 18));     // Expected

console.log(myFunction(12, 12, 12));     // Expected
