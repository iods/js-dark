/**
 * 35. Write a program to check whether a specified character exists within 
 *     the 2nd to 4th position in a given string. 
 * 
 */


function myFunction(str, char) {
  return str.slice(1, 5).includes(char);
}

console.log(myFunction('pandemic', 'p'));
