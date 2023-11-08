// How to declare SingleTon object
let myObject = new Object();
// console.log(myObject);

// how to declare props in this type of Object
myObject.myName = "Ram"
myObject.myAge = "19"
myObject.myProfession = 'Fresh Grad'
// console.log(myObject);// { myName: 'Ram', myAge: '19', myProfession: 'Fresh Grad' }

const regularUser = {
     email: "ram@Aayodya.com",
     fullName: {
          userFulName: {
               userFirstName: "Ram",
               userLastName :"The Lord"
          }
     }
}

// console.log(regularUser.fullName.userFulName.userFirstName);

let obj1 = { 1: 1, 2: 2 };
let obj2 = { 3: 3, 4: 4 };
// console.log(obj1);
// console.log(obj2);

let obj3 = {  ...obj1, ...obj2 }
// let obj3 = Object.assign({},obj1,obj2)
// console.log(obj3); // { '1': 1, '2': 2, '3': 3, '4': 4 }
// console.log(obj1);

let JsCourse = {
     courseName: "JavaScript",
     price: 999,
     courseInstructor : "Hithesh"
}

// Destructuring the Onject
const { courseInstructor:instructor,courseName,price } = JsCourse

console.log(instructor, courseName, price);

// let myGitApi = 'https://api.github.com/users/{userName}' 