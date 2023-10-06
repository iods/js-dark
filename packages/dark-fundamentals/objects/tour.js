//
//
// // objects are collections of key value pairs
//
// let radius = 1;
// let x = 1;
// let y = 1;
//
// // allows access to all properties and functions
// const circle = {
//     radius: 1,
//     location: {
//         x: 1,
//         y: 1
//     },
//     isVisible: true,
//     draw: function() {
//         console.log('draw');
//     }
// } // object literal syntax

// allows access to all properties and functions
// const circleTwo = {
//     radius: 1,
//     location: {
//         x: 1,
//         y: 1
//     },
//     isVisible: true,
//     draw: function() {
//         console.log('draw');
//     }
// } // object literal syntax



// factory and constructor methods
function createCircle(radius, location) {
    return {
        radius,
        location,
        isVisible: true,
        draw() {
            console.log('draw');
        }
    };
}


// factory and constructor methods
function createCircle(radius, location) {
    return {
        radius,
        location,
        isVisible: true,
        draw() {
            console.log('draw');
        }
    };
}

const circleOne = createCircle(2, 6);
console.log(circleOne);

const circleTwo = createCircle(5, 8);
console.log(circleTwo);

// constructor methods always use this and Pascal
// this will be my default method of creating objects (based on my past)
function Circle(radius) {
    this.radius = radius;
    this.draw = function() {
        console.log('draw');
    }
    return this;
}

const circle = new Circle(4);



// constants cannot be reassigned
// this is good when adding and removing properties
// because the main const never changes
const circles = {
    radius: 1
}

circle.color = 'yellow';
circle.draw = function() {}

delete circle.color;

console.log(circle);


// let x = {}; // object literal
// let x = new object

// using literals is cleaner than defined literals String(), Bool(), etc.

let x = {value: 10};
let y = x;

x.value = 30;

console.log(x, y); // both are pointing to the same place in memory




const circle = {
    radius: 1,
    draw() {
        console.log('draw');
    }
};

for (let key in circle)
    console.log(key, circle[key]);

for (let key of Object.keys(circle))
    console.log(key);

for (let entry of Object.entries(circle))
    console.log(entry);

const circle = {
    radius: 1,
    draw() {
        console.log('draw');
    }
};

// const another = {};

// for (let key in circle)
//     another[key] = circle[key];

/// const another = Object.assign({}, circle);

const another = {...circle}; // spread operator

console.log(another);


// learn about the math object
