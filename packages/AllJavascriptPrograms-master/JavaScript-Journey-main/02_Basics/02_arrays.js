const marvel_Heros = ['Thor', 'IronMan', 'SpiderMan']
const dc_heros = ['BatMan', 'SuperMan', 'Flash']

// marvel_Heros.push(dc_heros)
// console.log(marvel_Heros); // Output => [ 'Thor', 'IronMan', 'SpiderMan', [ 'BatMan', 'SuperMan', 'Flash' ] ]
/*
     As you can see marvel_Heros became a 2d Array which is not good
     because if we want to add dc_Heros than it is hard
     insted we can Concat/Spread 
 */

let collaborate_heros = marvel_Heros.concat(dc_heros)
// console.log(collaborate_heros); // [ 'Thor', 'IronMan', 'SpiderMan', 'BatMan', 'SuperMan', 'Flash' ]
/* But it's not dynamic to do rather use spread operator*/

let collaborate_heros1 = [...marvel_Heros, ...dc_heros]
// console.table(collaborate_heros1);// [ 'Thor', 'IronMan', 'SpiderMan', 'BatMan', 'SuperMan', 'Flash' ]
/* its more dymanic because we can add new array very easily */

let nums = [1, 2, 3, [4, 5, 6], [7, 8], [9, 10]]

let flatenArray = nums.flat(Infinity)
console.table(flatenArray);
console.log(flatenArray);
/*
┌─────────┬────────┐
│ (index) │ Values │
├─────────┼────────┤
│    0    │   1    │
│    1    │   2    │
│    2    │   3    │
│    3    │   4    │
│    4    │   5    │
│    5    │   6    │
│    6    │   7    │
│    7    │   8    │
│    8    │   9    │
│    9    │   10   │
└─────────┴────────┘
[ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]
 */