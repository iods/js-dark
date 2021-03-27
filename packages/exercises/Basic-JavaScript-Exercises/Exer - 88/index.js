/**
 * 88. Write a JavaScript program to check whether two given integers are 
 *     similar or not, if a given divisor divides both integers and it does not 
 *     divide either. 
 * 
 */


function myFunction(a, b, divisor) {
  if (
    (a % divisor === 0 && b % divisor === 0) || 
    (a % divisor !== 0 && b % divisor !== 0)
  ) {
    return true;
  } 

  return false;
}

console.log(myFunction(10, 25, 5));

console.log(myFunction(10, 20, 5));

console.log(myFunction(10, 20, 4));
