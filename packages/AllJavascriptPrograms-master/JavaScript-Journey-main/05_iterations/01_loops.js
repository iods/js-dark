// for loop

for (let i = 1; i <= 3; i++) {
     // console.log(`Outter Loop Value :${i}`);
     for (let j = 1; j < 5; j++) {
          // console.log(`Inner Loop Value : ${j}, Outter Loop Value : ${i}`); 
          // console.table(i + '*' + j + '=' + i * j);
     }
}
/* 
1*1=1
1*2=2
1*3=3
1*4=4
2*1=2
2*2=4
2*3=6
2*4=8
3*1=3
3*2=6
3*3=9
3*4=12
*/

let myArray = [1,2.3,3,4]

for (let index = 0; index < myArray.length; index++) {
     const element = myArray[index];
     // console.log(element);
}

for (let i = 0; i <= 10; i++) {
     if (i  == 5) {
          // console.log(`Detected  5`);
          break
     }
     // console.log(`Value of i is : ${i}`);
     /* Value of i is : 0
Value of i is : 1
Value of i is : 2
Value of i is : 3
Value of i is : 4
Detected  5 */
}
for (let i = 0; i <= 10; i++) {
     if (i  == 5) {
          console.log(`Detected  5`);
          continue
     }
     console.log(`Value of i is : ${i}`);
     /*
     Value of i is : 0
Value of i is : 1
Value of i is : 2
Value of i is : 3
Value of i is : 4
Detected  5
Value of i is : 6
Value of i is : 7
Value of i is : 8
Value of i is : 9
Value of i is : 10

     */
}