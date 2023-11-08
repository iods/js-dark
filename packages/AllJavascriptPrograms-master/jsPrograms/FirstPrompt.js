const prompt = require("prompt-sync")();
let name = prompt("Please enter person's name");
console.log(name);
let age = parseInt(prompt("Please enter the age of person"));
console.log(age);
let gender = prompt("Please enter the gender of person");
console.log(gender);
let hobbies = prompt(
  "Please enter hobbies (separated each hobby with ,)"
).split(", ");
console.log(hobbies.join(", "));
let FavCol = prompt("Please enter favourite colour");
console.log(FavCol);
