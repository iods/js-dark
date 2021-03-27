// Recursion hurt my brain a lot, It just easy to understand, but it's kind of not very intuitive to design the solution.
//omg it hurt lmao.

function sum(arr, n) {
  // Only change code below this line
  if (n < 1) {
    var num = 0;
    return num;
  } else {
    num = sum(arr,n-1);
    console.log(n); // To track what n is right now
    num += arr[n-1];
    console.log("test" + num) // to track what num is right now
    return num;

  }
  // Only change code above this line
}
sum([2, 3, 4], 1);