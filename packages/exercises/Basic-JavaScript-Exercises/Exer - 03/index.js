/**
 * 3. Write a JavaScript program to get the current date.
 *    Expected Output :
 *    mm-dd-yyyy, mm/dd/yyyy or dd-mm-yyyy, dd/mm/yyyy
 */

function myFunction() {
  const date = new Date();

  var day = date.getDate() < 10 ? '0' + date.getDate() : date.getDate();

  var month = (date.getMonth() + 1) < 10 ? '0' + (date.getMonth() + 1) : (date.getMonth() + 1);

  return `${day}/${month}/${date.getFullYear()}`;
}

console.log(myFunction());
