/*
 A promise is exactly what it sounds like.

 You use it to make a promise to do something, usually asynchronously.
 Once complete, you either fulfill the promise or do not.

 A promise is a constructor function, so it needs the `new` keyword to create one.
 It takes a function, as it's arg, with two params - resolve and reject.

 These help identify the outcome of a method:

 const myPromise = new Promise((resolve, reject) => {
    // some promised code here
 });
 */

// a promise called makeServerRequest. passing in a function w/ resolve and reject params to constructor
const makeServerRequest = new Promise((resolve, reject) => {
    // some promised code here
})