//Build a virtual art museum exhibit using JavaScript objects and JSON data.

//Task 1 Create an object that represents a work of art, including properties like title, artist, year, and medium.

let work1 = {
  category: "painting",
  title: "Monalisa",
  artist: "Loenardo the vinci",
  year: 2000,
  medium: "Canvas",
};
console.log(work1);

//Task 2 Create an array of these objects to represent a collection of works in the museum exhibit.

let Museum = [
  work1,
  {
    category: "painting",
    title: "Monalisa",
    artist: "Loenardo the vinci",
    year: 2000,
    medium: "Canvas",
  },
  {
    category: "painting",
    title: "Blue Sky",
    artist: "Shefard",
    year: 2012,
    medium: "Oil paint",
  },
  {
    category: "painting",
    title: "Fountain",
    artist: "Patel",
    year: 2010,
    medium: "Oil on canvas",
  },
  {
    category: "sculpture",
    title: "Lord shiva",
    artist: "zuzunwala",
    year: 1998,
    medium: "Marbel",
  },
  {
    category: "Sculpture",
    title: "Statue of unity",
    artist: "Patel",
    year: 2018,
    medium: "stones",
  },
];
console.log(Museum);

// Task 3:Write a function that takes in a string representing a category (such as "painting" or "sculpture") and
//  returns an array of all the works in the exhibit that belong to that category.

function getBycategory(category) {
  return Museum.filter((art) => art.category === category);
}

console.log(getBycategory("painting"));

//Task 4: Write a function that takes in a number representing a year and returns an array of all the works in
//  the exhibit that were created in or after that year.

function yearOfmanu(year) {
  return Museum.filter((x) => x.year >= year);
}

console.log(yearOfmanu(2000));

//Task 5: Write a function that takes in an object representing a new work of art and adds it to the exhibit collection.

let addArtWork = {
  category: "Sculptur",
  title: "Great buddha",
  artist: "Ambedkar",
  year: 2011,
  medium: "marbel",
};

function addNewArtWork(addArtWork) {
  return Museum.push(addArtWork);
}

addNewArtWork(addArtWork);
console.log(Museum);

//Task 6: Write a function that takes in a JSON string representing a new work of art and adds it to the exhibit collection.

const jsonArtWork =
  '{"category":"painting","title": "Nature","artist": "witch","year": 2010,"medium": "canvas"}';

function jsonFun(jsonArtWork) {
  const artwork = JSON.parse(jsonArtWork);
  return Museum.push(artwork);
}

jsonFun(jsonArtWork);
console.log(Museum);
