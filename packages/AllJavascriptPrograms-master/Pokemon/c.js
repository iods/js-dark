const prompt = require("prompt-sync")();

class Pokemon {
  constructor(name, type, weight, HP, attacks) {
    this.name = name;
    this.type = type;
    this.weight = weight;
    this.HP = HP;
    this.attacks = attacks;
  }
}

// Start the game
function startGame() {
  console.log("POKEMON FIRERED GAME");
  welcome();
}

// Welcome to the game
function welcome() {
  console.log("Welcome to the world of Pokemon");
}

startGame();

// Input your name
const yourName = prompt("What is your name?");

// Select your gender
const genders = ["Boy", "Girl", "Transgender"];
let yourGender;

function selectYourGender() {
  const gender = prompt("What is your gender? (Boy, Girl, Transgender)");

  if (genders.includes(gender)) {
    yourGender = gender;
    console.log(`Hello ${yourName}, oh! you are ${yourGender}.`);
  } else {
    console.log("Please select a proper gender");
    selectYourGender();
  }
}

selectYourGender();

// Select name and gender of opponent
const opponents = [
  { name: "Garry", gender: "Boy" },
  { name: "Dawn", gender: "Girl" },
  { name: "Brock", gender: "Boy" },
  { name: "Misty", gender: "Girl" },
  { name: "Trans", gender: "Transgender" },
];
let opponentName;
let opponentGender;

function selectOpponentFromList() {
  const name = prompt(
    "Please select the opponent name (Garry, Dawn, Brock, Misty, Trans)"
  );
  const opponent = opponents.find((x) => x.name === name);

  if (opponent) {
    opponentName = opponent.name;
    opponentGender = opponent.gender;
    console.log(
      `Your opponent is ${opponentGender} and their name is ${opponentName}`
    );
  } else {
    console.log("Name not found");
    selectOpponentFromList();
  }
}

selectOpponentFromList();

// Starter pokemons
const starterPokemon = [
  new Pokemon("Charmendar", "Fire", 25, 100, [
    { AttackName: "ember", Power: 24, AttackType: "Fire" },
    { AttackName: "scratch", Power: 15, AttackType: "Normal" },
    { AttackName: "growl", Power: 0, AttackType: "Normal" },
    { AttackName: "fireSpin", Power: 30, AttackType: "Fire" },
  ]),
  new Pokemon("Squirtle", "Water", 28, 100, [
    { AttackName: "waterGun", Power: 26, AttackType: "Water" },
    { AttackName: "scratch", Power: 15, AttackType: "Normal" },
    { AttackName: "growl", Power: 0, AttackType: "Normal" },
    { AttackName: "whirlPool", Power: 35, AttackType: "Water" },
  ]),
  new Pokemon("Bulbasaur", "Grass", 30, 100, [
    { AttackName: "razorLeaf", Power: 21, AttackType: "Grass" },
    { AttackName: "scratch", Power: 15, AttackType: "Normal" },
    { AttackName: "growl", Power: 0, AttackType: "Normal" },
    { AttackName: "vineWhip", Power: 28, AttackType: "Grass" },
  ]),
];

let selectedPokemon;

// Select a starter pokemon
function selectStarterPokemon() {
  console.log("Choose your starter Pokemon:");
  console.log("1. Charmendar");
  console.log("2. Squirtle");
  console.log("3. Bulbasaur");

  const choice = prompt("Enter the number of your choice:");

  if (choice >= 1 && choice <= starterPokemon.length) {
    selectedPokemon = starterPokemon[choice - 1];
    console.log(
      `You have selected ${selectedPokemon.name} as your starter Pokemon!`
    );
  } else {
    console.log("Invalid choice. Please select again.");
    selectStarterPokemon();
  }
}

selectStarterPokemon();

// Battle function
function battle() {
  console.log(`A wild ${opponentName} appears!`);
  console.log(`Go, ${selectedPokemon.name}!`);

  while (selectedPokemon.HP > 0) {
    console.log(`${selectedPokemon.name} HP: ${selectedPokemon.HP}`);
    console.log(`${opponentName} HP: ${selectedPokemon.HP}`);

    const attackChoice = prompt("Choose an attack:");

    const attack = selectedPokemon.attacks.find(
      (x) => x.AttackName === attackChoice
    );

    if (attack) {
      console.log(`${selectedPokemon.name} uses ${attack.AttackName}!`);

      // Calculate damage
      const damage = attack.Power;
      opponentPokemon.HP -= damage;

      console.log(`${opponentName} takes ${damage} damage.`);

      if (opponentPokemon.HP <= 0) {
        console.log(`${opponentName} faints. You win!`);
        break;
      }
    } else {
      console.log("Invalid attack. Please choose again.");
    }

    // Opponent's turn
    const opponentAttack =
      opponentPokemon.attacks[
        Math.floor(Math.random() * opponentPokemon.attacks.length)
      ];
    console.log(`${opponentName} uses ${opponentAttack.AttackName}!`);

    // Calculate damage
    const opponentDamage = opponentAttack.Power;
    selectedPokemon.HP -= opponentDamage;

    console.log(`${selectedPokemon.name} takes ${opponentDamage} damage.`);

    if (selectedPokemon.HP <= 0) {
      console.log(`${selectedPokemon.name} faints. You lose!`);
      break;
    }
  }
}

battle();
