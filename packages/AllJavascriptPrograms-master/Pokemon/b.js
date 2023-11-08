const prompt = require("prompt-sync")();

//Global variables
var YourName;
var YourPokemon;
var OpponentName;
var OpponentPokemon;

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
const yN = prompt("What is your name?");

class yourNameClass {
  setName(name) {
    this.name = name;
  }

  getName() {
    return this.name;
  }
}

let yn = new yourNameClass();
yn.setName(yN);

// Select your gender
let yourGender = [
  { gender: "Boy" },
  { gender: "Girl" },
  { gender: "Transgender" },
];

function selectYourGender() {
  const gen = prompt("What is your gender? (Boy, Girl, Transgender)");

  let gend = yourGender.find((x) => x.gender === gen);

  if (gend) {
    sendNameAndGenderOfYourself(gend.gender, yn.getName());
  } else {
    console.log("Please select a proper gender");
    selectYourGender();
  }
}

//Print your name and gender
function sendNameAndGenderOfYourself(youGen, yourName) {
  YourName = yourName;
  console.log(`Hello ${yourName}, oh! you are ${youGen}.`);
}

selectYourGender();

// Select name and gender of opponent
let opponent = [
  { name: "Garry", gender: "Boy" },
  { name: "Dawn", gender: "Girl" },
  { name: "Brock", gender: "Boy" },
  { name: "Misty", gender: "Girl" },
  { name: "Trans", gender: "Transgender" },
];

function selectOpponentFromList() {
  const name = prompt(
    "Please select the opponent name (Garry, Dawn, Brock, Misty, Trans)"
  );
  const oppoName = opponent.find((x) => x.name === name);

  if (oppoName) {
    sendNameAndGenderOfOpponent(oppoName.name, oppoName.gender);
  } else {
    console.log("Name not found");
    selectOpponentFromList();
  }
}

//print name and gender of opponent
function sendNameAndGenderOfOpponent(name, gender) {
  OpponentGender = gender;
  OpponentName = name;
  console.log(
    `Your opponent is ${gender} and the name of the opponent is ${name}`
  );
}

selectOpponentFromList();

// Starter pokemons
let starterPokemon = [
  {
    pokemonName: "Charmendar",
    type: "Fire",
    weight: 25,
    HP: 100,
    Attack: [
      { AttackName: "ember", Power: 24, AttackType: "Fire" },
      { AttackName: "scratch", Power: 15, AttackType: "Normal" },
      { AttackName: "growl", Power: 0, AttackType: "Normal" },
      { AttackName: "fireSpin", Power: 30, AttackType: "Fire" },
    ],
  },
  {
    pokemonName: "Squirtle",
    type: "Water",
    weight: 28,
    HP: 100,
    Attack: [
      { AttackName: "waterGun", Power: 26, AttackType: "Water" },
      { AttackName: "scratch", Power: 15, AttackType: "Normal" },
      { AttackName: "growl", Power: 0, AttackType: "Normal" },
      { AttackName: "whirlPool", Power: 35, AttackType: "Water" },
    ],
  },
  {
    pokemonName: "Bulbasaur",
    type: "Grass",
    weight: 30,
    HP: 100,
    Attack: [
      { AttackName: "razorLeaf", Power: 21, AttackType: "Grass" },
      { AttackName: "scratch", Power: 15, AttackType: "Normal" },
      { AttackName: "growl", Power: 0, AttackType: "Normal" },
      { AttackName: "solarBeam", Power: 40, AttackType: "Grass" },
    ],
  },
  {
    pokemonName: "Pikachu",
    type: "Electric",
    weight: 19,
    HP: 100,
    Attack: [
      { AttackName: "thunderBolt", Power: 28, AttackType: "Electric" },
      { AttackName: "scratch", Power: 15, AttackType: "Normal" },
      { AttackName: "growl", Power: 0, AttackType: "Normal" },
      { AttackName: "thunder", Power: 42, AttackType: "Electric" },
    ],
  },
];

//Instructions from professor
console.log(
  "Professor: Before you start your journey in the Pokemon world, you should have a Pokemon. Here are some Pokeballs that contain Pokemon."
);

// Choose your and opponent starter pokemon through pokeballs
function chooseStarterPokemon() {
  const pokeballNumber = parseInt(prompt("Choose any pokeball (1, 2, 3, 4)"));

  if (pokeballNumber >= 1 && pokeballNumber <= 4) {
    let pokemonName = starterPokemon[pokeballNumber - 1].pokemonName;
    let pokemonType = starterPokemon[pokeballNumber - 1].type;

    let opponentPokemonName;
    if (pokemonName === "Charmendar") {
      opponentPokemonName = starterPokemon[1].pokemonName;
    } else if (pokemonName === "Squirtle") {
      opponentPokemonName = starterPokemon[2].pokemonName;
    } else if (pokemonName === "Bulbasaur") {
      opponentPokemonName = starterPokemon[0].pokemonName;
    } else if (pokemonName === "Pikachu") {
      opponentPokemonName = starterPokemon[2].pokemonName;
    }

    let opponentPokemonTyp = starterPokemon.find(
      (x) => x.pokemonName === opponentPokemonName
    );
    let opponentPokemonType = opponentPokemonTyp.type;

    console.log(yourPokemonNameAndType(pokemonName, pokemonType));
    console.log(
      opponentPokemonNameAndType(opponentPokemonName, opponentPokemonType)
    );
  } else {
    console.log("Wrong pokeball. Please choose the correct pokeball number");
    chooseStarterPokemon();
  }
}

