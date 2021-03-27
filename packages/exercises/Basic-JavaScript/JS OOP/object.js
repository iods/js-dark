var student = {id:181, phone:12345, name:"tamkin"};

var id = student.id;
var phoneNo = student.phone;
var name = student.name;

var id = student["id"];
var phoneNumber = student["phone"];
var Name = student["name"];

console.log("Id is: "+id);
console.log("Phone Number is: "+phoneNo);
console.log("Name is: "+name);

var student2 = {id: 182, phone: 98765, name:"rahman"};

console.log(student2);

var student3 = {
    id: 183,
    phone: 124578,
    name:"tamkin"
};

console.log("Student-3 Id is: "+student3.id+"\n"+"Student-3 phone number is: "+student3.phone+"\n"+"Student-3 name is: "+student3.name+"\n");

// update values

student3.id=100;
student3.phone=12121212;
student3.name="freddebulk";

console.log(student3);

student3.lastName="freddic errison";
console.log(student3);