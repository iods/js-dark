'use strict';
/**
 * @fileoverview Scripts for
 * Only the darkest stars burn the brightest
 * @package
 */

// learn about rest parameters
// learn about default parameters

function interest(principal, rate, years) {
  return principal * rate / 100 * years;
}

console.log(interest(10000, 4.5, 5));


let x = 213;

console.log(x);

function log(){
  try {
    console.log.apply(console, arguments);
  }
  catch (e) {
    alert(Array.prototype.join.call(arguments, " "))
  }
}

function foo() {
  if (x) {
    // do something
  } else {
    // do something
  }
}
