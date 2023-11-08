function mergeSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  let mid = Math.floor(arr.length / 2);
  let leftArray = arr.slice(0, mid);
  let rigthArray = arr.slice(mid);

  let leftPart = mergeSort(leftArray);
  let rightPart = mergeSort(rigthArray);

  return merge(leftPart, rightPart);
}

function merge(leftPart, rightPart) {
  let mergeArray = [];
  let leftIndex = 0;
  let rightIndex = 0;
  while (leftIndex < leftPart.length && rightIndex < rightPart.length) {
    if (leftPart[leftIndex] < rightPart[rightIndex]) {
      mergeArray.push(leftPart[leftIndex]);
      leftIndex++;
    } else {
      mergeArray.push(rightPart[rightIndex]);
      rightIndex++;
    }
  }

  mergeArray.push(...leftPart.slice(leftIndex));
  mergeArray.push(...rightPart.slice(rightIndex));
  return mergeArray;
}

let arr = [45, 12, 62, 35, 8, 500, 85, 7];
console.log(mergeSort(arr));
