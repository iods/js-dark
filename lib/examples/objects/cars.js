/*
 * DarkJSDK
 * Objects
 */

const car = {
    make: 'Mercedes',
    model: 'GLA250',
    year: '2016',
    color: 'white',
    'Something': 'more'
}

console.log(car.make);        // outputs Mercedes
console.log(car.color);       // outputs white
console.log(car.rims);        // outputs undefined
console.log(car['Something']) // outputs more
