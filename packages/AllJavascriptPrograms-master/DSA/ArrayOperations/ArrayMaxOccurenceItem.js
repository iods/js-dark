function findMostFrequentItem(array) {
  const counts = {};
  let maxCount = 0;
  let mostFrequentItem = null;

  array.forEach((item) => {
    counts[item] = (counts[item] || 0) + 1;
    if (counts[item] > maxCount) {
      maxCount = counts[item];
      mostFrequentItem = item;
    }
  });

  return [mostFrequentItem, maxCount];
}

// Example usage
const arr = [1, 2, 3, 2, 1, 2, 3, 3, 3, 4, 5];
console.log(findMostFrequentItem(arr));
