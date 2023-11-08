const prompt = require("prompt-sync")();

// Define a class for creating Pokémon
class Pokemon {
  constructor(name, health, attackPower) {
    this.name = name;
    this.health = health;
    this.attackPower = attackPower;
  }

  attack(target) {
    console.log(`${this.name} attacks ${target.name}!`);
    target.health -= this.attackPower;
  }
}

// Create an array to store Pokémon
const pokemonList = [
  new Pokemon("Pikachu", 100, 10),
  new Pokemon("Charmander", 100, 8),
  new Pokemon("Squirtle", 100, 9),
  new Pokemon("Bulbasaur", 100, 7),
];

// Function to select a random Pokémon from the array
function getRandomPokemon() {
  const randomIndex = Math.floor(Math.random() * pokemonList.length);
  return pokemonList[randomIndex];
}

// Function to display Pokémon info using object destructuring
function displayPokemonInfo({ name, health }) {
  console.log(`[${name}] Health: ${health}`);
}

// Function to handle player's attack asynchronously
function handleAttack(playerPokemon, computerPokemon) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      playerPokemon.attack(computerPokemon);
      displayPokemonInfo(computerPokemon);

      if (computerPokemon.health <= 0) {
        console.log(`${computerPokemon.name} fainted! You win!`);
        resolve();
      } else {
        computerPokemon.attack(playerPokemon);
        displayPokemonInfo(playerPokemon);

        if (playerPokemon.health <= 0) {
          console.log(`${playerPokemon.name} fainted! You lose!`);
          reject(new Error("Player's Pokémon fainted."));
        } else {
          resolve();
        }
      }
    }, 1000);
  });
}

// Function to handle player's choice
async function handleChoice(playerPokemon, computerPokemon) {
  const choice = prompt("What do you want to do? (1. Attack, 2. Run) ");

  switch (choice) {
    case "1":
      await handleAttack(playerPokemon, computerPokemon);
      break;
    case "2":
      console.log("You ran away. Game over.");
      break;
    default:
      console.log("Invalid choice. Try again.");
      await handleChoice(playerPokemon, computerPokemon);
      break;
  }
}

// Get player's Pokémon
const playerPokemon = getRandomPokemon();

// Get computer's Pokémon
const computerPokemon = getRandomPokemon();

console.log("-------- Pokémon Battle --------");
console.log("Your Pokémon:");
displayPokemonInfo(playerPokemon);
console.log("Computer's Pokémon:");
displayPokemonInfo(computerPokemon);

handleChoice(playerPokemon, computerPokemon);
