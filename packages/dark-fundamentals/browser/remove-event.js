/**
 * @fileoverview Add Event Listener Declaration
 * Provides an understanding of Loops for the DarkJSDK
 * @package
 */

/**
 * Console will not render text until the event listener detects a click.
 * @see event-listener.js
 * @see dispatch-event.js
 *
 * @TODO research this more and make this better.
 */
const event = () => console.log('you click');

window.addEventListener('click', event);
window.removeEventListener('click', event);