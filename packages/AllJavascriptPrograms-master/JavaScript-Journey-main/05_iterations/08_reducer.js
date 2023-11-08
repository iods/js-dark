let nums = [1, 2, 3, 4]
let sumOfNums = nums.reduce((previousVal, currentVal) => {
     console.log(`Previous Value : ${previousVal}, Current Value : ${currentVal}`);
     return previousVal + currentVal
},0)

console.log(sumOfNums);