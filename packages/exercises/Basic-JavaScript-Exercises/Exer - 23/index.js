/**
 * 23. Write a JavaScript program to create a new string from a given string 
 *      changing the position of first and last characters. The string length 
 *      smust be greater than or equal to 1.    
 * 
 */


function myFunction(str) {
  if (str.length > 2) {
    return str.substring(0, 1) + str.substring(str.length -1, str.length)
  }

  return str;
}

console.log(myFunction('sga'));
