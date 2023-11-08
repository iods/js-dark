function binaryToDecimal(binary) {
  if (binary.length === 0) {
    return 0; // Base case: an empty binary string has a decimal value of 0
  }

  const lastBit = binary[binary.length - 1];
  const remainingBits = binary.substring(0, binary.length - 1);

  // Recursive case: multiply the decimal value of remaining bits by 2 and add the last bit
  return binaryToDecimal(remainingBits) * 2 + parseInt(lastBit);
}
console.log(binaryToDecimal("101")); // 5
console.log(binaryToDecimal("1101")); // 13
console.log(binaryToDecimal("100110")); // 38
