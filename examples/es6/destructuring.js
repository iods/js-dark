/**
 * ES6: Destructuring
 *
 * The destructuring assignment syntax is a JavaScript expression that
 * makes it possible to unpack values from arrays or properties from
 * objects, into distinct variables.
 */

/*
 Objects
 */

// given an object of the characters from the Watchmen, return some
const whoWatchesTheWatchmen = {
    jonathon: 'Dr. Manhattan',
    dreiberg: 'Nite OWl II',
    adrian: 'Ozymandias',
    rorschach: 'Rorschach',
    laurie: 'Silk Spectre',
    eddie: 'The Comedian'
}

// ES5 way
// const jonathon = whoWatchesTheWatchmen.jonathon
// const eddie = whoWatchesTheWatchmen.eddie

// ES6 way
const {jonathon, eddie} = whoWatchesTheWatchmen
console.log(jonathon, eddie)


/*
 Arrays
 */
const teams = [
    'Broncos', 'Tigers', 'Rockies', 'Red Wings', 'Avalanche', 'Patriots'
]
// use a comma to to skip values within an array
const [first, , third] = teams
console.log(first, third)


/*
 Functions
 */
const scranton = {
    office: 'Dunder Mifflin',
    coworkers: ['Pam', ' Jim', ' Stanley', ' Dwight', ' Angela', ' Andy']
}

function buddies({coworkers}) {
    console.log(` ${coworkers}, and Michael Scott seem fun to work with.`)
}

buddies(scranton)

const colleagues = ['Erin', 'Oscar', 'Creed', 'Ryan', 'Toby', 'Kelly', 'Mose']
const [one, ...others] = colleagues

console.log(`${one} and ${others}`)