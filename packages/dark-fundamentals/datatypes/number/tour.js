/*
 * DarkJSDK
 * A Tour of Numbers
 */

// JavaScript supports the Number datatype, no floats or integers. Just numbers.
// @TODO add more information about the Number datatype.

let number = 1;
let int = -1;
let float = 0.1;

const numbers = [10, 20, 30, 40, 50];

let found = numbers.find(function (value) {
    return value > 20;
})

found;