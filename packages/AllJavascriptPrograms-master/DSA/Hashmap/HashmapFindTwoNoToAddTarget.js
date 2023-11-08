//Traditional approach

// function twoSum(nums, target) {
//   for (let i = 0; i < nums.length; i++) {
//     for (let j = i + 1; j < nums.length; j++) {
//       if (nums[i] + nums[j] === target) {
//         return [i, j];
//       }
//     }
//   }

//   return null;
// }

// let nums = [4, 2, 5, 17, 9];
// let target = 11;
// let result = twoSum(nums, target);
// console.log(result); // [1, 4]

//Hashmap

function twoSum(nums, target) {
  const map = new Map();

  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    if (map.has(complement)) {
      return [map.get(complement), i];
    }
    map.set(nums[i], i);
  }

  return null;
}

let nums = [4, 2, 5, 17, 9];
let target = 11;
let result = twoSum(nums, target);
console.log(result); // [1, 4]
