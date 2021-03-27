

function smallestCommons(arr) {
  //sort number in arr from low to high
  arr.sort(function(a,b){return a-b});

  //assign numbers to variable using deconsstructing assign
  const [x,y] = arr;

  //เอา n มาหารด้วยเลขระหว่าง x ถึง y ถ้าหากหารไม่เหลือเศษทั้งหมดแสดงว่า เป็น LCM แต่ถ้าหารเหลือเศษก็จะ บวกตัวใหญ่เพิ่ม 1 แล้วทำขั้นตอนเดิมต่อไป
  let scm = y;
  while (true){
    let isScm = true;
    for (let i = x; i <= y; i++) {
      if (scm%i != 0) {
        isScm = false;
        //console.log(`scm: ${scm}| i: ${i}`)
        break;
      }
    }
    if (isScm) {
      return scm
    } else {
      scm++;
    }
  }
}


smallestCommons([1,5]);

// Find the smallest common multiple of the provided parameters that can be evenly divided by both, as well as by all sequential numbers in the range between these parameters.

// The range will be an array of two numbers that will not necessarily be in numerical order.

// For example, if given 1 and 3, find the smallest common multiple of both 1 and 3 that is also evenly divisible by all numbers between 1 and 3. The answer here would be 6.