// Immediatly Invoked Function Expression (IIFE)

// to do this we need to write the funtion inside  () linke this 
// If we need to invoke Immediatly we need to add () end of the function
(function hello() {
     // Named IIFE 
     console.log(`Hey there Hello`);
})(); // Hey there Hello Keep in mind to end the IIFE because it doesn't know when to end
// Or it doesn't know it's Scope

((name) => {
     console.log(`Arrow Function by : ${name}`);
})('Prathyush'); // Arrow Function by : Prathyush