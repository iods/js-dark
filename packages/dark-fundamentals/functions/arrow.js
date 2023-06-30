/**
 * @fileoverview Arrow Function Declaration
 * Provides an understanding of Loops for the DarkJSDK
 * @package
 */

/** @desc Displaying the standard way of writing Arrow Functions. */
const greet = (value) => {
    return 'Hello ' + value;
}

/** @desc Displaying a quicker way of writing Arrow Functions. */
const greeting = (input) => `Hello ${input}`;

console.log(greet('World'));
console.log(greeting('World Two'));