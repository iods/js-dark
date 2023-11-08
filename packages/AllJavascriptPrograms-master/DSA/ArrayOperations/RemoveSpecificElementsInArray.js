function removeElementFromArray(array, element) {
  const index = array.indexOf(element);
  if (index !== -1) {
    array.splice(index, 1);
  }
  return array;
}

// Example usage
const arr = [1, 2, 3, 4, 5];
const elementToRemove = 3;
console.log(removeElementFromArray(arr, elementToRemove)); // Output: [1, 2, 4, 5]
