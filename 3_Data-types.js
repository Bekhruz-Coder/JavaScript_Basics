// Primitive and Objects.

// Primitives: Number, String, Boolean, Undefined, Null, Symbol, BigInt.
// Numbers:
let age = 23;
let price = 65.99;
console.log(age);
console.log(price);

// String:
let firstName = "Bekhruzbek";
console.log(firstName);

// Boolean: mantiqiy ma'lumot turi bo'lib faqatgina 'true' or 'false' qiymatini qabul qiladi.
let isTrue = true;
console.log(isTrue);

// Undefined: hali aniqlanmagan ma'lumot turi.
let student;
console.log(student);

// Null: bo'sh qiymatga ega bo'lgan ma'lumot turi.
let school = null;
console.log(school);

// Symbol: yagona(unique) va o'zgarmas qiymatga ega bo'luvchi ma'lumot tur.
let id = Symbol('id');
console.log(id);

// BigInt: katta sonlarni saqlashga mo'ljallangan ma'lumot turi.
const alsoHuge = BigInt(9007199254740991);
console.log(alsoHuge);

// typeof: data typeni aniqlash uchun foydalaniladi. 
console.log(typeof age);
console.log(typeof firstName);
console.log(typeof isTrue);
console.log(typeof student);
console.log(typeof school);
console.log(typeof id);
console.log(typeof alsoHuge);


// Object: Function, Array, Object.