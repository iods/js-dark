/**
 * 14. Write a JavaScript exercise to get the extension of a filename.
 * 
 */


function myFunction(a) {
  return a.split('.').pop();
}

console.log(myFunction('index.server.html'));
