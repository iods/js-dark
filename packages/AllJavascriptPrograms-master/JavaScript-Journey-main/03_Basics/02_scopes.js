// Scope in JS

var a = 20  // Here var is not to be used .

if (!false) {
     let b = 10;
     const c = 3.14;
     var a = 40;  // Here var is not to be used .
     console.log("Inner :",a);
}

console.log("Outer :", a); // Inner : 40 ; Outer : 40
console.log(b); // b is not defined. since it is declared out of the if scope we got error
// same with c