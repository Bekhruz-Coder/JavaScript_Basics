'use strict'; // Strict mode yordamida yozayotgan ko'dimizda xatolardan qochish imkoniyati mavjud.

// let - dasturimiz davomida o'zgarishi mumkin bo'lgan o'zgaruvchilar uchun ishlatiladi.
let age = 23;
console.log(age);
age = 24;
console.log(age);

// const - dasturimiz ishlashi davomida o'zgarmaydigan o'zgaruvchilar uchun ishlatiladi.
const id = 'AA0'; // har doim qiymat berish kerek. 
console.log(id);
// id = 'AA1';  o'zgartirib bo'lmaydi TypeError beradi. 

// var - ES6'ga qadar o'zgaruvchilar uchun ishlatilingan, let bilan deyarli bir xil vazifani bajargan.
// lekin let bilan ozroq farqi bor, va har doim let orqali o'zgaruvchi yaratish talab etiladi.  
var nai = 33;
console.log(nai);



// Js orqali o'zgaruvchilarni hech qanda kalit so'z ishlatmasdan yaratish imkoni mavjud.
// lekin tavsiya etilmaydi.
name = 'Bekhruzbek';
console.log(name);