/**
 * @fileoverview Add Event Listener Declaration
 * Provides an understanding of Loops for the DarkJSDK
 * @package
 */
// spend more time on these

let event = new Event('click');

window.addEventListener('click', () => {
    console.log('Event Dispatched');
});

document.dispatchEvent(event);