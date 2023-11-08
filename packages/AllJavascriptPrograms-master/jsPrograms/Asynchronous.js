// function task(message) {
//     let n = 10000;
//     while (n > 0) {
//         n--;
//     }
//     console.log(message);
// }
// console.log("Start program");
// let a=setTimeout(task, 5000, "hello");
// console.log(myTimeout);
// clearTimeout(myTimeout);
// console.log("Done");

// SuperType constructor function
function SuperType() {
  this.name = "John";
}

//SuperType prototype
SuperType.prototype.getSuperName = function () {
  return this.name;
};
//SubType prototype function
function SubType() {
  this.age = 26;
}

//Inherit the properties from SuperType
SubType.prototype = new SuperType();
// Add new property to SubType prototype
SubType.prototype.getSubAge = function () {
  return this.age;
};

//Create a SubType object
var subTypeObj = new SubType();
console.log(subTypeObj.name); //Output: John
console.log(subTypeObj.age); //Output: 26
console.log(subTypeObj.getSuperName()); //Output: John
console.log(subTypeObj.getSubAge()); //Output: 26
