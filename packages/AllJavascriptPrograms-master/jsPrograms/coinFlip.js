function flipCoin() {
  return Math.random() < 0.5 ? "Heads" : "Tails";
}

function performCoinFlips(numFlips) {
  let coins = 1;
  let totalTime = 0;

  for (let i = 0; i < numFlips; i++) {
    const result = flipCoin();
    totalTime++; // Cost of flipping the coin

    if (result === "Heads") {
      coins++;
    }

    totalTime += coins; // Cost of flipping all the coins in hand
  }

  return totalTime;
}

// Testing the function with 10 flips
const numFlips = 10;
const timeTaken = performCoinFlips(numFlips);
console.log(`Total time taken for ${numFlips} flips: ${timeTaken}`);
