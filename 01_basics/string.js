const name = "hitesh";
const repoCount = 50;
// console.log(name + repoCount + " value");

//console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('hitesh-hc')
/* console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.toLowerCase()); 

console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));


const newstring = gameName.substring(0,4)
console.log(newstring);

const anotherString = gameName.slice(-8, 4)
console.log(anotherString);  */


// ************************* TRIM AND REPLACE ********
const newstringOne = "  yogeeta  "
console.log(newstringOne);
console.log(newstringOne.trim());

const url = "https://hitesh.com/hitesh%20chaudhary"
console.log(url.replace('%20','-'));

console.log(url.includes('hitesh'));
console.log(url.includes('yogeeta'));

console.log(gameName.split('-'));