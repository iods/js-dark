function countSubstringOccurrences(input, substring) {
  let count = 0;
  let index = 0;

  // Iterate over the string and find each occurrence of the substring
  while (true) {
    const foundIndex = input.indexOf(substring, index);
    if (foundIndex === -1) {
      break;
    }

    count++;
    index = foundIndex + substring.length;
  }

  return count;
}

// Example usage
const str = "hi hi  hello whi shi hia jsons his hsi nhis jsojhi";
const substring = "hi";
const occurrences = countSubstringOccurrences(str, substring);
console.log(occurrences);
