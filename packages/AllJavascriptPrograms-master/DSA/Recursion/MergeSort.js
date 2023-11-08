function mergeSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  let mid = Math.floor(arr.length / 2);
  let leftArray = arr.slice(0, mid);
  let rigthArray = arr.slice(mid);

  let leftPart = mergeSort(leftArray);
  let rigthPart = mergeSort(rigthArray);

  return merge(leftPart, rigthPart);
}

function merge(leftPart, rigthPart) {
  let mergedArray = [];
  let leftIndex = 0;
  let rightIndex = 0;

  function mergeRecursion() {
    if (leftIndex < leftPart.length && rightIndex < rigthPart.length) {
      if (leftPart[leftIndex] < rigthPart[rightIndex]) {
        mergedArray.push(leftPart[leftIndex]);
        leftIndex++;
      } else {
        mergedArray.push(rigthPart[rightIndex]);
        rightIndex++;
      }
      mergeRecursion();
    } else {
      mergedArray.push(...leftPart.slice(leftIndex));
      mergedArray.push(...rigthPart.slice(rightIndex));
    }
  }
  mergeRecursion();
  return mergedArray;
}
let arr = [10, 2, 1, 5, 34, 27, 3];
console.log(mergeSort(arr));
