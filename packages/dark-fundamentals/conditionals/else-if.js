/*
 * DarkJSDK
 * A tour of Javascript Conditionals
 */

// The else if conditional

/*
 * Example
 *
 */
const age = parseInt(prompt('Choose Number'));

if (age < 25) {
    console.log('You are still young. Lucky you.');
} else if (age >= 25 && age <= 65) {
    console.log('You only live once, keep going');
} else {
    console.log('I hope you saved for retirement you old bag');
}