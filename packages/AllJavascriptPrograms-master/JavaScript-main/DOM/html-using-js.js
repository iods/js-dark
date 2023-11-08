let tbl = document.createElement('table');
let row1 = document.createElement('tr')
let row2 = document.createElement('tr')
let row3 = document.createElement('tr')
let data1 = document.createElement('td')
let data2 = document.createElement('td')
let data3 = document.createElement('td')
let data11 = document.createElement('td')
let data22 = document.createElement('td')
let data33 = document.createElement('td')
let head1 = document.createElement('th')
let head2 = document.createElement('th')
let head3 = document.createElement('th')

tbl.setAttribute('border', "1");
tbl.setAttribute('cellspacing', "0");
tbl.setAttribute('cellpadding', "10");

let tbrow1 = tbl.appendChild(row1);
let headData1 = tbrow1.appendChild(head1)
headData1.innerHTML="Sr. No.";

let headData2 = tbrow1.appendChild(head2)
headData2.innerHTML="Name";

let headData3 = tbrow1.appendChild(head3)
headData3.innerHTML="Roll No.";

let tbrow2 = tbl.appendChild(row2);
let d1 = tbrow2.appendChild(data1)
d1.innerHTML="01";
let d2 = tbrow2.appendChild(data2)
d2.innerHTML="Yash";
let d3 = tbrow2.appendChild(data3)
d3.innerHTML="AIT01";

let tbrow3 = tbl.appendChild(row3);
let dd1 = tbrow3.appendChild(data11)
dd1.innerHTML="02";
let dd2 = tbrow3.appendChild(data22)
dd2.innerHTML="Amit";
let dd3 = tbrow3.appendChild(data33)
dd3.innerHTML="AIT02";


document.querySelector("body").appendChild(tbl);
// console.log(tbl)
