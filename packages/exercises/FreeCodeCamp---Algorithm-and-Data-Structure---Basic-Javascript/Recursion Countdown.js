// Only change code below this line
function countdown(n){
  if ( n < 0){
    return [];
  }
  if (n === 1){
    return [1];
  } else {
    console.log(n); // i use this to keep track of n's value, just so it's easier to solve this test.
    var count = countdown(n-1);
    count.unshift(n);
  }
  return count;
}
// Only change code above this line

console.log(countdown(10));