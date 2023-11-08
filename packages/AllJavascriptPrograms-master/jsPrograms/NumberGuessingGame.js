// You need to create a number-guessing game. The game should generate a random number between 1 and 100 and allow the user to
//  make up to 5 guesses to try and correctly guess the number. After each guess, the game should provide feedback to the user,
//   telling them whether their guess was high, low, or correct.

// 1. Generate a random number between 1 and 100.
// 2. Display a message telling the user they have 5 guesses to make, and prompt them to enter their first guess.
// 3. Use a `while` loop to allow the user to make up to 5 guesses. Get the user's guess inside the loop and compare it to the 
// random number.
// 4. Use `if` statements to determine whether the guess was too high, too low, or correct, and display an appropriate message.
// 5. After the loop ends, display a message telling the user whether they won or lost the game.

//To run prompt in vs code
const prompt =require("prompt-sync")();

//Generate random number between 1 to 100
const randomNum=Math.floor(Math.random()*100)+1;

//Display message to user
console.log("You have five guesses, Please choose number between 1 to 100");

//while loop for five guesses
let numOfGuesses=0;
while(numOfGuesses<5){
    const guess=(parseInt(prompt("Enter Your guess number")));

    //check for guess is correct
    if(guess === randomNum){
        console.log("Congratulations, yours guessed number is correct");
        break;
    }

    //Check for guess is too high, too low
    if(guess<randomNum){
        console.log("Your guess is too low")
    }else{
        console.log("Your guess is too high");
    }
    numOfGuesses++;
}

//Guesses are finished
if(numOfGuesses === 5){
    console.log(`Your guesses are finished, the number was ${randomNum}`);
}

