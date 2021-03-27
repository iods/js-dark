//Arrays and objects in javaScript
console.log("Arrays and objects in javascript");

//Array: these are the objects in which we can store multiple values in a single variable.
// There are two methods to create an empty array:
let arr = new Array();
let arr1 = [];

/*Accessing array elements:
- Arrays are zero-indexed. The first element of an array is store at 0 indexes and the second element store at index 1 and so on. If we use an invalid index number returns undefined.
*/

let fruits = ["Apple","Banana","Mango","Pineapple"];
console.log(fruits[2]);//Result: Mango

//Some array methods:
/*
1.Length of an Array:
- The property length sets or returns the number of elements in an array.
*/
console.log(fruits.length);//Result: 4

/*
2.indexOf():
- This method Search the array for an element and returns its position
*/
console.log(fruits.indexOf("Mango"));//Result: 2

/*
3.sort(): 
- This method is used to sort the elements of an array
*/
let marks = [23,56,78,93,26];
console.log(marks.sort());//Result: [23,26,56,78,93]

/*
4.reverse(): 
- This method is used to reverses the element of an array. The first array element becomes the last and the last becomes the first.
*/
console.log(marks.reverse());//Result: [93, 78, 56, 26, 23]

/*
5.concat(): 
- This method will returns a new array comprised of this array joined with other arrays or values
*/
console.log(marks.concat(fruits))//Result: [93, 78, 56, 26, 23, "Apple", "Banana", "Mango", "Pineapple"]

/*

// Some Methods to modify array:


6.push():
- This method is used to add an item to the end of an Array
*/
let newArray = marks.push(100);
console.log(marks);//Result: [93, 78, 56, 26, 23]

/*
7.pop():
- This method is used to remove an item from the end of an Array
*/
let newArray1 = fruits.pop();
console.log(fruits);//Result: ["Apple", "Banana", "Mango"]
/*
8. shift():
- This method is used to remove an item from the beginning of an Array
*/
let newArray2 = fruits.shift();
console.log(fruits);//Result: ["Banana", "Mango"]
/*
9. unshift():
- This method is used to add an item to the beginning of an Array
*/
let newArray3 = fruits.unshift('strawberry');
console.log(fruits);//Result: ["strawberry", "Banana", "Mango"]
/*
10.splice():
- This method is used to remove an item by index position
*/
let newArray4 = fruits.splice(0,1);
console.log(fruits);//Result: ["Banana", "Mango"]


//Objects in javascript:
//There are two methods to create a empty object:
let obj = {};
let obj1 = new Object();

//objects contains a list of different properties these properties is called "key:value" pair, where the key is a string/ property name, and value can be anything.

let user = {
    name: 'RohitSharma',//here key is name and value is RohitSharma adn key and value all together is called property.
    age: 19,//here key is age and value is 19
    language: "javaScript",//here key is language and value is javascript
    nationality: "Indian"//here key is nationality and value is Indian
}

//Accessing different elements of objects:

/*
1.The dot notation (.): 
- The syntax of dot notation to access a property of an object is : objectName.property 
*/
console.log(user.name);//Result: RohitSharma
console.log(user.age);//Result: 19
console.log(user.language);//Result: javascript


/*
2.Array-like notation ( []): 
- The syntax to access the value of an object’s property via the array-like notation is : objectName['propertyName'];
*/
console.log(user['name']);//Result: RohitSharma
console.log(user['age']);//Result: 19
console.log(user['language']);//Result: javascript
