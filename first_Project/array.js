const myarr2 = new Array(1,2,3,4,5,6,7);
//console.log(myarr2[1]);

myarr2.push(4);
//console.log(myarr2[2]);

myarr2.push(6);
//console.log(myarr2);

myarr2.unshift(9);//it will insert the element into the first position of array
myarr2.shift()//it will remove the element from the first position of array
// console.log(myarr2.includes(8));//it search element in the array
// console.log(myarr2.indexOf(7));// it gives the index number of the element
// console.log(myarr2);//node first_Project/array.js

const newArr = myarr2.join()//it is used to convert array to string

console.log(myarr2);
console.log( newArr);
console.log(typeof newArr);

console.log("A ", myarr2);
const myn1 = myarr2.slice(1,3);

console.log(myn1);
console.log("B ", myarr2);//it will not remove the element from the  original array

const myn2 = myarr2.splice(1,3);// it will remove the (1,3) element from the original array(splice)
console.log("C ",myarr2);
console.log(myn2);