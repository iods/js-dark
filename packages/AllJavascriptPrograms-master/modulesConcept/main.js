// Tasks:
// Create a module that exports a function to calculate the sum of two numbers. Use ES6 syntax
// for defining and exporting the module.
// Create a module that exports an array of objects representing books. Each object should have
// a title, author, and year of publication. Use ES6 syntax for defining and exporting the module.
// Use Lodash to filter the books array from task 2 to only include books published after the year 2000.
// Use Luxon to create a new Date object representing the current date and time.
// Use Luxon to create a new DateTime object representing the date and time 7 days from now.
// Use Luxon to create a new Duration object representing the difference between the current date and the date 7 days from now.

import { sum } from "./sum.js";
import { books } from "./books.js";
import _ from "lodash";
import { DateTime } from "luxon";
import { Duration } from "luxon";
let result = sum(20, 25);
console.log(result);

console.log(books[1].title);

const filteredBooks = _.filter(books, (book) => book.year > 2000);

console.log(filteredBooks);

const currentDate = DateTime.local();
console.log(currentDate.toISO());

const futureDate = DateTime.local().plus({ days: 7 });
console.log(futureDate.toISO());

const duration = futureDate.diff(currentDate);
console.log(duration.toObject());
