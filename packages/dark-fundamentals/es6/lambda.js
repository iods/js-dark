/**
 * ES6: Lambda Functions
 *
 *
 */
// ES5 Way
var sum = function(x) {

    return function (y) {
        return x + y
    }
}

sum(5)(5) // returns 10

// ES6 way
let add = x => y => x + y

add(5)(5) // returns 10
console.log('this mothja')