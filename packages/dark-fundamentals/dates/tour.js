/**
 * @fileoverview A tour of Dates declarations
 * Provides an understanding of Dates for the DarkJSDK
 * @package
 */

/*
 * Examples
 *
 */
const dateOne = new Date();
dateOne.toISOString();

const dateTwo = new Date('1986/06/17 05:12:33');
dateTwo.toISOString();

/** @TODO fix this. please. **/
const dateThree = new Date(133722447157);
dateThree.toISOString();

const dateFour = new Date(2012, 11, 12, 16, 45, 40);

console.log(dateOne.getUTCDay());

console.log(dateOne);
console.log(dateTwo);
console.log(dateThree);
console.log(dateFour);