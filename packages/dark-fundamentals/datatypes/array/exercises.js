/**
 * @fileoverview Default scripts for the DarkJSDK
 * Only the darkest stars burn the brightest
 * @package
 */


// write a function called arrayFromRange\
// the function should take two parameters, min and max
// -10, -9, -8, -7, -6, -5, -4

const numbers = arrayFromRange(1, 8);

console.log(numbers);

function arrayFromRange(min, max) {
    const output = [];
    for (let i = min; i <= max; i++)
        output.push(i);
    return output;
}

// setting a variable called output
// for loop to set the first value/variable as the minimum and number to start with
// then set max as the number to end with
// then using i++ until you reach the max number
// now return output;

// write your own includes function
// if the value is found in an array, return true
// if the value is not found in the array, then return false

const values = [1, 2, 3, 4, 5];

console.log(includes(values, 2));

function includes(array, searchItem) {
    for (let i of array)
        if (i === searchItem)
            return true;
    return false;
}



// moving an element
// create a function called move
// moves the first element in the array
// use splice to remove an element from the array

const n = [1, 2, 3, 4, 5];

const output = move(n, 1, -1);

console.log(output);

function move(array, index, offset) {
    const position = index + offset;
    if (position >= array.length || position < 0) {
        console.error('invalid offset');
        return;
    }
    const output = [...array];
    const element = output.splice(index, 1)[0];
    output.splice(position, 0, element);
    return output;
}

// should return [2, 1, 3, 4, 5]



const movies = [
  {title: 'a', year: 2019, rating: 4.5},
  {title: 'b', year: 2019, rating: 4.3},
  {title: 'c', year: 2019, rating: 4.4},
  {title: 'd', year: 2018, rating: 4.6},
];

const titles = movies
  .filter(m => m.year === 2019 && m.rating >=4)
  .sort((a, b) => a.rating - b.rating)
  .reverse()
  .map(m => m.title);

console.log(titles);

// should return a, c, b
