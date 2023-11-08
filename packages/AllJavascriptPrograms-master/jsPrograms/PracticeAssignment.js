//Tejas Patil
//Ujwal Devgade
//Aditya Kulkarni

//Question 1

// Create a function that takes a string and a character as input and returns 
// the number of occurrences of the character in the string.

function myFunction(a,b){                      
    let count = 0;        
    for(let i = 0; i < a.length; i++){ 
        if(a[i] == b){ 
            count++; 
        } 
    }
    console.log(`${b} is repeated ${count} times`); 
}

myFunction('asdadasfafas','a')          


//Question 2:

// Write a JavaScript function that takes two arrays and returns a new array 
// containing their union (all elements from both arrays, without duplicates).

let array1 = [1,2,3,4,4]               
let array2 = [5,5,6,6,7]
let set1 = new Set (UnionofArray(array1,array2))
console.log(Array.from(set1));

function UnionofArray(array1,array2){
     return array1.concat(array2)
    }



