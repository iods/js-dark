/**
 * @fileoverview Arrow Function Declaration
 * Provides an understanding of Loops for the DarkJSDK
 * @package
 */

// predicate functions
// whenever you want to pass a function as a callback or an argument for other methods, you can use arrow syntax
// remove the word function and replace it with arrow, remove the () too

/** @desc Displaying the standard way of writing Arrow Functions. */
const greet = (value) => {
    return 'Hello ' + value;
}

/** @desc Displaying a quicker way of writing Arrow Functions. */
const greeting = (input) => `Hello ${input}`;

console.log(greet('World'));
console.log(greeting('World Two'));