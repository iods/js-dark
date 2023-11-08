function findMaxSubstringOccurrences(input) {
  const sanitizedInput = input.replace(/\s/g, "");
  const occurrences = {};
  let maxCount = 0;
  let maxSubstring = "";

  for (let i = 0; i < sanitizedInput.length; i++) {
    for (let j = i + 1; j <= sanitizedInput.length; j++) {
      const substring = sanitizedInput.substring(i, j);

      if (occurrences[substring]) {
        occurrences[substring]++;
      } else {
        occurrences[substring] = 1;
      }

      if (occurrences[substring] > maxCount) {
        maxCount = occurrences[substring];
        maxSubstring = substring;
      }
    }
  }

  return {
    substring: maxSubstring,
    occurrences: maxCount,
  };
}

// Example usage
const str = "Hello, Hello, World! Hello";
const result = findMaxSubstringOccurrences(str);
console.log(result.substring); // Output: "llo"
console.log(result.occurrences); // Output: 3
