function exponentialSearch(arr, target) {
  const n = arr.length;

  if (arr[0] === target) {
    return 0; // Target found at the first element
  }

  let i = 1;
  while (i < n && arr[i] <= target) {
    i *= 2;
  }

  // Perform binary search within the identified range
  let left = Math.floor(i / 2);
  let right = Math.min(i, n - 1);

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (arr[mid] === target) {
      return mid; // Target found
    }

    if (arr[mid] < target) {
      left = mid + 1; // Target may be in the right half
    } else {
      right = mid - 1; // Target may be in the left half
    }
  }

  return -1; // Target not found
}

// Example usage
var arr = [1, 2, 3, 4, 5, 6, 7];
var target = 5;
console.log(exponentialSearch(arr, target)); // Output: 4 (index of the target element)
