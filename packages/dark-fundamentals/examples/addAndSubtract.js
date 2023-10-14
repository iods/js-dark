/*
 * @TODO write description about how.
 *
 */
function addAndSubtract(numOne, numTwo, numThree) {

  function sum(numOne, numTwo) {
    return numOne + numTwo;
  }

  const sumResult = sum(numOne, numTwo);
  console.log(sumResult);

  function difference(sumResult, numThree) {
    return sumResult - numThree;
  }

  const differenceResult = difference(sumResult, numThree);
  console.log(differenceResult);
}

addAndSubtract(3, 7, 4);
