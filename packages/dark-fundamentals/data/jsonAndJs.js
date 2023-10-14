'use strict';
/*
 * @TODO write description about how.
 *
 */

const movie = {
  category: 'horror',
  title: 'Scream',
  year: 1996,
  director: 'Wes Craven'
}

let movies = [
  movie,
  {
    category: 'comedy',
    title: 'There\'s Something About Mary',
    year: 1998,
    director: 'Farrelly Brothers'
  },
  {
    category: 'horror',
    title: 'I Know What You Did Last Summer',
    year: 1997,
    director: 'Jim Gillespie'
  },
  {
    category: 'drama',
    title: 'Gattaca',
    year: 1997,
    director: 'Andrew Niccol'
  },
  {
    category: 'romance',
    title: 'Titanic',
    year: 1997,
    director: 'James Cameron'
  },
  {
    category: 'drama',
    title: 'Avatar',
    year: 2009,
    director: 'James Cameron'
  }
];

console.log(movies);


/*
 * getCategory()
 * Function takes a string representing a category and will return
 * an array of all movies that belong to that category and then prints
 * the result to the console.
 */
function getCategory(cat) {
  return movies.filter((work) => work.category === cat);
}

console.log(getCategory("horror"));


/*
 * getYear()
 * Function takes a number representing a year and will return an
 * array of all movies that were made in that year or later and then
 * prints the result to the console.
 */
function getYear(year) {
  return movies.filter((num) => num.year >= year);
}

console.log(getYear(1998));


/*
 * addMovie()
 * Function takes an object representing a new movie and adds it to the
 * existing collection of movies. Printing the array to the console.
 */
const newMovie = {
  category: 'drama',
  title: 'Eternal Sunshine of the Spotless Mind',
  year: 2004,
  director: 'Michel Gondry'
}

function addMovie(movie) {
  return movies.push(movie);
}

addMovie(newMovie);
console.log(movies);


/*
 * addJsonMovie()
 * Function takes a JSON string representing a new movie and adds it to
 * the existing collection of movies. Printing the array to the console.
 */
const newJsonMovie =
  '{"category": "horror","title": "Saw","year": 2004,"director": "James Wan"}';

function addJsonMovie(newMovie) {

  const movie = JSON.parse(newMovie);

  return movies.push(movie);
}

addJsonMovie(newJsonMovie);
console.log(movies);
