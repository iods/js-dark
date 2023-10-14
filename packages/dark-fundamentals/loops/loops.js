'use strict';
/*
 * @TODO write description about how.
 *
 */

let employeeOne = {
  firstName: "Rye",
  lastName: "Miller",
  title: "Technical Lead",
  email: "rmiller@corra.com"
}

let employeeTwo = [
  "Diego",
  "Perico",
  "Technical Lead",
  "dperico@corra.com"
];

let employeeNameOne = "Rye Miller";
let employeeNameTwo = "Diego Perico";

// print each value of the array with a for in loop
for (let x in employeeOne) {
  console.log(employeeOne[x]);
}

// print each value of a string with a for in loop
for (let x in employeeNameOne) {
  console.log(employeeNameOne[x]);
}

// print
for (let y of employeeTwo) {
  console.log(y);
}

// print
for (let y of employeeNameTwo) {
  console.log(y);
}
