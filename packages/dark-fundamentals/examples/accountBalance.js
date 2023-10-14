/*
 * @TODO write description about how.
 *
 */
function accountBalance(input) {
  let account = 0;

  let index = 0;

  let cmd = input[index];

  index++;

  while(cmd !== "Balance is Zero.") {
    let money = Number(cmd);

    if (money < 0) {
      console.log("Invalid Operation.");
      break;
    }

    account += money;
    console.log(`Increase: ${money.toFixed(2)}`);
    cmd = input[index];
    index++;
  }

  console.log(`Total: ${account.toFixed(2)}`);
}

accountBalance(
  [
    "8.91",
    "82.81",
    "3.11",
    "Balance is Zero."
  ]
)
