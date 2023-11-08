function sentinelLinearSearch(arr, target) {
  const lastIndex = arr.length - 1;
  const lastValue = arr[lastIndex];
  arr[lastIndex] = target;

  let i = 0;
  while (arr[i] !== target) {
    i++;
  }

  arr[lastIndex] = lastValue; // Reset the array to its original state
  if (i < lastIndex || arr[lastIndex] === target) {
    return i;
  }
  return -1; // Target value not found
}

let arr = [1, 2, 3, 4, 5, 8, 4, 52, 1, 3, 22, 4];
let target = 3;
console.log(sentinelLinearSearch(arr, target));
