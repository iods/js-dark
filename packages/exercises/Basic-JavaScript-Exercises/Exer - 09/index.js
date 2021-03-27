/**
 * 9. Write a JavaScript program to calculate days left until next Christmas.
 */


function myFunction() {
  var today = new Date();

  if (today.getMonth() == 12 && today.getDate() >= 25) {
    var christmasDay = new Date('December 25,' + new Date().getFullYear() + 1);
  }

  var christmasDay = new Date('December 25,' + new Date().getFullYear());

  const oneDay = 1000 * 60  * 60 * 24;

  return Math.ceil((christmasDay.getTime() - today.getTime()) / oneDay);
}

console.log(myFunction());
