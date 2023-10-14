

## Variables 📚

best practice is now to use `let` not `var` for assigning variables.

1. Cannot be reserved
2. Must be meaningful and understandable
3. CANNOT start with a number
4. CANNOT contain a space or a hyphen (-)
5. in JavaScript we use CamelCase
6. best practice is to define variables on separate lines

## Constants

variables can change, constants cannot.
cannot reassign a constants

constants should be default choice, if you need to redefine, then use let.

## Primitive Types

1. strings - fancy name is string literal
2. numbers - number literal
3. booleans - boolean literal
4. undefined - not very common
5. null - used when we want to clear the value, available for reassignment

## Reference Types

objects
arrays
functions


## Dynamic Typing

start with a string, then change to a number
`typeof`
no integer/float, always just numbers

undefined is both a type and a value.


## Objects

multiple related variables can be put into an object

then we can just reference the object, rather than multiple variables
`{}` is known as the object literal

key, value pairs are the properties of the object

`{
    name: rye,
    age: 30,
}`

dot notation = person.name = 'Rye' (should be the default)
bracket notation = person['name'] = 'rye'

let reference = 'this'
person[reference] = 'that'

console.log(person.this) should = that


## Arrays

a list of objects, is technically just an object.

square brackets are called square literals, they indicate an empty array
`[]`
`let selectColors = ['red', 'blue'];`
`selectColors[3] = 'green';`
`console.log(selectColors[0]);`


## Functions

something that performs a set of tasks or calculates values.

see scripts.js

functions can have multiple parameters.

### Types of Functions

Template literals?

a set of statements that:
performing a task
calculates a value - `return` is used

a program is just a bunch of those two things

## Operators

1. arithmetic
2. assignment
3. comparison
4. logical
5. bitwise

### Arithmetic Operators

two or more operands to produce a value.
that is called an expression

Addition operator
subtraction
multiplication
division
remainder of division
exponentiation (x^2)



### Assignment Operators

### comparison operators
 
relational
let x = 1;
console.log(x > 0) greater than
console.log(x >= 0) greater or equal to
console.log(x < 0) less than
console.log(x <= 0) less than or equal to

equality 
console.log(x === 0) equal
console.log(x !== 0) not equal to

what about the == and not the ===

=== is strict equality (operands are same type and same value)
== is loose equality (operands only care about values, not types)
in loose equality, it changes the right to match left.
always use the strict equality operator

### ternary operator

let points = 110
let type = points > 100 ? 'gold' : 'silver';
if the first evaluates to true, use the first, else use the second

### logical operators and non-booleans

Logical AND (&&) returns TRUE if both operands are TRUE
console.log(true && true)

let incomeHigh = true;
let creditGood = true;
let loanMatch = incomeHigh && creditGood;

console.log(loanMatch)

Logical OR (||)
Returns TRUE if one of the operands is TRUE

let incomeHigh = false;
let creditGood = true;
let loanMatch = incomeHigh || creditGood;

still will come out true

---

NOT (!)
let notAMatch = !loanMatch

will return false because one returned false



## Logical Operators and Non-Booleans

 results are not necessarily true or false.
 if the operand is not true or false, it trys 

 falsy (false) - undefined, null, false, empty string, NaN, 0
 if any of these are used in a logical expression, is considered falsy

 truthy (true) - anything else
as soon as we find a truthy result, it stops searching (short circuiting)


user has to pick a color
let userColor = 'red'
let defaultColor = 'blue'
let currentColor = userColor || defaultColor;

current color would = red

if red was undedined, blue would be returned.

## Bitwise Operators

0 and 1

// 1 is represented as 00000001
// 2 is represented as 00000010
// R is represented as 00000011 (3)

console.log(1 | 2) a bitwise OR (logical ORs have ||)
console.log(1 & 2) a bitwise AND (logical ORs have &&)

decimal to binary converter

read, write, execute (can use 8 bits)
00000100
00000110
00000111

const readPermission = 4;
const writePermission = 2;
const execPermission = 1;

let permission = 0;

permission = permission | readPermission | writePermission

let message = (permission & readPermission) ? 'yes' : 'no'


### Operator Precedence
PEMDAS















