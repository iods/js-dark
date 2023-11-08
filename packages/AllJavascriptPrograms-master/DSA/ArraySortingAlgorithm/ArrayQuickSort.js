function quickSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  let pivot = arr[arr.length - 1];
  let leftArray = [];
  let rightArray = [];

  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] < pivot) {
      leftArray.push(arr[i]);
    } else {
      rightArray.push(arr[i]);
    }
  }
  return [...quickSort(leftArray), pivot, ...quickSort(rightArray)];
}

let arr = [1, 8, 9, 6, 4, 5, 2, 3];
console.log(quickSort(arr));
