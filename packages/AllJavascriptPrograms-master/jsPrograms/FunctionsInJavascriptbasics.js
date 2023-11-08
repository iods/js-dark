//Task 1: Write a function named "calculateRectangleArea”.
// "calculateRectangleArea" will take two arguments, width and height.
// Return the area of the rectangle calculated using the formula: width * height.
// Call the function with the arguments 5 and 10, and store the result in a variable named "rectArea".
// Print the value of "rectArea" to the console.


function calculateRectangleArea(width, height){
   return width * height;
}

let rectArea = calculateRectangleArea(5, 10)
console.log(rectArea);

// Task 2: Write a function named "calculateCylinderVolume”.
// It will take two arguments, radius and height.
// It should return the volume of the cylinder calculated using the formula: PI * radius * radius * height.
// Call the function with the arguments 12 and 14, and store the result in a variable named "cylVol".
// Print the value of "cylVol" to the console.

function calculateCylinderVolume(radius, height){
    return Math.PI * radius * radius * height;
}

let cylVol =  calculateCylinderVolume(12,14);
console.log(cylVol);

// Task 3: Write a function named "greet"
// It will take no arguments and will print the message "Hello there!" to the console. Call the function.
// Note: Make sure to follow the function declaration syntax while writing these functions.

function greet (){
    console.log("Hello there!");
}

greet();