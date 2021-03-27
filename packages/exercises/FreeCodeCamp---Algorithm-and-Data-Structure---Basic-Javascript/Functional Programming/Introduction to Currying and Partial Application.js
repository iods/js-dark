function add(x) {
  // Only change code below this line
  let curried = y => z => x + y + z
  return curried;
  //it start at y because we already got x as the argument/parameter

  // Only change code above this line
}
console.log(add(10)(20)(30));


/*
The arity of a function is the number of arguments it requires. Currying a function means to convert a function of N arity into N functions of arity 1.

In other words, it restructures a function so it takes one argument, then returns another function that takes the next argument, and so on.

Here's an example:

//Un-curried function
function unCurried(x, y) {
  return x + y;
}

//Curried function
function curried(x) {
  return function(y) {
    return x + y;
  }
}
//Alternative using ES6
const curried = x => y => x + y

curried(1)(2) // Returns 3
This is useful in your program if you can't supply all the arguments to a function at one time. You can save each function call into a variable, which will hold the returned function reference that takes the next argument when it's available. Here's an example using the curried function in the example above:

// Call a curried function in parts:
var funcForY = curried(1);
console.log(funcForY(2)); // Prints 3
Similarly, partial application can be described as applying a few arguments to a function at a time and returning another function that is applied to more arguments. Here's an example:

//Impartial function
function impartial(x, y, z) {
  return x + y + z;
}
var partialFn = impartial.bind(this, 1, 2);
partialFn(10); // Returns 13
Fill in the body of the add function so it uses currying to add parameters x, y, and z.
*/