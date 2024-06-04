// for of loop
// syntax is array specific
// [{},{},{}] objects in array

const arr = [1,2,3,4,5]
for (const num of arr) {
   //console.log(num); 
}

const greetings = "hello world !"
for (const greet of greetings) {
   // console.log(greet);
}

// MAPS in js   ---> for unique values and in same order
const map = new Map()
map.set('IN',"India")
map.set('USA',"United State of America")
map.set('Fr',"France")

//console.log(map);
for (const [key,value] of map) {
    //console.log(key,':-',value);
}

const myobj = {
    game1 : 'NFS',
    game2: 'spiderman'
}
/*
for (const [key,value] of myobj) {
    console.log(key);
}
*/
// not working here with objects


// FOR IN LOOP
const obj = {
    js: "javascript",
    cpp : "C++",
    rb : "ruby",
    swift : "swift by apple"
}
for (const key in obj) {
 //  console.log(`${key} shortcut is for ${obj[key]}`);
}

const prog = ["js","ruby","cpp","html"]
for (const key in prog) {
    //console.log(prog[key]);
}
// in forin for array it gives keys (0,1,2..)

// MAP IS NOT ITERABLE
const mapping = new Map()
map.set('IN',"India")
map.set('USA',"United State of America")
map.set('Fr',"France")

for (const key in mapping) {
   // console.log(key);
}
// here none result will get in forin

