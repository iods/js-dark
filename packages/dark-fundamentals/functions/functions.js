'use strict';
/*
 * @TODO write description about how.
 *
 */

/*
 * greet()
 * The function `greet` takes no arguments. It returns the text "Hello World!"
 * to the console.
 */
function greet() {

  return "Hello World!"
}

console.log(greet())


/*
 * add()
 * The function `add` takes two numbers as arguments. It returns the sum and the
 * result is stored into the variable `resultSum`. It is then printed to the
 * console.
 */
function add(a, b) {

  return a + b;
}

let resultSum = add(3, 11);
console.log(resultSum);


/*
 * calcArea()
 * The function `calcArea` takes two arguments, width and height. It returns the
 * area of a rectangle by using the formula: width * height. The function is
 * called with the arguments 4 and 6, and the result is stored in the variable
 * `rectangleArea`. It is then printed to the console.
 */
function calcArea(width, height) {

  return width * height;
}

let rectangleArea = calcArea(4, 6);
console.log(rectangleArea);


/*
 * calcVolume()
 * The function `calcVolume` takes two arguments, radius and height. It returns
 * the volume of a cylinder by using the formula: Pi * radius * radius * height.
 * The function is called with the arguments 4 and 6, and the result is stored
 * in the variable `cylinderVolume`. It is then printed to the console.
 */
function calcVolume(radius, height) {

  return Math.PI * radius * radius * height;
}

let cylinderVolume = calcVolume(4, 6);
console.log(cylinderVolume);


/*
 * capitalizeWords()
 * The function ``
 */
function capitalizeWords(string) {

  let space = string.split(" ");
  let capital = [];

  space.forEach((word) => {
    capital.push(word.charAt(0).toUpperCase() + word.slice(1));
  });

  console.log(capital.join(" "));
}

capitalizeWords("this is a story all about how my life got twist turn upside down.");


