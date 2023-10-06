/**
 * @fileoverview Exercises for Objects
 * Various exercises to improve the understanding of Objects
 * @package
 */

/*
 * Create an Address Object with the following properties:
 * Street
 * City
 * Zip Code
 * Create a function that takes an object and displays the properties and values.
 */

let address = {
    street: 'Highland Meadow Circle',
    city: 'Parker',
    zip: 80134
};

// function showAddress(address) {
//     console.log(address.street);
//     console.log(address.city);
//     console.log(address.zip);
// }


function showAddress(address) {
    for (let key in address)
        console.log(key, address[key]);
}

showAddress(address);


let address = {
    street: 'Highland Meadow Circle',
    city: 'Parker',
    zip: 80134
};

function showAddress(street, city, zip) {
    return {
        street,
        city,
        zip
    };
}

function NewAddress(street, city, zip) {
    this.street = street;
    this.city = city;
    this.zip = zip;
}

let addresss = new NewAddress('Highland', 'Parker', 80134);

console.log(addresss);
console.log(showAddress(address.street, address.city, address.zip));










let addressOne = new NewAddress('Deer Blvd.', 'Avon', '81650');
let addressTwo = new NewAddress('None of your', 'business', 81658);

function NewAddress(street, city, zip) {
    this.street = street;
    this.city = city;
    this.zip = zip;
}

function isEqual(addressOne, addressTwo) {
    return addressOne.street === addressTwo.street &&
        addressOne.city === addressTwo.city &&
        addressOne.zip === addressTwo.zip;
}
function isSame(addressOne, addressTwo) {
    return addressOne === addressTwo
}

console.log(isEqual(addressOne, addressTwo));
console.log(isSame(addressOne, addressTwo));



let blogPost = {
    title: 'Doomsday',
    body: 'blah blah blah, yeah yeah yeah, alright.',
    author: 'Royce Miller',
    views: 300,
    comments: [
        {
            author: 'Rhonda Miller',
            body: 'there are no comments for this post at this time.'
        },
        {
            author: 'Rita Miller',
            body: 'there are no comments for this post at this time.'
        }
    ],
    isLive: true
};

console.log(blogPost);