

const characters = [
    {id: 1, name: 'Jim Halpert'},
    {id: 2, name: 'Dwight Schrute'}
];

characters.sort(function(a, b) {
    if (a.name < b.name) return -1;
    else if (a.name > b.name) return 1;
    return 0;
});

const characters = [
    {id: 1, name: 'Jim Halpert'},
    {id: 2, name: 'Dwight Schrute'}
];

characters.sort(function(a, b) {
    if (a.name < b.name) return -1;
    else if (a.name > b.name) return 1;
    return 0;
});

// each character is represented as a number.
// ascii - american standard code for information interchange
console.log(characters);