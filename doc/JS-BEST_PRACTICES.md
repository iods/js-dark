


📌
Two types of conditional statements

if...else
switch...case

Research these on your own....

true or false (boolean) should be if...else


### Loops

they repeat an action a number of times

1. for
2. while
3. do while
4. for in
5. for of

for (loop variable, condition (must evaluate to true), increment expression)

for (let i = 1; i <= 5; i++) {
console.log('hello world.');
}

after first condition, it is evaluated again, keeps going until the condition is met

in for loops, loop variable is part of the loops
in while, it is set externally

changes how they are accessible (scope)

do while loops are always executed once, even if false

in while loops, the condition is executed ahead of time
in do while, the condition is executed at the end

infinite loop - executes forever. you crash your browser (i did that hahaha)


## `for-in` Loops

used to iterate over the properties of an ohject or elements in

when you want to show all properties of the object
const person = {
name: 'rye',
age: 20,
email: 'fuckyou.com'
};

for (let key in person)
console.log(key, person[key])

person.name
person['name']

const colors = ['red', 'green', 'blue'];

for (let i in colors)
console.log(i, colors[i])

## `for-of`

new way to iterate over arrays

const colors = ['red', 'green', 'blue'];

iterate over
for (let color of colors)
console.log(i, colors)

