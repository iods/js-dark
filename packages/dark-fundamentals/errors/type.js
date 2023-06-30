/**
 * @fileoverview Type Errors Declaration
 * Information about the type of errors and how to use them.
 * @package
 */

/**
 * @TODO need to do some serious research into error logging.
 */

let favoriteCharacter = 'Dwight Kurt Schrute';

// Unresolved variable or type `text`
let favorite = text.map(function (character) {
    return character.toUpperCase();
});

// Uncaught ReferenceError: text is not defined
console.log(favorite);