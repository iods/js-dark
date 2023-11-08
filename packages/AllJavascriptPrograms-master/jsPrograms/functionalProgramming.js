// Task 1: Pure Functions
// Define a function called add that takes two numbers as arguments and returns their sum.
// Define a function called multiply that takes two numbers as arguments and returns their product.
// Define a function called divide that takes two numbers as arguments and returns their quotient.

function add(a, b) {
  return a + b;
}
let addResult = add(20, 25);
console.log(addResult);

function multiply(a, b) {
  return a * b;
}
let mulResult = multiply(20, 5);
console.log(mulResult);

function divide(a, b) {
  return a / b;
}
let divResult = divide(10, 3);
console.log(divResult);

// Task 2: First-Class Objects
// Define a function called greet that takes a name as an argument and returns a string "Hello, {name}!".
// Assign the greet function to a variable called sayHello.
// Call the sayHello function with a name as an argument and log the result to the console.

function greet(name) {
  return `"Hello", ${name}!`;
}
let result = greet("Tejas");
console.log(result);

let sayHello = greet;

let result2 = sayHello("Rahul");
console.log(result2);

// Task 3: Higher Order Function
// Define a function called repeat that takes a function and a number
// as arguments and calls the function the specified number of times.
// Call the repeat function with the sayHello function and the number 3 as arguments.

function repeat(fun, num) {
  for (let i = 0; i < num; i++) {
    console.log(fun("Shubham"));
  }
}
repeat(sayHello, 3);

// Task 4: Function Composition
// Define a function called addOne that takes a number as an argument and returns the number plus 1.
// Define a function called double that takes a number as an argument and returns the number times 2.
// Define a function called triple that takes a number as an argument and returns the number times 3.
// Use function composition to create a new function called addOneDoubleTriple that takes a number as
// an argument and adds 1, doubles it, and triples it, in that order.

function addOne(num) {
  return num + 1;
}

function double(num) {
  return num * 2;
}

function triple(num) {
  return num * 3;
}

let addOneDoubleTriple = (num) => triple(double(addOne(num)));
console.log(addOneDoubleTriple(5));

// Task 5: Immutability in JavaScript
// Define an array called fruits that contains the strings "apple", "banana", and "orange".
// Use the push method to add the string "pear" to the fruits array.
// Use the slice method to create a new array called fruitCopy that contains the same elements as the fruits array.
// Use the splice method to remove the string "banana" from the fruits array.

let fruits = ["apple", "banana", "orange"];
console.log(fruits);

fruits.push("pear");
console.log(fruits);

let fruitsCopy = fruits.slice(-4, -1);
console.log(fruitsCopy);

let newFruitsCopy = fruits.splice(1, 1);
console.log(fruits);

// Task 6: Declarative and Imperative code
// Define an array called numbers that contains the numbers 1 through 10.
// Use a for loop to create a new array called squares that contains the squares of the numbers in the numbers array.
// Use the map method to create a new array called cubes that contains the cubes of the numbers in the numbers array.

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(numbers);

let squares = [];
for (let i = 0; i < 10; i++) {
  squares.push(numbers[i] ** 2);
}
console.log(squares);

let cubes = numbers.map((n) => n ** 3);
console.log(cubes);
