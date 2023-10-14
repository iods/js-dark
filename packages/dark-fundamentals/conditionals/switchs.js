'use strict';
/*
 * @TODO write description about how.
 *
 */

let  employee = "Rye";

switch (employee) {
  case "Diego":
  case "Todd":
  case "Rye":
  case "Ralph":
    console.log("Technical Lead");
    break;

  case "Batman":
  case "Superman":
  case "Wonder Woman":
  case "Green Arrow":
    console.log("Superheroes");
    break;

  case "One":
  case "Two":
  case "Three":
  case "Four":
    console.log("Numbers");
    break;
}


let title = "Technical Lead";
let type;

switch (title) {
  case "Senior Developer":
    type = "Salary";
    break;

  case "Senior Strategist":
    type = "Hourly";
    break;

  case "Project Manager":
    type = "Hourly";
    break;

  case "Technical Lead":
    type = "Salary";
    break;

  case Default: // how to handle default in a switch?
    type = "Invalid type.";
    break;
}

console.log(type);
