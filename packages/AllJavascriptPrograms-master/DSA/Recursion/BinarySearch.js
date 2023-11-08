function binarySearch(arr, target, left, right) {
  let mid = Math.floor((left + right) / 2);
  if (arr[mid] === target) {
    return mid;
  } else if (target < arr[mid]) {
    return binarySearch(arr, target, left, mid - 1);
  } else {
    return binarySearch(arr, target, mid + 1, right);
  }
}

let arr = [2, 4, 5, 6, 7, 8, 9, 10, 20, 24];
let target = 10;
console.log(binarySearch(arr, target, 0, arr.length - 1));
