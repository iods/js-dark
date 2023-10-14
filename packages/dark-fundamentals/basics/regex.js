'use strict';
/*
 * @TODO write description about how.
 *
 */

function regexOne(input) {
  return new RegExp("\\b[A-Z]\\w*]", "g");
}

let greeting = "hello, world.";
let patternOne = regexOne(greeting);

console.log(patternOne);

function regexTwo(input, pattern) {
  return pattern.test(input);
}

let text = "an apple a day keeps the doctor away.";
let textPattern = /apple\s\w+/;

let result = regexTwo(text, textPattern);
console.log(result);


function regexThree(input, pattern) {
  return input.match(pattern);
}

let urls = "https://github.com and http://bitbucket.org";
let urlsPattern = /https?:\/\/\S+/g;

let match = regexThree(urls, urlsPattern);
console.log(match);


function regexFour(input, inputReplace) {
  return input.replace(inputReplace, "z")
}

let inputText = "Foo Bar";
let inputPattern = /r|R/g;
let textReplace = regexFour(inputText, inputPattern);

console.log(textReplace);


function logCurrentUrl() {
  console.log(window.location.href);
}

logCurrentUrl();
