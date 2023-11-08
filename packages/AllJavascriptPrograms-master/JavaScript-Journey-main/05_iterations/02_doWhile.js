// while

// while (condition) {
     
// }

let i =1;
while (i <= 5) {
     // console.log(`Value of i ${i}`);
     i = i + 1;
     /*Value of i 1 Value of i 2   Value of i 3   Value of i 4   Value of i 5 */
}

let myArr = ['InronMan', 'SpiderMan', 'CapAmerica']
let index = 0;
while (index < myArr.length) {
     // console.log(`My Super Heros Are : ${myArr[index]}`);
     index++;
     /* My Super Heros Are : InronMan
     My Super Heros Are : SpiderMan
     My Super Heros Are : CapAmerica */
}

// do-while
let score = 0
do {
     console.log(`Your Score is : ${score}`);
     score++;
     /*Your Score is : 0 Your Score is : 1   Your Score is : 2
Your Score is : 3   Your Score is : 4   Your Score is : 5*/
} while (score <= 5);