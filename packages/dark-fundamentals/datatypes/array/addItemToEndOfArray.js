/*
 * @TODO write description about how.
 *
 */

let arr = [1, 2, 3, 4, 5];

let item = 6;

function addItemToEndOfArray(arr, item) {
  arr[arr.length] = item;
  return arr;
}

console.log(addItemToEndOfArray(arr, item));
