function isPalindrome(str) {
  // Remove any non-alphanumeric characters and convert to lowercase
  const cleanStr = str.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();

  // Check if the string is empty or has a single character
  if (cleanStr.length <= 1) {
    return true;
  }

  // Compare characters from beginning and end
  let start = 0;
  let end = cleanStr.length - 1;
  while (start < end) {
    if (cleanStr[start] !== cleanStr[end]) {
      return false;
    }
    start++;
    end--;
  }

  return true;
}

// Example usage
const str = "A man, a plan, a canal. Panama";
console.log(isPalindrome(str)); // Output: true
