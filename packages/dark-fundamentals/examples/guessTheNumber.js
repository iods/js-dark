'use strict';
/*
 * Guess the Number
 * This function will generate a random number between 1 and 100 allowing the user
 * to make up to five guesses as to what the number is. Each guess provides the
 * user feedback about their guess being either higher than, lower than, or correct.
 *
 * 1, Generate a random number between 1 and 100
 * 2. tell the user their options
 * 3. check if the user is correct or not
 * 4. check if the user is too high or too low
 * 5. tell the user their guesses are maxed out
 * 6. tell the user the actual randomly generated number
 */

// generate a random number between 1 and 100
const randomNumber = Math.floor(Math.random() * 100) + 1;

// tell the user their options
console.log("You have five guesses. Choose between 1 and 100.");

let numberOfGuesses = 0;

while(numberOfGuesses < 5) {

  const guess = (parseInt(prompt("Guess a number between 1 and 100.")));

  // check if the guess is correct
  if (guess === randomNumber) {
    console.log("Holy shit. You actually guessed it.");
    break;
  }

  // check if the guess is too high or too low
  if (guess < randomNumber) {
    console.log("Ah... You were too low.")
  } else {
    console.log("Oh... You were too high.");
  }

  numberOfGuesses++;
}

// tell the user their guesses are maxed out
if (numberOfGuesses === 5) {
  console.log(`You have hit the maximum number of guesses. It was ${randomNumber}`);
}

console.log(randomNumber);
