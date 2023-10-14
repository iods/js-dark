'use strict';
/*
 * @TODO write description about how.
 *
 */

function binaryToDecimal(input) {

  let decimal = 0;
  let power = 0;

  for (let i = input.length -1; i >= 0; i--) {
    if (input[i] === "1") {
      decimal += Math.pow(2, power);
    }

    power++;
  }

  return decimal;
}

console.log(binaryToDecimal("101001"));
