/**
 * 10. Write a JavaScript program to calculate multiplication and division of
 * two numbers (input from user).
 * 
 */


function mult(event) {
  event.preventDefault();
  const firstNumber = document.getElementById('first').value;
  const secondNumber = document.getElementById('first').value;
  
  const result = document.getElementById('result');

  result.innerHTML = firstNumber * secondNumber;

}

function div(event) {
  event.preventDefault();
  const firstNumber = document.getElementById('first').value;
  const secondNumber = document.getElementById('first').value;
  
  const result = document.getElementById('result');

  result.innerHTML = firstNumber / secondNumber;

}
