// Array

let myArray = [1, 2, 3, 4, true, "Array"] // 1st type to declare Array

let objArray = new Array(1, 2, 3, true, 'ObjectArray') // Another type to declare Array

// console.log(myArray);
// console.log(objArray);

// Array Methods

// Pop => Removes the last element from an array and returns it.
//  If the array is empty, undefined is returned and the array is not modified.
// myArray.pop()
// console.log(myArray);// Output => [ 1, 2, 3, 4, true ]

// // push
// myArray.push("New-Array")
// console.log(myArray);// Output =>   [ 1, 2, 3, 4, true, 'New-Array' ]

// // unshift
// myArray.unshift('Old-Array')
// console.log(myArray);// Output => [ 'Old-Array', 1, 2, 3, 4, true, 'New-Array' ]

// // shift
// myArray.shift()
// console.log(myArray);// output => [ 1, 2, 3, 4, true, 'New-Array' ]

// includes => Determines whether an array includes a certain element, returning true or false as appropriate.
// console.log(myArray.includes('prathyush')); // Output flase since there no string in myArray such as prathyush
// console.log(myArray.includes(true)); // Output => true

// indexOf => Returns the index of the first occurrence of a value in an array, or -1 if it is not present.
// console.log(myArray.indexOf(3)); // Output => 2 (Array indexing starts from 0 - n )

// join => Adds all the elements of an array into a string, separated by the specified separator string.
let strArray = myArray.join()
// console.log(strArray); // Output => 1,2,3,4,true,Array {String type} (Values are same but the typeof the values differ)
// console.log(myArray); // Output => [ 1, 2, 3, 4, true, 'Array' ]

/*
  slice(startIndex,endIndex) =>  Returns a copy of a section of an array. 
  For both start and end, a negative index can be used to indicate an offset from 
  the end of the array. For example, -2 refers to the second to last element of the array.
*/

let slicedArray = myArray.slice(1, 3)
console.log(slicedArray); // Output => [ 2, 3 ] 
console.log('A ->',myArray); // Output =>A -> [ 1, 2, 3, 4, true, 'Array' ]
console.log('----------');

/*
 splice(startIndex,endIndex) =>    Removes elements from an array and, if necessary,
     inserts new elements in their place, returning the deleted elements.
*/
let splicedArray = myArray.splice(1, 3) 
console.log(splicedArray); // Output => [ 2, 3, 4 ]
console.log('B ->', myArray); // Output => B -> [ 1, true, 'Array' ]

