/*
Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.

For the purpose of this exercise, you should also capitalize connecting words like "the" and "of".
*/

function titleCase(str) {
  let capitalizeArr = [];
  const arrStr = str.split(" ");
  for (const elem of arrStr){
    capitalizeArr.push(elem[0].toUpperCase() + elem.substring(1).toLowerCase())
  }
  return capitalizeArr.join(" ");
}

console.log(titleCase("I'm a little tea pot"));

//More solutions
/* https://forum.freecodecamp.org/t/freecodecamp-challenge-guide-title-case-a-sentence/16088 */