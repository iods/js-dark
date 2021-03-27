/*Datatypes in javascript:
- There are two kinds of datatypes in javascript, PRIMITIVE datatype and REFERENCE datatype.
PRIMITIVE datatype:javascript stores this value in stack since the size of the primitive datatype is const.
1.String
2.Number
3.Boolean
4.Null
5.Undefined
6.Symbol

REFERENCE datatype:javascript stores this value in heap since the size of the reference datatype is dynamic.
1.Array
2.Object Literals
3.Function
4.Date

*/

//One of the most significant differences between primitive data and reference data is that, If the value is primitive, then we manipulate the actual valuestored in that variable. Whereas, If the value is of reference data type, we can manipulate that object's reference, rather than the actual object. It means a variable that stores an object is accessed by reference.

// Primitive data types

// String
let name = "harry";
console.log("My string is " + name);
console.log("Data type is " + (typeof name)); //(typeof identifier) is used to know the datatypes in javascript.

// Numbers
let marks = 34.4;
console.log("Data type is " + (typeof marks));

// Boolean
let isDriver = true;
console.log("Data type is " + (typeof isDriver));

// Null
let nullVar = null;
console.log("Data type is " + (typeof nullVar));

// Undefined
let undef = undefined;
console.log("Data type is " + (typeof undef));

// Reference Data Types

// Arrays
let myarr = [1, 2, 3, 4, false, "string"];
console.log("Data type is " + (typeof myarr));

// Object Literals
let stMarks = {
    rajat: 89,
    rohit: 36,
    Rohan: 34,
    //rohit Sharma: 23  this will show you an sytax error of unknown identifier.so to declare identifier like this use quotes.
    "rohit Sharma": 39

}
console.log(typeof stMarks);

function findName() {

}
console.log(typeof findName);

let date = new Date();
console.log(typeof date);