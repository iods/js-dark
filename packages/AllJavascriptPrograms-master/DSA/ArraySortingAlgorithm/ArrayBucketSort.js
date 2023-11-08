function bucketSort(arr, bucketSize = 5) {
  if (arr.length === 0) {
    return arr;
  }

  // Find the minimum and maximum values in the input array
  let minValue = arr[0];
  let maxValue = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < minValue) {
      minValue = arr[i];
    } else if (arr[i] > maxValue) {
      maxValue = arr[i];
    }
  }

  // Determine the number of buckets needed
  const bucketCount = Math.floor((maxValue - minValue) / bucketSize) + 1;
  const buckets = new Array(bucketCount);

  // Initialize the buckets
  for (let i = 0; i < bucketCount; i++) {
    buckets[i] = [];
  }

  // Distribute the elements into the buckets
  for (let i = 0; i < arr.length; i++) {
    const bucketIndex = Math.floor((arr[i] - minValue) / bucketSize);
    buckets[bucketIndex].push(arr[i]);
  }

  // Sort each bucket and concatenate them
  const sortedArray = [];
  for (let i = 0; i < bucketCount; i++) {
    insertionSort(buckets[i]);
    sortedArray.push(...buckets[i]);
  }

  return sortedArray;
}

function insertionSort(arr) {
  const length = arr.length;
  for (let i = 1; i < length; i++) {
    const current = arr[i];
    let j = i - 1;
    while (j >= 0 && arr[j] > current) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = current;
  }
}

// Example usage
var arr = [6, 2, 5, 3, 9];
console.log(bucketSort(arr)); // Output: [2, 3, 5, 6, 9]
