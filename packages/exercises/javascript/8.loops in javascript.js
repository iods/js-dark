console.log("loops in javascript");
// Loops are used to repeat some code.
/* There are five types of loop in javascript:
1.for
2.for...in
3.forEach
4.while
5.do...while
*/

/* 1.for LOOP:
- The for loop is used when we want to execute the set of statements for a certain number of times. This loop will repeat a block of code as long as a certain condition is true.
SYNTAX:

for(initialization; condition; increment) {
    // Code to be executed
}

Initialization:- It is used to initialize the counter variables, for example, let i=0.
 
Condition:- The condition is evaluated at the beginning of each iteration. If it evaluates to true, the loop statements execute, and If it evaluates to false, the execution of the loop ends, i.e., i<100.

Increment:- it updates the loop counter with a new value each time the loop runs for example i++;
*/
let sum = 0;
for (let i = 0; i <=5; i++) {
    sum = sum + i;
}
console.log(sum);


/* 2.for...in LOOP:
- It is a special type of loop used when we want to iterates over the properties of an object or the elements of an array. The syntax for using the for-in loop is.
SYNTAX:

for(variable in object) {
  // Code to be executed
}

The loop counter, i.e., variable in the for-in loop, is a string, not a number. It contains the name of the current property or the index of the current array element.
*/
var person = {name: "Rohitsharma", language: "JavaScript", age: 20};// An object with some properties 
for(let i in person) {  
console.log( i + " = " + person[i]); 
}


/* 3.forEach LOOP:
- In JavaScript, the  forEach is a type of loop that is used for Array method. With the help of forEach loop, we can execute a function on each item within an array. The function can only be used on Arrays, Sets, and Maps.
SYNTAX:

array_name.forEach();

*/
let arr = [2,5,6,7,2,3];
arr.forEach(function(element,index,array){
    console.log(element,index,array);
});


/* 4.while LOOP:
- A while loop is used when we do not know how many times a certain block of code should execute. It evaluates the expression inside the parenthesis (). If the expression evaluates to true, the code inside the while loop is executed. Every time the expression is re-evaluated. This process continues until the expression evaluates to false. When the expression evaluates to false, the loop stops.
SYNTAX:

while (expression) {
  // body of loop
}

*/
let i=0;
let n=7;
while(i<=n){
    console.log(`This is ${i}`);
    i++;
}
console.log("loop executed succesfully");


/* 6.do...while loop:
- In this loop, the body inside the do statement is executed at first. Then the condition is evaluated. If the condition evaluates to true, the body of the loop inside the do statement is executed again. This process continues until the condition evaluates to false. Then the loop stops.
SYNTAX:

do {
    // body of loop
} while(condition)

*/
let i = 1;
let n =10;
do {
    console.log(i);
    i++;
} while(i <= n);

//Note: do...while loop is similar to the while loop. The only difference is that in do…while loop, the body of loop is executed at least once.


/* 7.Breaking a Loop:
- Sometimes, we may want to end our loop before it reaches completion. By using break statement, we can accomplish this task.
*/
for (let i = 0; i < 100; i++) {
    console.log(i);
       if (i == 90) {
           break;
       }
}


/* 8.do...while loop:
- When we want the loop to skip its current iteration and move on to the next one we use “continue” keyword.
*/
let i = 10;
for (let x = 1; x <=i; x++) {
    if (x == 5) {
        continue;
    }}