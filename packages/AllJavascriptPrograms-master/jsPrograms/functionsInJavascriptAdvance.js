// Once upon a time, there was a young programmer named Emma who was passionate about coding.
// She had just started her journey in the world of programming and was eager to learn new things.
//  One day, she came across a coding challenge that required her to create a function in JavaScript that
//  would capitalize the first letter of each word in a string.

// Help Emma to write this function.

// Input

// A string str where 1 <= str.length <= 10^5
// Output

// A string where each word has its first letter capitalized.

// function capitallizedWords(str) {
//   let sp = str.split(" ");
//   let cap = sp.map((element) => {
//     return element.charAt(0).toUpperCase() + element.slice(1);
//   });
//   console.log(cap.join(" "));
// }

// capitallizedWords("Hello everyone how are you all?");
function capitallizedWords(str) {
  let sp = str.split(" ");
  let cap = [];

  sp.forEach((element) => {
    cap.push(element.charAt(0).toUpperCase() + element.slice(1));
  });

  console.log(cap.join(" "));
}

capitallizedWords("Hello everyone how are you all?");
