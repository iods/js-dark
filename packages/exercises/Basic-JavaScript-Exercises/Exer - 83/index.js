/**
 * 83. Write a JavaScript to find the longest string from a given array of 
 *     strings.
 * 
 */


function myFunction(array) {
  let long = 0;
  let i;

  array.map((str, index) => {
    if (str.length > long) {
      i = index;
      long = str.length;
    }
  });

  return array[i];
}

console.log(myFunction(['accompany', 'baseball', 'whispering', 'plain', 'yard']));

console.log(myFunction(['mundane', 'torpid', 'confess', 'like', 'obnoxious']));
