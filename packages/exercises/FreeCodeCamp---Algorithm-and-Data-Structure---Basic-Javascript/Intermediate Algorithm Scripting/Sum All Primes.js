function sumPrimes(num) {
  //for generating a range of number
  const range = (start, stop, step) => Array.from({ length: (stop - start) / step + 1}, (_, i) => start + (i * step));
  
  //variable for accumulating the odd prime nubemrs
  let sum = 0;

  //function to check if it's a prime nubmer or
  let isPrime = (num) => {
    if (num <= 1) {
    return true
  } else if (num <= 3) {
    return true
  } else if (num%2 === 0 || num%3 === 0) {
    return false
  }
 
  let i = 5
  while (i*i <= num) {
    if (num%i === 0 || num%(i+2) === 0) {
      return false
    }
    i += 6
  }
  return true

  };
  
  //generate a range of number
  const numSeq = range(1,num,1);
  
  //check for odd numbers
  numSeq.forEach(x => {
  if (isPrime(x)){
    if (x%2 != 0) {
      sum += x;
    }
  }})
  return sum + 1;
}

console.log(sumPrimes(10));



// A prime number is a whole number greater than 1 with exactly two divisors: 1 and itself. For example, 2 is a prime number because it is only divisible by 1 and 2. In contrast, 4 is not prime since it is divisible by 1, 2 and 4.

// Rewrite sumPrimes so it returns the sum of all prime numbers that are less than or equal to num.

