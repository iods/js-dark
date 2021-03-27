function fearNotLetter(str) {
  console.log(str.charCodeAt(1) - str.charCodeAt(2))
  let i = 0;
  for (const char of str) {
    if (str.charCodeAt(i+1) - char.charCodeAt(0) > 1){
      const missingCharCode = char.charCodeAt(0) + 1;
      return String.fromCharCode(missingCharCode);
    }
    i++;
    }
  return undefined;
}

fearNotLetter("abde");

// Find the missing letter in the passed letter range and return it.
// If all letters are present in the range, return undefined.



// Find the missing letter in the passed letter range and return it.

// If all letters are present in the range, return undefined.