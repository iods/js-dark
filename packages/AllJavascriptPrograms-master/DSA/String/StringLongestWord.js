function longestWord(str) {
  let words = str.split(" ");
  let longestWord = "";

  for (let i = 0; i < words.length; i++) {
    let word = words[i];

    if (word.length > longestWord.length) {
      longestWord = word;
    }
  }
  return longestWord;
}

let str = "World is going to see new astronautical project in upcoming era";
console.log(longestWord(str));
