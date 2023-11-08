let num = [1, 2, 3, 4, 5]

let newNums = num.map((num) => {
     num = num + 10;
     return num
})

let filterNums = num
     .map((num) =>  num * 10 )
     .filter((num) => 
      num <= 20
)

console.log(newNums);// Output => [ 11, 12, 13, 14, 15 ]
console.log(filterNums);// Output => [ 10, 20 ]