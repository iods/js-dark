let arr = [25, 14, 23, 54, 45];
let index = 3;
for (let i = index; i < arr.length - 1; i++) {
  arr[i] = arr[i + 1];
}
arr.length = arr.length - 1;
console.log(arr);

//default method :- splice()

arr.splice(index, 1);
console.log(arr);
