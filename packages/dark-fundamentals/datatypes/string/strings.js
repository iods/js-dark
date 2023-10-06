// https://google.github.io/styleguide/jsguide.html
/**
 * @fileoverview Event Manager
 * Provides an abstracted interface to the browsers' event systems.
 * @package dark-fundamentals
 */


const /** ?MyObject */ myObject = null;
const /** number */ someNum = 5;
const /** ?number */ someNullableNum = null;
const /** {foo: string, bar: number} */ record = 'test';
const /** !MyTypeDef */ def = 'test';
const /** ?SomeCamelCaseName */ n = 'test';
// String Creation
const message = 'Hello'
const greet = message + ', World!'

// String Constructor
const str = String('constructor')

// String Coercion
const coercion = '' + 5 // '5' as a string

// String Escape Characters
const escapeCharacters = 'This could\'ve been better.'

// No escape (double parenthesis)
const noEscape = "This could've been a little bit better."

// Raw String Literal ?
const lessEscape = `This could've been even "worse"`


// characters are immutable; however, updating the variable
// with a new value is still possible
let alpha = 'beta'
alpha[0] = 'B'

/** @desc Notifying a user that their account has been created. */
alpha = 'charlie'
console.log(alpha)

/**
 * Adds a single item, recklessly.
 * @see tour.js
 * @see datatypes.js
 */


const messages = 'about'
const message = 'think';

// template literals (object{}, boolean, string)
const st = `Whenever Im ${messages} to do something, I ${message}, 
"Would an idiot do that?" And if they would, I do not do that thing.`


console.log(st);

