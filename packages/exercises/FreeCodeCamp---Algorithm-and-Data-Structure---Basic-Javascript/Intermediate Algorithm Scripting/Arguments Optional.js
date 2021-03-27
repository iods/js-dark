//this one is still hard for me I will need to revisit it

function addTogether() {
  console.log(arguments[0])
  var checkNum = (num) => {
      if(typeof num !== "number") {
          return undefined;
      } else {
          return num;
      }   
  }

  if (arguments.length > 1){
      var a = checkNum(arguments[0]);
      var b = checkNum(arguments[1]);
      if (a === undefined || b === undefined) {
          return undefined
      } else {
          return a+b;
      }
  } else {
      var a = arguments[0]
      
      if (checkNum(a)) {
          return (b) => {
              if (a === undefined || checkNum(b) === undefined) {
                  return undefined;
              } else {
                  return a + b;
              }
          }
      }
  }
}

addTogether(2,3);

// Create a function that sums two arguments together. If only one argument is provided, then return a function that expects one argument and returns the sum.

// For example, addTogether(2, 3) should return 5, and addTogether(2) should return a function.

// Calling this returned function with a single argument will then return the sum:

// var sumTwoAnd = addTogether(2);

// sumTwoAnd(3) returns 5.

// If either argument isn't a valid number, return undefined.