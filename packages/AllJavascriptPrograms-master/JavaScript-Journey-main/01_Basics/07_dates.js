// Dates 
let myNewDate = new Date()

// console.log(myNewDate); // Output => 2023-10-06T18:16:14.133Z

// console.log(myNewDate.toISOString());// Output =>2023-10-06T18:27:11.470Z
// console.log(myNewDate.toUTCString());// Output => Fri, 06 Oct 2023 18:27:11 GMT
// console.log(myNewDate.toLocaleDateString()); // Output => 6/10/2023
// console.log(myNewDate.toJSON()); // Output => 2023-10-06T18:27:11.470Z
// console.log(myNewDate.toDateString());// Output => Fri Oct 06 2023

let myYear = new Date();
let startedYear = 2001;
let currentYear = myYear.getFullYear();
let yearsOrganizationStarted =  currentYear - startedYear;
// console.log(`Organization Celebrating the Year  ${yearsOrganizationStarted}`);

console.log(myYear.toLocaleString('default', {
     weekday: "long",
}));
/* Study MDN  Dates in JavaScript*/