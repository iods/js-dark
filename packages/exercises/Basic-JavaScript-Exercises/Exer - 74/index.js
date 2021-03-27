/**
 * 74. Write a JavaScript program to find the larger value between the first or
 *     last and set all the other elements with that value. Display the new 
 *     array.
 * 
 */


function myFunction(array) {
  let largerst = 0;
  array.map(n => n > largerst ? largerst = n : '');

  return array.map(n => n = largerst);
}

console.log(myFunction([42, 2, 7, 1, 37]));

console.log(myFunction([8, 12, 2]));

console.log(myFunction([5, 2, 7, 1, 1]));
