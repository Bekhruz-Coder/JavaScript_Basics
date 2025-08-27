const programmer = {
    name: 'Bruce',
    age: 23,
    greeting: function() {
        console.log("Hello, My name is " + this.name);
    }
}

console.log(programmer.greeting());


// Object.keys()
const programmerOne = {
    name: 'Bruce',
    age: 22
}
console.log(Object.keys(programmerOne));


// Object.values()
const programmerTwo = {
    name: 'Bruce',
    age: 22
}
console.log(Object.values(programmerTwo));


// Object.entries() - array ko'rinishida ekgranga chiqarib beradi.
const programmerThree = {
    name: "Beck",
    age: 32
}
console.log(Object.entries(programmerThree));