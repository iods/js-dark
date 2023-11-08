function isPalindrome(str) {
  // Base case: an empty string or a string with a single character is a palindrome
  if (str.length <= 1) {
    return true;
  }

  // Recursive case: check if the first and last characters are equal
  if (str[0] === str[str.length - 1]) {
    // Recursively check if the substring without the first and last characters is a palindrome
    return isPalindrome(str.substring(1, str.length - 1));
  }

  // If the first and last characters are not equal, it's not a palindrome
  return false;
}
console.log(isPalindrome("racecar")); // true
console.log(isPalindrome("hello")); // false
console.log(isPalindrome("level")); // true
console.log(isPalindrome("world")); // false
