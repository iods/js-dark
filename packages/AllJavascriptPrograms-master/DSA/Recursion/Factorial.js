function facto(num) {
  if (num === 1) {
    return 1;
  } else {
    return num * facto(num - 1);
  }
}

let num = 5;
console.log(facto(num));
