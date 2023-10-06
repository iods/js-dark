/**
 * @fileoverview Reference Errors Declaration
 * Information about the type of errors and how to use them.
 * @package
 */

/**
 * @TODO need to do some serious research into error logging.
 */

// unresolved variable or type `title`
function getTitle() {
    console.log(title);
}

// Uncaught ReferenceError: title is not defined
getTitle();