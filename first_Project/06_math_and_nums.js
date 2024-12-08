const score = 400;
// console.log(score);

const balance = new Number(100);
// console.log(balance);
// console.log(balance.toString());// it is used for the conversion of number to string
// console.log(balance.toString().length);// it is used for measuring the value of length

const otherNumber = 23.8966;

// console.log(otherNumber.toPrecision(8));// it is used for calculate the value of decimal number

const hundreds = 5487554;
// console.log(hundreds.toLocaleString('en-IN'));

// console.log(Math);
// console.log(Math.abs(-4));
// console.log(Math.round(4.6));//the round off value of number
// console.log(Math.ceil(4.1));// the maximum value of fraction value
// console.log(Math.floor(4.99));// the  minimum value of fraction value

let randomValue = Math.random()*100;
console.log(randomValue.toPrecision(2));

console.log(Math.random());
console.log(Math.random()*10 + 1);
console.log(Math.floor(Math.random()*10) + 1);

const min = 10;
const max = 20;

console.log(Math.floor(Math.random()*(max-min+1))+min);