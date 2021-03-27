/**
 * 39. Write a JavaScript program to compute the sum of the two given integers,
 *     If the sum is in the range 50..80 return 65 other wise return 80. 
 * 
 */


function myFunction(a, b) {
  return (a + b) >= 50 && (a + b) <= 80 ? 65 : 80;
}

console.log(myFunction(50, 10));     // Expected

console.log(myFunction(30, 20));     // Expected

console.log(myFunction(7, 9));     // Expected

console.log(myFunction(80, 2));     // Expected
