/**
 * 86. Write a JavaScript program to find the types of a given angle.
 *     Types of angles:
 *        Acute angle: An angle between 0 and 90 degrees.
 *        Right angle: An 90 degree angle.
 *        Obtuse angle: An angle between 90 and 180 degrees.
 *        Straight angle: A 180 degree angle.
 * 
 */


function myFunction(number) {
  if (number > 0 && number < 90) {
    return 'Acute angle';
  } else if(number === 90) {
    return 'Right angle';
  } else if(number > 90 && number < 180) {
    return 'Obtuse angle';
  } else if(number === 180) {
    return 'Straight angle';
  }

  return 'Out of range!'

}

console.log(myFunction(-7));

console.log(myFunction(47));

console.log(myFunction(145));

console.log(myFunction(180));
