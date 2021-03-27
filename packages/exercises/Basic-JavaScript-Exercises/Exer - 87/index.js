/**
 * 87. Write a JavaScript program to check whether two arrays of integers of 
 *     same length are similar or not. The arrays will be similar if one array 
 *     can be obtained from another array by swapping at most one pair of 
 *     elements.
 * 
 */


function myFunction(a, b) {
  if (a.length != b.length) return false;
  let check = false;

  a.map((num, index) => {
    if (num != b[index]) check = false;
  });

  return check;
}

console.log(myFunction([10,20,30], [10,20,30]));

console.log(myFunction([10,20,30], [30,10,20]));
