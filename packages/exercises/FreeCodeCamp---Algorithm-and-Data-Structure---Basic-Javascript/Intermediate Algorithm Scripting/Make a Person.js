
var Person = function(firstAndLast) {
  // Only change code below this line
  // Complete the method below and implement the others similarly
  var fullName = firstAndLast

  this.getFullName = function() {
    return fullName;
  };

  this.getFirstName = function () {
    return fullName.split(" ")[0];
  };

  this.getLastName = function () {
    return fullName.split(" ")[1];
  };

  this.setFullName = function (full) {
    fullName = full
  }

  this.setFirstName = function (first) {
    fullName = first + " " + fullName.split(" ")[1];
  }

  this.setLastName = function (last) {
    fullName = fullName.split(" ")[0] + " " + last;
  }

};

var bob = new Person('Bob Ross');
bob.getFullName();
console.log(bob);
console.log(bob.setFullName())



// Fill in the object constructor with the following methods below:

// getFirstName()
// getLastName()
// getFullName()
// setFirstName(first)
// setLastName(last)
// setFullName(firstAndLast)
// Run the tests to see the expected output for each method. The methods that take an argument must accept only one argument and it has to be a string. These methods must be the only available means of interacting with the object.

