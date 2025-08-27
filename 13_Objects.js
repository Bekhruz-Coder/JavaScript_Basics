const programmer = {
    name: "Bruce",
    age: 22
}
console.log(typeof programmer);

console.log(programmer);
console.log(programmer.name);
console.log(programmer.age);

console.log(programmer['name']);
console.log(programmer['age']);


// Nested
const programmerOne = {
    name: "Bruce",
    age: 23,
    address: {
        country: 'Uzbekistan',
        city: 'Fergana',
        home: 30
    }
}
console.log(programmerOne.address.city);


// object methods
const objectMethod = {
    name: 'Bruce',
    age: 22,
    greeting: function() {
        console.log("Assalomu alaykum!");
    }
}
console.log(objectMethod.greeting());