let userEmail1 = "abc@Google.com";

if (userEmail1) {
  // console.log("Yes");
} else {
  // console.log("No");
} // Yes

let userEmail2 = "";

if (userEmail2) {
  // console.log("Yes");
} else {
  // console.log("No");
} // No

/*
Falsy Values => false, 0 , -0, BigInt , 0n, "" , null , undefined , NaN

Truthy Values => "0", "flase", " ", [], {}, function(){}
*/

// to check Array and Object true or false

let userEmail3 = [];

if (userEmail3.length === 0) {
  // console.log("Yes Array is Empty");// Yes Array is Empty
} else {
  // console.log("No");
}
let userEmail4 = {};

if (Object.keys(userEmail4).length === 0) {
  // console.log("Yes Object is Empty");// Yes Object is Empty
} else {
  // console.log("No");
}

// Null Coalescing Operator (??) : null undefined
let val1;
val1 = 5 ?? 10;
let val2 = null ?? 20;
let val3 = null ?? undefined ?? 30;
// console.log(val1);// Output : 5
// console.log(val2);// Output :20
// console.log(val3);// Output :30

// Terniary Operator

// Syntax :- condtion ? true : false (works same as if else)

let counter = 0;
let user1SignedUP = true;
let user2SignedUP = false;
// user1SignedUP == true ? console.log(counter + 1) : console.log(counter - 1);
// Output => 1
// user2SignedUP == true ? console.log(counter + 1) : console.log(counter - 1);
// Output => -1
