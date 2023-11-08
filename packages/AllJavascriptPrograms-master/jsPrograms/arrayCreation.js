const prompt = require("prompt-sync")();
let arr = new Array(3);
console.log(arr.length);

for (let i = 0; i < arr.length; i++) {
  arr[i] = prompt("Please Enter the array values");
}

for (let x in arr) {
  console.log(arr[x]);
}
console.log(arr);
arr.name = "Tejas";
console.log(arr.name);
console.log(arr);
