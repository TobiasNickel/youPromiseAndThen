// not async

// not every anonymouse function is async

var names = [
    'Tobias', 'Michael', 'Natalie', 'Monika',
    'Janine', 'David', 'Martin', 'Robert'
];

name.forEach(function(name, index) {
    console.log(index + 1, name);
});

console.log('that is all');