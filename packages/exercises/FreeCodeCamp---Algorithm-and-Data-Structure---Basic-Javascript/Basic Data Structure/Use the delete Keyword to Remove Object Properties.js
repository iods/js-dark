let foods = {
  apples: 25,
  oranges: 32,
  plums: 28,
  bananas: 13,
  grapes: 35,
  strawberries: 27
};

// Only change code below this line
['oranges','plums','strawberries'].forEach(element => delete foods[element]);
// or just do 'delete foods.oranges'
// Only change code above this line

console.log(foods);

/*
In earlier challenges, we have both added to and modified an object's key-value pairs. Here we will see how we can remove a key-value pair from an object.

Let's revisit our foods object example one last time. If we wanted to remove the apples key, we can remove it by using the delete keyword like this:

delete foods.apples;
Use the delete keyword to remove the oranges, plums, and strawberries keys from the foods object.
*/