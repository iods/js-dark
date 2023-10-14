'use strict';
/*
 * @TODO write description about what.
 *
 */

/*
 * Array creation
 */
let arrOne = ["Rye", "Diego", "Ralph", "Andrei", "Mike"];
let arrTwo = [1, 2, 3, 4, 5, 6];
let arrThree = ["a", "b", "c", "d", "e"];


/*
 * Array Push
 * @TODO add a description.
 */
arrOne.push("Carol");
console.log(arrOne);

/*
 * Array Unshift
 * @TODO add a description.
 */
arrTwo.unshift(0);
console.log(arrTwo);

/*
 * Replace
 * @TODO add a description.
 */
arrThree[1] = "z";
console.log(arrThree);

/*
 * Replace Outside Array Length
 * @TODO add a description.
 */
arrThree[5] = "f";
console.log(arrThree);

/*
 * Array Pop
 * @TODO add a description.
 */
const names = arrOne.pop();
console.log(arrOne);
console.log(names);

/*
 * Array Shift
 * @TODO add a description.
 */
const numbers = arrTwo.shift();
console.log(arrTwo);
console.log(numbers);

/*
 * Array Slice
 * @TODO add a description.
 */
// One
const sliceOne = arrThree.slice(1, 4);
console.log(sliceOne);

// Two
const sliceTwo = arrThree.slice(2);
console.log(sliceTwo);

// Three
const sliceThree = arrThree.slice(-4, -2);
console.log(sliceThree);

/*
 * Array Splice
 * @TODO add a description.
 */
arrOne.splice(3, 4, "Joseph", "Devendra", "Andres");
console.log(arrOne);

arrTwo.splice(-1, 0, 8, 9, 10, 11);
console.log(arrTwo);

arrThree.splice(0, 1);
console.log(arrThree);

/*
 * Index Of
 * @TODO add a description.
 */
let indexOne = arrOne.indexOf("Diego");
console.log(indexOne);

let indexTwo = arrOne.indexOf("Diego", 4);
console.log(indexTwo);

/*
 * Last Index Of
 * @TODO add a description.
 */
let lastIndexOne = arrTwo.lastIndexOf(4);
console.log(lastIndexOne);

let lastIndexTwo = arrTwo.lastIndexOf(4, 2);
console.log(lastIndexTwo);

/*
 * Includes
 * @TODO add a description.
 */
let incOne = arrThree.includes("b");
console.log(incOne);

let incTwo = arrThree.includes("e", 3);
console.log(incTwo);

/*
 * Delete
 * @TODO add a description.
 */
delete arrOne[2];
console.log(arrOne);
console.log(arrOne[2]);

/*
* Sort
* @TODO add a description.
*/
arrThree.sort();
console.log(arrThree);

/*
 * Reverse
 * @TODO add a description.
 */
arrTwo.reverse();
console.log(arrTwo);
