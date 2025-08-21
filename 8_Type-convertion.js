// Number():
const age = '22'; // String
console.log(age); // String
console.log(Number(age)); // Number

console.log(age + 1); // String: 22 + 1 = 221;
console.log(Number(age) + 1); // Number: 23;

const name = "Bekhruzbek"; // String
console.log(name); // String
console.log(Number(name)); // Can not change to the Number. Prints: NaN;


// String():
const year = 2025; // Number
console.log(year); // Number
console.log(String(year)); // String;


// Type Coercion:
console.log('I was born in ' + 2003 + '!'); // Auto String conversion
console.log('30' - '10' - 5); // Auto Number conversion;


// Truthy and Falsy
// Falsy values:
console.log(Boolean(false)); // false
console.log(Boolean(0)); // false
console.log(Boolean('')); // false
console.log(Boolean(undefined)); // false
console.log(Boolean(null)); // false
console.log(Boolean(NaN)); // false
console.log(Boolean(0n)); // false

// Truthy values: 
console.log(Boolean('Bekhruzbek')); // true
console.log(Boolean(22)); // true
console.log(Boolean([])); // true
console.log(Boolean({})); // true
console.log(Boolean('0')); // true
console.log(Boolean('false')); // true

const ism = '';
if (ism) {
    console.log(`Your name is ${ism}.`);
}else {
    console.log('Please input your name.');
}