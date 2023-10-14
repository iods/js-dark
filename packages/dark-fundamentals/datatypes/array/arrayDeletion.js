'use strict';
/*
 * Deleting a value from an Array
 */

const arr = [2, 55, 21, 44, 91, 311];
let index = 5;

for (let i = index; i < arr.length - i; i++) {
  arr[i] = arr[i + 1];
}

arr.length = arr.length -  1;
console.log(arr);

arr.splice(index, 1);
console.log(arr);
