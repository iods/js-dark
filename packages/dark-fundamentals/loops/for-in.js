/**
 * @fileoverview for-each Declaration
 * Provides an understanding of loops for the DarkJSDK
 * @package
 */

/** @desc defines an object rather than an array to work with for-in */
const characterObject = {
    a: 'Dwight Schrute',
    b: 'Jim Halpert',
    c: 'Kevin Malone'
}

// use const or let within the for-in?
for (let character in characterObject) {
    console.log(`${character}: ${characterObject[character]}`);
}