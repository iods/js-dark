function ternarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    let mid1 = left + Math.floor((right - left) / 3);
    let mid2 = right - Math.floor((right - left) / 3);

    if (arr[mid1] === target) {
      return mid1;
    } else if (arr[mid2] === target) {
      return mid2;
    } else if (target < arr[mid1]) {
      right = mid1 - 1;
    } else if (target > arr[mid2]) {
      left = mid2 + 1;
    } else {
      left = mid1 + 1;
      right = mid2 - 1;
    }
  }
  return -1;
}

let arr = [10, 25, 45, 95, 105, 125, 178, 204, 246, 300];
let target = 300;
console.log(ternarySearch(arr, target));

mid = 4 - Math.floor((4 - 0) / 3);
console.log(mid);
