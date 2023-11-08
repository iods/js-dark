// singleton

// Object.create()

// Oject literals

const mySymbol = Symbol("Key");

const newSymbols = Symbol('Nums')

const userDetails = {
     userName: "Prathyush",
     /* If the declaration is given in the way the below decalred */
     "userFullName": "Varrey Shiva Ganesh Bhanu Prathyush",
     /* By decalring like this we can't access userFullName with dot Notation
     we need to access with the bracket Notation */
     mySymbol: "myKey",
     [newSymbols] :"nums",
     userAge: 20,
     userLocation: "Raipur",
     userEmail: "shivabole@email.com",
     userIsLoggedIn : false
}

// Accessing the props
// console.table(userDetails);
/*
┌────────────────┬───────────────────────────────────────┐
│    (index)     │                Values                 │
├────────────────┼───────────────────────────────────────┤
│    userName    │              'Prathyush'              │
│  userFullName  │ 'Varrey Shiva Ganesh Bhanu Prathyush' │
│    mySymbol    │                'myKey'                │
│    userAge     │                  20                   │
│  userLocation  │               'Raipur'                │
│   userEmail    │         'shivabole@email.com'         │
│ userIsLoggedIn │                 false                 │
└────────────────┴───────────────────────────────────────┘
*/
// console.log(userDetails);
/* 
{
  userName: 'Prathyush',
  userFullName: 'Varrey Shiva Ganesh Bhanu Prathyush',
  mySymbol: 'myKey',
  userAge: 20,
  userLocation: 'Raipur',
  userEmail: 'shivabole@email.com',
  userIsLoggedIn: false,
  [Symbol(Nums)]: 'nums'
}
*/

// Dot Notation
// console.log(userDetails.userName);// Output => Prathyush
// // Bracket Notation
// console.log(userDetails['userName']);// Output => Prathyush

// console.log(userDetails.userFullName);
// console.log(typeof userDetails.mySymbol); //string
// console.log( userDetails.mySymbol); //myKey

// console.log(typeof userDetails.newSymbols);
// console.log(userDetails.newSymbols);

userDetails.userEmail = "prathyush@google.com"
// Object.freeze(userDetails)
userDetails.userEmail = 'prathyush@tcs.com'
// console.log(userDetails);
/*
     {
  userName: 'Prathyush',
  userFullName: 'Varrey Shiva Ganesh Bhanu Prathyush',
  mySymbol: 'myKey',
  userAge: 20,
  userLocation: 'Raipur',
  userEmail: 'prathyush@google.com',
  userIsLoggedIn: false,
  [Symbol(Nums)]: 'nums'
}
 */

userDetails.greetings = function () {
     console.log(`Welcome Come to Google Mr ${userDetails.userFullName}`);
}

console.log(userDetails.greetings());// Welcome Come to Google Mr Varrey Shiva Ganesh Bhanu Prathyush
