//array creation
let fruits = ["Apple", "Mango", "Banana", "Orange"];
console.log(fruits);

//push
fruits.push("Berry");
console.log(fruits);

//unshift
fruits.unshift("Rasberry");
console.log(fruits);

//replace element
fruits[2] = "Pomengrade";
console.log(fruits);

//replace element other than array length
fruits[7] = "Grapes";
console.log(fruits);

//pop
let po = fruits.pop();
console.log(fruits);
console.log(po);

//shift
let shif = fruits.shift();
console.log(fruits);
console.log(shif);

//slice
let sliceArray1 = fruits.slice(2, 5);
console.log(sliceArray1);

let sliceArray2 = fruits.slice(1);
console.log(sliceArray2);

let sliceArray3 = fruits.slice(-4, -2);
console.log(sliceArray3);

//splice
fruits.splice(2, 4, "Carrot", "Cucumber");
console.log(fruits);

fruits.splice(-2, 0, "brinjal", "beet", "Garlic", "beet");
console.log(fruits);

fruits.splice(0, 2);
console.log(fruits);

//indexOf
let iO = fruits.indexOf("beet");
console.log(iO);

let iO1 = fruits.indexOf("beet", 3);
console.log(iO1);

//lastIndexOf
let lIO = fruits.lastIndexOf("beet");
console.log(lIO);

let lIO1 = fruits.lastIndexOf("beet", 2);
console.log(lIO1);

//includes
let inc = fruits.includes("beet");
console.log(inc);

let inc1 = fruits.includes("beet", 4);
console.log(inc1);

//delete
delete fruits[1];
console.log(fruits);
console.log(fruits[1]);

//sort
fruits.sort();
console.log(fruits);

//reverse
fruits.reverse();
console.log(fruits);
