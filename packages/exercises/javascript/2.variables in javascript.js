// variables are the name given to the memory location. whenever we  want to save some data ,it is stored in different memory locations inside our main memory(RAM),so for easy retrivel of data stored in different memory locations we give it name known as variables names.

// Initially, we declare variables with a keyword "var". However, ES6 brings a new variable declaration keyword, "let" and "const."

/* Rules for variables  declartion:

 1.A variable name must start with a letter (a to z or A to Z), underscore (_), or dollar( $ ) sign. 
 2.A variable name cannot start with a number. After the first letter, we can use digits (0 to 9), for example, message1.
 3.JavaScript variables are case sensitive. For example, a and A are different variables.

*/ 

// variables declartion:
// When the variable is declared, the JavaScript engine assigns it a memory or space. Because of this, once a variable is declared, it takes a value of undefined even before the assignment/initialisation. We assigned data to the variable by using the assignment operator "=". 

// scope of variables: scope means when these variables are available for use.
// There are two types of scope, local and global. Var declarations are globally scoped, and when they are defined inside a function, they are locally scoped.

/*Datatypes in javascript:

 1.Number i.e., 11,23,45,6
 2.Strings, i.e., "Hello World."
 3.Boolean, i.e., true, false
 4.Undefined
 5.Null
 6.Any of the complex data structures (Array and Objects)
 
 */
var task; // undefined
var age = 25; // Number
var name = "Rohit sharma"; // String
var developer = true;// Boolean
var location = null; // Null

//let:
// similiar to variabes but it has scope constraints(restrictions). we can change its value but can't redeclare it in same scope unlike var.It has a block scope.

let age = 25; // Number
age = 15;
console.log(age);// No issue here,as we can update the value
let age= 50;
console.log(age); // SyntaxError: identifier "age" has already been declared. Redeclaration can't be done.
let name = "John"; // String
let developer = true;// Boolean
let location = null; // Null
let task; // undefined


//const:
// It is a variable type assigned to data whose value cannot be changed throughout the program. Const is more strict as compared to var and let, as they can't be redeclard and updated.It also has a block scope.

const age = 20; 
const job = 'developer';
const name; // SyntaxError: missing initializer
const num = 10;
num = 20; //Compiler Error: Cannot assign to 'num' because it is a constant or read-only property


/* Most common programming case types:

1. camelCase  
2. kebab-case
3. snake_case 
4. PascalCase 


*/

// comments in javascript: single line & Multiline 
// This is a  singleline comment.
/*
This is a Multiline Comment
This is a Multiline Comment
This is a Multiline Comment
 */