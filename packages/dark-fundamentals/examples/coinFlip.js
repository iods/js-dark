'use strict';
/*
 * @TODO write description about how.
 *
 */

function flip() {
  return Math.random() < 0.5 ? "Heads" : "Tails";
}

function coinFlip(flips) {

  let coins = 1;
  let time = 0;

  for (let i = 0; i < flips; i++) {
    const result = flip();
    time++;

    if (result === "Heads") {
      coins++;
    }

    time += coins;
  }

  return time;
}

const flips = 10;
const timeTaken = coinFlip(flips);

console.log(`Total time taken for ${flips} flips was: ${timeTaken}.`);
