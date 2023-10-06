/**
 * @fileoverview Break Declaration
 * Provides an understanding of Loops for the DarkJSDK
 * @package dark-fundamentals
 */

let characters = ['Dwight', 'Jim', 'Kevin', 'Creed'];
let characterToFind = 'Jim';

for (let i = 0; i < characters.length; i++) {
    const character = characters[i];

    if (character === characterToFind) {
        console.log(`${character} has been found!`);
        break;
    }

    console.log(`${character} was not found with ${characterToFind }`);
}