function getFirstNElementsOfArray(arr, n) {
  let result = [];
  for (let i = 0; i <= n; i++) {
    if (i < arr.length) {
      result.push(arr[i]);
    } else {
      break;
    }
  }
  return result;
}
let arr = [25, 14, 5, 6, 5, 63, 2, 485, 85, 787, 4];
console.log(getFirstNElementsOfArray(arr, 4));
