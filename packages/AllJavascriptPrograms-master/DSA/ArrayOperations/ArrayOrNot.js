function isArrayOrNot(input) {
  return Array.isArray(input);
}

// Example usage
console.log(isArrayOrNot([1, 2, 3])); // Output: true
console.log(isArrayOrNot("Hello")); // Output: false
console.log(isArrayOrNot({ key: "value" })); // Output: false
