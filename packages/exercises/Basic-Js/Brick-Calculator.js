// Here goes a Calculator to measure about needed quantity to build a building based on floor height
/*
    1000 bricks per Feet
    <=10th Floors, 15 Feet height
    <=20th Floors, 23 Feet height
    > 20th Floors, 20 Feet height
*/
function brickCalculator(floornumber){
    if(floornumber<0){
        return "Please Input a valid Floor number. Floor Number can't be negative.";
    }
    let ans=0;
    if(floornumber>20){
        ans += (floornumber-20)*10;
    }
    if(floornumber>10){
        ans +=  (floornumber-10)*12;
    }
    if(floornumber>10){
        ans += 10*15;
    }
    else{
        ans += floornumber*15;
    }
    return "You need total " + ans*1000 + " bricks to build " + floornumber + " Floor building.";
}

console.log(brickCalculator(-21));