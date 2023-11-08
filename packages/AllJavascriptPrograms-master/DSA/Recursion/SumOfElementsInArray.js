function sumOfElementsInArray(arr) {
  if (arr.length === 1) {
    return arr[0];
  } else {
    return arr.pop() + sumOfElementsInArray(arr);
  }
}

let arr = [1, 2, 3, 4, 5];
console.log(sumOfElementsInArray(arr));
