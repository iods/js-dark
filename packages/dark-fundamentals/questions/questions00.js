'use strict';
/*
 * @TODO add a description.
 */

/*
 * Question [1]
 */
function occurrences(a, b) {

  let count = 0;

  for (let i = 0; i < a.length; i++) {
    if (a[i] === b) {
      count++;
    }
  }

  console.log(`${b} repeats in the string ${count} times.`);
}

occurrences("asfasdfasdfasdfasdf", "s");


/*
 * Question [2]
 */
let arrOne = [1, 2, 3, 4, 4];
let arrTwo = [5, 5, 6, 7, 7];

function arrUnion(arrayOne, arrayTwo) {
  return arrayOne.concat(arrayTwo);
}

let union = new Set(arrUnion(arrOne, arrTwo));

console.log(Array.from(union));
