let score = "33asc"

console.log(typeof score)
console.log(typeof (score))// node first_Project/03_conversionOperation.js

let valueInNumber = Number(score)
console.log(typeof valueInNumber )
console.log(valueInNumber)

// "33" =>33
// "33abc" => NaN, when the string will not contain the number then that time nodejs shows "NaN"(Not an number) value
// true =>1; false => 0
let isLoggedIn = "48";
let booleanIsLogged = Boolean(isLoggedIn);
console.log(booleanIsLogged)

//1 => true,
//0 => false,
//null => false,
//undefined => false,
//string => true
