function recursiveLinearSearch(arr, target, start = 0) {
  if (start >= arr.length) {
    return -1; // Target value not found
  }
  if (arr[start] === target) {
    return start;
  }
  return recursiveLinearSearch(arr, target, start + 1);
}

let arr = [1, 2, 3, 4, 5, 8, 4, 52, 1, 3, 22, 4];
let target = 3;
console.log(recursiveLinearSearch(arr, target));
