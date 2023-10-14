'use strict';
/*
 * @TODO write description about how.
 *
 */

function arrayRotation(arr, rotations) {

  for(let index = 0; index < rotations; index++) {

    let elementOne = arr.shift();
    arr.push(elementOne);
  }

  console.log(arr.join(" "));
}

arrayRotation([1, 2, 3, 4, 5, 6, 7], 8)
