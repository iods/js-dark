//Set creation
let set = new Set();

//Add elements in set
set.add(1);
set.add(2);
set.add(3);
set.add(1);
set.add(3);

//Print set
console.log(set);

//Print size of set
console.log(set.size);

//check if element is present in set
console.log(set.has(1));
console.log(set.has(5));

//delete element in set
set.delete(1);
console.log(set);

//Iterate set
set.forEach((value) => {
  console.log(value);
});

//Convering set to array
let array = Array.from(set);
console.log(array);
