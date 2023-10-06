/*
 * DarkJSDK
 * A Tour of Arrays
 */

// Using the splice() method will add and/or remove array elements by overwriting the original array

const users = ['Michael', 'Dwight', 'Jim', 'Kevin'];

// at position 2, add 2 elements
users.splice(2, 0, 'Creed', 'Toby');
console.log(users); // returns ['Michael', 'Dwight', 'Creed', 'Toby', 'Jim', 'Kevin']

// at position 2, remove 2 elements
users.splice(2, 2);
console.log(users); // returns ['Michael', 'Dwight', 'Jim', 'Kevin']

