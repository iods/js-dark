/**
 * 55. Write a JavaScript program to check whether a given string contains 
 *     equal number of p's and t's
 * 
 */


function myFunction(str) {
  let p = 0;
  let t = 0;

  str.split('').forEach(e => {
    if (e === 'p') p++;

    if (e === 't') t++;
  });

  return p === t;
}

console.log(myFunction('JavaScript'));     // Expected

// console.log(myFunction());     // Expected

// console.log(myFunction());     // Expected

// console.log(myFunction());     // Expected
