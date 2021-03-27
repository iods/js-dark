/**
 * 1. Write a JavaScript program to display the current day and time in the 
 *    following format.
 *    Sample Output : Today is : Tuesday.
 *    Current time is : 10 PM : 30 : 38
 */

function myFunction() {
  var weekDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

  const date = new Date();

  return `
    Today is : ${weekDays[date.getDay()]}.
    Current time is : ${(date.getHours() > 12 ? (date.getHours() - 12) + ' PM' : (date.getHours()) + ' AM' )} : ${date.getMinutes()} : ${date.getSeconds()}
  `;
}

console.log(myFunction());
