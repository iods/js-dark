let number = '33'

// console.log(typeof number);// (string)

let newNum = typeof (number)

// console.log(newNum);// (string)

let strNumber = "03Abcd"
// console.log(typeof strNumber) // (string)
let newStrNum = Number(strNumber)
// console.log(typeof newStrNum);//(number)
// console.log(newStrNum);// O/P => NaN "Not A Number"

let isTrue = true
// console.log(typeof Number(isTrue));//=> O/P = 1 (true == 1) since we converted to Number type is(number)
// console.log(typeof isTrue)// originally Type is (boolean)

let isLogedIn = 1
// console.log(typeof isLogedIn);// O/p => 1 and type (number)
let boolIsLogedIn = Boolean(isLogedIn)
// console.log(typeof boolIsLogedIn)// O/P => true & type (boolean) since converted to boolean

let str1 = ""
let str2 = "Ram"
let boolStr1 = Boolean(str1)
// console.log(boolStr1)
let boolStr2 = Boolean(str2)
// console.log(boolStr2)
/*
=> "33"(string) => Number("33") (number)
=> "03Abcd"(string) => Number("03Abcd") (NaN)"Not A Number"
=> true (boolean) (true == 1)
=> flase (boolean) (false == 0)
=> if we Convert empty string into Boolean than the O/P will be flase 
    since there is no value.(0 lenght)
=> if we convert the string which has Value in it to Boolean than the O/P will be true
    since there is value (1 value is there)
*/

/***************************************** Operations *****************************************/
// console.log(2 + 2);
// console.log(2 - 2);
// console.log(2 * 2);
// console.log(2 ** 3);
// console.log(2 / 2);
// console.log(2 % 4);

// console.log(2 + "2") // O/P => 22 
// console.log("3" + 2);// O/P => 32
// console.log(1 + 2 + "4");// O/P => 34
// console.log(1 - "2");// O/P => -1
// console.log("2" - 1 + 5 - "2");//O/P=> 4
// console.log("2" - 1) //O/P =>  1
/* 
Let's understand whats  going on
     If you see the 1,2,3 cases there we are using (+) sign  and trying to add a Number 
with a string and Now we know if we do like his no matter what the the output will
be the concatnation of string as a  result we got the output
Imp's => 
     -> Don't try to add a Number with a string 
     -> it gives us the concatnation of string only 
     -> since we use (+)  sing to concatnate the string

     Now In the case of 4,5 we are trying to (-) a Number with a string 
and the  results  you have seen above this is beacuse in strings (-) this is  
not used for anything so it's doing the basic math..
Note =>  Please don't   write this type of code
*/