//for in with object
let people = {
  Name: "Tejas",
  Age: 26,
  Occupation: "BE",
};

for (let x in people) {
  console.log(people[x]);
}

//for in with array
let arr = ["Hi", "Hello", "Bye"];
for (let x in arr) {
  console.log(arr[x]);
}

//for in with string
let str = "Deoxyribose";
for (let x in str) {
  console.log(str[x]);
}

//for of with array
let arr1 = ["Hi", "Hello", "Bye"];
for (let x of arr1) {
  console.log(x);
}

//for of with strings
let str1 = "Deoxyribose";
for (let x of str1) {
  console.log(x);
}
