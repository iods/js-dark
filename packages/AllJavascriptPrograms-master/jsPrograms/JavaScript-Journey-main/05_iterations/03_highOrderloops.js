let arr = [1, 2, 3, 4, 5, 6]

// arrays in arrays = [[],[]]
// objects in arrays = [{},{},{}]

for (const iterator of arr) {
     // console.log(iterator);
     /* 1 2 3 4 5 6 */
}

let userName = 'Prathyush'
// console.log(userName.length);
for (const iterator of userName) {
     // console.log(iterator);
}

// Maps

const map = new Map()

map.set('In', "India")
map.set('Jap', "Japan")
map.set('Fr', "France")

for (const [key , values] of map) {
     console.table(`${key} :- ${values}`)
}
/*In :- India
Jap :- Japan
Fr :- France*/ 