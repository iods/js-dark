// this => it provides the current context let's with a example
let user = {
     userName: "Ram",
     price: 1999,
     // webSitewelcome : function () {
     //      console.log(`${userName},welcome to website`);
          /* whitout using this we are getting an error 
           userName is not defined Now let's comment this function
           and see what next function does
          */
     // },
     welcomeMsgUsingThis : function () {
          console.log(`${this.userName},welcome to website`);
          // let's console.log(only this)
          console.log(this);
     }
}

// user.webSitewelcome()
// user.welcomeMsgUsingThis() 
// Giving Output => Ram,welcome to website
/* 
Ram,welcome to website
{
  userName: 'Ram',
  price: 1999,
  welcomeMsgUsingThis: [Function: welcomeMsgUsingThis]
}
*/
user.userName = "Shubam"
// user.welcomeMsgUsingThis()
// Output => Shubam,welcome to website
/* Shubam,welcome to website
{
  userName: 'Shubam',
  price: 1999,
  welcomeMsgUsingThis: [Function: welcomeMsgUsingThis]
}
 */

// console.log(this); // Output => {}
/*
when we log this in a Runtime Environment we get output => {} (empty Object)
but when we run this on chrome dev tools Console we get
window {}. where the browser refers to the window and we get DOM manipulations 
funtions like(alert(),fetch()etc...)
 */

// we can't use this in funtions

// function one() {
//      let userName = 'Shiva'
//      console.log(this.userName);
// }
// one() // Output => undefined

// other way to declare function
// let userName = function (userName) {
//      console.log(userName);
// }
// userName('Parvati') // Output => Parvati

// Arrow Function
// const chai = () => { 
//      let userName = 'shiva'
//      console.log(this.userName);
// }
// chai() // output => undefined