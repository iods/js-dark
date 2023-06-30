/**
 * @fileoverview Callback Function Declaration
 * Provides an understanding of Loops for the DarkJSDK
 * @package
 */

// need to spend more time on callbacks

const one = (company, callback) => {
    console.log('Started with ' + company);
    callback(company);
}

const two = (company) => {
    console.log('Ended with ' + company);
}

one('Dunder Mifflin', two);