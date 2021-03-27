<<<<<<< HEAD
// Here goes a function to create a nth sized fibonacchi series iteratively 

let fibonacchiSeries = [];

function fibonacchiCreating(number){
    if(number <= 0){
        return "Please Input a valid Size.";
    }
    for(var i=0 ; i<number; i++){
        if(i<2) fibonacchiSeries.push(i);
        else{
            let tempValue = fibonacchiSeries[i-1] + fibonacchiSeries[i-2];
            fibonacchiSeries.push(tempValue);
        }
    }
    return fibonacchiSeries;
}

=======
// Here goes a function to create a nth sized fibonacchi series iteratively 

let fibonacchiSeries = [];

function fibonacchiCreating(number){
    if(number <= 0){
        return "Please Input a valid Size.";
    }
    for(var i=0 ; i<number; i++){
        if(i<2) fibonacchiSeries.push(i);
        else{
            let tempValue = fibonacchiSeries[i-1] + fibonacchiSeries[i-2];
            fibonacchiSeries.push(tempValue);
        }
    }
    return fibonacchiSeries;
}

>>>>>>> 72dc8de (pushing)
console.log(fibonacchiCreating(-7));