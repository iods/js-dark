// Creation of Promise create a function(resolve,reject)
let promise1 = new Promise(function (resolve, reject) {
     // Do an Async Task
     // DB calls , cryptography , network
     // Can Do Any Task 
     setTimeout(() => {
          // console.log('Async Task Completed');
          resolve()
     },2000)
})

promise1.then(function () {
     // console.log('Promise Completed');
})

// type 2 
new Promise(function(resolve, reject){
     setTimeout(() => {
          // console.log('Async Task 2 : type 2 of creating  Promise');
          resolve()
     }, 1000);
}).then(() => {
     // console.log('type 2 creation Completed');
})

// Passing Data to the promise
let userDetails = {
     userName: {
          surName: 'Nayak',
          usersName : 'Rathod'
     },
     userDateOfBirth : '19-01-1995'
}

let userPromiseThree = new Promise(function (resolve,reject) {
     // setTime
     setTimeout(() => {
          resolve(userDetails)
     }, 1000);
})

userPromiseThree.then(function (parsedData) {
     // console.log(parsedData.userName.surName);
})

// chaining reject & finally
let userPromiseFour = new Promise(function (resolve, reject) {
     setTimeout(() => {
          let foundError = true;
          if (!foundError) {
               reject('Error : Something Went Wrong')
          }
          else {
          resolve(userDetails)
          }
     }, 1000);
})

// chaining & finally keyword
userPromiseFour
     .then(function (userData) {
     // console.log('Returing user Data');
     // return userData.userName
     })
     .then((userName) =>{
          // console.log(userName)
     })
     .catch((error) => {
     // console.log(error);
     })
     .finally(() => {
          // console.log('The Promise Either Resolved or Rejected')
     })
     
let promiseFive = new Promise(function (resolve,reject) {
     setTimeout(() => {
          let foundError = true;
          if (!foundError) {
               resolve(userDetails)
          }
          else {
               
               reject('Error : Something Went Wrong')
          }
     }, 1000);
})

async function consumePromiseFive() {
     try {
          let lastResponse = await promiseFive
          console.log(lastResponse);
     } catch (error) {
          console.log(error);
     } finally {
          console.log('Promise Either Resolved or Rejected');
     }
}

consumePromiseFive()