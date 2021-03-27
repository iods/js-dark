/*
Create a function that looks through an array arr and returns the first element in it that passes a 'truth test'. This means that given an element x, the 'truth test' is passed if func(x) is true. If no element passes the test, return undefined.
*/function findElement(arr, func) {
  for (let i = 0; i < arr.length; i++){
    if (func(arr[i])){
      return arr[i];
    }
  }
}

findElement([1, 2, 3, 4], num => num % 2 === 0);

// or just do arr.find(func)
//The find() method returns the value of the first element in the provided array that satisfies the provided testing function. If no values satisfies the testing function, undefined is returned.