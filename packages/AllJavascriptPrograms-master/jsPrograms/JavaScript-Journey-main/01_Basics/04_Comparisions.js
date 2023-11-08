let num1 = 20;
let num2 = 10;

// Part 01
 console.log(num1 > num2);// O/P => true
 console.log(num1 >= num2);// O/P => true
 console.log(num1 <= num2);// O/P => flase
 console.log(num1 < num2);// O/P => flase
 console.log(num1 == num2);// O/P => flase
 console.log(num1 === num2);// O/P => flase
 console.log(num1 != num2)// O/P => true

// Part 02
console.log(null > 0); // O/P => flase
console.log(null >= 0); // O/P => true
console.log(null < 0); // O/P => flase
console.log(null <= 0); // O/P => true
console.log(null == 0); // O/P => false
console.log(null === 0); // O/P => false
console.log(null != 0); // O/P => true

 console.log(typeof null); // O/P => object

 console.log(typeof undefined); // O/p => false Undefined itself is a DataType


// Part 03
console.log("2" == 2); // O/p => true
console.log("2" === 2); // O/p => flase

/* 
Part 01 is the thing we all know

                    Part 02 -
          While comparing Null with 0 we have seen different O/P
          that's because while comparing JS converts null into a Number.
          Initially null is a object type 

                    Part 03 -
          Now if you observe the above consoles you can find a new equality
     check that (===) which is know as "Strict-Check"/ "Triple Equal check".
     Now the difference b/w == & === 
     == -> Only checks the number 
     === -> Checks both number and datatype of the value too.
Note => Never Do convertions such as shown in Part 2 and Part 3`
*/