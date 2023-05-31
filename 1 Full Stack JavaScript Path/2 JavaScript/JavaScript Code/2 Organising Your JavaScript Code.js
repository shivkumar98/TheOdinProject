const myObject = {
    name: 'Shiv Kumar',
    age: 77,
    "obnxious property": function() { /* do stuff*/  }
}

// dot notation
console.log(myObject.name) // Shiv Kumar

// bracket notation
console.log(myObject["obnxious property"]) // [Function: obnxious property]

// console.log(myObject."property") // COMPILER ERROR

// Using variables as propery name

const variable = 'name';

console.log(myObject.variable); // undefined
// this is equivalent to myObject['variable']

console.log(myObject[variable])