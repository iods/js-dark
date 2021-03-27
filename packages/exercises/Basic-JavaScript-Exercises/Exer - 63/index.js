/**
 * 63. Write a JavaScript program to create a string using the middle three 
 *     characters of a given string of odd length. The string length must be 
 *     greater or equal to three
 * 
 */


function myFunction(str) {
  if (str.length % 2!= 0) {
   
    mid = (str.length + 1)/2;
    return str.slice(mid - 2, mid + 1);
  }
  return str;
}

console.log(myFunction('JavaScript'));     // Expected

console.log(myFunction('TypeScript'));     // Expected

console.log(myFunction('CoffeScript'));     // Expected
