function pairElement(str) {
  const eachElement = str.split('');
  let groupPairs = [];
  const eachPair = ({
    'A':["A","T"],
    'T':["T","A"],
    'C':["C","G"],
    'G':["G","C"]
  })
  for (let elem of eachElement){
    groupPairs.push(eachPair[elem])
    console.log(groupPairs)
  }
  return groupPairs;
}

pairElement("ATCGA");

//expected result: AT, TA, CG, GC

// The DNA strand is missing the pairing element. Take each character, get its pair, and return the results as a 2d array.

// Base pairs are a pair of AT and CG. Match the missing element to the provided character.

// Return the provided character as the first element in each array.

// For example, for the input GCG, return [["G", "C"], ["C","G"],["G", "C"]]

// The character and its pair are paired up in an array, and all the arrays are grouped into one encapsulating array.