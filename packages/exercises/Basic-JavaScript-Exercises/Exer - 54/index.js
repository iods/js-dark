/**
 * 54. Write a JavaScript program to count the number of vowels in a given 
 *     string. 
 * 
 */


function myFunction(str) {
  let v = ['a', 'e', 'i', 'o', 'u'];
  let n = 0;

  str.split('').forEach(e => {
    v.forEach(el => {
      if (e === el) n++;
    });
  });

  return n;
  
  // return str.replace(/[^aeiou]/g, "").length; 
}

console.log(myFunction('Chainsbreak'));     // Expected

console.log(myFunction('pane borrowed'));     // Expected

console.log(myFunction('abCheck'));     // Expected
