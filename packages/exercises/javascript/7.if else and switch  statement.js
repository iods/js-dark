console.log("If else and switch statements");

//We express a conditions for if statements with the help of a relational operators.
//Types of relational operators in javascript:

/*
Conditions  Meaning
1.a == b    a is equal to b  

2.a != b    a is not equal to b

3.a < b     a is less than b 

4.a > b     a is greater than b 

5.a <= b    a is less than or equal to b  

6.a >= b    a is greater than or equal to b

6.a===b     a has the same value and same type as b
*/

/*
IF STATEMENT:
- statements associated with it will be executed if the certain condition is satisfied.
SYNTAX: 

if(condition expression)
{ 
// code to be executed 
}
*/
const age = 12;
if (age >= 18) {
    console.log('you are eligible for driving');
}


/*
ELSE STATEMENT:
- When the if condition evaluates to false, we use the else statement. The else statement must follow if or else if statement. Multiple else statement at the same time is not allowed
SYNTAX: 

if(condition expression){
//Execute this code. 
}
else{
//Execute this code.
}
*/
if (age >= 18) {
    console.log('you are eligible for driving');
} else {
    console.log("you are not eligible for driving");
}


/*
ELSE IF STATEMENT:
- We use "else if" condition when we want to apply second level conditions after the if statement. Following is the syntax of else if condition.
SYNTAX: 

if(condition expression)
{
//Execute this code block
}
else if(condition expression){ 
//Execute this code block
}
*/
const marks = 90;
if (marks < 45) {
    console.log("fail")
} else if (marks >= 45 && marks < 90) {
    console.log("pass,good")
} else {
    console.log("excellent")
}


/* JavaScript if else shortcut: ternary operator:
- If the condition evaluates to true, the operator returns the value of the expression1. And if the condition evaluates to false, it returns the value of the expression2.
SYNTAX:
- Condition? expression1: expression2
*/
let comparison = 5 > 0 ? "Greater" : "smaller";
console.log(comparison);


/*SWITCH STTATEMENT:
- If there are many conditions to implement then in that case switch statement is used.It is often used with a break or a default keyword.The value of the expression is evaluated once.The value of the expression is compared with each case.If the expression has a match,the associated block of code is executed,and if there is no match, the default code block is executed.
BREAK KEYWORD: It is used to stop the execution of the block if the match if the match is found,which saves the evaluation time.
SYNTAX:

switch(expression) {
case a:
  // code block
 break;
case b:
 // code block
 break;
default:
 // code block
}
*/
switch (age) {
    case 18:
        console.log("You are 18");
        break;

    case 28:
        console.log("You are 28");
        break;

    case 38:
        console.log("You are 38");
        break;

    default:
        console.log("You are unknown age");
        break;
}