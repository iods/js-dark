/*
 * @TODO write description about how.
 *
 */
function SuperType() {
  this.name = "Rye";
}

SuperType.prototype.getSuperName = function () {
  return this.name;
}

function SubType() {
  this.age = 37;
}

SubType.prototype = new SuperType();

SubType.prototype.getSubAge = function () {
  return this.age;
}

const subTypeObject = new SubType();

console.log(subTypeObject.name);
console.log(subTypeObject.age);
console.log(subTypeObject.getSuperName());
console.log(subTypeObject.getSubAge());
