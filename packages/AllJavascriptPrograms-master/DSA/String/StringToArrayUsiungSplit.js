function stringToArray(input) {
  return input.split(" ");
}

// Example usage
const sentence = "Hello, how are you?";
const wordsArray = stringToArray(sentence);
console.log(wordsArray); // Output: ["Hello,", "how", "are", "you?"]
