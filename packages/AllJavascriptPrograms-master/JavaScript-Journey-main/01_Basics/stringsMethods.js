let passage =
  "A King is the one who saves his Kingdom , King us important to the Empire";

// String.at()
let index = 4;

// console.log(`using an index of ${index} the character returned is ${passage.at(index)}`)
// Output => using an index of 4 the character returned is n

let negIndex = -10;

// console.log(`using an index of ${negIndex} the character returned is ${passage.at(negIndex)}`)
// Output => using an index of -10 the character returned is i

// charAt(Number Goes Here)
let findCharByNumber = passage.charAt(10);
// charAt() => returns the char at specified index
// console.log(findCharByNumber);

// charCodeAt(Numbers goes here)
let charCodeOfPassage = passage.charCodeAt(3);
// charCodeAt => returns the character code at specified index
// console.log(charCodeOfPassage);

// codePointAt()
let icons = "❤️💚😊😅";
// codePointAt() =>
/* Returns a nonnegative integer Number less than 1114112 (0x110000) that is the code point value of the
 UTF-16 encoded code point starting at the string element at position pos in the String resulting from 
 converting this object to a String. If there is no element at that position, the result is undefined. 
If a valid UTF-16 surrogate pair does not begin at pos, the result is the code unit at pos. */
// console.log(icons.codePointAt(1)); //65039 code the Emoji

let wishes = "Hello";
let yourName = "Bhanu";
// concat() => Returns a string that contains the concatenation of two or more strings.
// console.log(wishes.concat(' ', yourName));

// endsWith() => Returns Boolean values Checks whether the Given String is at  end of the string or not
// console.log(passage.endsWith("Kingdom"))

// fromCharCode() => The String.fromCharCode() static method returns a string created from the specified sequence of UTF-16 code units.
// console.log(String.fromCharCode(150, 20, 120, 50));
//  output=> x2

// fromCodePoint() => static method returns a string created from the specified sequence of code points.

// console.log(String.fromCodePoint(120, 5, 0, 10));
// oputput => x

// includesReturns true if searchString appears as a substring of the result of converting this object to a String,
//  at one or more positions that are greater than or equal to position; otherwise, returns false.
// console.log(passage.includes("King")); // Output  => true
// console.log(passage.includes("Route")); // Output  => false

// indexOf() => Returns the position of the first occurrence of a substring.

// console.log(passage.indexOf("saves")) // Output => 22

// lastIndexOf()  => Returns the last occurrence of a substring in the string.
// console.log(passage.lastIndexOf('King')); // Output => 42

let str1 = "Bhanu Sri";
let str2 = "Bhanu Prathyush";
//localeCompare(compareString,'locales',options) Determines whether two strings are equivalent in the current locale.
// console.log(str1.localeCompare(str2));
// console.log(str1.localeCompare(str2, 'bhanu', { sensitivity: 'case' }));

// padEnd(targetLength,padString) => The padEnd() method of String values pads this string with a given string
// (repeated, if needed) so that the resulting string reaches a given length.The padding is applied from the end of this string.
const str3 = "Hi!";
let str4 = "Prav"; // Note the Targetlength should be more than the length of String

// console.log(str3.padEnd(4, '.'));
// console.log(str4.padEnd(20, '!')); // given Pad String follows upto  the str.length-targetLenght
// In this case str4 lenght is 4 and targetLenght is 20 Now 20 - 4 is 16  so  next 16 char will be (!)

// padStart (targetLength, padString)
let numStr = "5";

// console.log(numStr.padStart(4,"*"));// output => ***5

// repeat(count{Number}) => Returns a String value that is made from count copies appended together.
// If count is 0, the empty string is returned.
let repeatString = "!";
// console.log(`Hello ${repeatString.repeat(2)}`); //Output => Hello !!

// replace("String") => Replaces text in a string, using a regular expression or search string.
let passage1 = "A new Student came to college His name is Ram";
// console.log(passage1.replace("Ram", "Shiva"));
//Output => A new Student came to college His name is Shiva

let passage2 =
  "The New student is soo Good to everyone.But the student is not good to Animals";
// console.log(passage2.replaceAll("student", "Grad"));
//Output => The New Grad is soo Good to everyone.But the Grad is not good to Animals

// search("string") => Finds the first substring match in a regular expression search
// console.log(passage1.search("Student"));// Output => 6

// slice(indexStart, indexEnd) =>
let names = "Bhanu Prathyush";
// console.log(names.slice(0, 10));// Output => (Bhanu Prat)

// split (separator, limit) =>
// console.log(names.split(','));
/*
[ 'B', 'h', 'a', 'n','u', ' ', 'P', 'r','a', 't', 'h', 'y','u', 's','h']
As you can see the string is seperated and also shown as Array

console.log(names.split('-'));// Output  =>  [ 'Bhanu Prathyus' ]
 */

// startsWith() =>
// console.log(names.startsWith('B'));// Output => true because it starts B
// console.log(names.startsWith('A'));// Output => false because it starts B but we asked 'A'

// substring (indexStart, indexEnd) => Returns the substring at the specified location within a String object.
// console.log(names.substring(4));// Output => u Prathyush As You seen that it avoids starting 4 chars
// you can also decide end Index

let cases = "SHIBA";

// console.log(cases.toLocaleLowerCase()); //Output=> shiba
let lowerCase = "nair";

// console.log(lowerCase.toLocaleUpperCase());// Output => NAIR

/* Both toLocaleLowerCase() and toLowerCase() are Same
As well as toLocaleUpperCase() and toUpperCase() are Same
*/

let strObj = new String("Lookal");

// console.log(typeof strObj);// Output => object
let strConevert = strObj.toString();
// console.log(typeof strConevert);// Output => string

// trim () => Removes the leading and trailing white space and line terminator characters from a string.
let userName = "        Harish       ";
console.log(userName.trim()); // Output => (Harish)

console.log(userName.trimStart()); // Output => (Harish       ) Removes starting extra spaces from the String
console.log(userName.trimEnd()); // Output => (        Harish) Removes ending extra spaces fromt the String

let newStr = new String("Long");

console.log(newStr); //Output => [String: 'Long']
/* As we seen it's not directly printing the Long but printing [String: 'Long']. 
In Order to print only the value we use valueOf()*/
console.log(newStr.valueOf()); // Output => Long
