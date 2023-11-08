function evenOrOdd(n) {
  if (n < 0) {
    n = Math.abs(n);
  }
  if (n === 0) {
    return "Even";
  } else if (n === 1) {
    return "Odd";
  } else {
    return evenOrOdd(n - 2);
  }
}

let n = -10;
console.log(evenOrOdd(n));
