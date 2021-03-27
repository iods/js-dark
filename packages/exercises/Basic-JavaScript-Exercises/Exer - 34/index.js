/**
 * 34. Write a JavaScript program to find the larger number from the two given
 *     positive integers, the two numbers are in the range 40..60 inclusive.
 * 
 */


function myFunction(a, b) {
  if (a >= 40 && a <= 60 && b >= 40 && b <= 60 ) {
    return a > b ? a : b;
  }
  throw 'Out of range!';
}

try {
  console.log(myFunction(42, 54));
} catch (err) {
  console.error(err);
}

