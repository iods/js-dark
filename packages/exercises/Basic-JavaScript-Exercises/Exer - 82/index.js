/**
 * 82. Write a JavaScript to add two positive integers without carry.
 * 
 */


function myFunction(a, b) {
  if (a.toString().length != b.toString().length) return false;
  let result = [];

  for (let i = 0; i < a.toString().length; i++) {
    let sum = (+a.toString().split('')[i]) + (+b.toString().split('')[i]);

    result.push(sum > 9 ? sum % 10 : +sum.toString().slice(-1));
  }

  return +result.join('');
}

console.log(myFunction(999, 999));

console.log(myFunction(123, 897));


