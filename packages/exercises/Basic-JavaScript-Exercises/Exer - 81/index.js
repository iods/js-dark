/**
 * 81. Write a JavaScript program to add two digits of a given positive integer
 *     of length two.
 * 
 */


function myFunction(number) {
  if (typeof(number) != 'number' || number.toString().length != 2) return number;

  return (+number.toString().split('')[0]) + (+number.toString().split('')[1]);
}

console.log(myFunction('37'));

console.log(myFunction(42));

console.log(myFunction(51));
