/**
 * 66. Write a JavaScript program to display the city name if the string begins
 *     with "Los" or "New" otherwise return blank.
 * 
 */


function myFunction(str) {
  return str.slice(0, 3) === 'New' || str.slice(0, 3) === 'Los' ? str : '';
}

console.log(myFunction('Los Angeles'));

console.log(myFunction('New York'));

console.log(myFunction('Dublin'));
