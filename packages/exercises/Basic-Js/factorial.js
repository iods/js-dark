<<<<<<< HEAD
// Here goes a function to measure factorial of a number iteretively

function factorial(number){
    if(number < 0){
        return "Negative number's factorial can't be measured.";
    }
    let factorialAns = 1;
    for(var i=1 ; i<= number ; i++){
        factorialAns *= i;
    }
    return "Factorial of " + number + " is " + factorialAns; 
}

=======
// Here goes a function to measure factorial of a number iteretively

function factorial(number){
    if(number < 0){
        return "Negative number's factorial can't be measured.";
    }
    let factorialAns = 1;
    for(var i=1 ; i<= number ; i++){
        factorialAns *= i;
    }
    return "Factorial of " + number + " is " + factorialAns; 
}

>>>>>>> 72dc8de (pushing)
console.log(factorial(5));