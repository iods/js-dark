/*
 DarkJSDK
 Strings
*/

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

alpha = 'charlie'
console.log(alpha)

