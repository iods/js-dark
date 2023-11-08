function areAnagrams(str1, str2) {
  // Remove any non-alphanumeric characters and convert to lowercase
  const cleanStr1 = str1.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
  const cleanStr2 = str2.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();

  // Check if the cleaned strings have the same length
  if (cleanStr1.length !== cleanStr2.length) {
    return false;
  }

  // Create frequency counters for each string
  const frequencyCounter1 = {};
  const frequencyCounter2 = {};

  // Populate frequency counter for str1
  for (let char of cleanStr1) {
    frequencyCounter1[char] = (frequencyCounter1[char] || 0) + 1;
  }

  // Populate frequency counter for str2
  for (let char of cleanStr2) {
    frequencyCounter2[char] = (frequencyCounter2[char] || 0) + 1;
  }

  // Compare the frequency counters
  for (let key in frequencyCounter1) {
    if (frequencyCounter1[key] !== frequencyCounter2[key]) {
      return false;
    }
  }

  return true;
}

// Example usage
const str1 = "listen1";
const str2 = "silent1";
console.log(areAnagrams(str1, str2)); // Output: true
