/*
 * DarkJSDK
 * A Tour of Arrays
 */

const numbers = [10, 20, 30, 40, 50];

let found = numbers.find(function (value) {
    return value > 20;
})

console.log(found); // 30