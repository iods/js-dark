function convertHTML(str) {
  const targetChar = ({
    '&':'&amp;',
    '<':'&lt;',
    '>':'&gt;',
    '"':'&quot;',
    "'":"&apos;"
  });

  const arrStr = str.split('');
  let convertedStrArr = [];

  for (const [i,letter] of arrStr.entries()){
    convertedStrArr.push(targetChar.hasOwnProperty(letter)
    ? targetChar[letter]
    : (letter));
  }
  return convertedStrArr.join('');
}

convertHTML('Stuff in "quotation marks"');



// Convert the characters &, <, >, " (double quote), and ' (apostrophe), in a string to their corresponding HTML entities.