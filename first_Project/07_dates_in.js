//Dates

let myDate = new Date();
// console.log(myDate.toDateString());// node first_Project/07_dates_in.js
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleString());

// console.log(typeof myDate);// it is an object;
let randomValue = Math.random()*10;

let myCreatedDate = new Date(2024, randomValue.toPrecision(), 23, 5, 6, 70);
console.log(myCreatedDate.toDateString());
console.log(myCreatedDate.toLocaleDateString());

let myTimeStamp = Date.now();

console.log(Math.floor(Date.now()/1000));
let newDate = new Date();
console.log(newDate);
console.log(newDate.getMonth()+1);
console.log(newDate.getDate());
newDate.toLocaleString('default',{weekday: "long"});
