console.log("This is string properties and methods");
// NOTE:JavaScript counts positions from zero. 0 is the first position in a string, 1 is the second, and so on.

//javaScript string methods:
/*
1.charAt(c):
-It returns the character at the “c” position within the string.
*/
var myString = 'JavaScript!!!';
console.log(myString.charAt(7)); //output: i

/*
2.concat(p1, p2): 
-Combines one or more strings into the existing one and returns the concatenated string. Remember that the original string is not modified.
*/ 
var str1="JavaScript"
var str2=str1.concat(" is","awesome")
console.log(str2);//Output: JavaScript is awesome
var str1 = "Rohit";
var str2 = str1.concat(" is a webdev"," ","and knows javaScript very well");
console.log(str2);//Output: Rohit is a webdev


/*
3.indexOf(substr, [start_from]): 
-This method Searches and returns the index number of the searched character within the string. If not found, it will return -1 . “Start_from” is an optional argument specifying the position within string to begin the search. Default is 0.
*/
var str1="Hi, my name is RS!";
var str2 = str1.indexOf("locate");
console.log(str3);//Output: -1
var str3 = str1.indexOf("name");
console.log(str3);//output: 7
var str3 = str1.indexOf("name",[5]);
console.log(str3);//output: 7

/*
4.lastIndexOf(substr, [start_from]):
-This method searches and  returns the index number of the searched character within the string. This method will return the index of the last occurrence of a specified text in a string.If the character or string is not found, -1 is returned. "Start_from" is an optional argument specifying the position within string to begin the search. Default is 0
*/
var myString = 'javascript Node.js';
console.log(myString.lastIndexOf('N'));//output: 11

/*
5.slice(start, end):
-This method returns a substring of the string based on the "start" and "end" index , it will not include the "end" index itself. "End" argument is optional, and if none is specified, the slice includes all characters from "start" to end of string.
*/
var text="programming"
var mystr= text.slice(0,4)
console.log(mystr)//Output:- "prog"

/*
6.split(delimiter, limit): 
-This method Splits a string into substring to the specified delimiter, and returns an array containing each element. The argument “limit” is an integer that lets you specify the maximum number of elements to return.
*/
var txt = "a,b,c,d,e";   // String
var spl1 = txt.split(","); // Split on commas 
console.log(spl1);     
var spl2 = txt.split(spl2);// Split on spaces
console.log(spl2);

/*
7.substring(from ,to): 
-This method will returns the characters in a string between “from” and “to” indexes. It will not include “to” inself. “To” argument is optional, and if omitted, up to the end of the string is assumed.
*/
var myString = 'javascript Programming';
console.log(myString)//output: javascript Programming
myString = myString.substring(0,10);
console.log(myString)//output: javascript

/*
8.toLowerCase(): 
-This method will Returns the string with all of its characters converted to lowercase.
*/
var myString = 'JAVASCRIPT';
myString = myString.toLowerCase();
console.log(myString)//output: javascript


/*
9.toUpperCase(): 
-This method will Returns the string with all of its characters converted to uppercase.
*/
var myString = 'javascript';
myString = myString.toUpperCase();
console.log(myString)//output: JAVASCRIPT

/*
10.search(“str”): 
-The method searches a string for a specified value and returns the position of the match:
*/
var str = "Welcome to programming World!!";
var pos = str.search("programming");
console.log(pos);

/*
11.substr() Method: The method substr() is similar to slice(). The only difference is that the second parameter specifies the length of the extracted part.
*/
var str = "Apple, Banana, Kiwi";
var res = str.substr(7, 6);// Output: Banana
console.log(res);

//some extra functions of string:
var str = "Welcome to the world of programming" ;
str = str.replace("Welcome","Javascript");
console.log(str);//result: Javascript to the world of programming

str = str.includes(' hey');
console.log(str);//result: false

str = str.endsWith(' hey');
console.log(str);//result: false


//Template literals in javascript:
let game = "cricket";
let name = "Rohit";
let myHtml = `${name} loves ${game}`;
console.log(myHtml)
document.body.innerHTML = myHtml;



