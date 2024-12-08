// Primitive data type
//7 types: string, Number,Boolean,null,undefined,symbol,BigIn

const score = 45;// node first_Project/datatypes-summary.js

//Reference (Non primitive)
//Array, Object, Functions
const scoreValue = 45.3
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

// console.log(id===anotherId)
let myName = "suraj paswan"
let myAnotherName = myName
myAnotherName = "dipak paswan"
//console.log(myAnotherName)
//stack (primitive) or Heap (Non primitive)
let userOne = {
    email:"dipakpaswan9635@gmail.com",
    upi:"user@ybl"
}
console.log(userOne.email);
let userTwo = userOne;
userTwo.email = "surajk01712@gmail.com";//both userOne and userTwo are having the same email id because here change by reference operation are happening
console.log(userOne.email);
console.log(userTwo.email);