/**
 * Some interesting things to do w/ ES6
 */

// find an object in an array, based on the object's property
const arr = [
    {id: 0, name: 'Object 0', number: '321'},
    {id: 1, name: '01', number: '901'},
    {id: 2, name: 'Third Object', number: '123'},
    {id: 3, name: 'One More', number: '567'},
    {id: 4, name: 'Last Object', number: '394'}
]

let obj = arr.find(function (obj){return obj.id === 3})


let myObj = {
    a: 1,
    b: 1
}
let myCopy = Object.assign({}, myObj) // shallow clone
console.log(myCopy)

function cloneObj(obj) {
    let clone = {}

    for(let i in obj) {
        if(obj[i] != null && typeof(obj[i]) == "object") {
            clone[i] = cloneObj(obj[i])
        } else {
            clone[i] = obj[i]
        }
    }
    return clone
}