//Direct recursion

// function buyApple(money, totalApples) {
//   if (money <= 0) {
//     return `I have ${money} money and ${totalApples} apples`;
//   } else {
//     return buyApple(money - 25, totalApples + 1);
//   }
// }

// let money = 100;
// let totalApples = 0;
// console.log(buyApple(money, totalApples));

//Indirect recursion

function buyApple(totalApples, money) {
  return moneyLeft(totalApples + 1, money - 25);
}

function moneyLeft(totalApples, money) {
  if (money <= 0) {
    return `I have ${money} money and ${totalApples} apples`;
  } else {
    return buyApple(totalApples, money);
  }
}

let money = 100;
let totalApples = 0;
console.log(moneyLeft(totalApples, money));
