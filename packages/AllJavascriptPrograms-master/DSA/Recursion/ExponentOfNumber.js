function exponentOfNumber(base, exponent) {
  if (exponent === 0) {
    return 1;
  } else {
    return base * exponentOfNumber(base, exponent - 1);
  }
}

let base = 2;
let exponent = 10;
console.log(exponentOfNumber(base, exponent));
