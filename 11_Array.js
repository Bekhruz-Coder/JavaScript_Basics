// Array - bir vaqtining o'zida bir nechta qiymatlarni o'zida saqlashi mumkin bo'lgan object. va u O'zining ichki tartibiga ega.

// Array yaratish: Literal & constructor
// literal
const languages = ['js', 'java', 'go'];
console.log(`From literal: ${languages}`);
// constructor
const languagess = new Array('js', 'java', 'go');
console.log(`From consturctor: ${languagess}`);


// Array o'z ichida turli xil qiymatlarni saqlashi mumkin.
// empty array
const emptyArray = [ ];

// array of numbers
const numbers = [1, 2, 3, 4, 5];

// stringlar arrayi
const string = ['Javascript', 'Java', 'Go'];

// aralash qiymatlardan tashkil topgan array
const mixedArray = ['Javascript', 2, false, null];


// how to get element from array
const helloArray = ['h', 'e', 'l', 'l', 'o'];
// getting first element
console.log(helloArray[0]); // h
// getting third element
console.log(helloArray[2]); // l

// push method - array oxiriga element qoshadi.
let codingLanguages = ['js', 'java'];
console.log(codingLanguages);

codingLanguages.push('go');
console.log(codingLanguages); // ['js', 'java', 'go'];

// unshift method - array boshiga element qoshadi.
let codingLanguagess = ['js', 'java'];
console.log(codingLanguagess);

codingLanguagess.unshift('python');
console.log(codingLanguages);

// how to chenge elements by index
console.log(codingLanguagess); // ['python', 'js', 'java'];
codingLanguagess[0] = 'swift';
console.log(codingLanguagess); // ['swift', 'js', 'java'];


// pop() - delete element from end of the array
console.log(codingLanguagess); // ['swift', 'js', 'java'];
const deletedElement = codingLanguagess.pop();
console.log(codingLanguagess); // ['swift', 'js'];
console.log(`deleted element is: ${deletedElement}`); // java

// shift() - delete element from beginning of the array
console.log(codingLanguagess); // ['swift', 'js', 'java'];
const deletedElementt = codingLanguagess.shift();
console.log(codingLanguagess); // ['js'];
console.log(`deleted element is: ${deletedElement}`); // swift

// how to find length of the array
const fruits = ['apple', 'banana', 'melon', 'cherry']; // lenght = 4, index = 3
const size = fruits.length;
console.log(`length of array: ${size}`); // 4