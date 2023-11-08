function gcd(a, b) {
  if (!b) {
    return a;
  } else {
    return gcd(b, a % b);
  }
}
let num1 = 48;
let num2 = 36;
console.log(gcd(num1, num2));
