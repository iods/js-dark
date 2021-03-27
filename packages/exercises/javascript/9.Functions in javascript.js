console.log("Functions is javascript")

//Why to use functions?
/*
- There are mainly two advantages of JavaScript functions.
1.Code reusability: We can call a function several times whenever we need it.
2.Less coding: It reduces the line of code and makes our program compact and readable.
*/

//Defining a function: Function can be defined in two ways.

/*
1.Function Declaration:
- A Function Declaration defines a named function. To create a function declaration, use the function keyword, and then write the function's name. When using function declarations, the function definition is hoisted(means to lift or pull something up). Thus the function is allowed to be used before it is defined.
SYNTAX:

function name(parameters){
   //statements
}
Inside the function body, we can implement the logic. 
*/
function print_message(message) {
    console.log(message);
}
print_message("Hello World");//Output: Hello World


/*
2.Function Expressions:
- A Function Expressions defines a named or anonymous function. An anonymous function is a function that does not have any name. Function Expressions are not hoisted, and therefore we cannot call them before they are defined.  
SYNTAX:

let variable_name = function(parameters){
  // statements
}
here, we are setting the anonymous function object equal to a variable.
*/
let add=function(a, b) {
    return a + b;
}
console.log(add(4,3));//Output: 7


/*
Returning a value:
- JavaScript function returns undefined. 
- To specify a return value for a function, use the return statement followed by an expression or a value, like this:

return expression;

*/
function get_Distance(speed, time) {
  let dist = speed * time;
  return dist;
}
var myDistance = get_Distance(8, 5);
console.log(myDistance);

// Functions are executed when they are called. This is known as invoking a function.