// Task 1: Object Identification and Classification
// Write a JavaScript program that allows the user to input an object name,
//  and then identify and classify the object based on its characteristics.
//  The program should prompt the user to input the following characteristics:
//   color, size, shape, weight, and texture. After the user inputs each characteristic,
//    the program should display a message indicating whether the characteristic is relevant or
//    irrelevant to the object classification. Finally, the program should display the classified object
//     based on the characteristics entered by the user.

const prompt = require("prompt-sync")();
function classifyObjects() {
  let objectName = prompt("Enter the object name");
  console.log(objectName);

  let color = prompt("Enter the color");
  let size = prompt("Enter the size");
  let shape = prompt("Enter the shape");
  let weight = prompt("Enter the weight");
  let texture = prompt("Enter the texture");

  let classification = "";

  if (color === "red" || color === "blue" || color === "green") {
    classification += `${color} is relevent to object specifications.\n`;
  } else {
    classification += `${color} is irrelevant to object specifications.\n`;
  }

  if (size === "small" || size === "medium" || size === "large") {
    classification += `${size} is relevent to object specifications.\n`;
  } else {
    classification += `${size} is irrelevant to object specifications.\n`;
  }

  if (shape === "triangle" || shape === "rectangle" || shape === "circle") {
    classification += `${shape} is relevent to object specifications.\n`;
  } else {
    classification += `${shape} is irrelevant to object specifications.\n`;
  }

  if (weight === "light" || weight === "medium" || weight === "heavy") {
    classification += `${weight} is relevent to object specifications.\n`;
  } else {
    classification += `${weight} is irrelevant to object specifications.\n`;
  }

  if (texture === "smooth" || texture === "medium" || texture === "rough") {
    classification += `${texture} is relevent to object specifications.\n`;
  } else {
    classification += `${texture} is irrelevant to object specifications.\n`;
  }

  console.log("classification :");
  console.log(classification);
}

classifyObjects();

// Task 2: Class and Object Creation
// Write a JavaScript program that uses OOPs concepts to solve a simple problem.
// The program should define a class that represents the problem and has methods to solve it.
// Create an object of the defined class and use its methods to solve the problem.
//  The program should prompt the user to input any necessary information to solve the problem

class addition {
  constructor(a, b) {
    console.log("Constructor method");
    this.a = a;
    this.b = b;
  }
}

addition.prototype.operation = function () {
  let c = this.a + this.b;
  return c;
};

let firstvalue = parseInt(prompt("Enter the first value"));
let secondvalue = parseInt(prompt("Enter the second value"));

let ad = new addition(firstvalue, secondvalue);
let result = ad.operation();
console.log(result);

// Task 3: Inheritance
// Write a JavaScript program that demonstrates inheritance between two classes.
// The program should define a base class and a derived class, with the derived class inheriting
// from the base class. Both classes should have unique properties and methods.
//  The program should then demonstrate how the derived class can use the properties and methods of the base class.

// class car {
//   constructor() {
//     console.log(`Car constructor method`);
//   }
// }

// class bmw extends car {
//   constructor() {
//     super();
//     console.log(`bmw constructor method`);
//   }
// }

// car.prototype.tyre = 4;
// car.prototype.engine = function (eng, cc) {
//   return `${eng} Engine is used and it is ${cc} cc`;
// };

// bmw.prototype.engine = function (eng) {
//   return `${eng} Engine is used and have ${this.tyre} tyres`;
// };

// let bm = new bmw();
// let engin = bm.engine("Petrol");
// console.log(engin);
// let engin1 = bm.engine("Diesel", 1200);
// console.log(engin1);

class car {
  constructor(eng, cc) {
    this.eng = eng;
    this.cc = cc;
    console.log(`Car constructor method`);
  }
  engine() {
    console.log(`${this.eng} Engine is used and it is ${this.cc} cc`);
  }
}

class bmw extends car {
  engine() {
    super.engine();
    console.log(`${this.eng} Engine is used and have ${this.cc} cc`);
  }
}

let bm = new bmw("Petrol", 1200);
bm.engine();

// Task 4: Encapsulation and Abstraction
// Write a JavaScript program that demonstrates encapsulation and abstraction.
// The program should define a class that solves a simple problem using encapsulation and abstraction.
//  The class should hide its internal details and provide only the necessary information to the user.
//  The program should prompt the user to input any necessary information to solve the problem.

class studentName {
  constructor() {
    let fName, lName;
  }

  getFirstname() {
    return this.fName;
  }

  setFirstName(fName) {
    this.fName = fName;
  }

  getLastname() {
    return this.lName;
  }

  setLastName(lName) {
    this.lName = lName;
  }
}

let sn = new studentName();
sn.setFirstName("Tejas");
sn.setLastName("Patil");

// console.log(sn.getFirstname() + sn.getLastname());

// Task 5: Polymorphism
// Write a JavaScript program that demonstrates polymorphism.
// The program should define a base class and at least two derived classes.
// The base class should have a method that can be overridden in the derived classes.
// The program should create objects of each derived class and call the overridden method for each object.

class rbi {
  deposite() {
    console.log("rbi deposite");
  }
}

class sbi extends rbi {
  deposite() {
    console.log("sbi deposite");
  }
}

class union extends rbi {
  deposite() {
    console.log("union deposite");
  }
}

let sb = new sbi();
let un = new union();
let rb = new rbi();
sb.deposite();
un.deposite();
rb.deposite();
