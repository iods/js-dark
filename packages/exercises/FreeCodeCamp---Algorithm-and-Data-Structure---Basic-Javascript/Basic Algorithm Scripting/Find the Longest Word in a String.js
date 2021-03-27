function findLongestWordLength(str) {
  let newString = str.split(" ");
  let longStr = newString.sort((a,b) => a.length - b.length);
  let arrayL = (newString.length);
  return (longStr[arrayL - 1]).length;
}

console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog"));

/*
Return the length of the longest word in the provided sentence.
Your response should be a number.
*/
