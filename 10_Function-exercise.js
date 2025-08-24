// Even or Odd number.
// Function decloration:
function evenOrOddDec(number) {
    if(number % 2 == 0) {
        console.log(`${number} is even.`);
    }else {
        console.log(`${number} is odd.`);
    }
}
evenOrOddDec(1);
evenOrOddDec(2);

// Function expression:
const evenOrOddExp = function(number) {
    if(number % 2 == 0) {
        console.log(`${number} is even.`);
    }else {
        console.log(`${number} is odd.`);
    }
}
evenOrOddExp(3);
evenOrOddExp(4);

// Arrow function: 
const evenOrOddArrow = number => {
    if(number % 2 == 0) {
        console.log(`${number} is even.`);
    }else {
        console.log(`${number} is odd.`);
    }
}
evenOrOddArrow(5);
evenOrOddArrow(6);


// Max number in 2 nubmers
// Function decloration:
function maxDec(n1, n2) {
    if(n1 >= n2){
        console.log(`Max number is ${n1}.`);
    }else {
        console.log(`Max number is ${n2}.`);
    }
}
maxDec(5, 2);
maxDec(4, 9);

// Function expression: 
const maxExp = function(n1, n2) {
    if(n1 >= n2){
        console.log(`Max number is ${n1}.`);
    }else {
        console.log(`Max number is ${n2}.`);
    }
}
maxExp(3, 1);
maxExp(4, 8);

// Arrow function: 
const maxArrow = (n1, n2) => {
    if(n1 >= n2){
        console.log(`Max number is ${n1}.`);
    }else {
        console.log(`Max number is ${n2}.`);
    }
}
maxArrow(24, 22);
maxArrow(23, 25);


// Function decloration:
function reverseDec(number) {
    const numberStr = String(number);
    const reverseStr = numberStr.split('').reverse().join('');
    return Number(reverseStr);
}
console.log(reverseDec(15));

// Function expression:
const reverseExp = function(number) {
    const numberStr = String(number);
    const reverseStr = numberStr.split('').reverse().join('');
    return Number(reverseStr);
}
console.log(reverseExp(15));

// Arrow function:
const reverseArrow = number => {
    const numberStr = String(number);
    const reverseStr = numberStr.split('').reverse().join('');
    return Number(reverseStr);
}
console.log(reverseArrow(15));





