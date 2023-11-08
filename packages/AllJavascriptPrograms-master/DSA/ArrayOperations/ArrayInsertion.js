let arr = [25, 85, 445, 65, 4, 95];
let newVal = 1000;
let index = 5;
for (let i = arr.length - 1; i >= 0; i--) {
  if (i >= index) {
    arr[i + 1] = arr[i];
    if (i === index) {
      arr[i] = newVal;
    }
  }
}
console.log(arr);

//default method= splice()

arr.splice(index, 0, newVal);
console.log(arr);
