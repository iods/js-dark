function sumFibs(num) {
  let fiboSeq = [0,1];
  let sumOfFibo = 0;
  for (let i = 1; i <= num; i++){
    if (fiboSeq[fiboSeq.length - 1] > num){
      return sumOfFibo
    }
    if (fiboSeq[i] %2 != 0){
    sumOfFibo += fiboSeq[i];
    }
    fiboSeq.push(fiboSeq[i - 1] + fiboSeq[i]);
  }
  return sumOfFibo;
}

sumFibs(4);


// Given a positive integer num, return the sum of all odd Fibonacci numbers that are less than or equal to num.

// The first two numbers in the Fibonacci sequence are 1 and 1. Every additional number in the sequence is the sum of the two previous numbers. The first six numbers of the Fibonacci sequence are 1, 1, 2, 3, 5 and 8.

// For example, sumFibs(10) should return 10 because all odd Fibonacci numbers less than or equal to 10 are 1, 1, 3, and 5.