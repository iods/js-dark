/**
 * 7. Write a JavaScript program to find 1st January is being a Sunday between
 * 2014 and 2050.
 */


function myFunction() {
  for (let i = 2014; i <= 2050; i++) {
    const data = new Date(`January 1, ${i} 23:15:30`);
    if (data.getDay() === 0) {
      console.log(`January 1 of ${i} is a Sunday`);
    }
    
  }
}

myFunction();
