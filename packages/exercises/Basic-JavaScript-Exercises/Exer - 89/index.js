/**
 * 89. Write a JavaScript program to check whether it is possible to replace $ 
 *     in a given expression x $ y = z with one of the four signs +, -, * or / 
 *     to obtain a correct expression.  Go to the editor
 *        For example x = 10, y = 30 and z = 300, we can replace $ with a 
 *        multiple operator (*) to obtain x * y = z
 * 
 */


function myFunction() {
  return x + y == z || x * y == z || x / y == z || x - y == z;
}

console.log(check_arithmetic_Expression(10, 25, 35))
