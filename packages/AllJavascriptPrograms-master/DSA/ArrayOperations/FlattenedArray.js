function flattenArray(array) {
  const flattened = [];

  function flatten(arr) {
    for (let i = 0; i < arr.length; i++) {
      if (Array.isArray(arr[i])) {
        flatten(arr[i]);
      } else {
        flattened.push(arr[i]);
      }
    }
  }

  flatten(array);
  return flattened;
}

// Example usage
const arr = [1, [2, [3, 4], 5], 6];
console.log(flattenArray(arr)); // Output: [1, 2, 3, 4, 5, 6]
