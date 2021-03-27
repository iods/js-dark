function destroyer(arr, ...x) {
  return arr.filter(item => !x.includes(item));
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);


/*
You will be provided with an initial array (the first argument in the destroyer function), followed by one or more arguments. Remove all elements from the initial array that are of the same value as these arguments.

Note
You have to use the arguments object.
*/

/*
https://forum.freecodecamp.org/t/freecodecamp-challenge-guide-seek-and-destroy/16046
*/
//other soltion are pretty wild, hmmm interesting