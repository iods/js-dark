// Task 1: Create a Regex
// Write a JavaScript function that takes a string as input and returns a regex pattern
//  that matches any word that starts with a capital letter.

function regex1(string1) {
  return new RegExp("\\b[A-Z]\\w*]", "g");
}
let str1 = "Hello";
let regexPattern1 = regex1(str1);
console.log(regexPattern1);

// Task 2: Specify Pattern Using RegEx
// Write a JavaScript function that takes a string as input and a regex pattern as an argument.
// The function should return true if the regex pattern matches the string, and false otherwise.
//  The regex pattern should match any string that contains the word "apple" followed by one or more digits.

function regex2(string2, regexpattern2) {
  return regexpattern2.test(string2);
}

let string2 = "an apple keeps away doctor";
let regexPattern2 = /apple\s\w+/;

let result2 = regex2(string2, regexPattern2);
console.log(result2);

// Task 3: JavaScript Regular Expression Methods
// Write a JavaScript function that takes a string as input and uses the match() method to find all
//  occurrences of a regex pattern that matches any string that starts with "https://" or "http://".

function siteformat(string3, regexPattern3) {
  return string3.match(regexPattern3);
}

let string3 = "https://www.gmail.com and http://www.yahoo.com";
let regexPattern3 = /https?:\/\/\S+/g;

let result3 = siteformat(string3, regexPattern3);
console.log(result3);

// Task 4: Regular Expression Flags
// Write a JavaScript function that takes a string as input and uses the replace() method with
//  the "g" flag to replace all occurrences of a regex pattern that matches any word that starts with
//   "c" or "C" with the word "cookie".

function regex4(string4, regexPattern4) {
  return string4.replace(regexPattern4, "cookie");
}

let string4 = "javascript, java, c, c++ are programming language";
let regexPattern4 = /c|C/g;
let result4 = regex4(string4, regexPattern4);
console.log(result4);

// Task 5: JavaScript Browser Debugging
// Write a JavaScript function that logs the current URL of the browser to the console.
// Use the location object to get the current URL and the console.log() method to print it to the console.

function logCurrentURL() {
  console.log(window.location.href);
}

logCurrentURL();

// Task 6: JavaScript Browser Debugging
// Write a JavaScript function that logs the value of a form input element to the console when the form is submitted.
//  Use the addEventListener() method to attach an event listener to the form's "submit" event, and
//  the document.querySelector() method to select the input element. Use the console.log() method
//  to print the input element's value to the console.

function logInputValue() {
  var form = document.querySelector("form");
  var input = document.querySelector("input");

  form.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form submission
    console.log(input.value);
  });
}

logInputValue();
