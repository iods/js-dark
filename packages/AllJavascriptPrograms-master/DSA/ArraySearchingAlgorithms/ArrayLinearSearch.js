function linearSearch(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return i;
    }
  }
  return -1;
}

let arr = [9, 8, 5, 63, 2, 5, 4, 1, 6, 45, 3, 2, 7, 8, 9];
let target = 8;
console.log(linearSearch(arr, target));
