function translatePigLatin(str) {
  let newString = str.match(/^([b-df-hj-np-tv-z])+/g);
  if (newString != null) {
    const newStringLength = newString[0].split('').length;
    return str.substring(newStringLength).concat(newString + 'ay');
  }
  return str.concat('way')
}

translatePigLatin("eight");

//begin with consonant (A-Z excepts vowels.) move it to the end of word, add ay to it.
//begin with vowel (A E I O U) add 'way' at the end.
//[b-df-hj-np-tv-z]

/*
Pig Latin is a way of altering English Words. The rules are as follows:

- If a word begins with a consonant, take the first consonant or consonant cluster, move it to the end of the word, and add "ay" to it.

- If a word begins with a vowel, just add "way" at the end.

Translate the provided string to Pig Latin. Input strings are guaranteed to be English words in all lowercase.
*/