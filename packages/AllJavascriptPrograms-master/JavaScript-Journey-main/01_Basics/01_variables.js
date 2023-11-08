const accountId = 191101
// => const a DT where  once you Initialize the value you can't 
// Reinitialize and You cna't use the Variable Name again.

let accountemail = "prap12r@gmai.com"
// => let is a DT which can be Reintialized but you can't reinitialze the variable
var accountPassword = "1234"
// => var it is different from the other two since we can Reinitialze both variable and value of variable
city = "Jaipur"

console.log("CitlyName:",city," Email:",accountemail," Id:",accountId)
  // => console.log() -> is a Function that prints the Parameters that are given 
  // in the open "(" and closing ")" brackets.as You seen above
accountemail = "send@mail.com"

console.table([accountId, accountPassword, accountemail, city])
// => console.table -> is function that takes all values as a arrya and prints out as a table
// it's easy way if you want to print all the varibales and their values as a table .

// Note => Don't use var because of it's cons