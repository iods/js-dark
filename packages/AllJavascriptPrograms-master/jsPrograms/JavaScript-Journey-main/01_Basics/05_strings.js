let userName = "Varrey Bhanu Prathyush"
let repoCount = 25

// console.log(userName,repoCount); old version of console logging the values

// console.log(`Hey Everyone This is ${userName} and my repo count is ${repoCount} , Please Follow me On my LinkedIn || Twitter and GitHub`);
// String Interpolation => new version to print values

let dummyName = new String("Bhanu Prathyush")

// console.log(typeof dummyName); // O/P => Object

console.log(dummyName[0]); // O/P => B {Prints which Character is at index 0}.
console.log(dummyName.__proto__);// O/P => {}.=> Got to Chrome dev tools You can Find the Prototypes

console.log(dummyName.length); // O/P => Length of the Given String
console.log(dummyName.charAt(1)); // o/p => at index 1 what character is their

console.log(dummyName.indexOf("P"));// o/p => prints the given string is at which index in this case it is SPACE

console.log(dummyName.lastIndexOf("u"));