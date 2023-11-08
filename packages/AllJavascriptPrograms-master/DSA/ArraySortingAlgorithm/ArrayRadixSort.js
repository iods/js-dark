function radixSort(arr) {
  const max = Math.max(...arr);
  let divisor = 1;

  while (divisor <= max) {
    arr = countingSort(arr, divisor);
    divisor *= 10;
  }

  return arr;
}

function countingSort(arr, divisor) {
  const count = new Array(10).fill(0);
  const n = arr.length;
  const output = new Array(n);

  for (let i = 0; i < n; i++) {
    const digit = Math.floor((arr[i] / divisor) % 10);
    count[digit]++;
  }

  for (let i = 1; i < 10; i++) {
    count[i] += count[i - 1];
  }

  for (let i = n - 1; i >= 0; i--) {
    const digit = Math.floor((arr[i] / divisor) % 10);
    output[count[digit] - 1] = arr[i];
    count[digit]--;
  }

  for (let i = 0; i < n; i++) {
    arr[i] = output[i];
  }

  return arr;
}

// Example usage
var arr = [170, 45, 75, 90, 802, 24, 2, 66];
console.log(radixSort(arr)); // Output: [2, 24, 45, 66, 75, 90, 170, 802]
