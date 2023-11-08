let arr1 = [74, 85, 96];
let arr2 = [12, 23, 45, 56, 78, 89];
let arr3 = [];

for (let i = 0; i < arr1.length; i++) {
  arr3[i] = arr1[i];
}

for (let i = 0; i < arr2.length; i++) {
  arr3[arr1.length + i] = arr2[i];
}

console.log(arr3);

//default function :- concat()
console.log(arr3.concat(arr1, arr2));

//default function :- spread operator
arr3 = [...arr1, ...arr2];
console.log(arr3);
