function addNumbers(num1, num2) {
    // console.log(num1 + num2);
    var sum = 0;
    for (let i = 0; i < arguments.length; i++) {
        const num = arguments[i];
        sum += num;
    }
    return sum;
}
var res = addNumbers(3, 5, 10, 2, 30);
console.log(res);