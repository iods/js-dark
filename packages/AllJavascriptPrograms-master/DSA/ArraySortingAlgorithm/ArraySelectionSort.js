function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    //assume first element of unsorted array is min
    let min = i;
    for (let j = i + 1; j < arr.length; j++) {
      //if element is smaller then mark the position
      if (arr[min] > arr[j]) {
        min = j;
      }
    }

    //if current element is not smallest then swap it with smallest element
    if (min !== i) {
      let temp = arr[i];
      arr[i] = arr[min];
      arr[min] = temp;
    }
  }
  return arr;
}
let arr = [84, 95, 62, 5, 86, 42, 15];
console.log(selectionSort(arr));
