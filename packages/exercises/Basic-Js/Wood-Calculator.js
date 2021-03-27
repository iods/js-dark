<<<<<<< HEAD
// Here goes a Calculator to count the quantity of woods

/*
    1 Cubic Feet Wood Per Chair
    3 Cubic Feet Wood Per Table
    5 Cubic Feet Wood Per Bed
*/

function woodCalculator(chairQuantity, tableQuantity, bedQuantity){
    if(chairQuantity<0 || tableQuantity<0 || bedQuantity<0){
        return "Please Input a valid Quantity. Quantities can't be negative.";
    }
    let totalWoodQuantity = chairQuantity*1 + tableQuantity*3 + bedQuantity *5;
    return "You need total "+totalWoodQuantity+" Cubic Feet Woods.";
}

=======
// Here goes a Calculator to count the quantity of woods

/*
    1 Cubic Feet Wood Per Chair
    3 Cubic Feet Wood Per Table
    5 Cubic Feet Wood Per Bed
*/

function woodCalculator(chairQuantity, tableQuantity, bedQuantity){
    if(chairQuantity<0 || tableQuantity<0 || bedQuantity<0){
        return "Please Input a valid Quantity. Quantities can't be negative.";
    }
    let totalWoodQuantity = chairQuantity*1 + tableQuantity*3 + bedQuantity *5;
    return "You need total "+totalWoodQuantity+" Cubic Feet Woods.";
}

>>>>>>> 72dc8de (pushing)
console.log(woodCalculator(1,1,-1));