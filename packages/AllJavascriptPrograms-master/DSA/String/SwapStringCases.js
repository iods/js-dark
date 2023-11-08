function swapCase(input) {
  let swapped = "";

  for (let i = 0; i < input.length; i++) {
    const char = input[i];

    if (char === char.toLowerCase()) {
      swapped += char.toUpperCase();
    } else {
      swapped += char.toLowerCase();
    }
  }

  return swapped;
}

// Example usage
const str = "Hello, World!";
const swappedStr = swapCase(str);
console.log(swappedStr); // Output: "hELLO, wORLD!"