// Print Your starter pokemon
function yourPokemonNameAndType(pokemonName, pokemonType) {
  YourPokemon = pokemonName;
  return `Nice choice! You chose ${pokemonName}, which is a ${pokemonType} type Pokemon.`;
}

// Print Opponent's starter pokemon
function opponentPokemonNameAndType(opponentPokemonName, OpponentPokemonType) {
  OpponentPokemon = opponentPokemonName;
  return `Your opponent ${OpponentName} chose ${opponentPokemonName}, which is a ${OpponentPokemonType} type Pokemon.`;
}

chooseStarterPokemon();

// Battle
class Battle {
  //Want to battle or not
  battleWithOpponent() {
    let yourResponse = prompt(
      `${OpponentName}: Hey ${YourName}, let's have our first Pokemon battle! (sure, no)`
    );

    if (yourResponse === "sure") {
      this.battleStart();
    } else if (yourResponse === "no") {
      console.log("Game ends!");
    } else {
      console.log("Please select an appropriate response");
      this.battleWithOpponent();
    }
  }

  //choose your pokemon attack name
  attackName() {
    let availableAttacks;
    for (let i = 0; i < starterPokemon.length; i++) {
      if (starterPokemon[i].pokemonName === YourPokemon) {
        availableAttacks = starterPokemon[i].Attack.map(
          (attack) => `${attack.AttackName} = ${attack.Power}`
        );
      }
    }

    let yourPokemonAttackName = prompt(
      `Choose Your attack ${availableAttacks}`
    );

    let attackFound = false; // Flag to track if a valid attack name is found

    for (let i = 0; i < starterPokemon.length; i++) {
      for (let j = 0; j < starterPokemon[i].Attack.length; j++) {
        if (starterPokemon[i].Attack[j].AttackName === yourPokemonAttackName) {
          let attackType = starterPokemon[i].Attack[j].AttackType;
          let attackName = starterPokemon[i].Attack[j].AttackName;
          let attackPower = starterPokemon[i].Attack[j].Power;
          return [attackName, attackPower, attackType];
        }
      }
    }

    if (!attackFound) {
      console.log("Please choose an appropriate attack");
      return this.attackName();
    }
  }

  //battle starts
  battleStart() {
    console.log("Battle Starts!");

    let HpOfYourPokemon;
    for (let i = 0; i < starterPokemon.length; i++) {
      if (starterPokemon[i].pokemonName === YourPokemon) {
        HpOfYourPokemon = starterPokemon[i].HP;
      }
    }

    let HpOfOpponentPokemon;
    for (let i = 0; i < starterPokemon.length; i++) {
      if (starterPokemon[i].pokemonName === OpponentPokemon) {
        HpOfOpponentPokemon = starterPokemon[i].HP;
      }
    }

    console.log(`${OpponentName} sends out ${OpponentPokemon}!`);
    console.log(`Current HP of ${OpponentPokemon} is ${HpOfOpponentPokemon}`);
    console.log(`Go, ${YourPokemon}!`);
    console.log(`Current HP of ${YourPokemon} is ${HpOfYourPokemon}`);

    while (HpOfYourPokemon >= 0 && HpOfOpponentPokemon >= 0) {
      let yourPokemonAttackName = this.attackName();
      console.log(`${YourPokemon} uses ${yourPokemonAttackName[0]} attack!`);

      {
        HpOfOpponentPokemon -= yourPokemonAttackName[1];
        if (HpOfOpponentPokemon > 0) {
          console.log(
            `Remaining HP of ${OpponentPokemon} is ${HpOfOpponentPokemon} `
          );
        } else if (HpOfOpponentPokemon <= 0) {
          HpOfOpponentPokemon = 0;
          console.log(
            `Remaining HP of ${OpponentPokemon} is ${HpOfOpponentPokemon} `
          );
          console.log(`${OpponentPokemon} is fainted`);
          console.log(`Hurray!, You Won the battle!`);
          break;
        }
      }

      let opponentAttackName = opponentAttack();
      console.log(`${OpponentPokemon} uses ${opponentAttackName[0]} attack!`);

      {
        HpOfYourPokemon -= opponentAttackName[1];
        if (HpOfYourPokemon > 0) {
          console.log(`Remaining HP of ${YourPokemon} is ${HpOfYourPokemon} `);
        } else if (HpOfYourPokemon <= 0) {
          HpOfYourPokemon = 0;
          console.log(`Remaining HP of ${YourPokemon} is ${HpOfYourPokemon} `);
          console.log(`${YourPokemon} is fainted`);
          console.log(`Better luck next time, You lost the battle!`);
          break;
        }
      }
    }
  }
}

//random selection of opponent pokemon attack
function opponentAttack() {
  let randomAttack;
  for (let i = 0; i < starterPokemon.length; i++) {
    if (starterPokemon[i].pokemonName === OpponentPokemon) {
      randomAttack = starterPokemon[i].Attack;
    }
  }

  let randomAttack1 =
    randomAttack[Math.floor(Math.random() * randomAttack.length)];
  let randomAttackName = randomAttack1.AttackName;
  let randomAttackPower = randomAttack1.Power;
  let randomAttackType = randomAttack1.AttackType;
  return [randomAttackName, randomAttackPower, randomAttackType];
}

let bt = new Battle();
bt.battleWithOpponent();
