const age = 10;
const a = age > 18;
const b = age < 20;

// Operator AND:
console.log(a && b);

// Operator OR:
console.log(a || b);

// Operator NOT: 
console.log(!a); // false changes to true.
console.log(!b); // true changes to false.


// ---------------------------------
const htmlPassed = false;
const cssPassed = false;
let message = '';

const greeting = "Hello this is your result for Bootstrap course:";
console.log(greeting);

if (htmlPassed && cssPassed) {
    message = 'Siz Bootstrap kursini boshlashingiz mumkin.';
} else if (htmlPassed || cssPassed) {
    message = 'Iltimos ikkinchi kursni ham tugating.'
} else {
    message = 'Siz HTML va CSS kurslarini tugatib chiqishingiz kerek, shundagina Bootstrap kursiga yozila olasiz.'
}

console.log(message);