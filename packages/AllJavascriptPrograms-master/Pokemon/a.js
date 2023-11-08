const prompt = require("prompt-sync")();

var YourName;
var YourGender;
var YourPokemon;
var YourPokemonType;
var OpponentName;
var OpponentGender;
var OpponentPokemon;
var OpponentPokemonType;
var OppoenentPokemonAttackPower;
var OppoenentPokemonAttackType;

//Start the game
function startGame() {
  console.log("POKEMON FIRERED GAME");
  welcome();
}

//Welcome to the game
function welcome() {
  console.log("Welcome to the world of Pokemon");
}

startGame();

//Input your name
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

//select your gender
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
    console.log(`Please select proper gender`);
    selectYourGender();
  }
}

function sendNameAndGenderOfYourself(youGen, yourName) {
  YourName = yourName;
  YourGender = youGen;
  console.log(`Hello ${yourName}, oh! you are ${youGen}.`);
}

selectYourGender();

//select name and gender of opponent
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

  let opponentName = oppoName.name;
  let opponentGender = oppoName.gender;

  if (oppoName) {
    sendNameAndGenderOfOpponent(opponentName, opponentGender);
  } else {
    console.log("Name not found");
    selectOpponentFromList();
  }
}

function sendNameAndGenderOfOpponent(name, gender) {
  OpponentGender = gender;
  OpponentName = name;
  console.log(`Your opponent is ${gender} and name of opponent is ${name}`);
}

selectOpponentFromList();

//Starter pokemons

let starterPokemon = [
  {
    pokemonName: "Charmendar",
    type: "Fire",
    weigth: 25,
    HP: 100,
    Attack: [
      { AttackName: "Ember", Power: 24, AttackType: "Fire" },
      { AttackName: "scratch", Power: 15, AttackType: "Normal" },
      { AttackName: "Growl", Power: 0, AttackType: "Normal" },
      { AttackName: "Firespin", Power: 30, AttackType: "Fire" },
    ],
  },
  {
    pokemonName: "Squirtle",
    type: "Water",
    weigth: 28,
    HP: 100,
    Attack: [
      { AttackName: "waterGun", Power: 26, AttackType: "water" },
      { AttackName: "scratch", Power: 15, AttackType: "Normal" },
      { AttackName: "Growl", Power: 0, AttackType: "Normal" },
      { AttackName: "Whirlpool", Power: 35, AttackType: "Water" },
    ],
  },
  {
    pokemonName: "Bulbasaur",
    type: "Grass",
    weigth: 30,
    HP: 100,
    Attack: [
      { AttackName: "RazerLeaf", Power: 21, AttackType: "Grass" },
      { AttackName: "scratch", Power: 15, AttackType: "Normal" },
      { AttackName: "Growl", Power: 0, AttackType: "Normal" },
      { AttackName: "Solarbeam", Power: 40, AttackType: "Grass" },
    ],
  },
  {
    pokemonName: "Pikachu",
    type: "Electric",
    weigth: 19,
    HP: 100,
    Attack: [
      { AttackName: "ThunderBolt", Power: 28, AttackType: "Electric" },
      { AttackName: "scratch", Power: 15, AttackType: "Normal" },
      { AttackName: "Growl", Power: 0, AttackType: "Normal" },
      { AttackName: "Thunder", Power: 42, AttackType: "Electric" },
    ],
  },
];

console.log(
  "Professor: Before start your journey in pokemon world you should have pokemon, here are some pokeballs that contains pokemon"
);

//Choose your starter pokemon

function chooseStarterPokemon() {
  const pokeballNumber = parseInt(prompt("Choose any pokeball (1,2,3,4)"));
  let pokemonName;
  switch (pokeballNumber) {
    case 1:
      pokemonName = starterPokemon[0].pokemonName;
      break;
    case 2:
      pokemonName = starterPokemon[1].pokemonName;
      break;
    case 3:
      pokemonName = starterPokemon[2].pokemonName;
      break;
    case 4:
      pokemonName = starterPokemon[3].pokemonName;
      break;
    default:
      console.log("Wrong pokeball, Please choose correct pokeball number");
      chooseStarterPokemon();
  }

  let pokemonTyp = starterPokemon.find((x) => x.pokemonName === pokemonName);
  let pokemonType = pokemonTyp.type;
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
  opponentPokemonType = opponentPokemonTyp.type;

  yourPokemonNameAndType(pokemonName, pokemonType);
  opponentPokemonNameAndType(opponentPokemonName, opponentPokemonType);
}

// Your starter pokemon
function yourPokemonNameAndType(pokemonName, pokemonType) {
  YourPokemon = pokemonName;
  YourPokemonType = pokemonType;
  console.log(
    `Nice choice, you choose ${pokemonName} and it is ${pokemonType} type`
  );
}

//Opponent starter pokemon

function opponentPokemonNameAndType(opponentPokemonName, opponentPokemonType) {
  OpponentPokemon = opponentPokemonName;
  OpponentPokemonType = opponentPokemonType;
  console.log(
    `Your opponent ${OpponentName} choose ${opponentPokemonName} and it is ${opponentPokemonType} type`
  );
}

chooseStarterPokemon();

//Battle
class Battle {
  battleWithOpponent() {
    let yourResponse = prompt(
      `${OpponentName}: Hey ${YourName} lets do our first pokemon battle (sure, no)`
    );

    if (yourResponse === "sure") {
      this.battleStart();
    } else if (yourResponse === "no") {
      console.log("Game ends!");
    } else {
      console.log("Please select appropriate response");
      this.battleWithOpponent();
    }
  }

  attackName() {
    let yourPokemonAttackName = prompt("Choose your attack?");

    for (let i = 0; i < starterPokemon.length; i++) {
      for (let j = 0; j < starterPokemon[i].Attack.length; j++) {
        for (let k = 0; k < starterPokemon[i].Attack[j].length; k++) {
          if (
            starterPokemon[i].Attack[j].AttackName === yourPokemonAttackName
          ) {
            console.log(starterPokemon[i].Attack[j].Power);
            console.log("a");
          } else {
            console.log("Choose appropriate attack");
            this.attackName();
          }
        }
      }
    }
  }

  battleStart() {
    console.log(`Battle Starts!`);
    console.log(`${OpponentName} sends ${OpponentPokemon}!`);
    console.log(`Let's go ${YourPokemon}!`);
    let OpponentPokemonAttackType = this.attackName();
    console.log(`${YourPokemon} uses ${OpponentPokemonAttackType} `);
  }
}

let bt = new Battle();
bt.battleWithOpponent();
