var friendsAge = [15, 17, 14, 16];
var s = friendsAge[2];
friendsAge[1] = 21;
var position = friendsAge.indexOf(16);
console.log(position);
console.log(s);
console.log(".....................\n");

friendsAge.push(20);
console.log(friendsAge);
friendsAge.push(25);
friendsAge.push(27);
friendsAge.push(30);
friendsAge.push(32);
console.log(friendsAge);
friendsAge.pop();
friendsAge.pop();
// friendsAge.pop(2);
console.log(friendsAge);

var len = friendsAge.length;
console.log(len);