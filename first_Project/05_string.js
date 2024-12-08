const name = "dipak"
const repoCount = 90;
//node first_Project/05_string.js
// console.log(name + repoCount+" value")
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);//backtics, it is use for better understanding of the code
const gameName = new String('Dipak Paswan')

console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('p'));//it give us the index number of the perticular element of the string
const newString = gameName.substring(0,13);
console.log(newString);

const anotherString = gameName.slice(-4,10);
console.log(anotherString);

const newStringOne = "   hitesh    ";
console.log(newStringOne);
console.log(newStringOne.trim());
const url = "https://dipak.com/dipak%20paswan";

console.log(url.replace('%20','-'));

console.log(url.includes('bitech'));