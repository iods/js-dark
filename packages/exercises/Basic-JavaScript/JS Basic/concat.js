var names = ['tamkin', 'rahman', 'toufiqur'];
var age = [10, 20, 30];
var final = names.concat(age);
console.log(final);

// copy within 

var fruits = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
console.log(fruits);
fruits.copyWithin(1, 0);
console.log(fruits);