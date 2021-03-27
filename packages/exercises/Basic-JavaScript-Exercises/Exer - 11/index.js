/**
 * 11. Write a JavaScript program to convert temperatures to and from Celsius, 
 *     Fahrenheit. 
 *     Go to the editor [ Formula : c/5 = (f-32)/9 [ where c = temperature in 
 *     Celsius and f = temperature in Fahrenheit ]
 *     Expected Output :
 *     60°C is 140 °F
 *     45°F is 7.222222222222222°C
 * 
 */


function myFunction(unit, temperature) {
  if (unit === 'C') {
    return `
     ${temperature} C is ${(temperature  * (9 / 5)) + 32}
    `;
  }
  return `
    ${temperature} F is ${(temperature  - 32) * (5 / 9)}
 `;
}

console.log(myFunction('F', 100));
