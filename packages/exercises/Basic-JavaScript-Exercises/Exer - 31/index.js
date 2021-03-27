/**
 * 31. Write a JavaScript program to find the largest of three given integers. 
 * 
 */


function myFunction(a, b, c) {
  if (a > b && a > c) return a;

  if (b > a && b > c) return b;

  return c;
}

console.log(myFunction(0,-10,-20));
