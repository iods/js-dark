function addItemAtEndOfArray(arr, item) {
  arr[arr.length] = item;
  return arr;
}
let arr = [1, 2, 3, 4];
let item = 25;
console.log(addItemAtEndOfArray(arr, item));
