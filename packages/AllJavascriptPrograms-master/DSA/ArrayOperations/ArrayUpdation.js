let arr = [25, 85, 65, 23, 45];
let index = 2;
let newVal = 100;
arr[index] = newVal;
console.log(arr);

//default method :- splice()
arr.splice(index, 1, newVal);
console.log(arr);
