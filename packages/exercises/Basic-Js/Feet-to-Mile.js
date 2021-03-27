<<<<<<< HEAD
// Here goes a function to covert a the unit from Feet to Miles
//1 Feet = 0.000189394

function feetToMile(distanceInFeet){
    if(distanceInFeet<0){
        let invalidInput="Please input a Positive distance. A Distance can't be negative";
        return invalidInput;
    }
    let milesperfeet=0.000189394;
    let convertedanswer = milesperfeet*distanceInFeet;
    convertedanswer = convertedanswer.toFixed(7);
    let outputstring = distanceInFeet + " Feet = " + convertedanswer + " Miles";
    return outputstring;
}

=======
// Here goes a function to covert a the unit from Feet to Miles
//1 Feet = 0.000189394

function feetToMile(distanceInFeet){
    if(distanceInFeet<0){
        let invalidInput="Please input a Positive distance. A Distance can't be negative";
        return invalidInput;
    }
    let milesperfeet=0.000189394;
    let convertedanswer = milesperfeet*distanceInFeet;
    convertedanswer = convertedanswer.toFixed(7);
    let outputstring = distanceInFeet + " Feet = " + convertedanswer + " Miles";
    return outputstring;
}

>>>>>>> 72dc8de (pushing)
console.log(feetToMile(5));