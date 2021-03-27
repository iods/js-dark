var n1 = 25;
var n2 = 15.12;
console.log(n1 + n2);


var num1 = `25`;
var num2 = 15.12;
console.log(num1 + num2);


var num1 = `25`;
var num2 = 15.12;

num1 = parseFloat(num1);
console.log(num1 + num2);

var num1 = `25.15`;
var num2 = 15.19;

num1 = parseInt(num1);
console.log(num1 + num2);


var num1 = `25.25`;
var num2 = 15.19;

num1 = +num1;
console.log(num1 + num2);


var num1 = 15.25;
var num2 = 15.25;

num1 = "" + num1;
console.log(num1 + num2);


var num1 = 0.2;
var num2 = 0.1;

var res = num1 + num2;
res = res.toFixed(1);
console.log(res);