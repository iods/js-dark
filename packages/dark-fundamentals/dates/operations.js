/**
 * @fileoverview Date Operations
 * Provides an understanding of Dates for the DarkJSDK
 * @package
 */

/**
 * Returns the date one week from today (now).
 * @see tour.js
 */
const week = 1000 * 60 * 60 * 24 * 7;
const today = new Date().getTime();

const nextWeek = new Date(today + week);

console.log(nextWeek);