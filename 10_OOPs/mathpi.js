/*Object.getOwnPropertyDescriptor(Math)

console.log(Math.PI);
Math.PI = 7
console.log(Math.PI);  */


const obj = Object.getOwnPropertyDescriptor(Math, "PI")
console.log(obj);

const chai = {
    name : 'ginger chai',
    price: 250,
    isAvailable : true,
    orderChai : function(){
        console.log('not working');
    }
}
console.log(Object.getOwnPropertyDescriptor(chai,"isAvailable"));

Object.defineProperty(chai, "name",{
    //writable : false,
    enumerable : true,
})

console.log(Object.getOwnPropertyDescriptor(chai,"name"));


for (let [key, value] of Object.entries(chai)) {
    if(typeof value != 'function'){
        console.log(`${key} : ${value}`);
    }
}