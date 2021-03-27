function reverseString(str) {
  let array = [];
  for (let char in str){
    array.unshift(str[char]);
  }
  return array.join('')
}

reverseString("hello");

/*
Reverse the provided string.
You may need to turn the string into an array before you can reverse it.
Your result must be a string.

recomended solution:
function reverseString(str) {
  for (var reversedStr = "", i = str.length - 1; i >= 0; i--) {
    reversedStr += str[i];
  }
  return reversedStr;
}

function reverseString(str) {
  return str
    .split("")
    .reverse()
    .join("");
} 

*/
