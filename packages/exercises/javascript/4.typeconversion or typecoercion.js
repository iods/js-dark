console.log("Typeconversion and Typecoercion");

// Typeconversion: When we convert one data type to another data type, this process is called type conversion.
/*There are two type of conversion:
1.Explicit conversion:
-The type conversion that we manually do is known as explicit type conversion.
In JavaScript, explicit type conversions are done using the built-in methods like String (), Number(), etc.
a)Numeric Conversion:
-To convert Boolean values or numeric strings to numbers, we use the Number() in-built method.
-Number() method in case of empty strings and null values return 0. If a string is an invalid number like having an alphabet in a string, the result will be NaN(Not a Number).And in case of boolean value 0 and 1 is returned.
*/

let res;
// string to number
res = Number('100');
console.log(res); // 100
// boolean to number
res = Number(false);
console.log(res); // 0
res = Number(' ')
console.log(res); // 0
res = Number('hello');
console.log(res); // NaN
res = Number(undefined);
console.log(res); // NaN

/* 
b) Boolean converion:
-Boolean type conversion happens in logical operations.
-Boolean() method is used for this conversion.
-NaN, 0, undefined, null, "" are converting to false,everything else, including objects, to true.
*/

res = Boolean(1); // true
console.log(res);
res = Boolean(0); // false
console.log(res);
res = Boolean("1"); // true
console.log(res);
res = Boolean(""); // false
console.log(res);
res = Boolean(undefined); // false
console.log(res);

/* 
c) String conversion:
-The method String() is used to convert numbers to strings.
-It can be used on any type of numbers, literals, variables, or expressions.
-The method toString() does the same.
*/

let a = 90;
res = String(a); // returns a string from a number variable a
console.log(res, (typeof res));
console.log(String(378009)); // returns a string from a number literal 378009
let str = a.toString();
console.log(str, (typeof str));
console.log((378009).toString());

/*
d)parseInt and parseFloat:
-The in-built method parseInt() and parseFloat() return numbers from strings that start with numeric data.
-parseInt() will return integer value,whereas parseFloat will return float value from string.
*/

console.log( parseInt('$100 dollars') ); // NaN
console.log( parseInt('+10.25990 kg') ); // 10
console.log( parseFloat(' +10.25 kg') ); // 10.25
console.log( parseFloat('ABC’)'));        //NaN

/*
2.Implicit conversion:
-Sometimes JavaScript automatically converts one data type to another. This type of conversion is known as implicit conversion.
a)Conversion To String:
- When we add a number into a string, JavaScript converts the number to a string before concatenation.
*/

res = '3' + 4; 
console.log(res) // "34"
res = '9' + true; 
console.log(res); // "9true"
res= '0' + null; 
console.log(res); // "0null"
res = '7' + undefined;
console.log(res);

/*
b)Conversion To Number:
- Numeric string used with operators like  - , / , * returns number type.
*/

res = '4' - '4'; 
console.log(res); // 0
res = '4' * 5;
console.log(res); // 20

/* 
c)Boolean Conversion to Number:
- If we use Boolean, true is considered as 1 and false is considered as 0.
*/

res = '5' - true;
console.log(res); // 4
res = 10 + false;
console.log(res); // 10

/*
In JavaScript, Null is considered as 0 when used with numbers. Arithmetic operation of undefined with number, boolean or null returns NaN.
*/

res = 4 + null; // 4
console.log(res);
res = 4 - undefined;// NaN
console.log(res);
res = undefined- true;
console.log(res);
res = undefined- null;
console.log(res);

