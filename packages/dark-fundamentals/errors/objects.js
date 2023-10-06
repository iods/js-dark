/**
 * @fileoverview Object Errors Declaration
 * Information about the type of errors and how to use them.
 * @package
 */

/**
 * @TODO need to do some serious research into error logging.
 */

const objectError = new Error('an object error');

console.log(objectError.name);
console.log(objectError.message);
console.log(objectError.stack);

throw new Error('objectError');

// throw of exception caught locally
try {
    throw new Error('Object Error');
    console.log('this code will be unreachable');
    console.log('this code will be unreachable');
    console.log('this code will be unreachable');
    console.log('this code will be unreachable');
} catch (error) {
    console.log(error.message);
}

try {
    // errant filled code
} catch (error) {
    if (error instanceof TypeError) {
        console.log('TypeError');
    } else if (error instanceof ReferenceError) {
        console.log('ReferenceError');
    } else {
        console.log('SomeError');
    }
}

