// forEach() ->
const arr = [1, 33, 56, 7, 45];
arr.forEach((value, idx, val) => {
    console.log(value, idx, val);
})

// Array.from() ->
let name = "YASHWANT";
let frArr = Array.from(name);
console.log(frArr);

// for of ->
for (let i of arr) {
    console.log(i); // return elements of an array
}

// for in ->
for (let i in arr) {
    console.log(i);  // return index of an array elements
}

// map() ->
const mapArr = [1, 2, 3, 4, 5]
let res = mapArr.map((value) => {
    //Function logic
    return value*2;
})
console.log(res)

// filter() ->
const filArr = [1, 2, 3, 4, 5]
let res2 = filArr.filter((value) => {
    //Function logic
    return value>2;
})
console.log(res2);

// reduce() ->
const redArr = [1,2,3,4,5];
let res3 = redArr.reduce((val1, val2)=>{
    return val1*val2;
})
console.log(res3);  // it return 120

const redArr2 = [1,2,3,4,5];
let res4 = redArr.reduce((val1, val2)=>{
    return val1+val2;
})
console.log(res3);  // it return 15


