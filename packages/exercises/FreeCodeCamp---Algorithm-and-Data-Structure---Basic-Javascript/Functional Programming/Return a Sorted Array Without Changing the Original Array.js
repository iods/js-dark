var globalArray = [5, 6, 3, 2, 9];
function nonMutatingSort(arr) {
  // Only change code below this line
  let tempArr = []
  let newArr = tempArr.concat(arr);

  return newArr.sort(function(a, b) {
    return a - b;
    });
  
  // Only change code above this line
}
console.log(nonMutatingSort(globalArray));


/*
A side effect of the sort method is that it changes the order of the elements in the original array. In other words, it mutates the array in place. One way to avoid this is to first concatenate an empty array to the one being sorted (remember that slice and concat return a new array), then run the sort method.

Use the sort method in the nonMutatingSort function to sort the elements of an array in ascending order. The function should return a new array, and not mutate the globalArray variable.
*/

// or do this instead, much shorter
  return [].concat(arr).sort(function(a, b) {
    return a - b;
  });