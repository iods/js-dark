/**
 * @fileoverview Continue Declaration
 * Provides an understanding of Loops for the DarkJSDK
 * @package
 */

let characters = ['Dwight', 'Jim', 'Kevin', 'Toby'];

for (let i = 0; i < characters.length; i++) {
    const character = characters[i];
    console.log(`The characters name is ${character}`);
    continue;
    console.log('this should not execute');
    console.log('this should not execute');
    console.log('this should not execute');
}

