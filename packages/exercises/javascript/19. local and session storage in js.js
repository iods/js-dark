console.log("local and session storage is js")

// LOCAL STORAGE : it is different for different websites and it will never be empty since it is local to your device and will not get empty on closing the browser .

var sabzi = ['vindi','aaloo','baingan', 'nimbu']
// add a key-value pair inside a local storage.
localStorage.setItem('name',"ROhit")
localStorage.setItem('name2','Rohan')
localStorage.setItem('sabzi',JSON.stringify(sabzi));//JSON.stringify converts the array into string

//clears the entire local storage
// localStorage.clear();

//clears a particular key-value pair
localStorage.removeItem('name2');
//retrieve the item from local storage
var lname = localStorage.getItem('name');
console.log(lname)

var sname = JSON.parse(localStorage.getItem('sabzi')); //JSON.parse converts the string into array se we can perform all the array functions . NOTE: we need to use json stringify and parse simaltaneously.
console.log(sname);


//SESSION STORAGE: it is different for different websites and will get empty on closing the browser .
// it is available for the session over which the browser is running .

// all the functions are same as that of the local storage ,the only difference  in this case is here we will use sessionStorage.any_function() instead of the localStorage.