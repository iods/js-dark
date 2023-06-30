/**
 * @fileoverview Event Loop Declaration
 * Provides an understanding of Loops for the DarkJSDK
 * @package
 */

console.log('Performed A');

setTimeout(() => {
    console.log('Performed B');
}, 2000);

// should this execute after B, or does it matter?
console.log('Performed C');