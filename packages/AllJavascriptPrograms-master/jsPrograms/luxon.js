// For Node.js
const { DateTime } = require("luxon");

// For modern JavaScript
//import { DateTime } from "luxon";
// Create a DateTime object for the current date and time
const now = DateTime.now();

// Parse a date string
const date = DateTime.fromISO("2023-10-29");

// Format a DateTime object
const formatted = date.toFormat("yyyy-MM-dd HH:mm:ss");

// Manipulate a DateTime object
const modified = date.plus({ days: 1, hours: 2 });

// Get the difference between two DateTime objects
const diff = date.diff(now, ["days", "hours"]).toObject();

// Working with time zones
const localDate = DateTime.local();
const utcDate = DateTime.utc();

// Display the results
console.log(now.toString());
console.log(formatted);
console.log(modified.toString());
console.log(diff);
console.log(localDate.toString());
console.log(utcDate.toString());
