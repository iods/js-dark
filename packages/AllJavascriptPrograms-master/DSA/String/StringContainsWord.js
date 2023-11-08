function containsWord(input, targetWord) {
  const inputArray = input.split(" ");

  for (let i = 0; i < inputArray.length; i++) {
    if (inputArray[i].includes(targetWord)) {
      return true;
    }
  }

  return false;
}

// Example usage
const str = "Hello, World!";
console.log(containsWord(str, "World")); // Output: true
console.log(containsWord(str, "Foo")); // Output: false
