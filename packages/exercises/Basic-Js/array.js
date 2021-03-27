var newArray = [15,54,54];

newArray.pop();

newArray.push(45);

var x = newArray.indexOf(45);

var y = newArray.length;

// For deleting first item [0th index]
newArray.shift();

// for adding some items to beginning
newArray.unshift('shifting','shifting2','and many more');

// for slicing but not changing the main array
var slice1 = newArray.slice(2); //by default 2nd index to end
var slice2 = newArray.slice(2,4); //2nd index to 3rd index sliced

// checkout splice function for changing main array
