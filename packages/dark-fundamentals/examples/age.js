/*
 * @TODO write description about how.
 *
 */
function age(input) {

  let ages = Number(input);

  let result = '';

  if (ages < 0) {
    result = "Out of Range.";
  } else if (ages >= 0 && ages <= 2) {
    result = "Baby";
  } else if (ages <= 13) {
    result = "Child";
  } else if (ages <= 19) {
    result = "Teenager";
  } else if (ages <= 65) {
    result = "Adult";
  } else if (ages < 65) {
    result = "Elder";
  }

  console.log(result);
}

age(16);
