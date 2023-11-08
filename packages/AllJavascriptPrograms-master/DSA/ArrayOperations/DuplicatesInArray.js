function findDuplicates(array) {
  const duplicates = [];
  const seen = {};

  for (let i = 0; i < array.length; i++) {
    const currentItem = array[i];
    if (seen[currentItem] === undefined) {
      seen[currentItem] = 1;
    } else {
      if (seen[currentItem] === 1) {
        duplicates.push(currentItem);
      }
      seen[currentItem]++;
    }
  }

  return duplicates;
}

// Example usage
const arr = [1, 2, 3, 2, 4, 5, 1, 4];
console.log(findDuplicates(arr)); // Output: [2, 1, 4]
