// var i=1;
// var factorial = 1;
// while(i<=10){
//     factorial *= i;
//     i++;
// }
// console.log(factorial);

function fact(n) {
    var i=1;
    var factorial = 1;
    while(i<=n){
        factorial *= i;
        i++;
    }
    return factorial;
}

console.log(fact(4));