function linearSearchWithLastOccurance(arr, target) {
  let lastOccur = -1;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      lastOccur = i;
    }
  }
  return lastOccur;
}

let arr = [2, 9, 5, 6, 3, 2, 15, 3, 2, 45, 3, 2, 4, 3, 6];
let target = 2;
console.log(linearSearchWithLastOccurance(arr, target));
