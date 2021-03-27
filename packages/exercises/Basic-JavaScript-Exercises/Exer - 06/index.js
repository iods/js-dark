/**
 * 6. Write a JavaScript program to determine whether a given year is a 
 *    leap year in the Gregorian calendar.
 * 
 * 
 */


function myFunction(y) {
  if (y % 4 == 0 || y % 100 == 0 || y % 400 == 0) {
    return true;
  }

  return false;
}

console.log(myFunction(2020));
