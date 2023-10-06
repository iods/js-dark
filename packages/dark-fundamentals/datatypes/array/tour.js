/*
 * DarkJSDK
 * A Tour of Arrays
 */

// JavaScript supports arrays, numerically indexed lists of values:

let primes = [2, 3, 5, 7];      // An array of four values, delimited with [ and ]
let v = primes[0]               // output: 2, the first element (index 0) of the array
primes.length                   // output: 4, the length of elements in the array
let l = primes[primes.length-1] // output: 7, the last element in the array
primes[4] = 9                   // Add a new element assignment to the array [2, 3, 5, 7, 9]
primes[4] = 11                  // Alter the existing element [2, 3, 5, 7, 11]
let empty = []                  // sets an empty array with no elements
empty.length                    // output: 0, it is an empty array

// Arrays can hold objects and other arrays

let points = [                  // an array with two elements
    {x: 0, y: 0},
    {x: 1, y: 1}                // each of these elements is an object
]

let data = {                    // An object with two properties
    point1: [[1, 2], [3, 4]],   // the value of each property is an array
    point2: [[2, 3], [4, 5]]    // the elements of each array, are an array
}

// push() end
// unshift() beginning
// splice() middle

// map
const numbers = [1, 3, -6, 4];

// value
// index
// array

const filtered = numbers.filter(value => value >= 0);

const items = filtered.map(value => '<li>' + value + '</li>');

const html = '<ul>' + items.join('') + '</ul>';

console.log(html);