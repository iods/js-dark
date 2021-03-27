/**
 * 19. Write a JavaScript program to check whether a given integer is within 
 *     20 of 100 or 400.
 * 
 */


function myFunction(number) {
  return (number - 20) > 20 && number < 400; 
}

console.log(myFunction(401));
