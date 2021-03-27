/**
 * 4. Write a JavaScript program to find the area of a triangle where lengths
 *    of the three of its sides are 5, 6, 7.
 * 
 */


function myFunction(a, b, c) {
  var s = (a + b + c) / 2;

  return Math.sqrt(s * (s - a) * (s - b) * (s - c));
}

console.log(myFunction(5, 6, 7));
