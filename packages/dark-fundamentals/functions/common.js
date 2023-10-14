'use strict';
/*
 * @TODO write description about how.
 *
 */

function commonElements(arrOne, arrTwo) {
  for (let i = 0; i < arrOne.length; i++) {
    let element = arrOne[i];

    if (arrTwo.includes(element)) {
      console.log(element);
    }
  }
}

commonElements([1, 2, 3, 4], [2, 5, 6, 7, 8]);
