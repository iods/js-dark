// You must create a program that generates a multiplication table based on user input. The program should prompt
//  the user to enter a number and then generate a table with the products of that number from 1 to 10. For example,
//  if the user enters 5, the program should generate a table with the products 5x1, 5x2, 5x3, ..., and 5x10.

// Hints:

// Use the prompt() function to prompt the user for input.
// Use a for loop to generate the table.
// Use the document.write() function to display the table on the page.

//To run prompt in vs code
const prompt = require("prompt-sync")();

//prompt to accept number from user
let num = parseInt(prompt("Please enter the number"));

//for loop for generating table
for (let i = 1; i <= 10; i++) {
  console.log(`${num} * ${i} = ${num * i}`); // string literals is used to print
}

//pokemonTextBasedProject
const prompt = require("prompt-sync")();
// class setUpGame {
//   startGame() {
//     console.log("Pokemon FireRed Version");
//     this.welcome(); // Call the function using `this`
//   }

//   welcome() {
//     console.log("Welcome to the world of Pokemon");
//   }

//   selfIntro(gender, name) {
//     console.log(`Hello ${name},so you are ${gender}`);
//   }
// }

// const sug = new setUpGame();
// sug.startGame();

// let gender = prompt("Are you 'Boy' or 'Girl'?");
// let name = prompt("What is your name?");

// sug.selfIntro(gender, name);

let opponent = [
  { name: "Garry", gender: "Boy" },
  { name: "Dawn", gender: "Girl" },
  { name: "Brock", gender: "Boy" },
  { name: "Misty", gender: "Girl" },
  { name: "Trans", gender: "Transgender" },
];

function selectOpponentFromList() {
  const name = prompt(
    "Please select opponent name (Garry, Dawn, Brock, Misty, Trans)"
  );
  const oppoName = opponent.find((x) => x.name === name);

  if (oppoName) {
    sendNameAndGenderOfOpponent(oppoName.name, oppoName.gender);
  } else {
    console.log("Name not found, Please select name from list");
    selectOpponentFromList();
  }
}

function sendNameAndGenderOfOpponent(name, gender) {
  console.log(`Your opponent is ${gender} and name of opponent is ${name}`);
}

selectOpponentFromList();
