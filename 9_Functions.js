// Function decloration: 

function myFunction(son1, son2) {
    console.log(son1 + son2);
    return son1 + son2; // returndan keyingi qatorda yoziladigan har qanday kod ishga tushmaydi.
}
myFunction(10,20);
myFunction(40, 5);
const result = myFunction(30,40);
console.log(result + 15);

console.log(square(2)); //4

function square(son) { // hoisting yuzaga kelgani uchun, funksiyadan oldingi funkisya orqali yozilgan kod ham ishlaydi.
    return son * son;
}

console.log(square(5)); //25




// Function expression: 

// console.log(minus(10, 4)); -------- Function expressionda faqatgina funksiya e'lon qilinganidan keyingi kodlar ishlaydi.

const minus = function(son1, son2) {
    if(son1 >= son2) {
        return son1 - son2;
    }else{
        return son2 - son1;
    }
}

console.log(minus(25, 22)); // 3 




// Arrow functions: 

const square3 = (son) => {
    return console.log(son*son);
}

square3(4); // 16

// OR

const square4 = (son) => console.log(son*son); // agar funksiya ichidagi kod bir qatordan iborat bo'lsa egri qabsga olish shart emas.

square4(6); // 36

const kopaytirish = (n1, n2, n3) => {
    let sum = n1 * n2 * n3;
    return console.log(sum);
}

kopaytirish(3, 3, 3); // 27