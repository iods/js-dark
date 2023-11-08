function printIntegerInRange(num1, num2) {
  if (num2 - num1 === 2) {
    return [num1 + 1];
  } else {
    let result = printIntegerInRange(num1 + 1, num2);
    result.unshift(num1 + 1);
    return result;
  }
}

let num1 = 5;
let num2 = 10;
console.log(printIntegerInRange(num1, num2));
