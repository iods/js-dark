



const users = ['Michael', 'Dwight', 'Jim', 'Kevin'];
const usersTwo = ['Toby', 'Pam'];

// if you want to combine an array, use concat, if you want to slice you can use slice

const combined = users.concat(usersTwo);

console.log(combined);

// if you want to combine an array, use concat, if you want to slice you can use slice

const combined = users.concat(usersTwo);

const copy = [...users, 'Creed', ...usersTwo];

//const slice = combined.slice();

console.log(combined);
console.log(copy);