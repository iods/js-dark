function chunkArrayInGroups(arr, size) {
  let newArr = [];
  for (let i = 0; i < arr.length; i += size){
    newArr.push(arr.slice(i,size+i))
  }

  return newArr;
}

console.log(chunkArrayInGroups([0,1,2,3,4,5], 3));

/*
Write a function that splits an array (first argument) into groups the length of size (second argument) and returns them as a two-dimensional array.
*/


//more solution at FCC
/*
https://forum.freecodecamp.org/t/freecodecamp-challenge-guide-chunky-monkey/16005
*/