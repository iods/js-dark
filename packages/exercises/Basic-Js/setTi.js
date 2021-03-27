function doIt(){
    console.log(3);
}
console.log(1);
console.log(2);
// setTimeout( doIt);
// setTimeout(doIt,2000);
// setTimeout(()=>{
//     doIt();
// },5000);
// first parameter is the function, 2nd one is after what time
// it is guranteed not to execute this function before exact 5000 ms
// but not guranteed to execute exactly after 5000ms
console.log(4);
console.log(5);

setInterval(() => {
    doIt();
}, 2000);