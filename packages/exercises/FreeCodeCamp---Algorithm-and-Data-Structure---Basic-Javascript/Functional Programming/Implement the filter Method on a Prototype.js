// The global variable
var s = [23, 65, 98, 5];

Array.prototype.myFilter = function(callback) {
  // Only change code below this line
  var newArray = [];
  this.forEach(elem => {
    if (elem%2 === 1) {
      newArray.push(elem);
    }
  })
  // Only change code above this line
  return newArray;
};

var new_s = s.myFilter(function(item) {
  return item % 2 === 1;
});


/*
ou might learn a lot about the filter method if you implement your own version of it. It is recommended you use a for loop or Array.prototype.forEach().

Write your own Array.prototype.myFilter(), which should behave exactly like Array.prototype.filter(). You should not use the built-in filter method. The Array instance can be accessed in the myFilter method using this.
*/