const numbers = [1, 2, 3, 4, 6, 8];

let sum = 0;

for (let i of numbers)
    sum += i;

console.log(sum);

// if we do not instantiate the accumulator, it will take the first value in the array (not 0)
const news = numbers.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
}, 0);

console.log(news);

