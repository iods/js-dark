function heapSort(arr) {
  let length = arr.length;

  // Build the heap
  for (let i = Math.floor(length / 2) - 1; i >= 0; i--) {
    heapify(arr, length, i);
  }

  // Extract elements one by one from the heap
  for (let i = length - 1; i > 0; i--) {
    // Swap the root (maximum element) with the last element
    let temp = arr[0];
    arr[0] = arr[i];
    arr[i] = temp;

    // Restore heap property for the remaining heap
    heapify(arr, i, 0);
  }

  return arr;
}

function heapify(arr, length, rootIndex) {
  let largest = rootIndex;
  let left = 2 * rootIndex + 1;
  let right = 2 * rootIndex + 2;

  // Compare the root with the left child
  if (left < length && arr[left] > arr[largest]) {
    largest = left;
  }

  // Compare the largest with the right child
  if (right < length && arr[right] > arr[largest]) {
    largest = right;
  }

  // If the largest element is not the root, swap them and heapify the affected subtree
  if (largest !== rootIndex) {
    let temp = arr[rootIndex];
    arr[rootIndex] = arr[largest];
    arr[largest] = temp;

    // Recursively heapify the affected subtree
    heapify(arr, length, largest);
  }
}

// Example usage
var arr = [6, 2, 5, 3, 9];
console.log(heapSort(arr)); // Output: [2, 3, 5, 6, 9]
