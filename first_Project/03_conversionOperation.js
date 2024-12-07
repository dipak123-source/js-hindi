let score = "33asc"

console.log(typeof score)
console.log(typeof (score))// node first_Project/03_conversionOperation.js

let valueInNumber = Number(score)
// console.log(typeof valueInNumber )
// console.log(valueInNumber)

// "33" =>33
// "33abc" => NaN, when the string will not contain the number then that time nodejs shows "NaN"(Not an number) value
// true =>1; false => 0
let isLoggedIn = "48";
let booleanIsLogged = Boolean(isLoggedIn);
//console.log(booleanIsLogged)

//1 => true,
//0 => false,
//null => false,
//undefined => false,
//string => true
// console.log("1"+2);
// console.log(1+"2");
// console.log("1"+2+2);
// console.log(1+2+"2");
let x = 3;
const y = x++;

console.log(`x:${x}, y:${y}`);
// Expected output: "x:4, y:3"

let a = 3;
const b = ++a;

console.log(`a:${a}, b:${b}`);
// Expected output: "a:4, b:4"
