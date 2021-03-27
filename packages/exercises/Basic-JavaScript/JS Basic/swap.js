let a =10;
let b=15;
console.log("before swap: a = "+a , "b = "+b);
var temp = a;
a=b;
b=temp;
console.log("after swap: a = "+a , "b = "+b);

// another way

var x=5;
var y=7;
x = x + y;
y = x - y;
x = x - y;

console.log("after swap: x = "+x , "y = "+y);


// another way

var p = 5;
var q = 15;
[p, q] = [q, p];

console.log("after swap: p = "+p , "q = "+q);