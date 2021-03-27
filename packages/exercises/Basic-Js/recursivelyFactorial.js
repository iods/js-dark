<<<<<<< HEAD
// Here goes a function to measure factorial of a number RECURSIVELY

function factorial(number){
    if(number < 0){
        return "Negative number's factorial can't be measured.";
    }
    if(number <= 1){
        return number;
    }
    return number*factorial(number-1);
}

=======
// Here goes a function to measure factorial of a number RECURSIVELY

function factorial(number){
    if(number < 0){
        return "Negative number's factorial can't be measured.";
    }
    if(number <= 1){
        return number;
    }
    return number*factorial(number-1);
}

>>>>>>> 72dc8de (pushing)
console.log(factorial(5));