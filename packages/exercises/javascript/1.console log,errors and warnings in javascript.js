

//console.table : To generate a table inside a console, we use console.table() method. The input must be an array or an object which will be displayed as a table. 
// examples:
console.table({name:"rohit sharma",collage:"nsit",degree:"not important"})

//console.assert: This method writes a message to the console that the assertion(dawa karna) failed and the message we provide as a parameter, but only if an expression evaluates to false. If the expression is true, then nothing will happen.
// examples:
console.assert(0>1, "Expression is false")
console.assert(0<1, "Expression is false")

//console.warn: This method is used to log a warning message to the console. By default, the warning message will be highlighted with yellow color.
// examples:
console.warn("this is a warning")

//console.clear: It is used to clear the console. In the case of Chrome, a simple overlayed text will be printed on the console.
// examples:
console.clear();

//console.time() and console.timeend(): With the help of console.time() and console.timeEnd() we can find the amount of time spend by a code.
// examples:
console.time();
for (let i = 0; i < 5; i++) {
    console.log("this is rohit sharma");
    
}
console.timeEnd();

//console.error(): Used to log error message to the console. Useful in the testing of code. By default, the error message will be highlighted with red color.
// examples:
console.error("this is a simple error");

//console.count: The console.count() method is used to count the number that the function hit by this counting method.
// examples:
for (let i = 0; i < 5; i++) {
    console.count(i);
}

//console.group() and console.groupEnd(): group() and groupEnd() methods of the console object allow us to group contents in a separate block, indented. Just like the time() and the timeEnd(), they also accept the label, again of the same value.
// examples:
console.group('simple');
console.log('Grouped');
console.groupEnd('simple');
console.log('new section');
