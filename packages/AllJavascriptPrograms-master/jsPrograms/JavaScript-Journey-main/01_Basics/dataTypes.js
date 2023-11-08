// JavaScript is Dynamically Typed

// Primitives 
/*
  7 types of Primitives
     String | Number | Boolean | Null | Undefined | Symbol(to make value Unique)|BigInt.
 */

const score = 100 //Number(decimal,flots,Interger etc all comes under Number DT)

const userName = "Shiva"
const islogged = false
const temp = null
let yourName;

const id = Symbol(123);
// console.log(id);

let bigNumber = 1223242341243n
// console.log(typeof bigNumber);

// ===================================
// Reference/ Non-Primitive Types
/*
     3 types 
     Arrays | Object | Functions
 */

const arrayClasses = [1, 2, 3, "3A", 4, "10th", "Intermediate", "Graduation", "PG", 1.1] // Array
let userData = {
     userName: "Shiva",
     age: 22
}//Object

let newFun = function () {
     console.log("Funtion");
}//Functions can be said as Funtion Object

console.log(newFun);