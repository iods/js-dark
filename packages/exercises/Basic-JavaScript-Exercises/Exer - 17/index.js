/**
 * 17. Write a JavaScript program to compute the absolute difference between a 
 *     specified number and 19. Returns triple their absolute difference if the 
 *     specified number is greater than 19
 * 
 */


function myFunction(number) {
  return (number - 19) > 19 ? (number - 19) * 3 : (number - 19) ;
}

console.log(myFunction(40));