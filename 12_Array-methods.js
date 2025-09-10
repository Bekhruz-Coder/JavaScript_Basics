const numbers = [1, 2, 3, 4, 5, 11];
const fruits = ['banana', 'cherry', 'apple', 'lemon'];

// Methods

// immutable methods
// concat - 2 yoki undan ortiq arraylarni birlashtirib, natijani qaytaradi.
const mixedArray = numbers.concat(fruits);
console.log(mixedArray);

// indexOf() - arrayning ichidan element izlab uning indexini qaytaradi.
console.log(mixedArray.indexOf('cherry'));

// find() - birinchi bo'lib shartni bajargan array elementini qaytaradi. Array ichidagi elementni qidirishda foydalaniladi.
const foundValue = numbers.find(number => number === 3);
console.log(foundValue);

// findIndex() - birinchi bo'lib shartni bajarga array elementini joylashgan indexini qaytaradi. Array ichidagi elementni joylashgan joyini topishda foydlaniladi.


// forEach() - har bir element uchun berilgan funksiyani bajaradi


// map() - har bir massiv elementi uchun berilgan funckiyani chiqarib yangi array qaytaradi
const mapValues = number => 'Son: ' + number;
const mappedValues = numbers.map(mapValues);
console.log(mappedValues);

// filter() - berilgan shartni bajargan elementlarni saralab olib, yangi massiv yaratadi. 
const value = numbers.filter(number => number > 2);
console.log(value);

// includes() - masivda ko'rsatilgan element mavjudligini tekshiradi.

// slice() - massivning ko'rsatilgan qismini tanlab, qaytaradi

// mutable methods

// push()
// unshift()
// pop()
// shift()
// sort()
console.log(fruits.sort());
console.log(numbers.sort());
const sortValues = numbers.sort((number1, number2) => number1 - number2);
console.log(sortValues);
// splice() - massivdagi mavjud elementlarni olib tashlaydi yoki almashtiradi va/yoki yangi elementlarni qo'shadi.