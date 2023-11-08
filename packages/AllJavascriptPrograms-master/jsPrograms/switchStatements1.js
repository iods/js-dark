let pokemonName = "Pikachu";
let type;

switch (pokemonName) {
  case "Pikachu":
    type = "Electric type";
    break;

  case "Bulbasaur":
    type = "Grass type";
    break;

  case "Charmendar":
    type = "Fire Type";
    break;

  case "Squirtel":
    type = "Water Type";
    break;

  case Default:
    type = "Invalid pokemon name";
    break;
}

console.log(type);
