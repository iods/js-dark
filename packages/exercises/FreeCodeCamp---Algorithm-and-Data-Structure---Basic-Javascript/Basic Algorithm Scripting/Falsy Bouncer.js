/*Remove all falsy values from an array.

Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.

Hint: Try converting each value to a Boolean.
*/
function bouncer(arr) {
  let noFalsy = []
  for (let i = 0; i < arr.length; i++){
    if (!!arr[i] === true){
      noFalsy.push(arr[i]);
    }
  }
  return noFalsy;
}

bouncer([7, "ate", "", false, 9]);

//another solution from FCC

function bouncer(arr) {
  return arr.filter(Boolean);
}
